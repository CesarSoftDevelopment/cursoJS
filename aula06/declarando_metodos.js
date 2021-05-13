/**
 * Declaração de métodos(funções dentro da classe)
 * Métodos são funções
 * Como o método está dentro da classe não usamos a palavra function
 * Tudo que aprendemos com funções, pode ser aplicado aqui
 * Acessamos e declaramos classes com o this.nome_do_atributo
 * this é o objeto que tá executando ali
 * Javascript não tem conceito de encapsulamento, utiliza a supersintax
 * O que queremos é que um atributo de uma classe seja manipulados diretamente fora da classe
 * Para que possamos fazer essa manipulação temos que criar métodos getters and setters
 * Pôr underline nos atributos para as funções
 * Não precisamos do set para marca porque a marca é fixa
 */

class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(){
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







