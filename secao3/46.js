import http from 'http'; // Importa o módulo HTTP para criar um servidor

const PORT = 3000; // Define a porta onde o servidor irá escutar

const server = http.createServer((req, res) => { // Cria um servidor HTTP
    res.statusCode = 200; // Define o status da resposta como 200 (OK)
    res.setHeader('Content-Type', 'text/html'); // Define o tipo de conteúdo da resposta como HTML
    res.end('<h1>Olá Mundo! Primeiro server com HTML!</h1><p>Testando atualizacao!</p>'); // Envia a resposta com um título e um parágrafo em HTML
});

server.listen(PORT, () => { // Inicia o servidor e escuta na porta definida
    console.log(`Servidor rodando na porta ${PORT}`); // Imprime uma mensagem no console indicando que o servidor está rodando
});