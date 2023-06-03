$(document).ready(function() {
    $('<span></span>').addClass('header-span').appendTo('header')
    let header = document.querySelector('header')
    console.log(header)

    function atualizarData() {
        var dataAtual = new Date();
        $('.header-span').html(dataAtual.toLocaleTimeString() + `<br>` + dataAtual.toLocaleDateString());

    }

    atualizarData()
// Atualiza a data a cada segundo (1000 milisegundos)
setInterval(atualizarData, 1000);
});
