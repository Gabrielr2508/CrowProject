
// var ifaces = os.networkInterfaces();

var sm = require('./socketman.js');
var socketMan = new sm();

var PORT = 6024;
var timeout = 5000;

socketMan.findClients(PORT, timeout, function(clients){ // clients é a lista de ip dos clientes..
    console.log(clients);

    socketMan.send(clients[1], PORT); // a funcao send envia uma mensagem do tipo Execute para o cliente
});