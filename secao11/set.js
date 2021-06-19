/**
 *  - Conjuntos não são indexados
 */

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores ao conjunto
cursos.add('Programação para Cesar');
cursos.add('Algoritmos');
cursos.add('Tomar banho agora');

// Adicionado valores concatenados
cursos.add('Programação em C').add('Vai pra merda').add('Programação em Javascript');

cursos.add('Banco');
cursos.add('Programação web com Django Framework');

console.log(cursos);

// Acessando o tamanho do conjunto
console.log(cursos.size)

console.log(cursos.has('Banco'));

//Deletar elementos de um conjunto
cursos.delete('Programação em C');
console.log(cursos);

let frutas = ['Uva', 'Uva','Manga', 'Morango'];

let new_frutas = new Set(frutas);
console.log(new_frutas);