/* const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola pelao'); 

});

server.listen(3000, () => {
    console.log('serve on port 3000');

});
*/

const express = require('express');
const app = express();

app.get('/kie', (req, res) => {
    res.send('Pela5');
});

app.post('/about', (req, res) => {
    res.send('Estas en about Post ');
});

app.get('/contact', (req, res) => {
    res.send('Formulario de contacto');
});

app.listen(3000, () => {
    console.log('server con port 3000')
});
