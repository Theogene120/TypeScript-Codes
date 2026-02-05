function randomElement<T>(items: T[]): T {
  let index = Math.floor(Math.random() * items.length)
  return items[index]
}

let nums =  [1,2,3,4,5]
let names = ['Theo', 'Eva', 'Cyn', 'Best']

console.log(randomElement<number>(nums))
console.log(randomElement<string>(names))