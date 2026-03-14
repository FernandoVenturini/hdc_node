// RENDERIZACAO HTML COM O FS

// MODULO HTTP COM MODULO URL - Versão ES Modules
import http from 'http';
import url from 'url';

const port = 3000;
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });  
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});