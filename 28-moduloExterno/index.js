const minimist = require('minimist'); // Importa o módulo externo minimist

const args = minimist(process.argv.slice(2)); // Usa minimist para analisar os argumentos da linha de comando
console.log(args); // Exibe os argumentos analisados no console

const nome = args.nome || 'desconhecida'; // Obtém o valor do argumento 'nome' ou 'profissao'
const profissao = args.profissao || 'desconhecida'; // Obtém o valor do argumento 'profissao' ou define como 'desconhecida' se não fornecido
console.log(`Olá, ${nome}! sua profissao e ${profissao}`); // Exibe uma saudação personalizada no console