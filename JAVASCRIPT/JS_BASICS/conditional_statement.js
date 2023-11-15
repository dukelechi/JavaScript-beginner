// CONDITIONAL STATEMENT 1

// CONDITIONAL STATEMENTS
// IF, IF ELSE, IF ELSE IF, SWITCH-CASE, TERNARY OPERATOR
var x = 30;
var y = 20;
// IF
if(x < y){
    console.log(`${x} is less than ${y}`);
}
if(x > y){
    console.log(`${x} is greater than ${y}`);
}

// IF ELSE
if(x < y){
    console.log(`${x} is less than ${y}`);
}else{
    console.log(`${x} is not less than ${y}`);
}

// IF ELSE IF
if( x < y){
    console.log(`${x} is less than ${y}`);
} else if(x > y){
    console.log(`${x} is greater than ${y}`);
}else{
    console.log(`${x} is eequal to ${y}`);
}

//SWITCH-CASE
var a = 60;
switch(a){
    case 10: console.log(` The value of a is 10`);break;
    case 20: console.log(` The value of a is 20`);break;
    case 30: console.log(` The value of a is 30`);break;
    case 40: console.log(` The value of a is 40`);break;
    case 50: console.log(` The value of a is 50`);break;
    case 60: console.log(` The value of a is 60`);break;
    case 70: console.log(` The value of a is 70`);break;
    case 80: console.log(` The value of a is 80`);break;
    case 90: console.log(` The value of a is 90`);break;
    default: console.log(` The value of a is not available in switch`);
}

// TERNARY OPERATORS
var b = x > y? "yes":"no";
console.log(b);