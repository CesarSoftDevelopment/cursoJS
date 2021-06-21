/**
 * Sintaxe curta de objeto
 * Se o seu objeto tiver o mesmo atributo que é o mesmo nome da variável que você tem podemos remover
os dois pontos e o nome da variável
 */

const nome = 'Programming in javascript';
const preco = 'R$ 27,99';
const horas = 25;


const curso = {
    //atr   /var
    nome,
    preco,
    instrutor: 'Cesar Soares',
    carga_horaria: horas,
};

console.log(curso);
