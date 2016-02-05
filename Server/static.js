// static.js
//
// Rotas para arquivos estáticos
'use strict';

module.exports = {

   getRoutes: function() {
        return [    // Our storage of tasks

            {
                method: 'GET',
                path: '/index.html',
                handler: function (request, reply) {
                    reply.file('index.html');
                }
            },
            {                                   // Default: index.html TODO: achar uma maneira mais prática
                method: 'GET',
                path: '/',
                handler: function (request, reply) {
                    reply.file('index.html');
                }
            },
            {
                method: 'GET',                  // Serve todos os arquivos estáticos dentro do diretório app
                path: '/App/{filename*}',       // o "*" que inclui os subdiretórios
                handler: {
                    directory: {
                        path: "App",
                        index: true             // procura o index.html se vazio
                    }
                }
            },
            {
                method: 'GET',                  // Serve todos os arquivos estáticos dentro do diretório app
                path: '/Scripts/{filename*}',   // o "*" que inclui os subdiretórios
                handler: {
                    directory: {
                        path: "Scripts",
                    }
                }
            }
        ]
    }//getRoutes
};//exports


