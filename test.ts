let result: unknown;
result = [1,2,3];

const total = (<number[]>result).reduce((a: number, b:number ) => a + b, 0);
console.log(total);
