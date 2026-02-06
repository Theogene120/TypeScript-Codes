abstract class Shape2D {
    abstract area(): number
}

class Circle extends Shape2D {
    radius: number
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    area(): number {
        return 3.41 * this.radius * this.radius
    }
}

class Rectangle extends Shape2D {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    area(): number {
        return (this.width * this.height) / 2
    }
}

let obj1 = new Circle(5)
let obj2 = new Rectangle(3,4)

console.log(obj1.area())
console.log(obj2.area())