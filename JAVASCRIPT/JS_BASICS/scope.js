// SCOPE
var x =10;

console.log(x);

function n(){
    var x = 30;
    console.log(x);
}

n();

console.log(x);

// var,let, const
var x = 10;

var x = 20;

console.log(x);

function m(){
    var x = 30;
    console.log(x);
}

// let
let y = 10;
//let y = 20;
function g(){
    let y = 20;
    console.log(y);
}

// const
const PI = 3.14;

function v(){
    const PI = 3.14;
    console.log(PI);
}
v();
console.log(PI);