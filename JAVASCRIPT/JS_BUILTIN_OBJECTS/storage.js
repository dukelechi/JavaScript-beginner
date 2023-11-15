// LOCAL STORAGE OBJECT

console.log(localStorage);

localStorage.clear();

localStorage.setItem("name", "John");
localStorage.setItem("hobbies",'{"first":"dancing", "second":"reading", "third":"jogging"}');

let obj = {
    name: "Phil",
    age: 30,
    email: "phil123@gmail.com",
    location: "lagos"
};

localStorage.setItem("phil", JSON.stringify(obj));
let value = JSON.parse(localStorage.getItem("phil"));
console.log(value);

// SESSION STORAGE OBJECT
console.log(sessionStorage);

// sessionStorage.removeItem("IsThisFirstTime_Log_From_Liveserver");

// COOKIE
console.log(document.cookie);
document.cookie = "john";