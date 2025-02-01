const validarId = /\d+ID\b/

console.log(validarId.test("1243ID"))
console.log(validarId.test("1243"))
console.log(validarId.test("asd"))
console.log(validarId.test("asdasdasID"))
console.log(validarId.test("ID"))
console.log(validarId.test("555ID"))