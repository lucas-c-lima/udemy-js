const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test("Marca: Nike"))
console.log(validaMarca.test("Marca: asd"))
console.log(validaMarca.test("Marca: "))
console.log(validaMarca.test("Nike"))
console.log(validaMarca.test("1231321"))
console.log(validaMarca.test("Marca: Puma"))