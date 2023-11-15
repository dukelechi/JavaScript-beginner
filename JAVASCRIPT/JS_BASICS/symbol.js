// SYMBOLS
// its value can't be changed

let sym = Symbol();

sym1 = Symbol(100);
sym2 = Symbol(100);

console.log(sym1 == sym2);
console.log(sym1 === sym2);