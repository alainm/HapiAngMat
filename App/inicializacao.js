
console.log("Rodando: inicializacao.js");
//Comparando com ASP.NET MVC
//O angular é um framework MVC
//Temos CONTROLLERS, VIEWS e um arquivo de
//Inicialização (ROTAS, URLS AMIGAVEIS)
//É dentro desse arquivo que vamos criar a nossa aplicação em ANGULAR
//Esse arquivo é como fosse o arquivo RouteConfig (APP_START)

//Criamos um modulo (Aplicação em Angular chamada SISCONTATOS
//Se quiser criar algum componente, biblioteca pra rodar no angular
//É sempre MODULE
//O angular é inteligente, é rapido, é leve
//Ele trabalha com INJEÇÃO DE DEPENDENCIA (DI)
//Pra habilitar comandos temos que injetar modulos
//Como e fosse o ADD REFERENCE e O USING NAMESPACE
//PRa definir as urls amigáveis temos que injetar o modulo NGROUTE
var aplicacao = angular.module("SISCONTATOS", ["ngRoute"]);

//Definimos as urls amigáveis, as rotas de navegação no projeto
//Sempre que o usuário digitar uma URL vai abrir um CONTROLLER e
//uma VIEW (Rota Padrão do MVC) {Controller}/{Action}/{Id}
//Tudo que começa com $ não é JQUERY são objetos internos do ANGULAR
//Esse objto routeProvider desceu do MODULO NGROUTE
//1 URL amigável pra cada página que você quiser abrir
aplicacao.config(function ($routeProvider) {

    $routeProvider.when("/ListarContatos", {
        controller: "contatoController",
        templateUrl: "App/Views/listar.html"
    });

    $routeProvider.when("/CadastrarContato", {
        controller: "contatoController",
        templateUrl: "App/Views/cadastrar.html"
    });

    //Essa é a rota padrão se o usuário não informou nenhuma URL
    //No navegador AMIGAVEL, vai redirecionar pra rota, página
    //Que lista os contatos
    $routeProvider.otherwise({ redirectTo: "/ListarContatos" });

});