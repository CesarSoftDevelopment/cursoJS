/**
 * document: é o documento html(todo ele)
 * querySelector: fazendo  uso da api DOM| é uma função do DOM
 * .link -> vai bucar um elemento que tem uma classe chamada link
 * . -> ponto porque é uma classe, então temos que pôr um ponto(.)
 * # -> asteristico é um id
 * Document é a ultima instância
 */



// Acessar elemento da página
let a = document.querySelector('.link');

/*IMPRIMINDO PAIS DOS NÓS
//imprimir texto
console.log(a.innerText);

//imprimir pai do elemento ancora
console.log(a.parentNode); //body

//imprimir pai do elemento body| 
console.log(a.parentNode.parentNode); //html

console.log(a.parentNode.parentNode.parentNode);//DOCTYPE(DOCUMENT)
*/

/*IMPRIMINDO OS FILHOS DO NÓS
//filhos do html
console.log(a.parentNode.parentNode.childNodes);

//primeiro filho do html(head)
console.log(a.parentNode.parentNode.firstChild);

//primeiro filho do ancora(a)
console.log(a.firstChild);

//ultimo filho do body
console.log(a.parentNode.parentNode.lastChild); //body


console.log(a.parentNode.parentNode.firstChild.nextSibling);//próximo irmão

//primeiro filho do body
console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild);

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling); 
*/