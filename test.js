// Fix the function signature
var setRange = function (range) {
    var x = range[0];
    var y = range[1];
    return { x: x, y: y.age > 10 };
};
// This now works correctly
console.log(setRange([true, { name: 'Patrick', age: 3 }]));
