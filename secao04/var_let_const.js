/**
 * Let USO SEMPRE
 * Let é a forma mais moderna em declarar variáveis em javascript
 * Com 'Let' irá evitar erros no seu programa
 * Let ela é uma variável que mantém o escopo local, enquanto que a var tem escopo global
 * Quanto mais fechar o escopo da variável melhor
 * const é uma constante, ou seja, este valor vai se manter independente do que aconteça
 * Vai ser uma variável usa o let
 * Vai ser uma constante usa o const
 */

/*

var numero = 42;
//console.log(numero);

numero = numero + 18;
//console.log(numero);

// Let
let outro_numero = 42;
//console.log(outro_numero);

outro_numero = outro_numero + 18;
//console.log(outro_numero);

let nome = 'Cesar';
//console.log(nome);

nome = 'Developer';
//console.log(nome);


//exemplo com var

// for(var i = 0; i < 5; i++){
//     var valor = i * 3;
//     console.log(valor);
// }

// console.log(valor);
// console.log(i);


for(let i = 0; i < 5; i++){
    let valor = i * 3;
    console.log(valor);
}

*/

//console.log(valor);
//console.log(i);

/*PERIGOSO
var numero = 80;
console.log(numero);

var numero = 32;
console.log(numero);
*/

/*RECOMENDADO
let numero = 80;
console.log(numero);

let numero = 32; // vai dar erro pois já declaramos a variável
console.log(numero);
*/

//const
const TAXA = 1.44;
//console.log(TAXA);

let res = 45 * TAXA;
//console.log(res);

//TAXA = 5; //TypeError, não pode alterar o valor de uma constante
//console.log(TAXA);


//Valor constante vs Mutação
const curso = {nome: "Programação em Javascript"};
//console.log(curso);

//Não podemos alterar o valor de uma constante
//curso = 43; //erro

//podemos realizar mutação em dados contidos na cosntante

//não foi alterado a constante mais o atributo que está dentro dela(isso é chamado de mutação)
curso.nome = "Programação em Python"
//console.log(curso);

/**Dicas de como declarar variáveis em Javascript:
 * A variável poderá ser alterada?(vai variar?) se sim, use o let
 * A variável será constante?(não vai variar?) se sim, use o const
 */

//exemplo

const valor = 5; //constante

for(let i = 0; i < valor; i++){//variável
    console.log(valor - i);
}


