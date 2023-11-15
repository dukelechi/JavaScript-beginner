let eco = "Okechukwu"; // "Okechukwu is the literal(explicit value) of the var eco"
console.log("First Name:", eco); // the console sees "First Name:" as a label

/* BOOLEAN 
used mainly as a conditional expression(true or false), or how long something should be repeated(control flow statement). Booleans are
also used as what is referred to as FLAG(see more about this in my google drive); a variable that signals something that can be either present or absent, enabled or disabled etc
Like any other variable, booleans should have clear and informative names. it's mandatory but we can often see that boolean flag names are prefixed with "is", to show the intent of 
checking this for true/false values 

let isDataValid = true;
let isStringTooLong = false;

console.log(isDataValid) // false
console.log(typeOf isDataValid) // boolean */

/* QUIZ 1
write a code that will create variables and initialize them with values of BOOLEAN, NUMBER, BigInt, STRING,
and undefined types using(when possible) literals and constructor functions. */

let booleanLiteral = true;
let strLiteral = "Hello, World";
let strConstructor = new String("Hello, Kelechi"); // constructor function
let nLiteral = 45;
let unD = undefined;
let bigIntConstructor = BigInt(127347383838383n);

/* QUIZ 2
print all values and all types of those values using console.log. Try to use string interpolation to display
the value and type at the same time with a single console.log call, e.g in the following form: 1000 [number] */

console.log(`${typeof booleanLiteral} : [${booleanLiteral}]`);
console.log(`${typeof strLiteral} : [${strLiteral}]`);
console.log(`${typeof strConstructor} : [${strConstructor}]`);
console.log(`${typeof nLiteral} : [${nLiteral}]`);
console.log(`${unD} : [${unD}]`);
console.log(`${typeof bigIntConstructor} : [${bigIntConstructor}]`);

/* QUIZ 3 
carry out a chain of conversions: create a BOOLEAN from a BigInt created from a NUMBER that was created from a
STRING. Start with the value "1234". Is it possible? */

let cStr = "1234";
let nNumb = Number(cStr);
let bigIntVal = BigInt(nNumb);
let booleanVal = Boolean(bigIntVal);

console.log(cStr);
console.log(nLiteral);
console.log(bigIntVal);
console.log(booleanVal);

/* EXAMPLE FROM BRO CODE YouTube(Explicit and Implicit Types)
// with explicit type conversion

var age = window.prompt("Enter your age");
console.log("Happy Birthday");
age = Number(age); //  converted the string "age" to a number
age +=1;
console.log(typeof age);
console.log(age); 

values that comes out as false when trying to convert a value to are boolean are; 0, undefined, null, NaN, empty string("").
values that comes out as true; 1, false, pizza etc */

/* QUIZ 
try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1). */

 // implicit type conversion; the IDE usually does the conversion itself
const str1 = 42 + + "1"; // normally, the IDE auto adds a number and a string as a string; 42 + "1" = "421". But if it's 42 - "1", it threats both auto as a number, giving 41.
console.log(str1); // 43 ; whenever you use `+` in front of a string, it tries to convert that string to a number.
 

let contact = [{
    name: "Maxwell Wright",
    phone: 073738389383,
    email: "yiuh.tutu@una.co"
},
{
    name: "Raja VIlla",
    phone: 07967212020,
    email: "raja.villa@una.co"
},
{
    name: "Helen Ric",
    phone: 09135412020,
    email: "sieiei.udjki@una.co"
}];


contact.push( {
    name: "Maise Haley",
    phone: 09135412020,
    email: "sieiei.udjki@una.co"
});
console.log(contact[0]);
console.log(contact[3]);

let lastIndex = contact.length - 1; // finding the index of the last element
let lastObject = contact[lastIndex]; 
console.log(lastIndex);
console.log(lastObject);

// let lengthOfNewConctact = contact.length(3);
// console.log(lengthOfNewConctact);

let x = "alice" + 10;
console.log(x);

let a, b;
b =(a=(20 + 20) *2) > (3 ** 2);
console.log(a);
console.log(b);

// ALERT METHOD 
// accepts only one parameter; method of the object window
// can be used as alert() or window.alert();
// allows us to use the window part of the browser; the pop up message disaplayed here must be closed before the run continues to run
// alert method will be visible until the user clicks the OK button

