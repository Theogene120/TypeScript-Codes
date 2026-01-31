function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
var name;
name = 'Theos';
console.log(name);
var person = {
    name: 'Theos',
    age: 35
};
console.log(person);
