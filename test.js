function greet(name) {
    if (name === undefined) {
        console.log("Hello, guest");
    }
    else {
        console.log("Hello, " + name);
    }
}
greet(); // Hello, guest
greet('Theos'); // Hello, Theos
