const http = require("http"); // Importa o módulo HTTP para criar um servidor
const fs = require("fs"); // Importa o módulo FS para manipular arquivos
const url = require("url"); // Importa o módulo URL para analisar URLs

const port = 3000; // Define a porta onde o servidor irá escutar

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    const urlInfo = require("url").parse(req.url, true); // Analisa a URL da requisição
    const name = urlInfo.query.name; // Obtém o valor do parâmetro 'name' da URL

    if (!name) {
        fs.readFile("index.html", "utf8", (err, data) => {
            // Lê o arquivo index.html
            res.writeHead(200, { "Content-Type": "text/html" }); // Define o status de erro
            res.write(data); // Escreve o conteúdo do arquivo na resposta
            return res.end("Erro ao ler o arquivo"); // Envia a resposta com o conteúdo do arquivo ou uma mensagem de erro
        });
    } else {
        // Escreve o valor do parâmetro 'name' em um arquivo chamado 'arquivo.txt'
        res.writeFile("arquivo.txt", name, function (err, data) {
            // Redireciona para a página inicial após escrever o arquivo
            res.writeHead(302, {
                Location: "/",
            });
            return res.end(); // Envia a resposta para o cliente   
        });
    }
});

// Inicia o servidor e escuta na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // Exibe uma mensagem no console indicando que o servidor está rodando
})
