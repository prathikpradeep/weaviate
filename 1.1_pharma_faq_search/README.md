# Weaviate Workflow

## Overview

This project demonstrates a workflow for integrating Weaviate with OpenAI embeddings for the purpose of storing and querying a dataset of frequently asked questions (FAQs) related to FDA pharmaceuticals. The pipeline includes loading the dataset, setting up Weaviate with OpenAI embeddings, uploading data, and performing various queries.

## Table of Contents

- [Environment Setup](#environment-setup)
- [Pipeline Steps](#pipeline-steps)
  - [Step 1: Install Dependencies](#step-1-install-dependencies)
  - [Step 2: Import Libraries](#step-2-import-libraries)
  - [Step 3: Load Dataset](#step-3-load-dataset)
  - [Step 4: Setup Weaviate](#step-4-setup-weaviate)
  - [Step 5: Upload Data to Weaviate](#step-5-upload-data-to-weaviate)
  - [Step 6: Query Weaviate](#step-6-query-weaviate)
  - [Step 7: Question Answering Generation](#step-7-question-answering-generation)
- [Usage](#usage)

## Environment Setup

### Prerequisites
Ensure you have the following installed on your system:
- Python 3.x

### Installation

Clone the repository:
```sh
git clone https://github.com/prathikpradeep/weaviate-workflow.git
cd weaviate-workflow
```

Install the necessary Python packages:
```sh
pip install datasets openai weaviate-client python-dotenv
```


## Pipeline Steps

### Step 1: Install Dependencies
Install the required Python packages.

### Step 2: Import Libraries
Import the necessary libraries in your Jupyter notebook.

### Step 3: Load Dataset
Load the dataset from Hugging Face Datasets.

### Step 4: Setup Weaviate
Connect to your Weaviate instance and configure the schema.

### Step 5: Upload Data to Weaviate
Upload the data to Weaviate in batches.

### Step 6: Query Weaviate
Perform various queries to retrieve data from Weaviate.

### Step 7: Question Answering Generation
Generate answers to questions using the integrated OpenAI model.

## Usage

Ensure all prerequisites are installed and the environment is set up.
Run the Jupyter notebook (`weavite workflow.ipynb`) to execute the pipeline steps sequentially.
