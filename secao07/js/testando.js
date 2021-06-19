
let paragraph = document.querySelector('h1');
let paragraph2 = document.querySelector('h2');
let lineService = document.querySelector('.line-service');
let lineAliment = document.querySelector('.line-aliment');

let firstItems = document.querySelector('.first-items');
let secondItems = document.querySelector('.second-items');
let outros = document.querySelector('.third-items');


items1 = [
    'Código',
    'Produto',
    'Preço'
];

items2 = [
    '1',
    'PlayStation',
    '1000'
];

items3 = [
    '2',
    'Xbox 360',
    '2000'
];

function showItems1(){
    for(let i = 0; i < items1.length; i++ ){
        let itemList1 = document.createElement('td');

        let itemText1 = document.createTextNode(items1[i]);
        itemList1.appendChild(itemText1);
        firstItems.appendChild(itemList1);

    }
}

function showItems2(){
    for(let i = 0; i < items2.length; i++ ){
        let itemList2 = document.createElement('td');

        let itemText2 = document.createTextNode(items2[i]);
        itemList2.appendChild(itemText2);
        secondItems.appendChild(itemList2);

    }
}

function showItems3(){
    for(let i = 0; i < items3.length; i++ ){
        outros.innerHTML = items3[i];
        

    }
}


showItems1();
showItems2();
showItems3();


paragraph.onmousemove = function(){
    paragraph.innerHTML = '';
}

paragraph2.onmousemove = () => {
    paragraph2.innerHTML = '';
}


lineService.onclick = function(){
    lineService.innerHTML = '';
    alert('Apaguei as linhas de serviços prestados');
 }
 
 
lineAliment.ondblclick = () => {
    lineAliment.innerHTML = '';
    alert('Apaguei as linhas de alimentos');
    createParagraph();
    criarServices();
}



menuService = [
    'Andar de Bicicleta',
    'Andar a Cavalo',
    'Andar de Moto ',
    'Dirigir Carro'
];

menuAliment = [
    'Banana',
    'Arroz',
    'Feijão',
    'Farofa'
];


function createParagraph(){
    let text = document.createTextNode('Nossos Serviços');
    paragraph.appendChild(text);

}


function criarServices(){
    for(let i = 0; i < menuService.length; i++){
        let itemList = document.createElement('li');
        let itemText = document.createTextNode(menuService[i]);
        itemList.appendChild(itemText);
        lineService.appendChild(itemList);

    }
    

}


