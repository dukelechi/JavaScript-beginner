// HISTORY
console.log(history);

// HISTORY PROPS
console.log(history.length);
console.log(history.scrollRestoration);
console.log(history.state);

// history.back();
history.forward();
history.go(10); // use a positive integar to go forward and a negative integar to go backwards
history.pushState({id:1, name:"John"}, "more data", "/JAVASCRIPT/JS_BUILTIN_OBJECTS/");
history.replaceState({id:4, name:"uche"}, "more data", "/JAVASCRIPT/JS_BUILTIN_OBJECTS/");