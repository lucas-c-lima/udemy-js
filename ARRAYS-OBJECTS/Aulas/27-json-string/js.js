let pessoa = {
    "nome": "Lucas",
    "idade": 22,
    "profissao": "Programador",
    "hobbies": ["Video game", "Cozinhar", "Academia"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])
