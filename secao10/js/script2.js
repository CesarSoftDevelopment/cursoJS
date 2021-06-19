
/**
 * Explicação dos códigos abaixo
-> prometo que vou executar algo, pode ficar trabalhando, quando tudo tiver concluído
eu vou passar os dados para você! Dados de fracasso ou de sucesso.
 */


// 1º Busca as tags

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

//criando promise

// 2º Faz a função
let promise = function() {
    // 2.1 class promise of the javascript -> objeto recebe uma função como parametro
    return new Promise(function(resolve, reject){
        
        // 2.2 pegar o valor do usuário
        let github_user = document.querySelector('input[name=github_user]').value;
        // 2.3 ajax
        let ajax = new XMLHttpRequest();
        // 2.4 método http
        ajax.open('GET', `http://api.github.com/users/${github_user}`);
        // 2.5 null
        ajax.send(null);

        // 3º recuperação dos dados
        ajax.onreadystatechange = function() {
            //3.1 verificação
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                }else {
                    reject('Não foi encontrado nenhum usuário com este nome');
                }

            }
        }

    });
}

btn.onclick = function() {
    // limpar div
    div.innerHTML = '';

    // criar elemento span
    let spanNome = document.createElement('span');

    //criar variável nome;
    let textNome = '';

    //executando a promise
    promise()
        // resolve(sucesso)
        .then(function(response){
            // se o usuário tem nome
            if(response['name' !== null]){
                textNome = document.createTextNode(response['name']);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else {
               textNome = document.createTextNode('O usuário encontrado não possui nome')
            }

            //adiciona o texto
            spanNome.appendChild(textNome);
            div.appendChild(spanNome);
        })

        .catch(function(error){
            textNome = document.createTextNode(error);
            //adiciona o texto ao span e o span a div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome);

        });
}

