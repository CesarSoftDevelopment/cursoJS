/**
 * Try e Catch
 * Para tratar erros usamos o try e catch
 * Finally trabalha junto com o try e cath(try, catch, finally)
 * 
 */

//console.log(nome); //ReferenceError

//console.log(4.oi()); //SyntaxError


//tratamentos de erros

/*
try {
    console.log(nome);
}catch(e){
    console.log('Não foi possível imprimir nome!')
    console.log(e.name);
    console.log(e.message);
}

console.log('OI....')
*/

// Lançando erros

function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos.") //laçando um erro!

    }else{
        return num1 / num2;
    }

}


// fazendo o tratamento do erro lançado
/*
try{
    let ret = dividir(8, 0);
    console.log(ret);

}catch(e){
    console.log("Não foi possível dividir")
}
*/

//com finally(O finally é executado sempre independente se há o erro ou não!)
try{
    let ret = dividir(8, 0);
    console.log(ret);

}catch(e){
    console.log("Não foi possível dividir");
}finally {
    console.log("Vamos continuar");
}


