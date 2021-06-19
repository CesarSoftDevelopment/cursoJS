/**
 * Funções closures
 * Se dentro da função estiver uma variável dentro com o mesmo nome da variável local
será executada a variável local, a variável local tem mais valor do que a variável global neste
caso.
* Closures -> escopo da função quando é declarada
* 
 */


/*
let aberto = 'global'; //pode ser acessada globalmente, qualquer parte do programa

function imprimir(){
    console.log(aberto);
}

function outra(){
    let aberto = 'local'; //pode ser acessada local no bloco/contexto
    imprimir();
}

outra(); //??
*/

// novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; //local
    }

    return interna;
}

let executa = externa();
console.log(executa()); // local

/*
Estamos estudando Closures(contexto léxico de uma função)

existe uma linguagem de Programação clojure

*/


let funcionarios_homens = ['Matheus', 'Jorge', 'Gabriel', 'Lucas'];
let funcionarios_mulheres = ['Maria'];

function nomear(nome){
    if(nome == funcionarios_mulheres){
    return nome + ' Mulher'; 
    }
}

 
funcionarios = [];

sexo = funcionarios_mulheres.map(nomear);
console.log(sexo);

