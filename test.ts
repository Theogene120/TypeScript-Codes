class Person {
  protected greet(): void {
    console.log("Hello");
  }
}

class Student extends Person {
  protected greet(): void {
    console.log("Hello, I am a student");
  }
}
