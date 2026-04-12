// VERIFICANDO DADOS DE ARQUIVO:
const fs = require('fs'); // importando o módulo 'fs' para trabalhar com arquivos

fs.stat('novoarquivo.txt', (err, stats) => {
    if (err) {
        console.error('Erro ao acessar o arquivo:', err);
        return;
    }

    console.log(stats.isFile()); // Verifica se é um arquivo
    console.log(stats.isDirectory()); // Verifica se é um diretório
    console.log(stats.isSymbolicLink()); // Verifica se é um link simbólico
    console.log(stats.ctime); // Data de criação do arquivo
    console.log(stats.size); // Tamanho do arquivo em bytes
})