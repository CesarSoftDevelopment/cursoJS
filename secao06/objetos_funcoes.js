/**
 * Podemos ter um objeto instanciado de diversas formas: a partir de classes, função construtora.
 * CHAVE E VALOR
 */

/*Objeto
const curso =  {
    nome: 'Programação em Javascript',
    horas: 25,
    preco: 27.99
}

console.log(curso);

console.log(typeof(curso));
*/

const curso =  {
    nome: 'Programação em Javascript',
    horas: 25,
    preco: 27.99
}

/*Imprimindo: chave, valor, chave e valor, forEach
console.log(Object.keys(curso));

console.log(Object.values(curso));

console.log(Object.entries(curso));

Object.entries(curso).forEach(par =>{
    console.log(`${par[0]}: ${par[1]}`)
});
*/

/*Destructuring
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
*/

/*Definir propriedade para deixar somente leitura
Object.defineProperty(curso, 'publicacao', {
    enumerable: false,
    writable: false,
    value: '07/12/2022'
});

curso.publicacao = '01/01/2002';


console.log(curso);

console.log(curso.publicacao);
*/


/*Não pode alterar dados
console.log(curso);

Object.freeze(curso);
curso.nome = 'Dança da Garrafa';

console.log(curso);
*/

/*
const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Cesar Developer'},
    {nome: 'Richard Moraes', empresa: 'Google'},
    {nome: 'Ana Maria', empresa: 'Sony'}

];

console.log(usuarios);

//ver em formato de colunas

console.table(usuarios);

*/