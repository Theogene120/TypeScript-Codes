// Define the tuple type for the input
type RangeTuple = [boolean, { name: string; age: number }];

// Define the return type
type RangeResult = { x: boolean; y: boolean };

// Fix the function signature
const setRange = (range: RangeTuple): RangeResult => {
  const x = range[0];
  const y = range[1];
  return { x, y: y.age > 10 };
};

// This now works correctly
console.log(setRange([true, { name: 'Patrick', age: 3 }]))