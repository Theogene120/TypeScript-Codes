class Animal {
  makeSound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("The dog barks");
  }
}

const myDog = new Dog();
myDog.makeSound(); // The dog barks

let obj = new Animal()
obj.makeSound()