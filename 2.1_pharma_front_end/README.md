# Front-End for Pharmaceutical FAQ Generative Question Answering

This project is a Front-End for Pharmaceutical FAQ Generative Question Answering that leverages Weaviate for semantic search and OpenAI for generating responses. The application allows users to enter a query to search for pharmaceutical FAQs, utilizing both keyword and vector search based on user-defined specificity.

## Features

- Semantic search using Weaviate
- Integration with OpenAI for generating responses
- Dynamic search specificity using a range slider
- Example queries for quick search
- Responsive and visually appealing UI

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node package manager)

### Environment Variables

Create a `.env.local` file in the root directory of your project and add the following environment variables:

- WEAVIATE_HOST=https://your-weaviate-instance
- WEAVIATE_API_KEY=your-weaviate-api-key
- OPENAI_API_KEY=your-openai-api-key


### Installation

1. Clone the repository:
```sh
git clone https://github.com/prathikpradeep/pharma_front_end.git
```

2. Navigate to the project directory:
```sh
cd pharma_front_end
```

3. Install the dependencies:
```sh
npm install
```


### Running the Application

To start the development server, run:
```sh
npm run dev
```
The application will be available at `http://localhost:3000`.

## Project Structure

The project consists of the following main components:

- **lib/weaviate.ts**: This file configures and initializes the Weaviate client.
- **app/api/search.ts**: This API route handles search queries and interacts with Weaviate.
- **app/page.tsx**: The main page component that includes the UI and logic for searching and displaying results.

## Usage

1. Start the development server:

```sh
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter your search query in the input field and use the slider to adjust the search specificity.

4. Click the "Search" button to see the results.

5. You can also click on the example queries to quickly see results for predefined queries.

## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
