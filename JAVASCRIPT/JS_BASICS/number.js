// NUMBER
let num = 100;
num = 100.5;
num = Infinity;
num = Number(200); // mostly used to do type conversion; explicit type conversion
num = new Number(200);
console.log(num, typeof num);


// NUMBER FUNCTIONS
let val;
val = num.valueOf();
val = num.toPrecision(5); //  the more decimal places a number has, the more the precision
val = num.toFixed(6); // takes into account what happens after the decimal place
val = num.toExponential();
val = num.toLocaleString();
val = num.toString();

// NUMBER CONSTANT
val = Number.EPSILON;
val = Number.MAX_SAFE_INTEGER;
val = Number.MAX_VALUE;
val = Number.MIN_SAFE_INTEGER;
val = Number.MIN_VALUE;
val = Number.NEGATIVE_INFINITY;
val = Number.POSITIVE_INFINITY;
val = Number.NaN; // NaN means it's not a number
val = Number.isFinite(90); // means the number is defined
val = Number.isInteger(100);
val = Number.isNaN(NaN);
val = Number.isSafeInteger(100);
val = Number.parseFloat("0.6422"); // used to convert string float to number
val = Number.parseInt("100"); // used to convert string int to int

console.log(val, typeof val);

// NUMBER PROTOTYPE
let prototype = Number.prototype;
console.log(prototype, typeof prototype);
