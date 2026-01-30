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

// Lendo múltiplos inputs com readline
const readline = require('readline'); // Importa o módulo readline
const rl2 = reading.createInterface({ // Cria uma interface de leitura
    input: process.stdin, // Define a entrada padrão
    out:process.stdout // Define a saída padrão
});
rl2.question('Digite seu nome: ', (nome) => { // Pergunta ao usuário pelo nome
    rl2.question('Digite sua idade: ', (idade) => { // Pergunta ao usuário pela idade
        console.log(`Ola, ${nome}! Voce tem ${idade} anos.`); // Exibe a saudação com o nome e idade fornecidos
        rl2.close(); // Fecha a interface após a entrada
    })
});

// Usando process.stdin diretamente: Útil para scripts simples e rápidos.
process.stdin.setEncoding("utf-8"); // Define a codificação da entrada padrão
console.log("Digite algo e pressione Enter:"); // Solicita ao usuário que digite algo
process.stdin.on("data", (data) => {
    const input = data.trim(); // Remove espaços em branco  
    console.log(`Voce digitou: ${input}`); // Exibe o que o usuário digitou
    process.exit(); // Encerra o processo após a entrada
})