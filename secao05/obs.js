/**
 * Forma literal(forma padrão)
 * O javascript pega uma função literal e joga lá pra cima!
 */

console.log(somar(4, 6));

//forma literal
function somar(n1, n2){
    return n1 + n2;
}

/* função anonima não funciona desse jeito
let somar = function(v1, v2){
    return v1 + v2;
}
*/