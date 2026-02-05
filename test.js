function isDog(animal) {
    return "bark" in animal;
}
function speak(animal) {
    if (isDog(animal)) {
        animal.bark(); // ✅ Dog
    }
    else {
        animal.meow(); // ✅ Cat
    }
}
