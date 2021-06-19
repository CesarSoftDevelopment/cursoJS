
let buttonElement = document.querySelectorAll('button');

buttonElement[0].style.backgroundColor = 'green'; buttonElement[0].style.color= 'white';
buttonElement[0].style.width = '100px'; buttonElement[0].style.height = '50px';
buttonElement[1].style.backgroundColor = 'red'; buttonElement[1].style.color= 'white';
buttonElement[1].style.width = '100px'; buttonElement[1].style.height = '50px';
buttonElement[2].style.backgroundColor = 'blue'; buttonElement[2].style.color= 'white';
buttonElement[2].style.width = '100px'; buttonElement[2].style.height = '50px';
buttonElement[3].style.backgroundColor = 'yellow'; buttonElement[3].style.color= 'white';
buttonElement[3].style.width = '100px'; buttonElement[3].style.height = '50px';
buttonElement[4].style.backgroundColor = 'white'; buttonElement[4].style.color= 'black';
buttonElement[4].style.width = '100px'; buttonElement[4].style.height = '50px';

let imagem = document.querySelector('.imagem').style.marginTop = '200px';
let imagem2 = document.querySelector('.imagem2').style.height = '200px';
let imagem3 = document.querySelector('.imagem3').style.height = '150px';
let imagem4 = document.querySelector('.imagem4').style.height = '100px';



for(let i = 0; i < buttonElement.length; i++){
    buttonElement[i].onclick = function(){
        
        document.querySelector('.imagem').style.backgroundColor = this.style.backgroundColor;
        document.querySelector('.imagem2').style.backgroundColor = this.style.backgroundColor;
        document.querySelector('.imagem3').style.backgroundColor = this.style.backgroundColor;
        document.querySelector('.imagem4').style.backgroundColor = this.style.backgroundColor;


    };
}


