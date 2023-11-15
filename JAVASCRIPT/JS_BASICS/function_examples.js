// FUNCTION EXAMPLES
function add(x,y) {
    return x + y;
}
let y = add(20, 10);
console.log(y);

// finding factors of any given factor
function factors(y) {
    let arr = [];
    for(let i = y; i >= 1; i--){
     if (y % i ==0){
         arr.push(i);
     }
    }
    return arr;
}

let j = factors(100);
console.log(j);

// ARGUMENTS VARIABLE
// EXAMPLE 1
function args(){
    console.log(arguments);
}
arguments = (100, 200, 300, 400);

// EXAMPLE 2
function args(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
args(100, 200, 300, 400);


// CALLBACK
function callback(){
    console.log("this is a callback");
}

function sub(x, y, call){
    let z = x -y;
    call();
}
sub(200, 100, callback);
/* sub(200, 100, function(){
    console.log(" This is an anonymous function");
}); */

function arr_function(arr = []){
    arr.forEach(function(x){
        console.log(x);
    })
}
arr_function([100, 300, 500, 700, 900, 1100]);

// IIFE- immediately Invoked Function Expression
// this is a function that is called on definition
(function(){
    console.log(" This is an IIFE");
})();

(function (){
    console.log(x + y + z);
})(x =100, y=200, z=300);

// ARROW FUNCTION
let div = (x,y)=>{
    console.log(x / y);
}
/* div = (x,y) => console.log(x/y); */ // shortcut 
div(100,2);

let mul = x => {return x*100} // one way to write this
mul = x => console.log(x*10); // another way to write it
mul = x => x*1000; // another way
console.log(mul(30));

/* function factors(y) {
    let arr = [];
    for(let i = y; i >= 1; i--){
     if (y % i ==0){
         arr.push(i);
     }
    }
    return arr;
} */
let factors2 = y =>{
    let arr = [];
    for(let i = y; i >= 1; i--){
     if (y % i == 0){
         arr.push(i);
     }
    }
    return arr;
}

let arr_return = (x,y,z)=>([x,y,z]);
let obj_return = (x,y,z)=>({num1:x, num2:y, num3:z});

console.log(arr_return(100,200,300));
console.log(obj_return(100,200,300));

