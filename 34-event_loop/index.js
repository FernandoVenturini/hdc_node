// EVENT LOOP
    // recurso da arquitetura do Node.js que permite a execução de código assíncrono, mesmo que o JavaScript seja single-threaded. Ele é responsável por gerenciar as operações assíncronas, como I/O, timers e callbacks, garantindo que o código seja executado de forma eficiente e sem bloqueios.

    // O event loop funciona em conjunto com a pilha de chamadas (call stack) e a fila de tarefas (task queue). Quando uma operação assíncrona é iniciada, ela é delegada para o sistema operacional ou para uma API do Node.js, e o JavaScript continua executando o código seguinte. Quando a operação assíncrona é concluída, o callback associado é colocado na fila de tarefas, aguardando sua vez de ser executado.
    // O event loop verifica constantemente a pilha de chamadas e a fila de tarefas. Se a pilha de chamadas estiver vazia, ele pega o próximo callback da fila de tarefas e o executa. Isso permite que o JavaScript continue respondendo a eventos e processando tarefas assíncronas sem bloquear a execução do código principal.


function a() {
    console.log('Executando a função a');
}

function b() {
    console.log('Executando a função b');
}

function c() {
    console.log('Executando a função c');
    a();
    b();
}

a();
b();
c();