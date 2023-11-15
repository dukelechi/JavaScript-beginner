// DOCUMENT OBJECT
console.log(document);

// Document Object Model (DOM) properties
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.anchors);
console.log(document.doctype);
console.log(document.scripts);
console.log(document.links);
console.log(document.embeds);
console.log(document.styleSheets);
console.log(document.forms);
console.log(document.images);

// OTHER PROPS
console.log(document.ENTITY_NODE);
console.log(document.ATTRIBUTE_NODE); // in caps, meaning it represents a constant value
console.log(document.TEXT_NODE);
console.log(document.CDATA_SECTION_NODE);
console.log(document.ENTITY_REFERENCE_NODE);
console.log(document.ENTITY_NODE);
console.log(document.PROCESSING_INSTRUCTION_NODE);
console.log(document.COMMENT_NODE);
console.log(document.DOCUMENT_NODE);
console.log(document.DOCUMENT_TYPE_NODE);
console.log(document.DOCUMENT_FRAGMENT_NODE);
console.log(document.NOTATION_NODE);
console.log(document.URL);
console.log("");
console.log(document.DOCUMENT_POSITION_CONTAINED_BY);
console.log(document.DOCUMENT_POSITION_CONTAINS);
console.log(document.DOCUMENT_POSITION_FOLLOWING);
console.log(document.DOCUMENT_POSITION_DISCONNECTED);
console.log(document.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC);
console.log(document.DOCUMENT_POSITION_PRECEDING);
console.log("");

console.log(document.nodeType);
console.log(document.nodeName);

console.log(document.head.nodeType);
console.log(document.head.nodeName);

console.log(document.body.nodeType);
console.log(document.body.nodeName);

console.log(document.doctype.nodeType);
console.log(document.doctype.nodeName);

console.log(document.scripts[0].attributes[0].nodeType);
console.log(document.scripts[0].attributes[0].nodeName);

console.log(document.links[0].nextSibling.nodeType);
console.log(document.links[0].nextSibling.nodeName);

console.log(document.links[1].childNodes.nodeType);
console.log(document.links[1].childNodes.nodeName);

console.log(document.links[1].nextSibling.nodeType);
console.log(document.links[1].nextSibling.nodeName);


// DOM-TREE PROPERTIES
console.log(document);
console.log(document.children);
console.log(document.children[0].children);
console.log(document.children[0].children[0].children);
console.log(document.children[0].children[1].children);
console.log(document.children[0].children[1].children[3].nextElementSibling);
console.log(document.children[0].children[1].children[3].previousElementSibling);
console.log(document.children[0].children[1].children[3].parentElement);
console.log(document.children[0].children[1].children[3].parentElement.previousElementSibling.children);


console.log(document.childNodes);
console.log(document.childNodes[1]);
console.log(document.childNodes[1].childNodes);
console.log(document.childNodes[1].childNodes[2].childNodes);


// DOM EVENT PROPS
console.log(onclick);
document.onclick = function(){
    console.log("document was clicked")
    document.body.innerHTML = "<h1>Document has been hovered on</hi>";
}
document.onmouseenter = function(){
    console.log("mouse was hovered over the document")
    document.body.innerHTML = "<h1>Document has been hovered on</hi>";
}

document.onload = function(){
    console.log("Document has been loaded");
    document.body.innerHTML = "<h1>Document has been loaded</hi>";
}

// DOM EVENT METHOD
let clickFunction = function(){
    console.log("click event triggered");
}
let mouseFunction = function(){
    console.log("hover event triggered");
}
document.body.addEventListener("click", clickFunction);
document.body.addEventListener("mouseenter", mouseFunction);
document.body.removeEventListener("click", clickFunction);
document.body.removeEventListener("mouseenter", mouseFunction);


// DOM SELECTION
let b = document.getElementById("text");
console.log(b);
let input = document.getElementsByTagName("input");
console.log(input[0]);
let a = document.getElementsByClassName("mygoogleclass");
console.log(a[0]);
let input1 = document.getElementsByName("hello");
console.log(input1[0]);
let node = document.getRootNode(b);
console.log(node);
// document.getElementsByTagNameNS("");
let b1 = document.querySelector("#text");
console.log(b1);
let input2 = document.querySelector("input");
console.log(input2);
let a1 = document.querySelector(".mygoogleclass");
console.log(a1);
let input4 = document.querySelector("[name = hello");
console.log(input4);
let meta = document.querySelectorAll("meta");
console.log(meta[1]);

// DOM CREATE METHOD
let h1 = document.createElement("h1");
let text = document.createTextNode("Hello World");
let classAttr = document.createAttribute("class");
h1.appendChild(text);
classAttr.value = "myh1";
h1.setAttributeNode(classAttr);
document.body.appendChild(h1);
console.log(h1);


// DOM INHERITED 
document.links[0].href = "facebook.com";
console.dir(document); // with this, you can find all the propertties of the document
console.dir(document.links[0]);

// DOM ELEMENTS PLACEMENT PROP
let body = document.childNodes[2];
let h2 = document.createElement("h2");
h2.innerHTML = "my h2";
// document.body.insertBefore(h2,body);
// document.body.insertAdjacentElement("beforebegin",h2);
// document.body.insertAdjacentElement("afterbegin",h2);
// document.body.insertAdjacentElement("beforeend",h2);
document.body.insertAdjacentElement("afterend",h2);
document.body.insertAdjacentHTML("beforebegin","Hello");
document.body.insertAdjacentText("beforeend","world");

let section = document.createElement("section");
document.body.append(section);
document.body.appendChild(section);
document.body.prepend(section);

let rem_sec = document.querySelector("section");
document.body.removeChild(rem_sec);
// document.body.remove();
document.body.lang = "en";
document.body.removeAttribute("lang");
let b2 = document.querySelector("#text");
let img = document.createElement("img");
// document.body.replaceChild(b2,body);
document.body.children[0].replaceWith(img);
console.log(document);
