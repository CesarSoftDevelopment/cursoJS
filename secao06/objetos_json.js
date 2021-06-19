/**
 * JSON - Javascript Object Notation
 * JSON -> formato de texto -> ele é bastante utilizado na comunicação entre sistemas.
 * It use a lot used in communication between systems.
 * A empresa vai fornecer acesso do sistema dela através de uma api(aplication interface).
 * Formato mais comum de enviar dados, pra receber dados é através do Json.
 * Desta forma outras empresas que querem usar estas funcionalidades podem usar isto para usar
na própria empresa.
* Converter objeto em json
* As chaves do json ficam em aspas duplas
* Json não pega função SOMENTE TEXTO| NÃO TEM FUNÇÃO EM TEXTO!!!!!1111
 * Json não é mesma coisa que a notação do objeto em javascript
 */

//OBJETO


const curso = { //curso = objeto
    nome: 'Programação em javascript', //atributo
    horas: 27,                          //atributo
    preco() {                           //função
        return this.horas * 0.67;
    }
}

const horas = {
    inicio: 7,
    termino: 16,
    somar(){
        return this.inicio - this.termino;
    }
};

console.log(horas.somar());

/*
console.log(curso); //Objeto Javascript
// console.log(curso.preco());
// console.log(typeof(curso));

//Convertendo o objeto JavaScript para Json
const json = JSON.stringify(curso);
console.log(json); //Json
console.log(typeof(json));


//Convertendo de Json para objeto Javascript
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));
*/

// const json_errado = "{'nome: 'Programação em JavaScript', 'preco': 27.99}";




const json_corrigido = '{"nome": "Programação em JavaScript", "preco": 27.99}';
console.log(json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj = (JSON.parse(json_corrigido));
console.log(novo_obj);
console.log(typeof(novo_obj));