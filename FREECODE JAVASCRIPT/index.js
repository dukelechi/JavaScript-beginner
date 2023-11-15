// INCREMENTING NUMBERS
var myVar = 87;
/* myVar = myVar +1; */
myVar++; // increasing a var by 1
console.log(myVar);

// DECREMENTING NUMBER
var myVar = 11;
/* myVar = myVar - 1; */
myVar--;
console.log(myVar);

// FINDING A REMAINDER
var remainder;
remainder = 11 % 3; // the percentage sign(module) means that only the remainder will appear on the console
console.log(remainder);

// COMPOUND ASSIGNMENT WITH AUGUMENTED ADDITION, SUBSTRACTION, MULTIPLICATION AND DIVISION
var a = 3;
var b = 17;
var c = 12;
/* a = a + 12; */
a +=12; 
/* b = 9 - b; */ 
b -= 9;
/* c = c + 7; */
c += 7;
/* a = a * 5; */
a *= 5;
/* b = b / 3; */
b /=3;

// ESCAPING SEEQUENCE IN STRINGS
/* CODE        OUTPUT
    \'         single quote
    \"         double quote
    \\         backslash
    \n         newline
    \r         carriage return
    \t         tab
    \b         backspace
    \f         form feed
*/

var myStr = "Firstline\n\t\\SecondLine\nThirdLine";

// CONCATENATING STRINGS WITH PLUS OPERATOR
// Example
var ourStr = "I come first. " + "I come second";
console.log(ourStr);
// Example 2
var myStr = " This is the start. " + "This is the end.";
console.log(myStr);

// CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
// Example
var ourStr = "I am a boy. ";
ourStr += "Living in Dubai.";
console.log(ourStr);

// CONSTRUCTING STRINGS WITH VARIABLES
//Example
var ourName = "freecode";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

// Example 2
var myName = "Kelechi";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// APPENDING VARIABLES TO STRINGS
// Example
var anAdjective = "awesome";
var ourStr = "freecodecamp is ";
ourStr += anAdjective;
console.log(ourStr);

// FINDING THE LENGTH OF STRING
// Example
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length; // .length will return an int value of the firstName.
console.log(firstNameLength); // the console will return 3 because Ada is 3 alphabets

// Example 2
var lastNameLength = 0;
var lastName = "Nwachukwu";
lastNameLength = lastName.length;
console.log(lastNameLength); // console will return 9

// BRACKECT NOTATION TO FIND FIRST CHARACTER IN STRING
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0]; // index number of Ada is 012. the index number of "A" is 0
console.log(firstLetterOfFirstName); // the console will indicate "A"

// Example 2
var firstLetterOfLastName = "";
var lastName = "Nwachukwu";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName); // console will indicate "L"

// BRACKET NOTATION TO FIND Nth CHARACTER IN STRING
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

// Example 2
var lastName = "Nwachukwu";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

// Exampl 2
var lastName = "Nwachukwu";
var lastLetterOfLastName = lastName[lastName.length - 1];

// BRACKET NOTATION TO FIND Nth-to-Last CHARACTER IN STRING
// Example
var lastName = "Nwachukwu";
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // you can do for thirdToLastLetterOfLastName, by changing index 2 to 3
console.log(secondToLastLetterOfLastName);

// WORD BLANKS
function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // your code below is line
    var result = "";
    result += " The " + myAdjective + "" + myNoun + "" +  myVerb + "to the store " + myAdverb
    return result;
}
//change the words here to test your function
console.log(worldBlanks("dog ", "big ", "ran ", "quickly"));
console.log(worldBlanks("bike ", "slow ", "flew ", "slowly"));

// STORE MULTIPLE VALUES WITH ARRAYS
// Example 
var ourArray = ["John", 23]; // John is number 23;arrays start and end in brackets, and every element is seperated by a comma
console.log(ourArray);

// NESTED/MULTI-DIMENSIONAL ARRAYS
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];
console.log(ourArray);

// ACCESS ARRAY WITH INDEXES
// Example
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50
console.log(ourData);
// Example 2 
var myArray = [40, 60,80];
var myData = myArray[1]; // equals 60
console.log(myData);

// MODIFY ARRAY WITH DATA INDEXES
// Example
var ourArray = [18, 64,99];
ourArray[1] = 45; // ourArray now equals [18, 45, 99].
console.log(ourArray);

// ACCESS NESTED/MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1, 2 ,3], [4, 5 ,6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[0][0]; // first index/ element index 0 = [1, 2, 3], second index 0 = 1
var myData = myArray [2][1]; // equals 8
console.log(myData);

