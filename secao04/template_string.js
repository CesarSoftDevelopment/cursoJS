/**Template_string
 *
 * É template string pois através de uma string nós estamos montando o template como ele deve ser
 * As nossas variáveis ficam dentro da chave
 *Nas versões mais recentes do javascript foi implementado t-string
 *Em template strings usa-se a classe e não aspas simples ou acento agudo

 Não é '
 Não é á
 É
 */

let idade = 19;
const nome = 'Geek';

function soma_3(idade){
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos. ');



//template string
console.log(`${nome} tem ${soma_3(idade)} anos. `);


let meu_nome = 'Cesar ';
let sobrenome = 'Developer';



