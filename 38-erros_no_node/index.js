// ERROS NO NODE

const x = 10;
if(!Number.isInteger(x)) {
    throw new Error('O valor deve ser um número inteiro');
}


try {
    x = 20;
} catch (error) {
    console.error('Ocorreu um erro:', error.message);
}