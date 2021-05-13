
/**Documentação
Utilizamos o map para fazer transformações nestes valores
map gera um novo array de mesmo tamanho de um array original
diferença do foreach para o map: foreach não gera um novo array
                                 map gera um novo array
 */

//forma 1(função lambda)

var valores = [2, 4, 6, 8, 10];
console.log(valores);

var dobro = valores.map(function(valor){
    return valor * 2;

});
console.log(dobro);


//forma 2

function dobrar(valor){
   return valor * 2; 
}

dobro = valores.map(dobrar);

console.log(dobro);


//------ Encadeando(funções) maps para realizar múltiplas transformações --//

function soma_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

/**documentação
 * Vai pegar o array original e mapear para a função dobrar
 * Vai gerar um novo array com os valores dobrados
 * Vai pegar este array com os valores dobrados e mapear para outra função
 * Vai somar 4 para cada elemento do array
 * Vai mapear para dividir os valores por 5.
 */

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado);

