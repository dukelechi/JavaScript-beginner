// OPERATORS

// ARITHMETIC OPERATORS +, -,*./,++,--,%
var x = 10;
var y = 20;
val;
val = x + y;
val = x - y;
val = x * y;
val = x / y;
val = x % y;
val++;
val--;
console.log(val);

// CONDITIONAL OPERATORS <,>,<=,>=, ==,!=,!==
var x = 20
var y = 10
val;
val = x > y;
val = x < y;
val = x == y; // the double equal signs means equal to; doesn't check var type
val = x === y; // the triple equal signs checks variable type
val = x <= y;
val = x >= y;
val = x != y; // != means not equal to
val = x !== y; //!== means not equal to, a negation of ===
console.log(val);

//  ASSIGNMENTS OPERATORS =, +=, -=, *=, /=, %=
var val = 10;
val += 9; // means that 9 will be added to the original value of var
val -= 10;
val *=12;
val /= 10;
val %= 10;
console.log(val);

// LOGICAL OPERATORS ||, &&, !
var x = 10;
var y = 20;
var val;
val = x > y || x==y; // || sign means "or"; false OR FALSE = false
val = x > y || x < y; // true OR false = true
val = x != y || x > y; // false OR true = true
val = x !=y  || x < y; // true OR true = true

val = x > y && x==y; // false AND false = false
val = x > y && x < y; // false AND  true = false
val = x != y && x > y; // true AND false = false
val = x !=y  && x < y; // true AND true = true

val = !( x > y && x==y);// not, inverter or negation of && result
val = !(x !=y  && x < y);
console.log(val);

// BITWISE OPERATORS &, |, ^, ~, >>, <<, >>>
var x = 10;
var y  = 20;
var val;
val = x & y; // bitwise AND
/* 01010 // binary value of 10
10100
00000 */

val = x | y; // bitwise OR
/* 01010
10100
11110 */ 

val = x ^ y; // ^ exclusive  OR sign . it follows the rules of ||( or sign), but reverses if both or signs are true. if it's false and true, it will return true ,if false and false,it will return false, if it's true and true, it will return false
/* 01010
10100
11110 */

val = ~ x; // ~ inverts all bits
/* 00000000001010
11111111110101 */

val = x >> 1; // >> shifts 1 bit to the right
/*1010 // the last 0 to the right falls off and has no where to go to because it's on the unit zone
0101 */

val = x << 1; // shift 1 bit to the left
/* 1010
10100 */

val = x >>> 1; // unsigned , the resultant value must be positive
console.log(val);

// MISC OPERATORS
// tenary operator
var x = 10;
var y = 20;
var z = null;
var f = 40
var val =  x < y ? true : false; // 100 : 200 if true , return 100. if false, return 200
var val = x ?? y; //  the ?? there is a more strict way of ?. if checks if x and y is present. if anyone is missing, it will return the value of the present one
var val = x || y; // similar to ?? 
var val = x || y || z || f
console.log(val);
// comma operator
 x = 5 + 3, y = 4 + 4, z = 5 + 5;
console.log( x, y, z);
// unary typeof, instanceof, delete
var val = new number(20);
console.log(typeof val);
console.log( val instanceof number);
delete val;
console.log(val);
// void operator
var  x = 30;
var y = 10;
var val = void x + y;
console.log(val);