/* alert("Hello world"); // same thing as window.alert();
window.alert("Hello, World! welcome!!");
alert(34 * 7);
alert(true); */
// alert("text 1", "text 2"); // as it accepts only one parameter, only "text 1", will pop up.

// CONFIRM DIALOG BOX
// accepts ony one optional parameter, a message that will be displayed
// the difference between the alert and confirm methods; the confirm method contains 2 buttons, the OK and CANCEL buttons.
// depending on the button pressed by the user, the confirm method returns a boolean value. true is returned for OK while false is returned for cancel button

// EXAMPLE 1
/*  let decision = window.confirm("Is it Ok!");
console.log(decision); */

// EXAMPLE 2
/* let remove = confirm("Remove all data?");
let message = remove ? "Deleting data" : "Cancelled";
console.log(message); */

// PROMPT DIALOG BOX
// like the confirm method, it contains the Ok and CANCEL buttons, but it also contains a single line text box that allows the user to to input text.
// accepts a second optional parameter, which is the default value of the text field visible in the dialog window
// if the user closes the window with the OK button, anything in the text field will be returned from the prompt method as a string.
// if it closes with a CANCEL button, the method will returna null value.
// the user might provide an input that is invalid either by mistake or on purpose. we need to be prepared for this.

/* let nameCheck = window.prompt("What is your name?", "Keleman"); // the second optional parameter here is "keleman"
nameCheck = nameCheck ? nameCheck : "anonymous";
let age = prompt("Hello " + nameCheck + " how old are you?");
alert(nameCheck + " is " + age + " years old"); // if you input comma outside "", the code will be broken */


/* let width = Number(window.prompt("Enter the width of the box", "0")); // alternatively; let width = parseFloat(window.prompt("Enter the width of the box", "0"));
let height = Number(window.prompt("Enter the height of the box", "0"));
let length = Number(window.prompt("Enter the length of the box", "0"));
let volume = width * height * length;
alert(`calculated box volume is ${volume}`); */

// if ...else... if statement

/* write a script with the following conditions
if userAe is less than 21 and hasParentsApproval is false, the other should be invalid;
if userAge is less than 21 but hasParentApproval is set to true, the shippingCost should be reduced by 5;
if userAge is 65 or higher, shippingCost is reduced to zero;
if userAge is lower than 65, but higher than or equal to 21 AND one of the following:
hasParentApproval is equal to true;
cartValue is greater than 300;
points is greater than 500;
the shippingCost is reduced to zero.

In any other case, the cost remains at the default value.
After all these, we do another check:
if addInsurance is set to true;
AND in addition orderValue;
AND hasPromoCode is not true, then we add INSURANCE_COST to the shippingValue. */


const INSURANCE_COST = 2.99;
let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentApproval = false;
let addInsurance = true;

/** calculate shipping cost */
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentApproval) {
    shippingCost = shippingCost - 5;
} else if (userAge < 21) {
    isOrderValid = false;
}

/** show message */
if (isOrderValid) {
    console.log(shippingCost);
} else {
    console.log("cannot order if under 21");
}

/** exercise 1
 write a script that will ask the user to input a anumber. Display the message "Bingo", when the number is greater than 90 
 but less than 110, otherwise display the message "Miss". use the if statement
 */

/* let numberScript = prompt("Enter your Number");
if(numberScript > 90 && numberScript < 110){
    alert("Bingo");
} else {
    alert("Miss");
} */

/** Exercise 2
Rewrite the code from the previous task, replacing IF with a tenary conditional operator
 */

/* let numberScript1 = prompt("Enter a random number");
let messageScript = (numberScript1 > 90 && numberScript1 < 110) ? "Bingo" : "Miss";
alert(messageScript); */

/** Exercise 3
write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+","-", "*", "/".
if the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message
that informs the user that an error has occured.
Remember that the value returned by te prompt function is a of the type string. You can use the Number.isNaN method
to check if you get the correct number  after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
 */

