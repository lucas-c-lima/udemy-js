const reg = /\w+: (Lucas|João|Maria)/ // Nome: {nome}

console.log(reg.test("Nome: Lucas"))
console.log(reg.test("Nome: José"))
console.log(reg.test("Nome: Maria"))