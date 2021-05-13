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

