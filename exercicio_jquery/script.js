$(document).ready(function() {
    /*Criando o elemento ('<span></span>') e atribuindo a ele a classe ('.header-span'), então por fim inserindo-o ao elemento ('header').*/
    $('<span></span>').addClass('header-span').appendTo('header')
    
    //Criando uma função para poder ser chamada na inicialização da pagina.
    function atualizarData() {
        let dataAtual = new Date();
        let diaDaSemana = dataAtual.getDay();
        let mesDoAno = dataAtual.getMonth();
        
        //Declarando a variavel (nomeDia) como uma variavel simbolica.
        let nomeDia = '#'

        //Utilizando a estrutura condicional de controle de fluxo (switch), e setando a variavel (diaDaSemana) como seu parametro.
        switch (diaDaSemana) {
            case 0:
                //Reatribuindo a variavel (nomeDia) com a condição que corresponda ao valor da variavel (diaDaSemana).
                nomeDia = 'Domingo';
                break;
            case 1:
                nomeDia = 'Segunda-feira';
                break;
            case 2:
                nomeDia = 'Terça-feira';
                break;
            case 3:
                nomeDia = 'Quarta-feira';
                break;
            case 4:
                nomeDia = 'Quinta-feira';
                break;
            case 5:
                nomeDia = 'Sexta-feira';
                break;
            case 6:
                nomeDia = 'Sábado';
                break;
            default: 'Unknown error'
                break;
        };

        let nomeMes = '#';
        switch (mesDoAno) {
            case 0:
                nomeMes = 'Janeiro';
                break;
            case 1:
                nomeMes = 'Fevereiro';
                break;
            case 2:
                nomeMes = 'Março';
                break;
            case 3:
                nomeMes = 'Abril';
                break;
            case 4:
                nomeMes = 'Maio';
                break;
            case 5:
                nomeMes = 'Junho';
                break;
            case 6:
                nomeMes = 'Julho';
                break;
            case 7:
                nomeMes = 'Agosto';
                break;
            case 8:
                nomeMes = 'Setembro';
                break;
            case 9:
                nomeMes = 'Outubro';
                break;
            case 10:
                nomeMes = 'Novembro';
                break;
            case 11:
                nomeMes = 'Dezembro';
                break;
            default: 'Unknown error'
                break;
        };
        
        
        $('.header-span').html(dataAtual.toLocaleTimeString() + `<br>${nomeDia}, ${dataAtual.getDate()} de ${nomeMes}`);

    }

    //Criando um evento para monitorar o focus do input ('#input-text').
    $('#input-text').focus(function() {
        //Quando o input estiver com focus ocorrerá uma breve animação.
        $('.x, .y').css({'opacity': '0', 'height':'2rem', 'top':'0%'});
        //Utilizando-se do setTimeout para esconder o deslocamento do elemento.
        setTimeout(() => {
            $('.x, .y').css({'opacity': '100'})
        }, 0);

        //Removendo o placeholder quando o input estiver em focus.
        $('#input-text').removeAttr('placeholder');

    });

    //Criando o elemento ('ul') para sevir como container das "tarefas".
    //Utilizando o "insertBefore" para inserir o elemento antes da classe ('.container-div-form').
    $('<ul></ul>').addClass('to-do-list').insertBefore('.container-div-form');

    //Criando um evento de submit para o formulario.
    $('#form').submit(function(e) {
        //Previnindo a atualização do formulario.
        e.preventDefault();

        //Amazeando o valor do input na varaivel.
        let inputValue = $('#input-text').val();
        
        //Criando um novo elemento e adicionando a classe ('.to-do') para inseri-lo na classe pai ('.to-do-list').
        $('<li></li>').addClass('to-do').appendTo('.to-do-list');
        
        //Amazenando a quantidade numerica de filhos/('.to-do')'s para se utilizada como indice.
        let todoList = $('.to-do-list').children().length;
        
        /*Criando um novo input do tipo 'checkbox'  e o atribundo a classe ('.not-checked'), então o inserindo na classe ('.to-do') utilizando-se do templet string e da variavel (todoList) para simular o indice do seletor nth-child().*/
        $('<input>').attr('type', 'checkbox').addClass('not-checked').appendTo(`.to-do:nth-child(${todoList})`);

        //Atribuindo uma nova classe ao input/variavel ('inputValue').
        $(`.to-do:nth-child(${todoList})`).append(inputValue);

        //Resetando o campo do input após o usuario dar "submit", o indice 0 corresponde ao input/('.#input-text').
        $('#form')[0].reset();
    });

    //Criando um novo evento para a classe ('.to-do-list'), para identificar a onde o usuario está clicando.
    $('.to-do-list').click(function(e) {
        //Amazenando o input que o usuario clickou.
        let target = e.target;

        //Amazenando o indice da classe ('.to-do') em comparação com suas replicas e adicionando mais 1 para evitar que o "nth-child" receba indice 0.
        let index = $(target).index('.to-do') + 1;

        //Utilizando-se do laço de repetição "each" com o argumento "i" que contém quantidade númerica de elementos da classe ('.not-checked').
        $('.not-checked').each(function(i) {
            //Verificando se "i" não seja "0" para não afetar o indice dos checkboxes.
            if (i + 1 === index) {
                //Atribuindo o estatos de "checked" e retornando o valor invertido.
                $(this).prop('checked', function(_, val) {
                return !val;
                });
            };
        });

        //Verificando se a variavel (target) tem a classe (',to-do').
        if ($(target).hasClass('to-do')) {
            //Atribuindo a essa classe o "estatos" de "checked"
            if ($('.not-checked').is(':checked')) {
                //Utilizando-se do setTimeout para impedir a dessincronização.
                setTimeout(() => {
                    //Riscando a linha caso seja "checked".
                    $(target).css('text-decoration', 'line-through');
                }, 100);
        }else {
            setTimeout(() => {
                $(target).css('text-decoration', 'none')
            }, 100);

            };
        };

    });
    //Chamando a função quando a pagina é carregada/inicializada, para impedir que o elemento ('<span></span>') fique vazio e depois de 1 segundo apareça.
    atualizarData()

    // Atualiza a data a cada segundo (1000 milisegundos).
    setInterval(atualizarData, 1000);
});

