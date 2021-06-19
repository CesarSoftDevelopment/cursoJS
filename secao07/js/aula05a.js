/**
 * As variáveis tem uma importância de gurdar dados para depois serem tratados
 */

let btn = document.querySelector('button'); 


btn.onclick = function() {
    //declara a variável de texto que será adicionado ao parágrafo
    let textElement = ''; //texto deste elemento que vamos adicionar no paragrafo

    //recuperando o valor colocado pelo o usuário
    let inputValue = document.querySelector('input').value;

    //criando elemento
    let pElement = document.createElement('p');

    //colocando atributos para o elemento(classe) adicionando uma classe
    pElement.setAttribute('class', 'classe-p');


    //verifica se o usuário preencheu o input, caso contrário coloca um texto padrão
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);

    }else {
        textElement = document.createTextNode('Veio Vazio...');
    }

    //Adiciona o texto como filho do parágrafo
    pElement.appendChild(textElement);

    //onde vamos adicionar o paragrafo|Recupera a div
    let divElement = document.querySelector('#app');

    //adiciona o paragrafo como filho da div
    divElement.appendChild(pElement);

    //limpa input
    document.querySelector('input').value = '';
 
}