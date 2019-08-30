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
const morgan = require('morgan');
const app = express();

//Para cualquier ruta
function logger(req, res, next){
    console.log(`Route Received: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

//Settings
app.set('appName','Fazt express tutorial');
app.set('port',3000);
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json()); //Para que express entienda los json
app.use(morgan('dev')); //app.use(logger);

//Routes
app.get('/', (req, res) => {
    const data = [{name:'jhon'},{name:'jhoe'},{name:'cameron'}];
    res.render('index.ejs', {people: data});
});

app.all('/user', (req, res, next) =>{
    console.log("Por aqui paso");
    next();
});

app.get('/user', (req, res) => {
    res.json({
        username: 'Pelao',
        lastname:  'Shaper'
    });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Kieee');
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.use(express.static("public"));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port',app.get('port'));
});
