// STRINGS
let str = "Hello World";
str = 'Hello World';
str = `Hello World`;
str = String(120); // "S" in string must be in caps
str = new String("Hello World"); // converts this string as an object

// STRING CONCATENATION
str = "Hello";
str = str + "Everyone";

// TEMPLATE STRINGS
let x ="John";
let y = "123456";
str = ` This is a templated string, username = ${x} and password =${y}`;

// STRINGS FUNCTIONS
str ='Hello Everyone, welcome to Javascript';
let val = str.charAt(14);
val = str.charCodeAt(16);
val = str.length;
val = str.endsWith("i"); // for boolean 
val = str.indexOf("l");
val = str.lastIndexOf("l");
val = str.split(","); // anywhere it sees a comma, it will split the words
val = str.padEnd(54, " , Enjoy your day"); // pads "Enjoy your day at the end of the strings; total strings above is 37 plus the total number of strings for 'enjoy your day",everything is 54
val = str.padStart(54, " , Goodluck Charm?");
val = str.slice(4, 10); // starts from index 4 and ends in index 10
val = str.toUpperCase();
val = str.toLocaleLowerCase();

// STRING PROTOTYPE
let prototype = String.prototype;
prototype.reverse = function(){
    let val = "";
    for(let x = this.length - 1; x >= 0; x--){
        val += this[x];
    }
    return val;
}
str = "I am here";
str = str.reverse();

console.log(str, typeof str);
console.log(val);
console.log(prototype,typeof prototype);