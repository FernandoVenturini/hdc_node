const url = require('url'); // Importa o módulo URL para manipular URLs

const address = 'http://localhost:3000/path?name=ferna&age=30'; // Define uma URL de exemplo

const parsedUrl = new url.URL(address); // Analisa a URL usando a classe URL

console.log('Hostname:', parsedUrl.hostname); // Imprime o hostname da URL
console.log('Pathname:', parsedUrl.pathname); // Imprime o pathname da URL
console.log('Search Params:', parsedUrl.searchParams.get('produtos')); // Imprime os parâmetros de busca da URL
console.log('Search Params:', parsedUrl.searchParams.get('name')); // Imprime o valor do parâmetro 'name'
console.log('Search Params:', parsedUrl.searchParams.get('age')); // Imprime o valor do parâmetro 'age'