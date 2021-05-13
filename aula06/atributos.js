/**
 * Método construtor -> constroi nossos objetos
 * Atributos são caracteristicas dos objetos
 * Para declarar atributos em javascript define um método construtor
 * Caso essa classe tenha atributos, colocamos os atributos dentro do parentese
 * Podemos fazer acesso mesmo fora da classe
 * 
 */

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Carro {
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }
}




