// MODULO HTTP COM MODULO URL - Versão ES Modules
import http from 'http';
import url from 'url';

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (!name) {
        res.end('<h1>Hello, visitante! Preencha o seu nome:</h1><form method="GET"><input type="text" name="name" placeholder="Seu nome..."/><button type="submit">Enviar</button></form>');
    } else {
        res.end(`<h1>Seja bem-vindo, ${name}!</h1>`);
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});