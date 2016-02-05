'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    port: 3000,
    routes: { cors: true }
});

var api = require('./Server/api.js');
// inicializa módulos
api.inicia();
server.route(api.getRoutes());

// Inclui servidor de arquivos estáticos
var static_files = require('./Server/static.js');
server.route(static_files.getRoutes());

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
