$('document').ready(function() {
    $('.link-regis').click(function() {
        $('.sign-up').addClass('d-none');
        $('.sign-in').removeClass('d-none');
    });

    $('.link-login').click(function() {
        $('.sign-in').addClass('d-none');
        $('.sign-up').removeClass('d-none');
    });

    $('form').submit(function() {
        
    });
});