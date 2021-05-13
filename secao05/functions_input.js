/**
 * ====================================Português=============================================
 * Funções com parâmetro de entrada e retorno
 * Função pode ter quanto parametro quiser
 * Parametros são separados por virgula
 * Funções sem retorno não podemos podemos recuperar o valor e fazer algo, não podemos fazer nada!
 *  Fri May 07 2021
 * Javascript não vai dar erro caso passamos mais parâmetros do que ele espera!
 * 
 *===============================Inglês=======================================================
* Functions with input and return parameters
 * Function can have as much parameter as you want
 * Parameters are separated by commas
 * Functions without return we cannot recover the value and do something, we cannot do anything!
 * Fri May 07 2021
 * Javascript will not give an error if we pass more parameters than it expects!
 */

// exemplo 1 (parametro de entrada ano do sujeito)

function sum_years_old1(year_of_birth) {
    const data = new Date(); // gera a data atual

    const years_old = data.getFullYear() - year_of_birth;

    return years_old;
    
}


function sum_years_old2(year_of_birth){
    const data = new Date();

    const years_old = data.getFullYear() - year_of_birth;

    console.log(years_old);
}

//retornou o valor e colocou na variável ret

let ret = sum_years_old1(1998);
//console.log(ret + 3);

//sum_years_old2(1998);

const data = new Date();

// console.log('Complete Date: ' + data);

// console.log('Year: ' + data.getFullYear());

// console.log('Mês: ' + data.getMonth());

// Fique esperto

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(4, 6));//10

console.log(sum(4));// NaN - Not a number

console.log(sum(4, 6, 8));// 10 fez a soma dos parametros

console.log(sum(4, 6, 8, 19, 11, 12, 14, 15));//10 fez a soma dos elementos que ele espera





