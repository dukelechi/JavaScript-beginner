// ARRAYS
let arr = [100, "Hello World", true, [1, 2, 3, 4, 5,], Symbol(200), null, {str1:"Hello", str2:"world"}];

arr = Array(100, "Hello World", true, [1, 2, 3, 4, 5,], Symbol(200), null, {str1:"Hello", str2:"world"});

arr = new Array(100, "Hello World", true, [1, 2, 3, 4, 5,], Symbol(200), null, {str1:"Hello", str2:"world"});

// ARRAY INDEXING
let val;
val = arr[0];
val = arr[1];
val = arr[2]
val = arr[3];
val = arr[4];
val = arr[5];
val = arr[6];

// ARRAY FUNCTION
let next;
val = arr.values();
next = val.next();
next = val.next();
next = val.next();
next = val.next();
next = val.next();


val = arr.concat ([1, 2, 3, 4, "a", "b", "c"]);
val = arr.filter(function(x){
    return x !=100;
});
val = arr.includes("Hello World");
val = arr.shift();
val = arr.unshift(100);
val = arr.pop();
val = arr.push([1, 2, 10, 11]);


// ARRAY PROTOTYPE
arr = Array.from("Hello"); // converts Hello to array
arr = Array.isArray([]); // checks if it's an array
arr = Array.of([1, 2, 3, 4], [5, 6, 7, 8]); // used to create new arrays

console.log(next, typeof next);
console.log(val, typeof val);
console.log(arr);

