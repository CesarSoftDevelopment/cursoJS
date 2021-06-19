/**
 * Intanciando objetos
 * O que são Objetos? um objeto nada mais que uma coleção de dinamica de pares: chave e valor
 * { nome: 'Programação em Javascript', preco: 27.99 } -> objeto curso
 * Podemos acrescentar atributos dinamicamente
 * Objeto Literal é como ele é como javascript coloca ele
 * { nome: 'Programação em Javascript', preco: 27.99 } -> objeto literal
 */


 class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this.nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }


    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`)
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }
    
    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}

const p1 = new Pessoa('Cesar', 'Desenvolvedor');


//Instanciação de objetos - Forma 1

/*
//nome = chave     ''; = valor
const curso = new Object();
curso.nome = 'Programação em Javascript';
curso.preco = 27.99;

console.log(curso);

//adicionado atributo
curso['qtd_alunos'] = 999;

console.log(curso);

//deletando atributo
delete curso['qtd_alunos'];
delete curso['preco'];

console.log(curso);
*/

//Instanciação de objetos - Forma 2 - Objeto Literal

/*
const programa = {
    nome: 'Photoshop',
    preco: 88889.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da Paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
    filiais: [
        {cidade: 'Rio de Janeiro'},
        {cidade: 'Recife'}
    ]
    }
}
*/


/*
//console.log(programa);

console.log(programa.nome); //Photoshop
console.log(programa.fabricante.nome);//Adobe

console.log(programa.fabricante.filiais.length); //tamanho

//outra forma de acessar(não recomendado)
console.log(programa['fabricante']['filiais']);
*/



/* alterar dado do atributo 
programa.nome = 'PlayStation 05';

console.log(programa.nome);

console.log(programa);
*/


/* deletar atributo
delete programa.fabricante.filiais;

console.log(programa.fabricante.filiais); //underfined
*/



//Instanciação de objetos - Forma 3 - Objeto Literal


/*
const pessoa = {};

console.log(typeof(pessoa));

pessoa.nome = 'Angelina';

console.log(pessoa);
*/


//Instanciação de objetos - Forma 4 - Função construtora

/*
function Lampada(cor){
    this.cor = cor;
}

const l1 = new Lampada('Branca');

console.log(l1)

console.log(typeof(l1));
*/


//Instanciação de objetos - Forma 5 - Objeto a partir das nossas classes

/*
const p1 = new Pessoa('Cesar', 'Developer');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); //fazendo acesso a função get -> não é necessário o parentese()
console.log(p1.sobrenome); //fazendo acesso a função get -> não é necessário o parentese()
*/

/*declarando e settando os atributos
const p1 = new Pessoa('Cesar', 'Developer');

p1.nome = 'José';
console.log(p1);

//método comum
p1.falar('Olá mundo'); //msg -> parâmetro da função
p1.comer();
p1.beber();
*/


/*
const fit = new Carro("Fit");
fit.imprimir();
*/