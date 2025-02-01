const pontoRegex = /./;

console.log(".")
console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))

const dRegex = /\d/; // [0-9]

console.log("d")
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123sad"))

const dRegex2 = /\D/; // [^0-9] Não aceita número

console.log("D")
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123sad"))

const sRegex = /\s/; // Apenas espaços vazio/quebra de linha/tabs

console.log("s")
console.log(sRegex.test("asd"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("123sad"))

const wRegex2 = /\w/; // Apenas números e letras

console.log("w")
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123sad"))