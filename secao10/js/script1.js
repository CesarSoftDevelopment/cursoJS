// AJAX (XMLHttpRequest) ou Asynchronous JavaScript and XML

/**
AJAX é uma requisição assincrona que realizamos algum backend, uma requisição que não 
bloquear sua tela enquanto ela acontece.
/**/

/**
Quando falamos em requisição por exemplo, o fato de eu ir no site github, colocar o nome de
usuário aqui e aguardar ele buscar esse usuário para ver se ele encontra ou não, isso é uma 
requisição isso leva tempo, se a página espera-se isto acontecer, a página ficaria esperando/
carregando. Aqui/na página com as atividades bloqueadas até esses dados serem retornados
na tela e usuário pudesse ver. Com a programação assincrona, isso fica transparente sem a página
ficar carregando.
 */

/**
 * Podemos fazer esta requisição, assim que for carregado os dados a página exibe os dados 
sem que a página seja carregada novamente.
 */

// 1º Pegando os elementos

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

// 2º Colocando evento no botão

btn.onclick = function() {

    // 2.1 Limpar o conteúdo da div
    div.innerHTML = '';

    // 2.2 Instanciando objeto AJAX
    let ajax = new XMLHttpRequest();

    // 2.3 Abrir uma conexão
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // 2.4 Enviar a requisição
    ajax.send(null);

    // 2.5 Resultado
    ajax.onreadystatechange = function() {

        // 3º Criar elemento span
        let spanNome = document.querySelector('span');

        // 3.1 Criar variável nome
        let textNome = '';

        /**
         ajax.readyState = 0 -> antes da conexão ser aberta
         ajax.readeyState = 1 -> após abrir a conexão ser aberta
         ajax.readeyState = 2 -> headers(cabeçalhos) foram recebidos(cabeçalho html)
         ajax.readeyState = 3 -> Carregando o corpo da requisição(conteúdo/dados)
         ajax.readeyState = 4 -> O conteúdo(dados) está pronto para uso;
         */

        // 3.2 Verificação
        if(ajax.readyState === 4){
            if(ajax.status === 200){
                // 3.3 Transformar os dados JSON em ARRAY
                usuario = JSON.parse(ajax.responseText);

                // 3.4 vericar se o usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');
                    div.appendChild(img);
                }else {
                    textNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);

                }

                // 3.5 Adiciona o texto ao span e o span a div
                spanNome.appendChild(txtNome);
                div.appendChild(spanNome);

                //3.6 Limpar o input
                input.value = '';

            }
        }
    }


}