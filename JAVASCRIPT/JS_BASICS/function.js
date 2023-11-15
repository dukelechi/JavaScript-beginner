// FUNCTIONS

function myFunction() {
    console.log("Hello World");
}
myFunction();

function myFunction2(val) {
    console.log(val);
}
myFunction2("900");

let myFunction3 = function(x) {
    console.log(x);
} // this allows you to create a new function  as evident in line 18
console.log(5, 7);

myFunction3 = Function ('x', 'y', 'console.log(x + y)');
myFunction3(5, 7);

myFunction3 = new Function ('x', 'y', 'console.log(x + y)');
console.log(myFunction3);





