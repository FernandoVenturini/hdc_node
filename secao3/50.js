// ESCREVENDO EM ARQUIVOS POR FORMULARIO HTML

const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile('50.html', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                return res.end('Erro ao carregar o formulário.');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        fs.appendFile('arquivo.txt', name + '\n', function (err) { // ✅ Fix 1: writeFile → appendFile
            if (err) { // ✅ Fix 2: trata erro de escrita
                res.writeHead(500, { 'Content-Type': 'text/html' });
                return res.end('Erro ao salvar o nome.');
            }
            res.writeHead(302, { Location: '/' });
            return res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});