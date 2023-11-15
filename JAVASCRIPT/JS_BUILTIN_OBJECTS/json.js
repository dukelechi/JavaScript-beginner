// JAVASCRIPT OBJECT NOTATION(JSON)
let obj = {name: "John", age: 30};
console.log(obj);

let jsonObj = '{"name":"John", "age":"30"}';
console.log(jsonObj);

console.log(JSON);

let objToJson = JSON.stringify(obj);
console.log(objToJson);

let jsonToObj = JSON.parse(jsonObj);
console.log(jsonToObj);