//É na controller que programamos a tela
//Toda a lógica de carregamento da página
//Códigos que vão ser executados quando disparar eventos de página
//Toda a programaçao fica no controller
//Injeta,os o objeto SCOPE (objeto interno) ele equivale a uma
//VIEW MODEL (MODEL) pra transferir dados da VIEW pro controller
//E vice versa levar dentro do objeto $SCOPE
//Temos 2 tipos de ESCOPO
//ESCOPO LOCAL (PÁGINA) = $SCOPE
//ESCOPO GLOBAL (VIEWS, CONTROLLER) = $ROOTSCOPE
//Tudo que jogarmos no objeto global visualizamos de qualquer local
//Do projeto
//Injetamos o objeto LOCATION pra fazer redicionamentos de página
//Injetamos o serviço
aplicacao.controller("contatoController",
    function ($scope, $rootScope, $location, contatoService) {

        //Criamos propriedades pra sincronizar o conteudo (VALUE)
        //Dos campos lá da VIEW (NG-MODEL)
        $scope.Nome;
        $scope.Email;
        $scope.Telefone;
        $scope.Data;

        //quando o usuári oclicar no carregar vai chamar um
        //Serviço qie vai retornar os dados do banco e levar pra tela
        //Via objeto SCOPE
        $scope.clickCarregar = function () {
            contatoService.Listar().success(function (registros) {
                $scope.listaContatos = registros;
            });
        };

        //Criamos 2 funções pra pegar o click dos botões
        //São os métodos da classe de modelo (SCOPE)
        $scope.clickLimpar = function () {

            //Quando amarramos a VIEW com as PROPRIEDADES  e METODOS
            //Do ViewMODEL (SCOPE) ta lembrando o padrao MVVM
            //Por tras dos panos ele faz um BINDING (Vinculação de campos
            //De telas com Campos da nosso objeto de modelo)
            //TWO BINDING
            $scope.Nome = "";
            $scope.Email = "";
            $scope.Telefone = "";
            $scope.Data = "";
        };

        $scope.clickCadastrar = function () {

            //Fizemos o Mapeamento de VIEW MODEL(SCOPE)
            //Com o DOMAIN MODEL (MODEL WEB API)
            //MOntamos um objeto no mesmo formato que ele está
            //Esperando no serviço
            var novoAmigo = {
                NM_AMIGO: $scope.Nome,
                DS_EMAIL: $scope.Email,
                NR_TELEFONE: $scope.Telefone,
                DT_NASCIMENTO: $scope.Data
            };

            contatoService.Cadastrar(novoAmigo).success(function () {
                $scope.clickLimpar();
                alert("Contato Cadastrado com Sucesso");
            });

        };

        //Criamos um método genérico de redirecionamento de páginas
        //redirecionar('/Listar') redirecionar('/cadastrar')
        //Como a página index não foi aberta por um controller (ROTA)
        //Interceptamos o click dos botoes no SCOPO GLOBAL
        $rootScope.redirecionar = function (rota) {
            //Isso é o response.redirect do ANGULAR (RedirectToAction)
            //Window.Location
            $location.path(rota);
        };

        //Ao excluir subimos a posição da linha (1, 2, 3, 4)
        //E subimos também os dados do contato
        $scope.clickExcluir = function (posicaoLinha, contato) {
            //OBSERVACAO
            //MEsmo um campo não estando visivel no grid
            //o NG internamente guarda os dados daquele registro
            //Indice da linha corrente (linha clicada)

            //Mandamos excluir o registro do ARRAY (coleção)
            //A partir da linha que o usuário clicou mandamos excluir
            //N Linhas, no caso somente 1 linha
            $scope.listaContatos.splice(posicaoLinha, 1);
        };

    });