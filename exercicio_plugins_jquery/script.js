$(document).ready(function() {
    $('#nome').on('input', function() {
        let value = $(this).val();
        //Removendo qualquer caracteres que não corresponda ao pattern.
        let newValue = value.replace(/[^A-Za-z\s]/g, '');
        //Retirando ocorrencias de dois ou mais espaços em branco.
        let formatedValue = newValue.replace(/\s{2,}/g, '');
        $(this).val(formatedValue);
    });

    const nomePlaceholder = $('#nome').attr('placeholder');

    $('#nome').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    })

    $('#nome').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', nomePlaceholder);
        };
    });

    //*************************    EMAIL    **************************//

    const emailPlaceholder = $('#email').attr('placeholder');

    $('#email').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    });

    $('#email').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', emailPlaceholder);
        }
    });

    //************************ Segundo Email **************************//

    const confirmEPlaceholder = $('#confirmEmail').attr('placeholder');

    $('#confirmEmail').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    });

    $('#confirmEmail').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', confirmEPlaceholder);
        }
    });

    //*************************   Telefone    **************************//

    $('#tel').mask('(00) 00000-0000', {placeholder: '(00) 00000-0000'});

    const telPlaceholder = $('#tel').attr('placeholder');

    $('#tel').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    });

    $('#tel').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', telPlaceholder);
        };
    });

    //*************************   CPF     **************************//


    $('#cpf').mask('000.000.000-00', {placeholder: '000.000.000-00',  reverse: true});

    const cpfPlaceholder = $('#cpf').attr('placeholder');

    $('#cpf').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    });

    $('#cpf').blur(function() {
        if ($(this).val() === '') {
        $(this).attr('placeholder', cpfPlaceholder);
        };
    });
    
    //*************************  Endereço  **************************//

    const endePlaceholder = $('#endereco').attr('placeholder');

    $('#endereco').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    })

    $('#endereco').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', endePlaceholder);
        };
    });

    //*************************    CEP     **************************//

    $('#cep').mask('00000-000', {placeholder: '00000-000'});

    const cepPlaceholder = $('#cep').attr('placeholder');

    $('#cep').focus(function() {
        if ($(this).val() === '') {
            $(this).removeAttr('placeholder');
        };
    });

    $('#cep').blur(function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', cepPlaceholder);
        }
    });


    ////////////////////////////////////////////////////////////////////

    $(form).validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            confirmEmail: {
                required: true,
                equalTo: '#email'
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o nome completo.',
            email: 'Por favor insira corretamente.',
            confirmEmail: 'Por favor insira o mesmo email.',
            tel: 'Por favor insira seu telefone.',
            cpf: 'Por favor insira o CPF corretamente.',
            endereco: 'Por favor insira completo.',
            cep: 'Por favor insira corretamente o CEP.'

        },
        invalidHandler: function(e, validador) {
            let campoInvalidos = validador.numberOfInvalids()
            if (campoInvalidos) {
                alert(`Existem ${campoInvalidos} campos invalidos`)
            };
        }
    });

});