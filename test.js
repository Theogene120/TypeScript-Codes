var res;
res = 1;
console.log(res);
res = 'hello';
console.log(res);
res = [1, 2, 3, 4, 5];
var total = res.reduce(function (sum, val) { return sum + val; }, 0);
console.log(total);
