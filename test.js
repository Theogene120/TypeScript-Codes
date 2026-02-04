function fullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var emp = {
    firstName: 'Igiraneza',
    lastName: 'Theogene'
};
console.log(fullName(emp));
