const cursos = [
    'Programação para leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java', 
    'Programação em Python',
    'Programação web com Django Framework',
    'Programaçao em Javascript'
]


function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

cursos.forEach(apresentar); // ocorrência do callback

//usando lambda
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
});

// usando arrow function
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));


/**
Sempre que ocorre um evento onde na qual  uma função é executada diante deste evento
aqui ocorre um callback
 */

/**
 Callback nada mais é que passar uma função como parametro para outra função que irá executar
 esta função mediante um evento -> executar novamente
 */