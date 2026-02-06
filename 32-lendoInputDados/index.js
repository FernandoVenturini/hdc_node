// LENDO INPUT DE DADOS DO USUÁRIO

// Usando readline (modo clássico): Bom para scripts simples e estudos.
const readline = require('readline'); // Importa o módulo readline

const rl = readline.createInterface({ // Cria uma interface de leitura
    input: process.stdin, // Define a entrada padrão
    output: process.stdout // Define a saída padrão
});

rl.question('Digite seu nome: ', (nome) => { // Pergunta ao usuário pelo nome
    console.log(`Ola, ${nome}!`); // Exibe a saudação com o nome fornecido
    rl.close(); // Fecha a interface após a entrada
});

// Lendo múltiplos inputs com readline: 
const readline = require('readline'); // Importa o módulo readline
const rl2 = readline.createInterface({ // Cria uma interface de leitura
    input: process.stdin, // Define a entrada padrão
    out:process.stdout // Define a saída padrão
});
rl2.question('Digite seu nome: ', (nome) => { // Pergunta ao usuário pelo nome
    rl2.question('Digite seu e-mail: ', (email) => { // Pergunta ao usuário pelo e-mail
        rl2.question("Digite sua idade: ", (idade) => { // Pergunta ao usuário pela idade
          console.log(`Ola, ${nome}! Seu e-mail e ${email} e voce tem ${idade} anos.`); // Exibe a saudação com o nome e idade fornecidos
          rl2.close(); // Fecha a interface após a entrada
        });
    });    
});

// Usando process.stdin diretamente: Aqui você precisa controlar manualmente quando o programa termina.
process.stdin.setEncoding("utf-8"); // Define a codificação da entrada padrão
console.log("Digite algo e pressione Enter:"); // Solicita ao usuário que digite algo
process.stdin.on("data", (data) => {
    const input = data.trim(); // Remove espaços em branco  
    console.log(`Voce digitou: ${input}`); // Exibe o que o usuário digitou
    process.exit(); // Encerra o processo após a entrada
});

// Lendo vários valores de uma vez (ex: exercícios): Muito usado em desafios tipo Beecrowd / Codeforces.
process.stdin.setEncoding("utf-8"); // Define a codificação da entrada padrão
let input = ""; // Inicializa uma variável para armazenar a entrada 
process.stdin.on("data", (chunk) => {
    input += chunk; // Acumula os dados recebidos
});
process.stdin.on("end", () => {
    const [a, b] = input.trim().split(" ").map(Number); // Divide a entrada em dois números
    console.log(`Soma: ${a + b}`); // Exibe a soma dos dois números
});