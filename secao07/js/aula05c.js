/**
 * Posso buscar os botões por classe, tag
 */

let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        document.querySelector('#app').removeChild(btns[i]);
    };
}


let images = document.querySelectorAll('img');

for(let i = 0; i < images.length; i++){
    images[i].onclick = function(){
        document.querySelector('#set-images').removeChild(images[i]);
    }

    

}