import weaviate from 'weaviate-ts-client';

export async function POST(req) {
  try {
    const { query } = await req.json();

    const client = weaviate.client({
      scheme: process.env.WEAVIATE_HOST.startsWith('https') ? 'https' : 'http',
      host: process.env.WEAVIATE_HOST.replace(/^https?:\/\//, ''), // Remove the protocol from the host
      apiKey: new weaviate.ApiKey(process.env.WEAVIATE_API_KEY),
      headers: {
        'X-Openai-Api-Key': process.env.OPENAI_API_KEY,
      }
    });

    const properties = [
      "_additional { answer { hasAnswer result } distance }"
    ];

    const result = await client.graphql
      .get()
      .withClassName('FAQ')
      .withFields(properties)
      .withAsk({
        question: query,
        properties: ["answer"]
      })
      .withLimit(1)
      .do();

    console.log('Received response from Weaviate:', result);

    // Format the response
    const formattedResult = result.data.Get.FAQ.map(item => ({
      question: query,
      answer: item._additional.answer.result
    }));

    return new Response(JSON.stringify(formattedResult), { status: 200 });
  } catch (error) {
    console.error('Error fetching data from Weaviate:', error);
    return new Response(JSON.stringify({ error: 'Error fetching data from Weaviate', details: error.message }), { status: 500 });
  }
}
