function getTotal(...numbers: number[]): number{
    return numbers.reduce((sum, val) => sum + val, 0);
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60