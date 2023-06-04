$(document).ready(function() {
    $('<span></span>').addClass('header-span').appendTo('header')
    let header = document.querySelector('header')
    

    function atualizarData() {
        let dataAtual = new Date();
        let diaDaSemana = dataAtual.getDay();
        let mesDoAno = dataAtual.getMonth();
        
        let nomeDia = '#'
        switch (diaDaSemana) {
            case 0:
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
        console.log(nomeDia);

    }

    atualizarData()
// Atualiza a data a cada segundo (1000 milisegundos)
setInterval(atualizarData, 1000);
});