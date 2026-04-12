// CRIANDO UM ROTEAMENTO COM CORE MODULES
const http = require('http'); // Importando o módulo HTTP para criar um servidor

const port = 3000;

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true); // Parseando a URL da requisição
    const filename = "." + q.pathname; // Construindo o caminho do arquivo a ser servido
    
    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {// Verificando se o arquivo existe
            fs.readfile(filename, (err, data) => {// Lendo o arquivo HTML e enviando a resposta
                res.writeHead(200, { 'Content-Type': 'text/html' }); // Configurando o cabeçalho da resposta
                res.write(data); // Escrevendo o conteúdo do arquivo na resposta
                return res.end(); // Finalizando a resposta
            }); 
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' }); // Configurando o cabeçalho para resposta de erro
            return res.end("404 Not Found"); // Enviando a resposta de erro
        }
    }
}).listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`); // Loga a URL do servidor
});