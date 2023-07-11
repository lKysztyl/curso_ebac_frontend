$('document').ready(function() {
    $('#userName').on('input', function() {
        let value = $(this).val();
        // Removendo qualquer caracteres que não corresponda ao pattern.
        let newValue = value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
        // Retirando ocorrencias de dois ou mais espaços em branco.
        let formatedValue = newValue.replace(/\s{2,}/g, '');
        $(this).val(formatedValue);
    });

    // Fazendo o efeito de "troca de pagina".
    $('.link-regis').click(function() {
        $('.sign-up').addClass('d-none');
        $('.sign-in').removeClass('d-none');
    });

    $('.link-login').click(function() {
        $('.sign-in').addClass('d-none');
        $('.sign-up').removeClass('d-none');
    });

    // Usando o Mask Plugin para o campo de telefone.
    $('#phone').mask('(00) 00000-0000', {placeholder: 'Seu Telefone'});

    // Utilizando do Jquery Validation para validação dos campos.
    $('#formRegis').validate({
        rules: {
            userName: {
                required: true,
                minlength: 7
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                rangelength: [15,15]
            },
            pass: {
                required: true,
                digits: true,
                minlength: 3
            },
            confirmPass: {
                required: true,
                equalTo: '#pass'
            },
            termos: {
                required: true
            }
        },
        messages: {
            userName: 'Por favor insira ao meno 7 letras.',
            email: 'Insira corretamente seu endereço de Email.',
            phone: 'Por favor insira seu telefone.',
            pass: 'Por favor insira apenas números.',
            confirmPass: 'Por favor confirme sua senha.'
        },
        // Setando uma mensagem caso tenha um capo invalido.
        invalidHandler: function(e, validador) {
            let campoInvalidos = validador.numberOfInvalids()
            if (campoInvalidos) {
                alert(`Existem ${campoInvalidos} campos invalidos.`)
            };
        }
    });


    // Criando um laço para aplicar ou remover os efeitos/class de "is-valid e is-invalid" do Bootstrap 5.
    $('#formRegis').on('input',function() {
        const list = ['#userName', '#email', '#phone','#pass', '#confirmPass']
        list.forEach(selector => {
            const currentField = $(selector);

            if ($('#formRegis').validate().element(currentField)) {
                currentField.addClass('is-valid bg-success-subtle text-').removeClass('is-invalid bg-danger-subtle');
            
            } else if (!$('#formRegis').validate().element(currentField) && currentField.val().length > 0) {
                currentField.addClass('is-invalid bg-danger-subtle').removeClass('is-valid');
            
            } else {
                currentField.removeClass('is-invalid bg-danger-subtle').removeClass('is-valid');
            }
        });
    });

    $('#formLogin').validate({
        rules: {
            userLogin: {
                required: true,
                minlength: 7
            },
            loginPass: {
                required: true,
                digits: true,
                minlength: 3
            },
            loginCheck: {
                required: false
            }
        }
    });

    $('#formLogin').on('input',function() {
        const list = ['#userLogin','#password']
        list.forEach(selector => {
            const currentField = $(selector);

            if ($('#formLogin').validate().element(currentField)) {
                currentField.addClass('is-valid bg-success-subtle text-').removeClass('is-invalid bg-danger-subtle');

            } else if (!$('#formLogin').validate().element(currentField) && currentField.val().length > 0) {
                currentField.addClass('is-invalid bg-danger-subtle').removeClass('is-valid');

            } else {
                currentField.removeClass('is-invalid bg-danger-subtle').removeClass('is-valid');
            }
        });
    });

});