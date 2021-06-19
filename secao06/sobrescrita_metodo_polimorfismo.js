
/**
 * Podemos criar nas classes filhas um método com o mesmo nome existente na classe pai só que
fazendo outra implementação, outra coisa dentro da função
* overwriting
* polimorfismo -> é dois objetos do mesmo tipo, tendo comportamentos diferentes
 */

 class Funcao {
    constructor(descricao, salario){
        this._descricao = descricao
        this._salario = salario
    }

    get descricao(){
        return this._descricao
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }

    
}

class Pessoa {
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email
        this._cpf = cpf;
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

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        nome_completo = nome_completo.split(' ');

        this._nome = nome_completo.shift();
        this._sobrenome = nome_completo.join(' ');
    }

    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }

}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao
    }
    
    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }

    //sobrescrita de método
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro} \nSalário: ${this.funcao.salario}`);
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda

    }

    get renda(){
        return this_renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

const prog = new Funcao('Programador', 5187.44);
const f1 = new Funcionario('Paula', 'Fernandes', 'paula@gmail.com', '777.666.555.43', prog, 'gihdgndn');

f1.imprimir_dados(); //Pessoa

const c1 = new Cliente('Pedro', 'Silva', 'pedro@gmail.com', '99999999999', 50000);

c1.imprimir_dados(); //Pessoa

/*
Ambos tem o mesmo objeto
Ambos tem o mesmo método
Mas os comportamentos executado pelos os métodos são diferentes...
*/