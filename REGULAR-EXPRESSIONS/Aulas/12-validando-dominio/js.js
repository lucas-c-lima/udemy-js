const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.lucasclima.com.br"))
console.log(validaDominio.test("www.lucasclima"))
console.log(validaDominio.test("lucasclima.com.br"))