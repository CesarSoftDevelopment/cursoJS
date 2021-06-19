
class Frutas {
    constructor(nome, categoria, color){
        this._nome = nome;
        this._categoria = categoria,
        this._color = color;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get categoria(){
        return this._categoria;
    }

    set categoria(categoria){
        this._categoria = categoria;
    }

    get color(){
        return this._color;
    }

    set color(color){
        this._color = color;
    }

    contar(){
        console.log(`A ${this._nome} da cor ${this._color}`)
    }

}

frutas = new Frutas('Maça', 'Vitamina A', 'Vermelha');

frutas.contar();
