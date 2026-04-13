const path = require('path');
// Importa o módulo nativo 'path' do Node.js

// ── PATH ABSOLUTO ──────────────────────────────────────
console.log(path.resolve('teste.txt'));
// path.resolve() converte um caminho relativo em absoluto
// Usa o diretório atual de execução como base
// Retorna algo como: /home/user/projetos/teste.txt
// O resultado muda dependendo de onde o script é executado

// ── FORMAR PATHS ───────────────────────────────────────
const midFolder = 'relatorios';
// Variável com o nome da pasta intermediária

const fileName = 'vendas.csv';
// Variável com o nome do arquivo final

const finalPAth = path.join('home', 'user', midFolder, fileName);
// path.join() une os segmentos com o separador correto do sistema
// Windows → home\user\relatorios\vendas.csv
// Linux/Mac → home/user/relatorios/vendas.csv

console.log(finalPAth);
// Retorna: home/user/relatorios/vendas.csv