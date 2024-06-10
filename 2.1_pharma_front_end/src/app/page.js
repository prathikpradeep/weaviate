'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Error from API:', error);
        return;
      }

      const data = await response.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error during fetch:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Head>
        <title>FAQ Generated Answers</title>
      </Head>
      {/* Header Section */}
      <header className="flex flex-col items-center py-10">
        <h1 className="text-5xl font-bold text-black flex items-center">
          FAQ Answering Service <span role="img" aria-label="rocket">🚀</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">powered by <img src="/weaviate.png" alt="Weaviate" className="inline-block h-8 ml-2" /></p>
      </header>

      {/* Search Input Section */}
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
           Answering Pharma FAQs
        </h2>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full mb-4 rounded text-black"
          placeholder="Enter your query..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
        {loading && <div className="text-center mt-4 text-black">Loading{dots}</div>}
      </div>

      {/* Examples Section */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Examples</h3>
        <div className="flex space-x-2">
          {['What is FDA?', 'What are human subjects?', 'What is COVID-19'].map((example, index) => (
            <button
              key={index}
              onClick={() => setQuery(example)}
              className="bg-gray-200 px-3 py-1 rounded shadow-sm text-black hover:bg-gray-300"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* Results Display */}
      <div className="mt-6 w-full max-w-md">
        {results.map((result, index) => (
          <div key={index} className="border p-4 mb-4 rounded bg-gray-50 break-words">
            <p className="font-semibold text-black">Question: {result.question}</p>
            <p className="text-black">Answer: {result.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
