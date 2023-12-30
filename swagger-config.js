const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    info: {
      title: "Your API", // Specify the title of your API
      version: "1.0.0", // Specify the version of your API
      description: "Your API Description", // Specify a description for your API
    },
  },
  apis: ["./src/routes/*.js"], // Specify the path to your route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
