// EVENT MITTER

const EventEmitter = require('events'); // Importa o módulo de eventos do Node.js
const eventEmitter = new EventEmitter(); // Cria uma instância do EventEmitter

// Listen for the 'start' event
eventEmitter.on('start', () => { // Define um ouvinte para o evento 'start'
    console.log('Durante o evento de início');
});
console.log('Antes de emitir o evento de início');

// Emit the 'start' event
eventEmitter.emit('start', 'Node.js');
console.log('Depois de emitir o evento de início');