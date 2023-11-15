// OBJECT
let obj = {item1: 100, item2: "Hello World", item3: true, item4: Symbol(100), item5:200};
obj = Object({item1: 100, item2: "Hello World", item3: true, item4: Symbol(100), item5:200});
obj = new Object({item1: 100, item2: "Hello World", item3: true, item4: Symbol(100), item5:200});
// obj = Object();

// OBJECT REFERENCE
let val = obj.item1;
let item1 = "item1";
val = obj[item1];

//KEY SCOPE
let obj1 = {100: "Hello", "str": 200, true: 400, "john": 300}; // on the console, the qoutation sign will be removed and displayed as a variable name
val = obj1.str;
val = obj1[100]; // for number, the dot function will not work as a reference. you must use the block bracket to ref it

// OBJECT PROTOTYPE
let str = new String("Hello");
let num = new Number(100);
val = Object.getPrototypeOf(num);
val = Object.getOwnPropertyDescriptor(Array);
val = Object.entries(obj); // this turns obj values into an array
Object.freeze(obj); // this locks an object; immutable. Also, we didn't use val = Object.freeze(obj), because if we do, it will affect the value of val as well
obj.item6 = 80;
Object.seal(obj1); // you can change the values, but you can't add new properties
obj1.str = 250;

let obj2 = {};
Object.assign(obj1, obj2); // assign is used to copy one object to another. In this case, obj1 equals obj2
Object.setPrototypeOf(obj2, new Number);





console.log(obj, typeof obj);
console.log(val, typeof val);
console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);