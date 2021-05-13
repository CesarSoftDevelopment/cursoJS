
/**
 
foreach estrutura mais moderna -> para cada elemento dentro do nosso array curso -> imprima

utilização de uma função anonima(lambda/callback) e template string
 
 */

var cursos = [
    'Programação para leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em PYthon',
    'Banco de dados',
    'Programação Web com Django Framework',
    'Programação em Javascript'
];

var nomes = [
    'Cesar Soares',
    'Ana Lucia Silva',
    'Ramon Lucas'
];

/*

//criando uma função separada
function imprimirNomes(nome, index){
    console.log(index + ' - ' + nome);
}

//passando a função
nomes.forEach(imprimirNomes);
*/


//executando a função dentro do forEach
nomes.forEach(function(curso, index){
    console.log(`${index} - ${curso}`);

});


























// console.log(cursos);
//console.log(cursos.length);

// 1º definir função
//function imprimir(curso, indice){

function imprimir(curso, indice){
    //console.log(indice + '-' + curso);   
 }

 //impressão
cursos.forEach(imprimir);

/*--------------------------------------------------------------------------------*/

function imprimir(curso, indice){
    //console.log(indice + '-' + curso);   
 }

 //impressões
//console.log(array);
//cursos.forEach(imprimir);



/*LAMBDA CALLBACK
cursos.array.forEach(function(curso, indice) {
    console.log(`${indice} - ${curso}`);
});
*/

