// PATH ABSOLUTO
const path = require('path'); // Importa o módulo 'path' do Node.js

// PATH ABSOLUTO
console.log(path.resolve('teste.txt')); // Exibe o caminho absoluto do arquivo 'teste.txt' no console)

// FORMAR PATHS
const midFolder = 'relatorios'; // Define a variável 'midFolder' com o valor 'relatorios'
const fileName = 'vendas.csv'; // Define a variável 'fileName' com o valor 'vendas.csv'
const finalPAth = path.join('home', 'user', midFolder, fileName); // Junta os segmentos de caminho para formar um caminho completo
console.log(finalPAth); // Exibe o caminho final no console