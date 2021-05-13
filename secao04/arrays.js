
/**
 * Arrays são objetos em javascript(indexados)
 * Sempre começa em 0
 * Possuem tamanho infinito(diferente do java)
 * Podemos colocar qualquer tipo de dado(diferente do java)
 */

//forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
console.log(alunos);

let professores = new Array('Bruno', 'Matheus', 'Anderson');
console.log(professores);

//forma 2 [recomendada]

var notas = [1, 3, 5, 7, 9];
console.log(notas);

let notas_semestre = [10, 9, 8, 7];
for(let i = 0; i <= notas_semestre.length; i++){
    console.log(notas_semestre[i]);
}

//criando um array vazio
var dados = [];
console.log(dados);

//fazendo acesso ao valor de um indice
console.log(notas[1]);


//alterando o valor a partir do indice
notas[2] = 12;
console.log(notas);

//atenção ao acessar um valor com um indice que não existe//

//inserindo elementos no final do array
var nomes = ['Paula', 'Maria', 'Vitoria'];
console.log(nomes);


nomes.push('Vanessa');//insere o valor no final do array
console.log(nomes);

nomes.push('Cesar Developer');
console.log(nomes);

//tamanho do array
var tam =  nomes.length;//4
console.log(tam);

var novo_tamanho = nomes.length;
console.log("O tamanho do array é igual à: " + novo_tamanho);
//Ordenar os dados de um array
var alunos_do_jo = ['Vera', 'Lucia', 'Almeida', 'Barbara', 'Bruna'];
console.log(alunos_do_jo);

alunos.sort();//ordenando o array
console.log(alunos);

//ordenando inteiros
var precos = [1, 20, 444, 29, 22]
precos.sort(function(a, b){return a - b;});//funçao lambda
console.log(precos);

//ordenando floats
var floats = [11.0, 22.9, 221.0, 98.9]
floats.sort(function(a, b){return a - b;});//função lambda
console.log(floats);

//deletando dados de um array
var idades = [10, 19, 18, 17, 16];
console.log(" A média é " + media_aritmetica(idades));

for(var i = 0; i < idades.length; i++){
    console.log(idades[sum]);
}

function media_aritmetica(lista){
   return (lista[0] + lista[1] + lista[2] + lista[3] + lista[4]) / idades.length;
}


delete idades[3];
console.log(idades);

//recuperar valor(colocar de volta)
idades[3] = 12;
console.log(idades);

//método para deletar sem aparecer a palavra empty

//idades.splice(3, 1); //a partir do indice 3 delete 1 elemento(deletar o indice 3)
//console.log(idades);

idades.splice(3, 1); //a partir do indice 3 delete 2 elemento(deletar o indice 3 e depois dele)
console.log(idades);

idades.slice(3, 0, 56, 89); //a partir do indice 3, não delete nenhum, mas adicione 56, 89
console.log(idades);

//iterar em um array
for(var i = 0; i < idades.length; i++){
    console.log(idades[i]);
}

idades.pop();//método remove elementos do final do array
console.log(idades);

//remover e retornar o último elemento do array
var ret = idades.pop();
console.log(ret);
console.log(idades);

//removendo o primeiro elemento do array
idades.shift();
console.log(idades);

//inserindo elementos no array
idades.unshift(99);
console.log(idades);

//retorna um novo array a partir do indice informado
var novo = idades.slice(3);//pegando a partir do indice 3(criando um novo array)
console.log(novo);

//concatenar pares e impares

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares);
console.log(rest);