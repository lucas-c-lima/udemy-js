const notab = /[^ab]/;

console.log(notab.test("a"))
console.log(notab.test("aquite tem a"))

const notatoz = /[^a-z]/

console.log(notatoz.test('123 as'))
console.log(notatoz.test('hgaskfjagsdfjhas'))

const az = /[a-z]/

console.log(az.test("asd123asdad"))