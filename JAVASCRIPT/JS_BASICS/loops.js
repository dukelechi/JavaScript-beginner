//CONTROL STATEMENTS 2

// LOOPS
//for
// while
// do while
// for in
// for of
// foreach

// FOR LOOPS
for(var x = 0; x < 20; x++){
 //   console.log(x);
}
// break
for(var x=0; x < 20; x++){
    //console.log(x);
    if(x > 8){
        break;
    }
}
// continue
for(var x=0; x < 20; x+=1){
    if(x % 2 ==0){
        continue
    }
    console.log(x);
}

// WHILE LOOP
var x = 0;
while(x > 20){
    console.log(x);
    x++;
}

// DO WHILE LOOP
var x = 21;
do{
console.log(x);
x++;
}
while(x < 20);

// FOR OF LOOP
var arr =[10, 15, 9, 3, 2, 11, 30, 24];
for(x of arr){
    console.log(x);
}
for(var x = 0; x <=arr.length - 1;x++ ){
    console.log(arr[x]);
}
for(var x = arr.length - 1; x >=0; x--){
    console.log(arr[x]);
}

// FOREACH LOOP
arr.forEach(function(x){
    console.log(x);
})

// FOR IN LOOP
var obj = {num1:10, num2:20, num3:30, num4:40, num5:50, num6:60};
for(x in obj){
    console.log(obj[x]);
}