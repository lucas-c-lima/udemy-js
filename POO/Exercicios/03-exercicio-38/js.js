class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set setNovaRua(novaRua){
        this.rua = novaRua
    }
    set setNovaBairro(novoBairro){
        this.bairro = novoBairro
    }
    set setNovaCidade(novaCidade){
        this.cidade = novaCidade
    }
    set setNovaEstado(novoEstado){
        this.estado = novoEstado
    }
}

let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC")

console.log(endereco)

endereco.novaRua = "Rua dos Pardais"

console.log(endereco)

endereco.novaCidade = "São Paulo"

console.log(endereco)