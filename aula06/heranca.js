/**
 * Quando falamos do paradigma de orientação à objetos, e importante saber sua importância
 * => Fácil manutenção de código
 * => Fácil mapeamento do objeto real para o modelo de dados
 * => Reaproveitamento de código
 * HERANÇA = conseguimos reaproveitar códigos
 * CLASSE BASE(pai) OUTRA CLASSE(subclasse)
 * 
 * 
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

/*Intancia de objetos
const c1 = new Cliente('Cesar ', 'Developer', 'cesarosares@gmail.com', '623456789', 60000.00);
const c2 = new Cliente('Ana ', 'Souza', 'ana@gmail.com', '5555555555', 20000.00);

console.log(c1);
console.log(c2);

console.log(c1.nome_completo);
console.log(c2.nome_completo);

c1.nome_completo = 'Feliciano Jones';
console.log(c1);

c2.imprimir_dados();
*/

const programador = new Funcao('Programador', 4988.00);
const suporte = new Funcao('Suporte', 1000.00);
    
// console.log(programador);
// console.log(suporte);


const f1 = new Funcionario('Pedro', 'Alves', 'pedrinho@gmail.com', '900.999.888', programador, 'hgidhgi');

const f2 = new Funcionario('Maria', 'Julia', 'maria@gmail.com', '300.400.888', suporte, 'hgidhgi');

console.log(f1);
console.log(f2);