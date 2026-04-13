// Importa o módulo nativo 'path' do Node.js
const path = require('path'); // Usado para manipular e trabalhar com caminhos de arquivos e diretórios

// Define um caminho de exemplo para ser analisado
const customPath = "/relatorios/2024/06/relatorio.pdf";

// Retorna: /relatorios/2024/06
console.log(path.dirname(customPath)); // Tudo antes do último "/"  — o diretório onde o arquivo está

// Retorna: relatorio.pdf
console.log(path.basename(customPath)); // Apenas o nome do arquivo com extensão — última parte do caminho

// Retorna: .pdf
console.log(path.extname(customPath)); // Apenas a extensão do arquivo (incluindo o ponto)

// basename sem extensão
console.log(path.basename(customPath, '.pdf')); // → relatorio

// join — monta caminhos de forma segura (resolve / e \ automaticamente)
console.log(path.join('relatorios', '2024', 'relatorio.pdf'));
// → relatorios/2024/relatorio.pdf

// parse — retorna um objeto com todas as partes do caminho
console.log(path.parse(customPath));
// → { root: '/', dir: '/relatorios/2024/06', base: 'relatorio.pdf',
//     ext: '.pdf', name: 'relatorio' }

// __dirname — caminho absoluto do arquivo atual (muito usado em projetos)
console.log(path.join(__dirname, 'relatorios', 'relatorio.pdf'));
// → /caminho/absoluto/do/projeto/relatorios/relatorio.pdf