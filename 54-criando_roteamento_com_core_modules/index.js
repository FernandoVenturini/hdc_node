// CRIANDO UM ROTEAMENTO COM CORE MODULES
const http = require('http'); // Importando o módulo HTTP para criar um servidor
const url = require('url');  // Importando o módulo URL para parsear a requisição
const fs = require('fs');   // Importando o módulo FS para manipular arquivos

const port = 3000; // Definindo a porta onde o servidor irá escutar

// Criando o servidor e definindo a função de callback para lidar com as requisições:
const server = http.createServer((req, res) => { 
    const q = url.parse(req.url, true);   // Parseando a URL da requisição
    const filename = "." + q.pathname;    // Construindo o caminho do arquivo a ser servido

    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {    // Verificando se o arquivo existe
            fs.readFile(filename, (err, data) => { // Lendo o arquivo
                if (err) {                // CORREÇÃO: verificando erro antes de responder
                    res.writeHead(500, { 'Content-Type': 'text/html' }); // Resposta de erro
                    return res.end("500 Internal Server Error"); // Enviando a resposta de erro
                }
                res.writeHead(200, { 'Content-Type': 'text/html' }); // Resposta de sucesso
                res.write(data);          // Escrevendo o conteúdo do arquivo na resposta
                return res.end();         // Finalizando a resposta
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' }); // Arquivo não encontrado
            return res.end("404 Not Found"); // Enviando a resposta de erro
        }
    }
}).listen(port, () => { // Iniciando o servidor e definindo a função de callback para quando o servidor estiver rodando
    console.log(`Servidor rodando em http://localhost:${port}/`); // Loga a URL do servidor
});