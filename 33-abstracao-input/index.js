// ABSTRACAO DE INPUT
const inquirer = require('inquirer'); // Importa a biblioteca inquirer para criar prompts de entrada

inquirer.input([
    {
        name: 'p1', // Nome do campo de entrada
        message: 'Digite a primeira nota: ', // Mensagem exibida para o usuário
    },
    {
        name: 'p2', // Nome do campo de entrada
        message: 'Digite a segunda nota: ', // Mensagem exibida para o usuário
    }
])
.then((answers) => { // Função de callback que é executada após o usuário fornecer as entradas
    console.log(answers); // Exibe as respostas fornecidas pelo usuário

    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2; // Calcula a média das notas
    console.log(`A média é: ${media}`); // Exibe a média calculada
    
}).catch(() => { // Função de callback que é executada em caso de erro
    console.log('Erro ao ler as notas'); // Exibe uma mensagem de erro
});