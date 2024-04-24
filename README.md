# Node.js parser.api

## Description
This API solves the problem of finding and counting synonyms for each word in a given text. If a word appears multiple times, it does not increase the synonym count. Words that are synonyms of a previous one are not considered as a new entry but added to the count of a previous word. The words "a", "the", "and", "of", "in", "be", "also", "as" are excluded.

## Installation
To install the necessary dependencies for this project, you can use the following commands:

```bash
npm install
npm init -y
npm install express sequelize mysql2 node-wordnet
npm install wndb-with-exceptions
npm install swagger-ui-express
npm install swagger-jsdoc
npm install cors
npm install dotenv
```
## Dependencies
- **express**: A web application framework for Node.js designed for building web applications and APIs.
- **sequelize**: An ORM for Node.js that supports SQL dialects.
- **mysql2**: A MySQL client module for Node.js.
- **node-wordnet**: A module for interacting with the WordNet database.
- **wndb-with-exceptions**: A WordNet database with exception lists.
- **swagger-ui-express**: This module allows you to add Swagger API documentation to your express application.
- **swagger-jsdoc**: This module uses jsdoc and swagger-ui-express to make Swagger API auto-documentation.
- **cors**: A module to provide a Connect/Express middleware that can be used to enable CORS.
- **dotenv**: This module loads environment variables from a .env file into process.env.

## Execution
To run the API, you can use the following command:

```bash
npm start
```
