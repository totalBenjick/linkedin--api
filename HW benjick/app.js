/* Import the modules. */
const express = require('express');
const http = require('http');
const fs = require('fs');
const chalk = require('chalk');
const morgan = require('morgan')

/* Absolute Path to HTML file. */
const indexFile = `${ __dirname }/index.html`;
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(morgan('dev'))

//Route
app.get('/', (request, response) => {
  console.log('se ha recargado despues de guardarlo')
  response.sendFile(indexFile)
});

/*con que ENDPOINT SE EJECTUA ESTO DE ARRIBA*/

app.use((request, response) => {
  const ERROR ={
    message : '404. Not Found.'
  };

  response
    .status(404)
    .json(ERROR);
});




/**
 * Run and listen the server on an specific port.
 */
app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Node server running on PORT: ${PORT}`);

  console.log(formatedMessage);
});
