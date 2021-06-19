/**
 * Classes: são modelos de dados -> onde podemos criar e instanciar objetos
 * Para criar uma classe -> apenas com class
 * Quando falamos em modelo de dados é porque na instanciação dos objetos vamos criar uma variável
para apontar para um modelo de dados que seria uma classe especifica.
cont pi = new Pessoa(); -> modelo de dados....
 */


/**
 * Diferença de Java e JavaScript
 * No java: 1º tipo de dado| 2º uso do public| 3º mudanças de sintaxe no getters and setters

class Teste {
	
	static String nome;
	static String sobrenome;
	
	public Teste(String nome, String sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		
	}
	
	public String getNome() {
		return this.nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
 */

class Pessoa {

}

class Carro {

}


class Universidade {
    constructor(nome, dono){
        this.nome = nome;
        this.dono = dono;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get dono() {
        return this._dono;
    }

    set dono(dono){
        return this._dono = dono;
    }
}




class Teste {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
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

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }
}

universidade = new Universidade('Fecaf', 'Luiz Viado');
pessoa = new Teste('Cesar', 'Developer');
//console.log(pessoa);
console.log(typeof(pessoa));
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log(typeof(universidade));
console.log(universidade.nome);
console.log(universidade.dono);

class Carrinho {
    constructor(nome, marca){
        this._nome = nome;
        this._marca = marca;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }
}
