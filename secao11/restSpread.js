/**
 * Operador restSpread -> ...
Foi introduzido na ultima versão do javascript
 */

/*
function total(...precos){ //junta todos os dados dentro de um array
    let total = 0;

    precos.forEach(p =>  total += p);
    return total;
}

console.log(total(23.44, 22, 3.54, 5.75).toFixed(2));

console.log(total(23, 67));

console.log(total(3, 6, 77));

console.log(total());
*/

// frutas1 = ['Manga', 'Uva', 'Mel'];
// frutas2 = ['Abacate', 'Morango', 'Jaca'];

// compras = [...frutas1, ...frutas2];

// console.log(compras);

let alunos = ['Paula', 'Felipe', 'Fernanda'];

let novo = 'Bia';
let todos = [... alunos, novo];
console.log(todos);


