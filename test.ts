interface Person {
  firstName: string
  lastName: string
}

function fullName(person: Person) {
  return `${person.firstName} ${person.lastName}`
}

let emp = {
  firstName: 'Igiraneza',
  lastName: 'Theogene'
}
console.log(fullName(emp))