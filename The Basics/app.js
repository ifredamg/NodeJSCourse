const http = require('http');
const routes = require('./routes');

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer(routes);

server.listen(port, hostname, () => {
    console.log(`Server is listening to http://${hostname}:${port}`);
});