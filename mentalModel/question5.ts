/*
Intro:
    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.
Exercise:
    Fix type errors in logPerson function.
    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.
*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(person: Person) {
    let additionalInformation: string;
    
    // Use 'in' operator as a type guard
    if ('role' in person) {
        // TypeScript now knows person is Admin
        additionalInformation = person.role;
    } else {
        // TypeScript now knows person is User
        additionalInformation = person.occupation;
    }
    
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);