const config = require('./config');

module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'API Parser',
      version: '1.0.0',
      description: 'Analyze a text and find synonyms',
    },
    servers: [
      {
        url: config.server.url + config.server.port,
      },
    ],   
    paths: {
      '/parse': {
        post: {
          tags: ['parser'],
          summary: 'Analyzes the input text looking for synonyms',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    text: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
                description: 'Analyzed Text',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AnalyzedTextResponse'
                    },
                  },
                },
              },
            400: {
              description: 'Bad Request',
              content: {
                'application/json': {
                schema: {
                    $ref: '#/components/schemas/BadRequestResponse'
                },
                },
              },
            },
          },
        },
      },
    },
    components: {
        schemas: {
          AnalyzedTextResponse: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
              },
              analysis: {
                type: 'string',
                example: '[{"word":"string","synonyms_found":0}]',
              },
            },
          },
          BadRequestResponse: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Bad Request: The text cannot be empty.',
              },
            },
          },
        },
    },
  };
  