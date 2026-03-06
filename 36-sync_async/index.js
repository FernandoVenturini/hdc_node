// SYNC E ASYNC

const fs = require('fs');
console.log('Início do programa');

fs.writeFileSync('arquivo.txt', 'Olá, mundo!'); // Escreve um arquivo de forma síncrona
console.log('Arquivo escrito de forma síncrona');

// ASYNC
fs.writeFile('arquivo_async.txt', 'Olá, mundo assíncrono!', (err) => {
    if (err) {
        console.error('Erro ao escrever o arquivo:', err);
    } else {
        console.log('Arquivo escrito de forma assíncrona');
    }
});
console.log('Programa finalizado');