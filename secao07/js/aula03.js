
/**
 * alert -> função do global do javascript, imprimir algo no navegador!!
 */


//função
function mostrarAlerta(){
    alert('O botão foi clicado!');
}

//pôr o texto no elemento que tá vindo como parâmetro
function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

let mudarTexto2 = (elemento2) => {
    elemento2.innerHTML = 'Eu estou apresentando o elemento 2';
}

 function mudarCor() {
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numero];
}

let escreverTexto = (input) => {//valor digitado pelo o usuário
    let span = document.getElementById('texto');
    
    span.innerHTML = input.value;
}



/*
function escreverTexto(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}
*/

/*
escreverTexto = function escrever(){
    
}
*/