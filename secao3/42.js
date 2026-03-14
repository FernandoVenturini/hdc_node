// INTRODUCAO AOS CORE MODULES
// Os core modules são módulos nativos do Node.js, ou seja, eles já vêm instalados junto com o Node.js. Eles fornecem funcionalidades essenciais para o desenvolvimento de aplicações em Node.js, como manipulação de arquivos, criação de servidores HTTP, manipulação de eventos, entre outros.

// Para utilizar um core module, basta importá-lo usando a função require() e o nome do módulo. Por exemplo, para importar o módulo 'fs' (file system), que é usado para manipular arquivos, podemos fazer o seguinte:
import fs from 'fs';

// Com o módulo 'fs' importado, podemos usar suas funções para ler, escrever, criar ou excluir arquivos. Por exemplo, para ler o conteúdo de um arquivo chamado 'exemplo.txt', podemos usar a função readFile():
fs.readFile('exemplo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err);
    } else {
        console.log('Conteúdo do arquivo:', data);
    }
});

// Outro exemplo de core module é o 'http', que é usado para criar servidores HTTP. Para criar um servidor simples que responde com "Hello, World!" para todas as requisições, podemos fazer o seguinte:
import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/');
});