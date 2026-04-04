const http = require('http'); // Importa o módulo HTTP para criar um servidor
const fs = require('fs'); // Importa o módulo FS para manipular arquivos
const url = require('url'); // Importa o módulo URL para analisar URLs

const port = 3000; // Define a porta onde o servidor irá escutar

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true); // Analisa a URL da requisição
    const name = urlInfo.query.name; // Obtém o valor do parâmetro 'name' da URL

    fs.readFile('index.html', 'utf8', (err, data) => { // Lê o arquivo index.html
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' }); // Define o status de erro
            res.end('Erro ao ler o arquivo'); // Envia a resposta de erro
        } else {
            const personalizedData = data.replace('{{name}}', name || 'Visitante'); // Substitui {{name}} pelo valor do parâmetro ou 'Visitante'
            res.writeHead(200, { 'Content-Type': 'text/html' }); // Define o status de sucesso
            res.end(personalizedData); // Envia a resposta com o conteúdo personalizado
        }
    });
});