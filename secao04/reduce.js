/**
 * É uma estrutura de repetição, utilizado em conjunto com map e filter
 * Tem função de reduzir a estrutura de dados
 * Reduce, reduz os dados em um unico valor
 */

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
//console.log(precos);

//interar sobre array
var soma = 0;
for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
    
}

//impressao

//console.log(soma);




//variavel

soma = 0;


//loop forEach

precos.forEach(function(valor){
    soma += valor;
});


//impressão

//console.log(soma);


//função somar

function somar(anterior, atual){
    return anterior + atual;
};

var ret = precos.reduce(somar);
//console.log(ret);


/* 

Como funciona o reduce?

[4.66, 3.78, 9.78, 1.34, 5.32]

Primeira execução:
    - Pega os dois primeiros valores (indice 0 e indice 1), soma e retorna este valor
Nas demais execuções:
    - Pega o retorno da execução anterior e próximo valor(índice 2...)

1 = 4.66 + 3.78 -> 8.44
2 = 8.44 + 9.78 -> 18.22
3 = 18.22 + 1.34 -> 19.56
4 = 19.56 + 5.32 -> 24.88
*/

//Exemplo map/reduce
function adicionar_taxa(valor){
    return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
//console.log(ret);

//Exemplo filter/map/reduce


//filter -> vai para o próximo array

function preco_maior_que_4(valor){
    return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
//console.log(ret);

/** O que aconteceu no código acima!
ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(ret);

- 1º Aplicamos o filtro(somente valores maiores que 4, ou seja, só pode ir para outro array valores
    maiores que 4) -> gerou um array com três valores

- 2º Map pegou este array com três valores acrescentou a taxa de 5 em cada um deles e gerou um novo
array com estes valores transformados

- 3º  Reduce, aplicamos a soma destes três valores
 */

let notas = [10, 9, 8, 7, 6];

function notas_maior_6(nota){
    return nota > 6 || nota <= 6;
}

function resultado(nota){
    if(nota > 6) {
        return nota + ' Aprovado '
        
    }else {
        return nota + ' Reprovado '
    }
    
}

res = notas.filter(notas_maior_6).map(resultado);
console.log(res);