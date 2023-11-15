// WINDOWS OBJECT
console.log(window); // any of this four below can return window for the global scope
console.log(this);
console.log(globalThis);
console.log(self);

window.console.log("hello");

function func(){
    window.console.log("world");
}
window.func();