/**
 * Vários elementos podem ter a mesma classe
 * Id deve ser único(aplicado em um único elemento)
 * Id não é repetido!
 * Id é para apenas um único elemento
 * Normalmente usamos id como name
 * Podemos fazer uso de inline ->>>>>>> dentro do javascript
 * se colocarmos no html o inline -> sujamos o código html e por isso devemos pôr os eventos dentro de um 
javascript externo
 */



//=================================BUSCANDO ELEMENTOS================================================


/*BUSCAR ELEMENTO POR ID

//imprimir o elemento input
let itexto = document.getElementById('produto');

//console.log(itexto);
*/

/*BUCAR ELEMENTOS POR TAG
let spans = document.getElementsByTagName('span');

console.log(spans);
*/


/*
//PEGAR TODOS OS ELEMENTOS QUE TEM O NOME DESTA CLASSE
let eles = document.getElementsByClassName('texto');

console.log(eles);
*/

/*
//============================LER VALORES============================//

console.log(spans[0].textContent);
console.log(spans[1].innerHTML);

//==========================ALTERAR VALORES========================//

spans[0].textContent = 'JavaScript';
spans[1].innerHTML = 'Cesar Developer';
*/

/*
//==================================BUSCAR O PRIMEIRO ELEMENTO===================//
let span = document.getElementsByTagName('span')[0];


console.log(span.innerHTML);

span.style.textTransform = 'uppercase';
*/

//==============================================================================================================//
//==============================================================================================================//
//==============================================================================================================//

//=======================UTILIZAR O QUERYSELECTOR===============//

/*busca pela tag
let inp = document.querySelector('input'); 
console.log(inp);
*/

/*busca pela todas as tags
let inp = document.querySelectorAll('input'); 
console.log(inp);
*/

/*busca pelo primeiro elemento
let eles = document.querySelector('.texto'); //busca pela classe
console.log(inp);
*/


/*busca todos os elementos
let eles = document.querySelectorAll('.texto'); //busca pela classe
console.log(inp);
*/

/*BUSCA ELEMENTO PELO ID
let div1 = document.querySelector('#div1'); 

console.log(div1);
*/

/*BUSCAR ELEMENTO ESPECIFICO
let imp = document.querySelector('input[name=produto]');
console.log(imp);
*/

//=======================================EXEMPLO1 ===================================//
//=============================USO DE ELEMENTO NÃO INLINE ->>>>>>>   =========================//

/*
//através do javascript estamos recuperando o elemento
let btn = document.querySelector('button.btn');

//adicionando um evento no elemento
btn.onclick = function(){
    alert('Botão clicado');
}
*/

//=======================================EXEMPLO2 ===================================//
//=============================USO DE ELEMENTO NÃO INLINE ->>>>>>>   =========================//

                                //elemento(button) e classe(btn)
let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function() {
    alert(`Temos o texto ${inp.value}`);
}