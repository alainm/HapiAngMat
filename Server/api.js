// api.js
//
// Rotas para API de contatos
'use strict';

var fs = require('fs');

var listaContatos = [];

//TODO: como ler o arquivo aao iniciar???
// http://www.howardism.org/Technical/JavaScript/Node_Modules.html

module.exports = {

    inicia: function() {
        // Le os dados do arquivo:
        fs.readFile('./contatos.json', function (err, data) {
            if (err) throw err;
            //console.log(data);
            listaContatos = JSON.parse(data);
        });
    },

    getRoutes: function() {
        return [    // Our storage of tasks

            {
                method: 'GET',
                path: '/api',
                handler: function (request, reply) {
                    // Le os dados do arquivo:
                    //fs.readFile('./contatos.json', function (err, data) {
                    //    if (err) throw err;
                    //    //console.log(data);
                    //    listaContatos = JSON.parse(data);
                    //    // Return the list of tasks
                        reply(listaContatos);
                    //});
                }
            },
            {
                method: 'POST',
                path: '/api',
                handler: function (request, reply) {
                    // Get the task
                    var contato = request.payload;
                    // Let's store the task
                    var key = listaContatos.push(contato);
                    var s = JSON.stringify(listaContatos)
                    fs.writeFile("contatos.json", s, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });
                    reply({key: key - 1, contato: contato});
                }
            }
        ]
    }//getRoutes
};//exports

