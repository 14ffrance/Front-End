function Salvar ()
    {
// obter dados de cada elemento no formulário 
        var nome = document.getElementById('txtNome').value;
        var idade = document.getElementById('txtIdade').value;
        var email = document.getElementById('txtEmail').value;
        var pais = document.getElementById('SelPais').value;
// variável armazena todos os dados
        var data = 
            'As informações abaixo estão corretas? \rNome: ' + nome + ' \r\n' +
            'Idade: ' + idade + ' \r\n' +
            'Email: ' + email + ' \r\n' +
            'País: ' + pais + ' \r\n';
            confirm (data);
    }