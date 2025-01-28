function verificaTipoDeDado(dado){
    
    switch(typeof dado){
        case "string":
            console.log("Este dado é uma string")
            break;
        case "number":
            console.log("Este dado é uma number")
            break;
        case "boolean":
            console.log("Este dado é uma boolean")
            break;
        default:
            console.log("Dado invalido")
            break;
    }

}

verificaTipoDeDado(true);
verificaTipoDeDado(23);
verificaTipoDeDado("teste");