/**
 * Métodos de instancia -> eu preciso instanciar um objeto pra então fazer acesso a eles..
 */

 class Carro{

    constructor(modelo){
        this._marca = 'Honda'
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

    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`)
    }
}

//espera o modelo como parametro (FIT)
const fit = new Carro("Fit")

fit.imprimir_dados();

