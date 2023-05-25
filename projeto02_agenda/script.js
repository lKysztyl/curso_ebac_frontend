const form = document.querySelector('#form');

const nomeContato = document.querySelector('#nomeContato');
const telContato = document.querySelector('#telContato');

let newContato = '';

form.addEventListener('submit', function(e) {
    // Impedindo o formulario de resetar.
    e.preventDefault();

    //Declarando uma nova variavel com um Elemento HTML e Class dentro.
    let contato = '<tr class="tr-script">';

    contato += `<td>${nomeContato.value}</td>`;
    contato += `<td>${telContato.value}</td>`;

    //Fechando o Elemento HTML.
    contato += '</tr>';

    newContato += contato;
    
    const tbody = document.querySelector('.t-body');
    tbody.innerHTML = newContato;
    
});

nomeContato.addEventListener('input', function() {
    //Setando a mensagem de error caso o iput seja invalido, mas também indicando ao usuario caso seja valida.
    if(!this.checkValidity()) {
        this.setCustomValidity('Somente letras são permitidas, sem acentuos e caracteres especiais!');

        invalidInput(this,'red','white')
    } else {
        this.setCustomValidity('')
        validInput(this,'rgb(137, 252, 200)','white')
    }
});


telContato.addEventListener('input', function() {
    //Configurando o limite máximo e mínimo de caracteres no campo de input do tipo 'tel'.
    const maxLength = 14;
    const minLength = 14;

    this.setAttribute('maxlength', maxLength);
    this.setAttribute('minlength', minLength);

    //Usando uma estrutura condicional para validar o input.
    if(this.value.length < maxLength) {
        // Setando a mensagem de error caso o input seja invalido.
        this.setCustomValidity('Preencha o campo com uma seguencia de 11 digitos validos!');

        // Chamando a função pre-estabelecida na linha 83.
        invalidInput(this,'red','white')
    } else {
        this.setCustomValidity('');
        validInput(this,'rgb(137, 252, 200)','white')
    };
    
    let newIndex = [];
    let newTel = this.value

    //Utilizando uma estrutura de repetição para formatar o campo do input.
    for (let index = 0; index < newTel.length; index++) {
        if (index === 0 && newTel[index] !== '(') {
            newIndex.push('(');
        }else if (index === 3 && newTel[index] !== ')') {
            newIndex.push(')');
        } else if (index === 9 && newTel[index] !== '-') {
            newIndex.push('-');
        }
        
        newIndex.push(newTel[index]);

    };

    //Utilizando o método join() para unir o array newIndex e transformá-lo em uma string, em seguida, enviá-la ao campo de input.
    this.value = newIndex.join('');
    
    
});

//Função que simula aparencia de um input caso ele seja inválido.
//O 'C' é de COLOR, 'B' de BACKGROUND e 'ID' se refere ao THIS de onde for inserido.
function invalidInput(id,b,c) {
    id.style.backgroundColor = b;
    id.style.color = c;
    id.style.outlineColor = b;
    id.style.borderColor = b;
};

//Função que simula aparencia de um input caso ele seja válido.
function validInput(id,b,c) {
    id.style.backgroundColor = b;
    id.style.color = c;
    id.style.outlineColor = b;
    id.style.borderColor = b;
};

