const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static('public'));

/* #swagger.parameters['parameterName'] = {
        in: <string>,
        description: <string>,
        required: <boolean>,
        type: <string>,
        format: <string>,
        schema: <array>, <object> or <string>
} */
app.get('/', (req, res) => {
  // #swagger.tags = ['Users']
  // #swagger.summary = 'Some summary...'
  // #swagger.description = 'Some description...'
  // #swagger.operationId = 'Your_operationId_here'
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});