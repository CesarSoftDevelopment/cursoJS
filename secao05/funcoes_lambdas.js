/**
 * Funções Anonimas -> função sem nome
 * 
 *
 */

let numeros = [1, 2, 3, 5, 6, 7];
 
/*
function dobrar (valor){
    return valor * 2;
}

let res1 = numeros.map(dobrar);

console.log(numeros);
console.log(res1);
*/

//funções Anônimas - Lambdas (funções Lambdas)
//função que recebe valor como parametro e retorna ele vez 2

/*
let res2 = numeros.map(function(valor){
    return valor * 2;
});

console.log(res2);

const outra = function(valor){
    return valor * 2;
};

console.log(outra(9));
*/

// const somar = function(valor) {
//     return valor * 2;
// }

// console.log(somar(2));

/*
function somar(v1, v2){
    return v1 + v2;
}

let mostrar = function(n1, n2, calculo = somar){
    console.log(calculo(n1, n2));
};

mostrar(2, 4);

mostrar(9, 6, somar);

mostrar(3, 6, function(n1, n2){
    return n1 + n2;
});

               //p          //retorno
mostrar(3, 6, (v1, v2) => v1 * v2);
*/



// let numbers = [1, 2, 3, 4, 5];

// function dobrar(value){
//     return value * 2;
// }
// let res1 = numeros.map(dobrar);

// console.log(numeros);
// console.log(res1);

// // funções anonimas

// let res2 = numeros.map(function(value){
//     return value * 2;
// });

// console.log(res2);


function imprimir1(nome) {
    return nome;
}

console.log(imprimir1('Lucas Santana'));

let imprimir2 = function(nome){
    return nome;
}

console.log(imprimir2('Cesar Developer'));

/**
Duas formas de utilizar a função lambda
Passar direto para uma função como o map que recebe uma função como parametro ou
Dar um nome para esta função e executar da forma que você quiser

 */