
/**Documentação
 * Filtrar valores
 * Vai fazer outro array filtrado
 * Geralmente trás um array de tamanho menor
 *  Filter faz filtrar os valores com uma determinada especificação.
 * 
 */


//array original

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//impressão do array original

console.log(numeros);  

//função filtar_pares

function filtrar_pares(n){
    return n % 2 === 0;
}


//impressões(função filtar_pares)

console.log(filtrar_pares(3));  //false
console.log(filtrar_pares(8));  //true


//funções

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}


//filtros

var ret  = numeros.filter(filtrar_pares); //array filtrado para pares
console.log(ret);

ret = numeros.filter(filtrar_impares); //array filtrado para impares
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5); //array filtrado para multiplos de 5
console.log(ret);


//array de alunos

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3}
];

//impressão do array alunos

console.log(alunos);

//função

function filtar_notas_maiores_8(aluno){
    return aluno.nota > 8;
}


//variável filtrados

var filtrados = alunos.filter(filtar_notas_maiores_8);
console.log(filtrados);

var professores = ['Ana', 'Maria', 'Joana'];

function filtrar_nomes_amj(professor){
    if(professor[0] == 'A'){
        return 'OK';
    }else if(professor[0] == 'M'){
        return 'este é o segundo elemento';
    }else if(professor[0] == 'J'){
        return 'este é o terceiro elemento'
        
    }else {
        return 'Este nome não está na lista!'
    }
}

var retorno  = (filtrar_nomes_amj('I')); //array filtrado para pares
console.log(retorno);


