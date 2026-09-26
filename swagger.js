const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Games Api',
        description: 'Games Api'
    },
    host: 'cse341-project2-2rud.onrender.com',
    schemes: ['http','https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);