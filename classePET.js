class pet{
    /*
    * Atributos / características da classe
    */
    constructor(nome, data_nascimento, pelagem, porte) {
        this.nome = nome; 
        this.data_nascimento = data_nascimento;
        this.pelagem = pelagem;
        this.porte = porte;
    }
    /*
    *  Métodos dos atributos
    */
    get getNome() {
        return this.nome;
    }

    get getDataNascimento(){
        return this.data_nascimento;
    }

    get getPelagem() {
        return this.pelagem;
    }

    get getPorte(){
        return this.porte;
    }
    /*
    *  Métodos da classe / funcionalidades
    */
    meuNome()
    {
        return this.getNome;
    }

    minhaDataNascimento()
    {
        return this.getDataNascimento;
    }

    minhaPelagem()
    {
        return this.getPelagem;
    }

    meuPorte()
    {
        return this.getPorte;
    }

} // fim classe pet

/* classe dogPet - herança da classe pet */
class dogPet extends pet{

    constructor(nome, data_nascimento, pelagem, porte, raca) 
    {
        super(nome, data_nascimento, pelagem, porte);
        this.raca = raca;
        this.categoria = 'cão';
    }
    /*
    *  Métodos dos atributos
    */
    get getRaca() 
    {
        return this.raca;
    }   

    get getCategoria() 
    {
        return this.categoria;
    }

    /*
    *  Métodos da classe extendida / funcionalidades
    */
    minhaRaca(){
        return this.getRaca;
    }

    minhaCategoria(){
        return this.getCategoria;
    }     

    latir() 
    {
        return 'Au Au Au';
    } // function latir

} // fim classe dogPet

/* classe catPet - herança da classe pet */
class catPet extends pet{

    constructor(nome, data_nascimento, pelagem, porte, raca) 
    {
        super(nome, data_nascimento, pelagem, porte);        
        this.raca = raca;
        this.categoria = 'gato';
    }
    /*
    *  Métodos dos atributos
    */
    get getRaca() 
    {
        return this.raca;
    }

    get getCategoria() 
    {
        return this.categoria;
    }       
    /*
    *  Métodos da classe extendida / funcionalidades
    */
    minhaRaca(){
        return this.getRaca;
    }  

    minhaCategoria(){
        return this.getCategoria;
    } 

    miar() 
    {
        return 'Miau Miau';
    } // function miar

} // fim classe catPet

/* Instanciação de objeto pela classe pet */
/*
var objPet1 = new pet('Izabelita Belinha Bela','03/04/2015','curta marrom tigrada', 'pequeno');

console.log(objPet1.meuNome());
console.log(objPet1.minhaDataNascimento());
console.log(objPet1.minhaPelagem());
console.log(objPet1.meuPorte());

/* Outra instanciação de objeto pela classe pet */
/*
var objPet2 = new pet('Leblon Bolota Bolon','03/03/2012','curta preto e branco malhada', 'médio');

console.log(objPet2.meuNome());
console.log(objPet2.minhaDataNascimento());
console.log(objPet2.minhaPelagem());
console.log(objPet2.meuPorte());

*/
/* Instanciação de objeto pela classe dogPet */
/*
var Belinha = new dogPet('Izabelita Belinha Bela','03/04/2015','curta marrom tigrada', 'pequeno','RND');

console.log('Minha Categoria: '+Belinha.minhaCategoria());
console.log(Belinha.latir());
console.log(' Meu nome é '+Belinha.meuNome() );
console.log(' Minha Data de Nascimento  é '+Belinha.minhaDataNascimento() );
console.log(' Minha Pelagem é: '+Belinha.minhaPelagem());
console.log(' Meu Porte é '+Belinha.meuPorte() );
console.log(' Minha Raça é: '+Belinha.minhaRaca());

*/
/* Instanciação de objeto pela classe catPet */

var Bolota = new catPet('Leblon Bolota Bolon','03/03/2012','curta preto e branco malhada', 'médio','RND');

console.log('Minha Categoria: '+Bolota.minhaCategoria());
console.log(Bolota.miar());
console.log(' Meu nome é '+Bolota.meuNome() );
console.log(' Minha Data de Nascimento  é '+Bolota.minhaDataNascimento() );
console.log(' Minha Pelagem é: '+Bolota.minhaPelagem());
console.log(' Meu Porte é '+Bolota.meuPorte() );
console.log(' Minha Raça é: '+Bolota.minhaRaca());
