function randomElement(items) {
    var index = Math.floor(Math.random() * items.length);
    return items[index];
}
var nums = [1, 2, 3, 4, 5];
var names = ['Theo', 'Eva', 'Cyn', 'Best'];
console.log(randomElement(nums));
console.log(randomElement(names));
