$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000', {placeholder: '(00) 00000-0000'});

    const telPlaceholder = $('#tel').attr('placeholder');

    $('#tel').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        }
    });

    $('#tel').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', telPlaceholder);
        };
    });


    $('#cpf').mask('000.000.000-00', {placeholder: '000.000.000-00',  reverse: true});
    

    $('#cep').mask('00000-000', {placeholder: '00000-000'});

});