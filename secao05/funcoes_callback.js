/**
 * Funções Callback -> chamar de volta
 * Callback é passar uma função como paramentro para outra função que irá executar essa função mediante
 * um evento, executar novamente.
 * forEach é um evento(para cada)
 */

const cursos = [
    'Programação para leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java', 
    'Programação em Python',
    'Programação web com Django Framework',
    'Programaçao em Javascript'
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

// cursos.forEach(apresentar); //aqui está ocorrendo o callback

// // usando lambdas
// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// });

// // usando arrow 
// cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));


/**
 * Fazer uma função que coloque os valores menores que 50 em uma nova lista(let menores =  [])
 */

const precos = [23.75, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = []

/* 1º forma
for(let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}

console.log(menores)
*/

/*
for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}

console.log(menores);
*/

// filter - forma 1
/*
menores = precos.filter(function(preco){
    return preco < 50;
});

console.log(menores);
*/


// filter - forma 2

/*
menores = precos.filter(preco => preco < 50);

console.log(menores);
*/



