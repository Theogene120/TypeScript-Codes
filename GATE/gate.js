/*Solve all the typing issues in the code without changing the implementation*/
function concatenate() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join('');
}
console.log(concatenate('Hello', 'Hi', 'Hola'));
