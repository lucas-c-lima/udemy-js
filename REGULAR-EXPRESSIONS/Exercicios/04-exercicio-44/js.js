const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validarIp.test("127.0.0.1"))
console.log(validarIp.test("8.8.8.8"))
console.log(validarIp.test("192.168.0.62"))

console.log(validarIp.test("192.168.0"))
console.log(validarIp.test("192"))
console.log(validarIp.test("asdasdasd"))
console.log(validarIp.test("123123132"))
console.log(validarIp.test("1924.1232.04.12313"))