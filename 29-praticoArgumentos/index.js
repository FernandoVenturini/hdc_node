// externo
const minimist = require('minimist'); // Importa o módulo externo minimist


// interno
const soma = require('./soma').soma; // Importa o módulo local soma

const args = minimist(pocess.argv.slice(2));

const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a, b); // Chama a função soma com argumentos a e b obtidos da linha de comando
