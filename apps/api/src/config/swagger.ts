import swaggerJsdoc from 'swagger-jsdoc';

export const openapiSpecification = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Service',
      version: '1.0.0',
      description: 'REST API application for Veet.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Hernan Acero',
        url: 'https://acerohernan.com',
      },
    },
  },
  apis: ['./src/router.ts'],
});
