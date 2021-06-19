
let sexo = 'm';
//? significa o operador ternário
//ternario porque tem três incidencias
console.log(sexo === 'm' ? 'Masculino' : 'Feminino');

let pessoa1;
let pessoa2 = 'CESAR';

let condicao = pessoa2 === 'Felipe' ? 'Bem vindo ' + pessoa1 : 'Não sei quem é você!';

console.log(condicao);

let vazio1 = pessoa1 == null ? 'Nome Inválido': 'OK';
console.log(vazio1);

let vazio2 = pessoa2 != null ? 'Bem vindo ' + pessoa2 : ' Não sei quem esta pessoa'
console.log(vazio2);