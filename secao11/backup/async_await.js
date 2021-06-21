/**
Async await
 */

/**
|---------------------------------------------------------------------|
|Async: faz executar a função de forma assincrona                     |
|colocando uma função para ser executada de forma assincrona          |
|                                                                     |
|wait: espera o retorno da função -> assim que passar os dois segundos|
|a resposta vai ir para (response)                                    |
|-------------------------------------------------------------------- |


|--------------------------------------------------------------------|
|tem situações que temos que esperar a conexão com o banco de dados  |
|não podemos seguir se a conexão teve sucesso, então temos que usar  |
|async e await, só podemos usar o await se nossa função for a async  |
|SE TIRAR async e ter await na função, vai dá erro... e vise versa   |
|-------------------------------------------------------------------_|

tem as e funções comum -> sincronas
funções asyncronas(entrão promisses ajax e async await -> transforma
uma função comum(sincrona) em asyncrona

quando usamos função com Promise, ela fica asyncrona
 */

const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10);
    setInterval(() => {
        if(valor % 2 == 0){
            resolve(`O valor ${valor} é par...`);
        }else {
            reject(`O valor é ${valor} é impar...`);
        }

    }, 2000);
});


async function executarPromise(){
    try {
        const response = await novaPromise();
        console.log(response);
    }catch(erro){
        console.log(erro);
    }
    console.log('Não esperei o await...')
}

executarPromise();