// MULTIPLE ARRAYS WITH PUSH(); 
// Example
var ourArray = ["Uche", "Adaeze", "Cat"];
ourArray.push(["happy", "joy"]); // ourArray now equals ["Uche", "Adaeze", "cat", ["happy", "joy"]]
console.log(ourArray);
// .push() function is used to add new array inside an array
//Example
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

// MULTIPLE ARRAYS WITH POP()
// Example
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop(); // removes the last element; removedFromOurArray now equals 3, and ourArray now equals [1, 2]
console.log(ourArray);
// Example 2
var myArray = [["John", 23], ["cat", 2]];
var removeFromMyArray = myArray.pop(); // removes the last element, now equals ["John," 23]

// MANIPULATE ARRAYS WITH SHIFT() FUNCTION
// Example
var ourArray = ["Simpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // removes the first element; removedFromOurArray now equals "Simpson", and ourArray now equals ["J", ["cat"]]
console.log(ourArray);

// MANIPULATE ARRAYS WITH UNSHIFT() FUNCTION
// Example
var ourArray = ["Simpson", " j", "cat"];
ourArray.shift(); // removes simpson
ourArray.unshift("Happy"); // ourArray now equals [ "j", "cat"] , unshift() function adds element at the beginning of the array
console.log(ourArray);

// SHOPPING LIST
var myList = [ ["cereal", 3 ] ,["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]] // array of arrays; first element means we need 3 qty of cereals(items)

// WRITE REUSABLE CODE WITH FUNCTIONS
// Example
function ourReusableFunction() {
    console.log(" Heyya , World");
} // anything inside the curly bracket is run anytime that function is called
ourReusableFunction();

function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

// PASSING VALUES TO FUNCTIONS IN TERMS OF ARGUMENTS
// Example
function ourFunctionWithArgs(a,b){
    console.log(a - b);
}
ourFunctionWithArgs(10,5);// output 5; a and b are arguments

// GLOBAL SCOPE AND FUNCTIONS
// scope refers to the visibility of variables; var which are defined outside of a function have global scope; which means they can be seen everywhere in your javascript code
var myGlobal = 10;

function fun1(){
    // assign 5 to oopsGlobal
    oopsGlobal = 5; // not using var keyword here means that oopsGlobal will become scoped to a global function; using var keyword here will scope it only to a local function, fun1.
}

function fun2(){
    var output="";
    if (typeof myGlobal !="undefined"){
        output +="myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal !="undefined"){
        output += "oopsGlobal" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// LOCAL SCOPE AND FUNCTIONS
function myLocalScope(){
    var myVar = 5; // var keyword here means myVar is only scoped to the local function myLocalScope
    console.log(myVar);
}
myLocalScope(); // whenever you call myLocalScope, it will access its scoped parameters and provide a feedback for you without you having to console.log() again.

// GLOBAL VS LOCAL SCOPE IN FUNCTIONS
// it is possible to have both the global and local var with the same name. When you do this , the local var takes precedence over the global var
// Example
var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear = "sweater"; // this local var took precedence over outerWear global var
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// RETURN A VALUE FROM A FUNCTION WITH RETURN
// Example
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));
// Example2
function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));

// UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
// Example
var sum = 0;
function addThree(){
    sum += 3; //this will show undefined because you didn't add "return" to it
}
console.log(addThree());
// Example 2
function addFive(){
    sum += 5; // undefined. you must add "return", ie; return sum += 5;
}
console.log(addFive());

// ASSIGNMENT WITH A RETURN VALUE
// Example
var changed = 0;
function change(num){
    return ( num + 5) / 3;
}
changed = change(10); // changed equals the value of this maths expression, return (num + 5) / 3;
// Example 2
var processed = 0;
function processArg(num){
    return (num + 3) /5;
}
processed = processArg(7);

// STAND IN LINE
var testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
console.log("before: " + JSON.stringify(testArr)); // JSON.stringigy is just a way to change an array into a string that can easily be printed out to the screen.
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// BOOLEAN VALUES
function welcomeToBoolean(){
    return true;
}
console.log(welcomeToBoolean());

// USE CONDITIONAL LOGIC WITH IF STATEMENTS
// Example
function ourTrueOrFalse(isItTrue) {
    if(isItTrue) {
        return "Yes, it's true";
    } // if statement always encloses the var with a bracket
    return "No, it's false";
}
console.log(ourTrueOrFalse(false));
// Example 2
function ourTrueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes , that was true";
    }
    return "no, that was false";
}
console.log(ourTrueOrFalse(true));