/* let firstNumber = Number(prompt("Enter the first number", "0"));
let secondNumber = Number(prompt("Enter the second number", "0"));
let operand = prompt("Enter(+, -, * or /");
let result;

if(!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch(operand) {
        case "+": result = (`The addition result: ${firstNumber + secondNumber}`);
          break;
        case "-": result = firstNumber - secondNumber;
          break;
        case "*": result = firstNumber * secondNumber;
          break;
        case "/": result = firstNumber / secondNumber;
          break;
        default: result = "Error: unknown operand";
    } 
}
alert(result); */

// ALTERNATIVELY; without using a switch statment

// prompt the user to enter the first number
/* blet firstNumber = Number(prompt("Enter the first number", "0"));

// check if the input is a valid number
if(Number.isNaN(firstNumber)){
    alert("Invalid input. please enter a valid number");
} else {
    let operation = prompt("Enter a mathematical operation(+, -, * or /)") 
    // prompt the user to enter a valid number
    let secondNumber = Number(prompt("Enter the second number", "0"));
    // check if the second number is valid
if(Number.isNaN(secondNumber)) {
    alert("Invalid input. please enter a valid number");
} else {
    // perform the calculation based on the two selected operation
    let result;
    if(operation === "+") {
        result = (` addition result: ${firstNumber + secondNumber}`);
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        alert("Division by zero is not allowed.");
    } else{
        result = firstNumber / secondNumber;
    } 
    // check if a valid operation was performed and display the result.
    if (result !== undefined) {
        alert (`Result: ${result}`);
    }
  }
} */


/** QUIZ
When adding a new contact contact, check if the user has entered all the necessary data. If at least one of the three values
is missing (name, phone, or email), don't add the contact;
let contact = [{
    name: "Maxwell Wright",
    phone: 073738389383,
    email: "yiuh.tutu@una.co"
},
{
    name: "Raja VIlla",
    phone: 07967212020,
    email: "raja.villa@una.co"
},
{
    name: "Helen Ric",
    phone: 09135412020,
    email: "sieiei.udjki@una.co"
}];
 */

// QUIZ SOLUTION
let contact1 = [{
    name: "Maxwell Wright",
    phone: 073738389383,
    email: "yiuh.tutu@una.co"
},
{
    name: "Raja VIlla",
    phone: 07967212020,
    email: "raja.villa@una.co"
},
{
    name: "Helen Ric",
    phone: 09135412020,
    email: "sieiei.udjki@una.co"
}];

// creating a function to add new contact
function addContact(name, phone, email){
    if(!name || !phone || !email){
        console.log("Please provide all the necessary data(name, phone, and email)");
        return;
    }
    // creating a new contact
    let newContact1 = {
        name: "name",
        phone: phone,
        email: "email"
    }
    // adding the new contact to the array list
    contact1.push(newContact1);
    console.log("contact successfully added!");
}
// example
addContact("Julius Inyere","07429202084", "julius.inyere@edwood.ng");
console.log(contact1);

// if the condition in any function is false, the code inside of the block function will not be executed
// WHILE LOOP
/* can create an infinite loop without a exit condition; we use the while loop when we are unsure when we do not
know exactly how many times something should be repeated, but we do know when to stop. the syntax;
while(condition) {
    block of code} */

/*   let isOver = false;
    let counter = 1;
    while(isOver != true) {
        let continueLoop = confim(`[${counter} continue the loop?]`);
        isOver = continueLoop === true ? false : true;
        counter ++;
    } // the code will continue to run until isOver is false. */

// there's a lot of reduntant code in the example above. To shorten it;
/* let isOver = false;
let counter = 1;
while(!isOver) {
    isOver = !confirm(`[${counter++}] continue the loop?`); // !confirm means the confirm pop should keep iterating till the condition is met. If we use only one confirm, the pop up will appear only once.
} */

// The do ... while loop
/** the main difference between this and WHILE loop is that in a while loop, the condition is checked before each
iteration, and in the do ... while loop, the condition is checked after each iteration. Here, the do ... while loop code is 
code is always executed at least once before the first condition check is done, and a plain WHILE may never be
executed at all if the initial condition is evaluated to false at the beginning of the loop.
 */
// example; we will rewrite the last code with a do .. while loop to be identical with little difference
let isOver;
counter = 1;
do {
    isOver = !confirm(`[${counter}] continue the loop?`);
} while(!isOver); //this script will only be executed once, as isOver was initialized.
