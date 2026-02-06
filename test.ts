function combine<U extends {length: number}, V>(obj1: U, obj2: V): U & V{
  return {...obj1, ...obj2}
}

//console.log(combine({name: 'Theo', age: 20}, {salary: 20, age: 30}))
console.log(combine([3,4,5,6], {salary: 20, age: 30}))
//console.log(combine({name: 'Theo', age: 20}, {salary: 20, age: 30}))