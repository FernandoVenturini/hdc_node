// 1. Crie um novo projeto que aceite pacotes externos;
// 2. Instale o inquirer e o chalk;
// 3. Utilize o inquirer para receber o nome e a idade do usuário;
// 4. Apresente esta resposta com uma cor de fundo amarela e texto preto;
// 5. Dica: Voce pode utilizar bgYellow e black;
// 6. Insira um tratamento para um possivel erro do inquirer com o catch;

import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer.prompt([
    { name: 'name', message: 'Qual e o seu nome?' },
    { name: 'age',  message: 'Qual e a sua idade?'}
])
.then((answers) => {
    if (!answers.name || !answers.age) {
        throw new Error('O nome e a idade sao obrigatorios.');
    }
    console.log(chalk.bgYellow.black(`Ola ${answers.name}, voce tem ${answers.age} anos.`));
}).catch ((error) => {
    console.error('Ocorreu um erro:', error);
});