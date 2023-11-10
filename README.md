# User Management API

## Description

This project implements a simple User Management API using Node.js, Express.js, and MongoDB. It provides endpoints for creating, retrieving, and deleting users.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Using Node.js and npm](#using-nodejs-and-npm)
  - [Using Docker Compose](#using-docker-compose)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js installation)
- [Docker](https://www.docker.com/) (for Docker Compose deployment)

## Getting Started

### Using Node.js and npm

1. Clone the repository:

   ```bash
   git clone https://github.com/richardokonicha/soultrain.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB connection:

   - Create a MongoDB database.
   - Update the MongoDB connection URL in `db/conn.mjs` with your database information.

5. Run the application:

   ```bash
   npm start
   ```

   The API will be available at `http://localhost:5050`.

### Using Docker Compose

1. Clone the repository:

   ```bash
   git clone https://github.com/richardokonicha/soultrain.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-api
   ```

3. Set up your MongoDB connection:

   - Create a MongoDB database.
   - Update the MongoDB connection URL in `docker-compose.yml` with your database information.

4. Build and run the Docker containers:

   ```bash
   docker-compose up --build
   ```

   The API will be available at `http://localhost:5050`.

## API Endpoints

- `GET /users`: Get a list of all users.
- `POST /users`: Create a new user.
- `GET /users/:username`: Get user by username.
- `DELETE /users/:username`: Delete user by username.
- `GET /users/artist/:artistname`: Get user by artistname.
- `DELETE /users/artist/:artistname`: Delete user by artistname.

## Testing

To run tests, use the following command:

```bash
npm test
```

## Deployment

Follow the [deployment instructions](#deployment) for your chosen method.

## Documentation

For detailed API documentation, refer to the Swagger documentation provided in the `swagger.json` file.

`http://localhost:5050/docs`
# soultrain
# soultrain
