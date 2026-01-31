function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

let name: 'Theos';
name = 'Theos'

console.log(name)

type Person = {
    name: string,
    age: number
}

let person: Person = {
    name: 'Theos',
    age: 35
}
console.log(person)