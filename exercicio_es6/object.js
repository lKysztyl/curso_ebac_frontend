
const alunos = [
    {nome: 'Ricardo', nota: '0'},
    {nome: 'Axel', nota: '8'}, 
    {nome: 'Alex', nota: '10'}, 
    {nome: 'Jesy', nota: '5'}, 
    {nome: 'Carolaine', nota: '6'}, 
    {nome: 'Rafhael', nota: '1'}
];

function  aprovados() {
    for (const aprovado of alunos) {
        if (aprovado.nota >= 6) {
            console.log(`Aluno(a) ${aprovado.nome} aprovado(a) com Nota ${aprovado.nota}.`);
            console.log('-------')
        };
    };
};

aprovados(alunos);