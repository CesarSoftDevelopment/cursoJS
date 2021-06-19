/**
 * Object Orientation
 * Function in javascript
 * Podemos criar objetos através de funções
 * Factory function(criar objetos)
 * Funções construtoras(criar objetos)
 * Embaixo dos panos class significa funções em javascript
 */

//criando objeto através de um factory function

// const pessoa1 = (nome, sobrenome) => {
//     return { //retornando um objeto que vai ter o método andar
//         andar: () => console.log(`${nome} ${sobrenome} está andando`)
//     }
// }

// const p1 = pessoa1('Felicity', 'Developer');
// console.log(p1);
// console.log(typeof(p1));
// p1.andar();

//criando objeto através de uma função construtora

// function Pessoa2(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;

//     this.andar = function() { 
//        console.log(`${this.nome} ${this.sobrenome} está andando...`);
//     }
// }

// const p2 = new Pessoa2('Cesar', 'Developer');
// console.log(p2);
// console.log(typeof(p2));
// p2.andar();

// function Fruta(nome, tipo){
//     this.nome = nome;
//     this.tipo = tipo

//     this.comer = () => {
//         console.log(`${this.nome} ${this.tipo} está sendo comida`);
//     }
// }

// const fruta = new Fruta('Maça', 'Boa');
// console.log(fruta);
// console.log(typeof(fruta));
// fruta.comer();


//Criando objeto através de uma classe
// class Pessoa3{
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     andar(){
//         console.log(`${this.nome} ${this.sobrenome} está andando...`);
//     }
// }

// const p3 = new Pessoa3('Cuca', 'Santos');
// console.log(p3);
// console.log(typeof(p3));
// p3.andar();