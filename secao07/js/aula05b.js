/*
function removerBotao(btn){ //btn é o this
    // Recupear o elemento div
    let divElement= document.querySelector('#app');

    // Remove o filho selecionado da div(elemento)
    divElement.removeChild(btn);


}
*/

/*

function removerTitulo(titulo){
    let h1Element = document.querySelector('#title');

    h1Element.removeChild(titulo);

}
*/

/*
function removerTitulo(titulo){
    document.querySelector('#title').removeChild(titulo);
}
*/

h1 = document.querySelector('h1');
h1.onclick = function(){
    document.querySelector('#title').removeChild(h1);
}   

