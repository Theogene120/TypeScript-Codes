let res: any;
res = 1;
console.log(res)

res = 'hello'
console.log(res)

res = [1,2,3,4,5]
const total = res.reduce((sum: number, val: number): number => sum + val, 0)
console.log(total)