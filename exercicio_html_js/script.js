


// Simulando um saldo aleatorio entre 0 e 3000.
function saldo() {
    const randomNumber = Math.floor(Math.random() * 3000);
    return randomNumber;
};

// Armazenando o valor gerado em saldo().
const saldoAtual = saldo();

// Criando um input do tipo texto, para mostrar o saldo gerado.
const inputSaldo = document.createElement('input');
inputSaldo.setAttribute('type', 'text');
inputSaldo.setAttribute('id', 'saldoAtual');
inputSaldo.setAttribute('placeholder', 'Saldo atual');
inputSaldo.setAttribute('readOnly', 'true');

// Inserindo o input no formulário antes do primeiro elemento.
form.insertBefore(inputSaldo, form.firstChild);

inputSaldo.value = saldoAtual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});



saque.addEventListener('input', function() {
    const saque = document.querySelector('#saque');

    // Limitando o input para ter ao menos 10 de valor ou 2 digitos.
    if (saque.value < 10 || saque.value.length < 2) {
        saque.setCustomValidity('Valor invalido, pós é menor que 10 ou não foi inserido um valor!');
    } else {
        saque.setCustomValidity('');
    }
    
    // Impedindo o usuario de sacar um valor maior que o saldo atual.
    if (saque.value > saldoAtual ) {
        saque.setCustomValidity('Saque invalido, o valor não pode ser maior que o saldo atual!');
    };

});


deposito.addEventListener('input', function() {
    
    // Permitindo um valor igual ou maior que 50 e tendo ao menos 2 digitos.
    if (this.value < 50 || this.value.length < 2) {
        this.setCustomValidity('Valor invalido, pós é menor que 50 ou não foi inserido um valor!');
    } else {
        this.setCustomValidity('')
    }
});