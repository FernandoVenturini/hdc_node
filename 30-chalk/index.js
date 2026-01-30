// CHALK
const chalk = require('chalk');

const nota = 8;

console.log(chalk.blue('A nota é ') + chalk.green(nota));
if (nota >= 7) {
  console.log(chalk.bgGreen('Aprovado'));
} else {
  console.log(chalk.bgRed('Reprovado'));
}