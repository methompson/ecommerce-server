const http = require('http');

// Getting the database controller
const db = require('./controllers/db.js');

// Defining the models
const Customer = require('./models/customer.js');
const CustomerAddrss = require('./models/customerAddress.js');

const server = http.createServer( (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    
    res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Node Server</title>
      </head>
      <body>
        <h1>This is the Node Server.</h1>
      </body>
    </html>
    `);

    res.end();
});

db.sync()
    .then( (result) => {
        // console.log(result);
        console.log("DB Synced");
        server.listen(3000);
    }).catch( (err) => {
        console.log(err);
    });