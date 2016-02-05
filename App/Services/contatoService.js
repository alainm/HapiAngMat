//No Service é onde vão ficar as regras de negócio
//E acesso externo a serviços via AJAX
//Injetamos o objeto HTTP pra fazer chamadas AJAX
//AJAXSON
aplicacao.service("contatoService", function ($http) {

    //var servico = "http://localhost:3000/api";
    var servico = location.protocol+"//"+location.host+"/api";
    console.log("Serv=",servico);

    //O THIS aqui dentro dos métodos é como se
    //Fosse o modificador PUBLIC (VISIBILIDADE)
    this.Listar = function () {
        return $http({
            url: servico,
            method: "GET"
        });
    };

    this.Cadastrar = function (novoContato) {
        return $http({
            url: servico,
            method: "POST",
            data: novoContato
        });
    };

});