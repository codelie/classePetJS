class pet{
    /* Atributos / características da classe */
    constructor(nome, data_nascimento) {
        this.nome = nome; 
        this.data_nascimento = data_nascimento;
    }
    /* Métodos dos atributos */
    get getNome() {
        return this.nome;
    }
    get getDataNascimento() {
        return this.data_nascimento;
    }

    /* Métodos da classe / funcionalidades */
    meuNome() {
        return this.getNome;
    }

    minhaDataNascimento() {
        return this.getDataNascimento;
    }
} // fim classe pet

/* Instanciação de objeto a partir da classe */
var objPet1 = new pet('Izabelita Belinha Bela','03/04/2015');
var obj2 = new pet ('Testonildo teste','10/04/2020')
/* Acessando os métodos do objeto instanciado */
console.log(obj2.meuNome());
console.log(obj2.minhaDataNascimento());
