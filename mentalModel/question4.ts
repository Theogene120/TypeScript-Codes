function separateTypes(items: (string | number)[]){
    let strings: string[] = []
    let numbers: number[] = []
    for(let item of items){
        if(typeof item === 'string'){
            strings.push(item)
        }else{
            numbers.push(item)
        }
        
    }

    return {strings, numbers}
}

console.log(separateTypes([1, "hello", 2, "world", 3]))