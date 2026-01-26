console.log(process.argv); // Exibe os argumentos passados na linha de comando

const args = process.argv.slice(2); // Remove os dois primeiros elementos (caminho do Node.js e do script)
console.log('Argumentos da linha de comando:', args); // Exibe os argumentos restantes

const nome = args[0].split("=")[1]; // Primeiro argumento no formato nome=valor
console.log('Nome:', nome); // Exibe o valor do nome

const idade = args[1].split('=')[1]; // Segundo argumento no formato idade=valor
console.log('Idade:', idade); // Exibe o valor da idade

console.log(`Olá, ${nome}! Você tem ${idade} anos.`); // Mensagem personalizada