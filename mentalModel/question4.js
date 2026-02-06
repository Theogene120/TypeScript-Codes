function separateTypes(items) {
    var strings = [];
    var numbers = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (typeof item === 'string') {
            strings.push(item);
        }
        else {
            numbers.push(item);
        }
    }
    return { strings: strings, numbers: numbers };
}
console.log(separateTypes([1, "hello", 2, "world", 3]));
