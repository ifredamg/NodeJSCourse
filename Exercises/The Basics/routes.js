const { checkPrimeSync } = require('crypto');
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Welcome!</title><head>');
        res.write(
            '<body>' +
            '<h1>You are welcome!</h1>' +
            '<form action="/create-user" method="POST"><input type="text" name="name"><button type="submit">Send</button></form>' +
            '</body>'
        );
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader("Content-Type", "text/html; charset=utf-8");

        res.write('<html>');
        res.write('<head><title>Users</title><head>');
        res.write(
            '<body>' +
            '<ul>' +
            '<li>Frederico</li>' +
            '<li>Inês</li>' +
            '<li>João</li>' +
            '</ul>' +
            '</body>'
        );
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Exercise</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;