function combine<U, V>(obj1: U, obj2: V){
  return {...obj1, ...obj2}
}

console.log(combine({name: 'Theo', age: 20}, {salary: 20, age: 30}))