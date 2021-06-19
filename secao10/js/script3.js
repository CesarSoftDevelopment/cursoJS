// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    //limpar
    div.innerHTML = '';

    let spanNome = document.createElement('span');

    let txtNome = '';

    let github_user = document.querySelector('input[name=github_user]');
    
    let user = github_user.value;

    github_user.value = '';

    axios.get(`https://api.github.com/users/${user}`)
        .then(response => { //success
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img')
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.nome);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else {
                txtNome = document.createTextNode('O usuário não possui nome');
            }

            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

            github_user = '';
        })
        .catch(error => { //error 
            txtNome = document.createTextNode('Não possível realizar a requisição.');
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });


}