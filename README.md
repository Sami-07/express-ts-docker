# Express TypeScript App Docker Setup

This repository contains an Express application written in TypeScript. Follow the steps below to set up and run the app using Docker.

## Prerequisites

Ensure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)

## Getting Started

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
``` 

### Step 2:  Build the Docker Image
```bash
docker build -t express-ts .
```

### Step 3: Run the Docker Container
```bash
docker run -p 3000:3000 -e MONGO_URI=<your-mongo-db-cloud-uri> express-ts
```

### Step 4: Access the application
This will start the application and map port 3000 of the container to port 3000 on your local machine.