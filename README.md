# Weaviate Integrations and Applications

This repository showcases multiple projects demonstrating the integration of Weaviate with various technologies for different use cases, such as Pharmaceutical FAQ Generation Search, front-end for Pharmaceutical FAQ Generation Search, and ML/AI job analytics. Each project illustrates a unique workflow and highlights the capabilities of Weaviate in combination with other tools and frameworks.

## Table of Contents

- [Projects](#projects)
  - [Weaviate Workflow for Pharmaceutical FAQs](#weaviate-workflow-for-pharmaceutical-faqs)
  - [Front-End for Pharmaceutical FAQ Generative Question Answering](#front-end-for-pharmaceutical-faq-generative-question-answering)
  - [LinkedIn ML/AI Job Analytics Pipeline](#linkedin-mlai-job-analytics-pipeline)
- [Contributing](#contributing)

## Projects

### Weaviate Workflow for Pharmaceutical FAQs

This project demonstrates a workflow for integrating Weaviate with OpenAI embeddings for the purpose of storing and querying a dataset of frequently asked questions (FAQs) related to FDA pharmaceuticals. The pipeline includes loading the dataset, setting up Weaviate with OpenAI embeddings, uploading data, and performing various queries.

#### Key Features

- Loading and preprocessing datasets
- Setting up Weaviate with OpenAI embeddings
- Uploading data to Weaviate
- Querying the dataset for relevant FAQs

### Front-End for Pharmaceutical FAQ Generative Question Answering

This project provides a front-end application for Pharmaceutical FAQ Generative Question Answering. It leverages Weaviate for semantic search and OpenAI for generating responses, allowing users to search for pharmaceutical FAQs using both keyword and vector search based on user-defined specificity.

#### Key Features

- Semantic search using Weaviate
- Integration with OpenAI for generating responses
- Dynamic search specificity using a range slider
- Example queries for quick search
- Responsive and visually appealing UI

For setup and usage instructions, refer to the [Front-End for Pharmaceutical FAQ](./2.1_pharma_front_end/README.md) project directory.

### LinkedIn ML/AI Job Analytics Pipeline

This project builds an analytics pipeline that identifies and clusters job openings related to Machine Learning (ML) and Artificial Intelligence (AI) using Apache Spark and Weaviate. The pipeline processes job postings data, vectorizes job descriptions, and performs clustering to group similar job postings. The results are visualized and saved for further analysis.

#### Key Features

- Data preprocessing and ingestion using Apache Spark
- Vectorization and storage in Weaviate
- Clustering of job postings
- Analysis and visualization of clustered data

For more information, refer to the [LinkedIn ML/AI Job Analytics Pipeline](./2.2_job_analytics_pipeline/README.md) project directory.
