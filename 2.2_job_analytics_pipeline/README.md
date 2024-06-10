# LinkedIn ML/AI Job Analytics Pipeline

## Overview

This project aims to build an analytics pipeline that identifies and clusters job openings related to Machine Learning (ML) and Artificial Intelligence (AI) using Apache Spark and Weaviate. The pipeline processes job postings data, vectorizes job descriptions, and performs clustering to group similar job postings. The results are visualized and saved for further analysis.

## Table of Contents

- [Environment Setup](#environment-setup)
- [Pipeline Steps](#pipeline-steps)
  - [Step 1: Environment Setup](#step-1-environment-setup)
  - [Step 2: Data Loading](#step-2-data-loading)
  - [Step 3: Data Preprocessing](#step-3-data-preprocessing)
  - [Step 4: Data Ingestion to Weaviate](#step-4-data-ingestion-to-weaviate)
  - [Step 5: Clustering](#step-5-clustering)
  - [Step 6: Analysis and Visualization](#step-6-analysis-and-visualization)
  - [Step 7: Save Results](#step-7-save-results)
- [Usage](#usage)
- [License](#license)

## Environment Setup

### Prerequisites
Ensure you have the following installed on your system:

- Python 3.x
- Java 8+
- Scala 2.12
- Docker (for running Weaviate locally)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/prathikpradeep/LinkedIn-ML-AI-job-pipeline.git
   cd LinkedIn-ML-AI-job-pipeline
   ```

2. Install the required Python packages:
```sh
pip install pyspark weaviate-client
```

3. Download the Weaviate Spark connector:
```sh
curl https://github.com/weaviate/spark-connector/releases/download/v1.3.2/spark-connector-assembly-1.3.2.jar --output spark-connector-assembly-1.3.2.jar
```

4. Start a local Weaviate instance using Docker:
```sh
docker-compose up -d
```


## Pipeline Steps

### Step 1: Environment Setup
- Import necessary libraries.
- Define functions for installing required packages and initializing Spark and Weaviate clients.

### Step 2: Data Loading
- Load job postings data into a Spark DataFrame.
- Replace `path_to_your_json_file.json` with the actual path to your dataset.

### Step 3: Data Preprocessing
- Filter job postings related to ML/AI using relevant keywords.

### Step 4: Data Ingestion to Weaviate
- Define and create the schema in Weaviate.
- Write the filtered data to Weaviate.

### Step 5: Clustering
- Retrieve job postings and their vectors from Weaviate.
- Perform KMeans clustering on the job vectors.

### Step 6: Analysis and Visualization
- Analyze the distribution of job postings across clusters.
- Visualize the clustering results using bar plots.
- Display sample job postings from each cluster.

### Step 7: Save Results
- Save the clustered job postings data to a CSV file for further analysis or use.

## Usage

1. Ensure all prerequisites are installed and the environment is set up.
2. Run the Jupyter notebook (`LinkedIn-ML-AI-job-pipeline.ipynb`) to execute the pipeline steps sequentially.
3. Review the output visualizations and clustered data saved in `clustered_job_postings.csv`.


## Example Usage

To run the pipeline, follow these steps:
1. Launch Jupyter Notebook .
2. Open the LinkedIn-ML-AI-job-pipeline.ipynb notebook.
3. Execute the cells sequentially, starting from the top.
