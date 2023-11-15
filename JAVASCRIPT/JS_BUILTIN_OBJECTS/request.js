// AJAX & HTTPRequests API

let req = new XMLHttpRequest();
console.log(req);
// CONSTANTS
let done = req.DONE;
console.log(done);
let headers = req.HEADERS_RECEIVED;
console.log(headers);
let load = req.LOADING;
console.log(load);
let open = req.OPENED;
console.log(open);
let unsent = req.UNSENT;
console.log(unsent);

// REQ METHODS
// req.onloadstart = ()=>{
//     console.log(req.readyState);
// }
// req.onabort = ()=>{
//     console.log(req.readyState);
// }
// req.onerror = ()=>{
//     console.log(req.readyState);
// }
// req.onprogress = ()=>{
//     console.log(req.readyState);
// }
// req.onloadend = ()=>{
//     console.log(req.readyState);
// }
// req.onload = ()=>{
//     console.log(req.readyState);
// }

req.onreadystatechange = ()=>{
    console.log(req.readyState);
    if(req.readyState === 4){
        console.log(req.response);
        document.write(req.response);
    }
}

req.open("get", "response.html", true);
// req.getAllResponseHeaders("content-type", "application/json");
req.send();



// FETCH