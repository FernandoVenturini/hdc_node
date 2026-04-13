// Importa o módulo nativo 'fs' (File System) do Node.js
const fs = require('fs');

fs.stat('novoarquivo.txt', (err, stats) => {
    // fs.stat() lê os metadados do arquivo sem abrir seu conteúdo
    // Recebe dois parâmetros no callback:
    //   err   → erro caso o arquivo não exista ou sem permissão
    //   stats → objeto com todas as informações do arquivo

    if (err) { // Verifica se houve um erro ao acessar o arquivo
        console.error('Erro ao acessar o arquivo:', err); // Exibe o erro no console
        return; // Interrompe a execução se algo deu errado
    }

    console.log(stats.isFile());         // true se for um arquivo comum
    console.log(stats.isDirectory());    // true se for uma pasta
    console.log(stats.isSymbolicLink()); // true se for um atalho/link simbólico
    console.log(stats.ctime);           // Data da última alteração nos metadados
    console.log(stats.size);            // Tamanho em bytes (ex: 1024 = 1 KB)
});

// 📋 Todas as propriedades do objeto stats:
// Propriedade                  O que retorna
// stats.isFile()               true se for arquivo
// stats.isDirectory()          true se for pasta
// stats.isSymbolicLink()       true se for link simbólico
// stats.size                   Tamanho em bytes
// stats.birthtime              Data de criação do arquivo
// stats.mtime                  Data da última modificação do conteúdo
// stats.ctime                  Data da última modificação dos metadados(ctime → change time — última vez que os metadados foram alterados (permissões, nome).
// stats.atime                  Data do último acesso ao arquivo