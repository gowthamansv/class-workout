// creating a simple web server using node.js
// we need the http module to create a server 
// import http module

// const http = require('http');

// create a server object 

// const server = http.createServer((request, response) => {
//     console.log("Request received");
//     response.writeHead(200,{"content-type": "text/plain"});
//     response.end('hello world too');
// });


// listen to a port
// server.listen(3001, () => {
//     console.log("server is running on port 3001");
// } );

// import express from express 
const express = require('express');
const loggers = require('./middleware/loggers');
const jobRouter = require('./routes/jobRoutes');

// creste a express application 
const app = express();

// add a built-in middleware to parse the request body
app.use(express.json());

// add a custom middleware to log the request
app.use(loggers);

//set up a simple route
app.get('/', (request,response) => {
    const income = request.body.name || "No income provided";
    response.json({ message:`welcome ${income}`});});

app.get('/hello',(request ,response) => {
    response.send("hello");
});

app.get('/world', (request, response) => {
    response.send('world');
});

app.use('/jobs', jobRouter);

module.exports = app;