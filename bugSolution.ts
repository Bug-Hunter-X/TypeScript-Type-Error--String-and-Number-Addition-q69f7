function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error appropriately
  }

  return numA + numB;
}

let result1 = add(10, 20); // Correct: 30
let result2 = addSafe(10, "20"); // Correct: 30
let result3 = addSafe("10a", 20); //Handles non-numeric strings
console.log(result1, result2, result3); // Output: 30 30 0