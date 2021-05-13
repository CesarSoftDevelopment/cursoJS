

//===============arrays=============//

/*
let alunos = new Array('Cristina', 'Santos', 'Lucas');
console.log(alunos);

let professores = ['Matheus', 'Ramon', 'Cristian'];
console.log(professores);
*/

//===============interação=============//

/*
for(let i = 0; i < alunos.length; i++){
    //console.log(alunos[i]);
}

let i = 0;

while(i < professores.length){
    console.log(professores[i]);
    i++;
}
*/

let notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let alunos = ['Cesar', 'Ana', 'Maria'];

function checkNote(note){//filter
    return note >= 6 || note >=4 || note <4;
}

function checkSituation(note){
    if(note >= 6){
        return note + ' Aprovado ';
    }else if(note >= 4){
        return note + ' Exame ';
    }else {
        return note + ' Reprovado';
    }
}

res = notas.map(checkSituation);
console.log(res);



