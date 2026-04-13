// MODULO PATH:
const path = require('path'); // importamos o modo path do node

const customPath = "/relatorios/2024/06/relatorio.pdf"; // caminho personalizado

console.log(path.dirname(customPath)); // retorna o diretório do caminho
console.log(path.basename(customPath)); // retorna o nome do arquivo com extensão
console.log(path.extname(customPath)); // retorna a extensão do arquivo
