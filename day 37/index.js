const app = require('./app');

// listen for request 
app.listen(3001, () => {
    console.log("server is runnning on the port http://localhost:3001");
});