// COMPARISON WITH THE EQUALITY OPERATOR
// A single equality(=) sign in coding is an assignment operator, while a double equality(==) sign designates equals to
function testEquals(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal";
}
console.log(testEquals(10));

// COMPARISION WITH STRICT EQUALITY OPERATOR
/* 3 === 3       // equality operator(==) converts the var to a common type, then the maths is executed, the strict equality operator(===) does not do this
   3 === '3' */ // strict equality operator (===) will evaluate this as false.
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return " Not Equal";
}
console.log(testStrict("7"));

// PRACTICE COMPARING DIFFERENT VALUES
// Example
function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));
// Example 2
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

// COMPARISON WITH THE INEQUALITY OPERATOR
function testNotEqual(val){
    if (val != 99) {
        return "Not Equal";
    }
    return " Equal";
}
console.log(testNotEqual(10));

// COMPARISON WITH THE STRICT INEQUALITY OPERATOR
// strict inequality operator(!==) is the opposite of strict equality operator
function testStrictNotEqual(val) {
    if(val !== 17) {
        return " Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(17));

// COMPARISONS WITH THE LOGICAL AND OPERATOR
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

// COMAPARISON WITH THE GREATER THAN OR EQUAL  TO OPERATOR
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10));

// COMPARISON WITH THE LOGICAL 'AND(&&)' OPERATOR
// Example; sometimes you want to check if two things are true at the same time
function testLogicalAnd(val) {
    /* if (val <=50) {
        if (val >=25) {
            return "Yes"
        } */ // instead of using two "if" statements, you can use "AND(&&" operator as a shortcut
        if (val <=50 && val >=25) {
            return "Yes";
        }
        return "No";
    }
    console.log(testLogicalAnd(10));

    // COMPARISON WITH THE LOGICAL "OR(||)" OPERATOR
    function testLogicalOr(val) {
       /* if (val < 10) {
            return "Outside";
        }
        if (val > 20) {
            return "Outside";
        } */
        if (val < 10 || val > 20) {
            return "Outside";
        }
        return "Inside";
    }
    console.log(testLogicalOr(15));

    // ELSE STATEMENTS
    function testElse(val) {
        var result = "";
        /* if (val > 5) {
            result = "Bigger than 5";
        }
        if (val <=5) {
            result = "5 or smaller";
        } */ // instead of using too many "if" statements, you can shorten it with "else" statement
        if (val > 5) {
            result = "Bigger than 5";
        } else {
            result = "5 or smaller";
        }
        return result;
    }
    console.log(testElse(4));

    // ELSE IF STATEMENTS
    // if you have multiple conditions that need to be addressed, you can use the "else if" statement; a way of chaining "if statements"  together
    function testElseIf(val) {
       /* if (val > 10) {
            return "Greater than 10";
        }
        if (val < 5) {
            return "Smaller than 5";
        }
        return "Between 5 and 10"; */
        if (val > 10) {
            return "Greater than 10";
        } else if (val < 5) {
            return "Smaller than 5";
        } else {
            return "Between 5 and 10";
        }
    }
    console.log(testElseIf(7));

    // LOGICAL ORDER IN IF ELSE STATEMENTS
    /* function orderMyLogical(val) {
        if (val < 10) {
            return "Less than 10";
        } else if (val < 5) {
            return "less than 5";
        } else {
            return "Greater than or equal to 10";
        }
    }
    console.log(orderMyLogical(7)); */
    function orderMyLogical(val) {
        if (val < 5) {
            return "Less than 5";
        } else if (val < 10) {
            return "less than 10";
        } else {
            return "Greater than or equal to 10";} // this is a better order than the one above
        }
        console.log(orderMyLogical(3));

    // CHAINING IF ELSE STATEMENTS
    function testSize(num) {
        if (num < 5) {
            return "tiny";
        } else if (num < 10) {
            return "Small";
        } else if (num < 15) {
            return "Medium";
        } else if (num < 20) {
            return "Large";
        } else if(num >= 20) {
            return "Huge";
        }
    }
    console.log(testSize(7));

    // Example; GOLF CODE
    var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; // array
    function golfScore(par, strokes) {
        if (strokes == 1) {
            return names[0];
        } else if (strokes <= par - 2) {
            return names[1];
        } else if (strokes == par - 1) {
            return names[2];
        } else if (strokes == par ) {
            return names[3];
        } else if (strokes == par + 1) {
            return names[4];
        } else if (strokes == par + 2) {
            return names[5];
        } else if (strokes >= par + 3) {
            return names[6];
        }
    }
    console.log(golfScore(5, 4));

    // SWITCH STATEMENTS
    // instead of using a chained "else if" statements, you can use a "switch" statement
    function caseInSwitch(val) {
        var answer ="";
        switch(val) {
            case 1: // means,if val is equals to 1
              answer = "alpha";
              break; // if you don't put the "break" statement, it will run through to case 2, even if case 1 was met
            case 2:
                answer ="beta";
                break;
            case 3:
                answer = "gamma";
                break;
            case 4:
                answer = "delta";
        }
        return answer;
    }
    console.log(caseInSwitch(2));

    // DEFAULT OPTION IN SWITCH STATEMENTS
    function switchOfStuff(val) {
        var answer = "";
        switch (val) {
            case "a":
                answer = "Apple";
                break;
            case "b":
                answer = "Bird";
                break;
            case "c":
                answer = "Cat";
                break;
            default: // used incase the val to be given answer is not set in our switch statement. eg; if you pass in d or 2, it will return "stuff".
                answer = "stuff";
                break;
        }
        return answer;
    }
    console.log(switchOfStuff("a"));

    // MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
    // Example: sometimes, we want multiple cases to return the same answer, we just have to omit the break statement
    function sequentialSizes(val) {
        var answer = "";
        switch(val) {
            case 1:
            case 2:
            case 3:
                answer = "Low";
            break;
            case 4:
            case 5:
            case 6:
                answer = "Mid";
                break;
            case 7:
            case 8:
            case 9:
                answer = "High";
                break;
            default:
                answer = "Oops!";
        }
        return answer;
    }
    console.log(sequentialSizes(10));

    // REPLACING IF ELSE CHAINS WITH SWITCH
    function chainsToSwitch(val) {
        var answer = "";
        /* if (val ==="bob") {
            answer = "Marley";
        } else if(val ===42) {
            answer = "The Answer";
        } else if (val === 1) {
            answer = "There is no #1";
        } else if (val === 99) {
            answer = "Missed me by this much";
        } else if (val === 7) {
            answer = "Ate Nine";
        }
        return answer; */
        switch (val) {
            case "bob":
              answer = "Marley";
              break;
            case 42:
              answer = "The Answer";
              break;
            case 1: 
              answer = "There is no #1";
              break;
            case 99:
              answer = "Missed me by this much";
              break;
            case 7:
              answer = "Ate Nine";
              break;
            }
            return answer;
    }
    console.log(chainsToSwitch(99));

    // RETURNING BOOLEAN VALUES FROM FUNCTIONS
    function isLess(a, b) {
        /* if (a < b) {
            return true;
        } else{
            return false;
        } */ // just remove the if statements and use the shortcut below
        return a < b;
    }
    console.log(isLess(10, 15));

    // RETURNING EARLY PATTERN FROM FUNCTIONS
    function abTest(a, b) {
        if ( a < 0 || b < 0) {
            return undefined;
        }
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    console.log(abTest(2, 2));

    // COUNTING CARDS

    // OBJECTS 
    // these are one of the fundamental data types and are used to store collections of key-value pairs(dictionaries; commonly used because they provide efficient and fast access to data based on its associated key).whenever the key is called, the associated value is called/display. No two can have the same value. However, values in a dictionary can be duplicated.
    // objects are similar to arrays, instead of using indexes, we use properties to access objects
    // example 1
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends":["everything!"]
    } // properties are; name,legs,tails,friends. while values are camper, 4,1,everything!
    console.log(ourDog);

    // example 2
    var myDog = {
        "name": "Jimmy",
        "legs": 4,
        "tails": 1,
        "friends":["billy ", "Larry"] //array of friends
    }
    console.log(myDog);

    // ACCESSING OBJECT PROPERTIES WITH A DOT NOTATION
    // we have to ways to access properties in an object; dot notation and bracket notation
    var testObj = {
        "hat": "ballcap",
        "shirts": "jersey",
        "shoes":"versace"
    }
    var hatValue = testObj.hat;
    var shirtValue = testObj.shirts;
    console.log(testObj.hat);
    console.log(testObj.shirts);

    // ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION []
    var testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink":"water"
    } // it is best to use the bracket notation if the property has a space in it, like; "an entree", "my side"
    var entreeValue = testObj['an entree'];
    var drinkValue = testObj["the drink"];
    console.log(testObj['an entree']);
    console.log(testObj["the drink"]);

    // ACCESSING OBJECT PROPERTIES WITH VARIABLES
    var testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    }
    var playerNumber = 16;
    var player = testObj[playerNumber];

    // UPDATING OBJECT PROPERTIES
    // we can use dot notation to update object properties
    // Example 1
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends":["everything!"]
    }
    ourDog.name = "Happy Camper";
    console.log(ourDog.name);

    // Example 2 
    var myDog = {
        "name": "Jimmy",
        "legs": 4,
        "tails": 1,
        "friends":["billy ", "Larry"] 
    }
    myDog.friends = ["Boner ", "billy ", "Larry"];
    console.log(myDog.friends);

    // ADD NEW PROPTERTIES TO AN OBJECT
    var myDog = {
        "name": "Jimmy",
        "legs": 4,
        "tails": 1,
        "friends":["billy ", "Larry"] 
    }
    myDog.hair = "black"; // hair is the new property we added, of which the value is black
    console.log(myDog.hair);

    // example 2
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends":["everything!"]
    }
    ourDog['bark'] = 'woof!';
    console.log(ourDog['bark']);

    // DELETE PROPERTIES FROM AN OBJECT
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends":["everything!"],
        'bark': 'woof!'
    }
    delete ourDog.bark;
    console.log(ourDog.bark);

    // OBJECTS FOR LOOKUPS
    function phoneticLookup(val) {
        var result = "";
    /*    switch(val){
            case 'alpa':
                result = 'Adams';
                break;
            case 'bravo':
                result = 'Boston';
                break;
            case 'charlie':
                result = 'Chicago';
                break;
            case 'Delta':
                result = 'Denver';
                break;
            case 'echo':
                result = 'Easy';
                break;
            case 'foxtrot':
                result = 'Frank';
                break;
        } we replaced the switch statement with the object below. */

        var lookup = {
            "alpha": "Adam",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot": "Frank"
        }
        result = lookup[val];
        return result;
    }
    console.log(phoneticLookup("charlie"));

    // TESTING OBJECTS FOR PROPERTIES
    var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh"
    }
    function checkObj(checkProp) {
        if (myObj.hasOwnProperty(checkProp)){
            return myObj[checkProp];
        } else {
            return "Not found"
        }
    }
    console.log(checkObj("gift"));

    // MANIPULATING COMPLEX OBJECTS
    var myMusic = [
        {
          "artist": "Billy  Joel",
          "title": "piano Man",
          "release-year": "1973",
          "formats": ["CD", "8T", "LP"],
          "gold": true 
        },
        {
            "artist": "Beau Carnes",
            "title": "Cereal Man",
            "release-year": "2003",
            "formats": ["YouTube video"] 
        }
    ] // myMusic is an array because it has [], inside the array, we have object denoted with {}. we have two objects in the above array (myMusic).
    console.log(myMusic);
    
    // ACCESSING NESTED OBJECTS
    // Example; object with other objects nested inside
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    }
    var gloveBoxContents = myStorage.car.inside['glove box'];
    console.log(gloveBoxContents);

    // ACCESSING NESTED ARRAYS
    var myPlants = [
        {
            type: "flowers",
            list: ["rose", "tulip", "dandelion"],
        },
        {
            type: "trees",
            list: ["firs", "pine", "birch"]
        }
    ]
    var secondTree = myPlants[1].list[1];
    console.log(secondTree);

    // RECORD COLLECTION
    var collection = {
        "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": ["Let it Rock", "You Give Love a Bad Name"]
        },
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": ["1999", "Little Red Covette"]
        },
        "1245": {
            "artist": "Robert Palmer",
            "tracks": []
        },
        "5439": {
            "album": "ABBA Gold"
        }
    } // ids include "2548", "2468", "1245". props include "album", "tracks" etc. values include "Bon Jovi", "ABBA Gold" etc


    var collectionCopy = JSON.parse(JSON.stringify(collection)); //JSON.parse(JSON.stringify(collection)) is just a fancy way of in JS to make a copy of the object

    function updateRecords(id, prop, value) {
        if (value === "") {
            delete collection[id][prop];
        } else if (prop === "tracks") {
            collection[id][prop] = collection[id][prop] || []; // if collection[id][prop] alredy exists, let it equal itself. if not, || [] means or, it should create itself.
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = value;
        }
        return collection;
    }
    updateRecords(2468, "tracks", "test");
    console.log(updateRecords(5439, "artist", "ABBA"));

    
    // ITERATE WHILE LOOP
    // remember, the while loop runs when a specified condition is true, but stops when it turns false
    var myArray = [];
    var i = 0;
    while (i < 5) {
        myArray.push(i);
        i++; // this statement is to keep incrementing i till it turns false
    }
    console.log(myArray);

    // ITERATE WITH FOR LOOPS (most common form of loops in JS)
    // Example 1
    var ourArray = [];
    for (var i = 0; i < 5; i++) {
        ourArray.push(i);
    } // var = i equals initialization, i < 5 equals condition and then, i++ equals expression. for loop usually have these 3 different items separated by semi-colon.

    // Example 2
    var myArray = [];
    for (var i = 1; i < 6; i++) {
        myArray.push(i);
    }
    console.log(myArray);

    // ITERATE ODD NUMBERS WITH FOR LOOP
    /* var ourArray = [];
    for (i = 0; i < 10; i +=2) {
        ourArray.push(i);
    } 
    console.log(ourArray); */

    var myArray = [];
    for (i = 1; i < 10; i+=2) {
        myArray.push(i);
    }
    console.log(myArray);

    
    // COUNT BACKWARDS WITH A FOR LOOP
    var ourArray = [];
    for (i = 10; i > 0; i -=2) {
        ourArray.push(i);
    } 
    console.log(ourArray);

    // ITERATE THROUGH AN ARRAY WITH A FOR LOOP
    var ourArr = [9, 10, 11, 12]; // dot lenght is a property of the array, while 9, 10 ... are the elements in the array
    var ourTotal = 0;
    for (var i = 0;  i < ourArr.length; i++) {
        ourTotal += ourArr[i];
    }
    console.log(ourTotal);

    var myArr = [2, 3, 4, 5, 6];
    total = 0;
    for (var i = 0; i < myArr.length; i ++) {
        total += myArr[i];
    }
    console.log(total);

    // NESTING FOR LOOPS
    function multiplyAll(arr){
        var product = 1;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                product *= arr[i][j]; // i references the outer array while j referenes the inner array
            }
        }
        return product
    }
    var product = multiplyAll([[1,2], [3,4], [5,6,7]]); // here, we have 3 elements inside one arr, and each of those 3 elements are also an array
    console.log(product);


    // ITERATE WITH DO .... WHILE LOOPS
    // runs at least once before checking the condition
    var myArray = [];
    var i = 10;

    /* while (i < 5){
        myArray.push[i];
        i++;
    }
    console.log(i,myArray); */

    do {
        myArray.push(i);
        i++;
    } while (i < 5)
    console.log(i, myArray);


    // PROFILE LOOKUP
    // we want to pass in a name on the contacts and a property to return the value of the property
    var contacts = [
        {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "656778889",
        "likes": ["pizza", "coding", "brownie points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "09783784848",
        "likes": ["Hogwartz", "Magic", "Hagrid"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number": "00726278283",
        "likes": ["intriguing cases", "violin"]
    },
    {
        "firstname": "Kristian",
        "lastname": "Vos",
        "number": "11227483489",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
    ]
    function lookUpProfile(name, prop) {
      for (var i = 0; i < contacts.length; i++) {
          if (contacts[i].firstname === name) {
              return contacts[i][prop] || "No such property"; // OR operator is used if the name exits but the property does not
          }
      }
      return "No such contacts"; // if the name that is passed in is not in the array
    }
    var data = lookUpProfile("Akira", "likes");
    console.log(data);


    // GENERATE RANDOM FRACTIONS
    function randomFraction() {
        return Math.random(); // math.random() function is a normal way in JS to generate a random decimal numbers. the number can be between 0 - 1, but can't be 1
    }
    console.log(randomFraction());

    // GENERATE RANDOM WHOLE NUMBERS
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // math dot floor function is a normal way to round up a decimal number to the nearest whole number. when we multiply dot random method by 20, we are going to get a decimal between 0 and 19 but not including 20

    function randomWholeNum() {
        return Math.floor(Math.random() * 10); // as we passed in 10, we would get a random whole number not including 10
    }
    console.log(randomWholeNum());


    // GENEARATE RANDOM WHOLE NUMBERS WITH A RANGE
    function ourRandomRange (ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin)) + ourMin; // standard equation
    }
    ourRandomRange(1, 9);

    // USE THE parseInt FUNCTION
    // takes a string and returns an integer
    // parse in computer sc., breaks down input/data (like string) into its components for further processing; the process of analyzing a sequence of symbols, such as a string of text, to understand its structure and extract meaningful info.
    function convertToInteger(str) {
      return parseInt(str);
    } // if a string cannot be converted into an int, it returns NaN, Not a Number
    console.log(convertToInteger("56"));

    // USE THE parseInt FUNCTION WITH A RADIX
    // RADIX specifies the base of the number in the string
    // example; converting a binary number into an int
    function convertToInteger(str) {
        return parseInt(str,2); // the 2 there is the base number of the str
    }
    console.log(convertToInteger("10011"));


    // USE THE CONDITIONAL (TENARY) OPERATOR
    // this is a shorthand form of writing an if-else statement.
    // takes 3 operands. condition ? statement-if-true : statement-if-false
    /* function checkEqual(a, b) {
        if(a === b) {
            return true;
        } else {
            return false;
        }
    } */
    function checkEqual(a, b) {
        return a === b ? true : false;
        /* return a === b; this line of code is a better way of writing the return statement above */
    }
    console.log(checkEqual(1, 2));

    // USE MULTIPLE CONDITIONAL (TENARY) OPERATORS
    // you can nest tenary operators next to each other/ nested tenary operators
    function checkSign(num) {
        return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    } // if num > 0, return positive. if num < 0, return negative. if not, which means num === 0, return zero
    console.log(checkSign(10));


    // DIFFERENCES BETWEEN THE var AND let KEYWORDS
    // let(as well as const) doesn't allow you to declare a variable twice in the same scope, var allows you. However, to redeclare a variable after initially assigning it with using the let keyword, in the redeclarement, don't initialise with let keyword again. Example; let catName = "Qiuncy"; catName = "Beau"; This line of code without using the let keyword has reassigned the catName to "Beau".
    /* var catName = "Quincy";
    var quote;
    var catName = "Beau";

    function catTalk() {
        "use strict";
        catName = "Oliver";
        quote = catName + "says Meow!";
    }
    console.log(catTalk()); */

    let catName = "Quincy";
    let quote;
    catName = "Beau"; // this allowed us to reassign catName

    function catTalk() {
        "use strict"; // enables strict mode which catches common coding mistakes in unsafe actions. example, if you create a variable but don't declare it with var, let or const.
        catName = "Oliver";
        quote = catName + "says Meow!";
    }
    catTalk();

    // COMPARE SCOPES OF THE var AND let KEYWORDS
    // let is only limited to the block is scoped in
    /* function checkScope () {
        "use strict";
        var i = "function scope";
        if (true) {
            i = "block scope";
            console.log("block scope i is: ", i);
        }
        console.log("function scope i is: ", i);
        return i;
    }
    checkScope(); */

    function checkScope () {
        "use strict";
        let i = "function scope";
        if (true) {
            let i = "block scope";
            console.log("block scope i is: ", i);
        }
        console.log("function scope i is: ", i);
        return i;
    }
    checkScope();

    // DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD
    // const can't be reassigned. it is a common practice to put the variable in CAPS to easily indicate it's a const
    /* function printManyTimes(str) {
        "use strict";
        var sentence = str + " is cool!";
        sentence = str + " is amazing";
        for (var i = 0; i < str.length; i +=2) {
            console.log(sentence);
        }
    }
    printManyTimes("freeCodeCamp"); */

    function printManyTimes(str) {
        "use strict";
        const SENTENCE = str + " is cool!";
        for (let i = 0; i < str.length; i +=2) {
            console.log(SENTENCE);
        }
    }
    printManyTimes("freeCodeCamp");


    // MUTATE AN ARRAY DECLARED WITH CONST
    // since we can't reassign a variable with a const keyword. we can update the array with a bracket notation
    const S = [5, 7, 2];
    function editInPlace() {
        "use strict";
        // S = [5, 7, 2];
        S[0] = 4;
        S[1] = 6;
        S[2] = 8;
    }
    editInPlace();
    console.log(S);

    // PREVENT OBJECT MUTATION
    // since we now know arrays and objects can be mutated even with the const keyword, we use object.freeze to checkmate this
    /* function freezeObj() {
        "use strict";
        const MATH_CONSTANTS = {
            PI: 3.14
        }
        try {
            MATH_CONSTANTS.PI = 99;
        } catch (ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
    console.log(PI); */

    function freezeObj() {
        "use strict";
        const MATH_CONSTANTS = {
            PI: 3.14
        }
        Object.freeze(MATH_CONSTANTS);
        try {
            MATH_CONSTANTS.PI = 99;
        } catch (ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
    console.log(PI);


    // USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCNTIONS
   /*  var magic = function() {
        return new Date();
    } // this is called an anonymous function; it doesn't have a word assigned before the keyword, function and is assigned to the var magic
    // converting the anonymous function above into a regular function
    // step 1
    var magic = () => {
        return new Date;
    } 
    // step 2; if we are returning only one value; we don't need the return keyword or curly braces
    var magic = () => new Date;
    // step 3; to make it look nicer, change var to let */
    let magic = () => new Date;
    console.log(magic);


    // WRITE ARROW FUNCTIONS WITH PARAMETERS/ARGUMENTS
    // step 1
    /* var myConcat = function (arr1, arr2) {
        return arr1.concat(arr2);
    } */
    // step 2
    const myConcat = (arr1, arr2) => arr1.concat(arr2);
    console.log(myConcat([1, 2], [3, 4, 5]));


    // WRITE HIGHER ORDER ARROW FUNCTIONS
    /* const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

    const squareList = (arr) => {
        const squaredIntegers = arr;
        return squaredIntegers;
    }
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers); // whenever one function takes in another argument, that's a good time to use an arrow funtion. mostly used in maps, filters and reduce
    // from the above, we want to compute only the positve integers and the ones greater than zero from the array and filter the negative ones. we will use the filter and map function to achieve this. More on filter and map functions later! */

    /* const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

    const squareList = (arr) => {
        const squaredIntegers = arr.filter(num => number.isInteger(num) && num > o).map(x => x * x);
        return squaredIntegers;
    }
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers); */

    const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

    const squareList = (arr) => {
        const squaredIntegers = arr.filter(num => number.isInteger(num) && num > 0).map(x => x * x); // we studied earlier that you can pass in arguments in parenthesis for and arrow function. but if we have a single argument ie, the number argument; (num, we can just put the arg(num) and then the arrow, which becomes (num =>
        return squaredIntegers;  // dot filter is the first function               dot map is the second function and x keyword reps every element in the arr answer derived from dot filter function, which acted first.                               
    }
    const squaredIntegers = squareList(realNumberArray);
    // when you console.log(squaredIntegers); you will get [16, 1764, 36] . why i used the comment for this is because the browser will show a syntax error, because i might have declared num above earlier.

    // WRITE HIGHER ORDER ARROW FUNCTIONS
    // by defualt, the increment function below will be increased by the value of 1, even if you did not see value written in the argument, if you see value there, it will be increased by whatever value is passed in there. In the example below, when 2 is passed in, it will be increased by 2
    /* const increment = (function() {
        return function increment (number, value) {
            return number + value;
        }
    }) ();
    console.log(increment(5, 2));
    console.log(increment(5)); */

    const increment = (function() {
        return function increment (number, value = 1) {
            return number + value;
        }
    }) ();
    console.log(increment(5, 2));
    console.log(increment(5));

    // USE THE REST OPERATOR WITH THE FUNCTION PARAMETERS
    /* the rest parameter allows you to represent an indefinite number of arguments as an array within a
    function. it's denoted by using three dots(...), followed by the parameter name. this can be useful
    when you are not sure how many arguments will be passed to the function.
    EXAMPLE
    function sum(...numbers) {
        let total = 0;
        for (let num of numbers) {
            total += num;
        }
        return total;
    }
    console.log(sum(2, 4, 6)); // output: 12
    console.log(sum(1, 3, 5, 7, 9)); // output: 25 */  // example: from chatGPT

    /* const sum = (function() {
        return function sum(x, y, z) {
            const args = [x, y, z];
            return args.reduce((a, b) => a + b, 0);
        }
    })()
    console.log(sum(1, 2, 3)); */

    const sum = (function() {
        return function sum(...args) { // we removed const args = [x, y, z]; because we replaced it with a rest operator (...)
            return args.reduce((a, b) => a + b, 0);
        }
    })() // rest operator changes everything that is passed in the function into an array
    // when you console.log(sum(1, 2, 3)); you get: 6.  you can increase the number of args here, console.log(sum(1, 2, 3, 4, 5));

    /* const sum = (function() {
        return function(...args) {
            return args.reduce((a, b) => a + b, 0);
        }    
    })()
    console.log(sum(1, 2, 3)); */ // also correct, from Chibueze

    // OVERVIEW OF TYPE OF FUNCTION
    /* ANONYMOUS FUNCTIONS: have no names; functions you assign to a var eg
    const sayHello = function() {
        return 'Hello";
    }

    CALLBACK FUNCTIONS: function you pass into other function as a parameter; eg
    setTimeout(function() {
        return "hello";
    })

    // NAMED FUNCTIONS; eg
    function sayHello() {
        return 'Hi';
    } // factory function

    function person(n) {
        this.name = "n"
    } // constructor function

    OBJECT METHODS; function inside object
    const me = {
        sayHello: function() {
            heyya!
        }
    } // same code
    console.log(me.sayHello);

    const me = {
        sayHello: () => heyya!;
    } // same code
    console.log(me.sayHello);



    GENERATOR FUNCTION; tbc */




    // USE THE SPREAD OPERATOR TO EVALUUATE ARRAYS IN-PLACE
    const arr1 = ['JAN', 'FEB', 'NAR', 'APR', 'MAY'];
    let arr2;
    (function() {
        arr2 = arr1;
        arr1[0] = 'Potato'
    })();
    console.log(arr2);









    

    






    





