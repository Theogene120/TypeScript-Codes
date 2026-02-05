

type Dog = { bark(): void };
type Cat = { meow(): void };

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function speak(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // ✅ Dog
  } else {
    animal.meow(); // ✅ Cat
  }
}
