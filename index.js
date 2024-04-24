const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swaggerDef');
const parseRouter = require('./routes/parse');
const config = require('./config');

const port = config.server.port;
const dns = config.server.dns;
const swaggerDocs = swaggerJsDoc({
  swaggerDefinition,
  apis: [],
});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/parse', parseRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, dns, () => console.log("App listening on port " + port +"!"));
