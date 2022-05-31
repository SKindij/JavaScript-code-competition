// We will consider TDD using the example of creating a calculator.
// We implement the function of dividing one number by another, taking into account error handling and user settings:
import {divide} from 'calculator';
  divide(10, 5); // 2
  divide(10, 3); // 3.3
  divide(10, 3, {precision: 2}); // 3.33
  divide(10, 0); // ERROR: I'm sorry. I'm afraid I can't do that.

// According to TDD, we must first write the test, and only then the implementation.
// ================================================================================
//the first test for the base case when the numbers are divided by each other without a remainder and the divisor is not 0.
describe('when given 2 numbers', () => {
  it.todo('returns the result of dividing the first by the second')
})

//Now let's create a function that we will test:
function divide(a, b) {
  // before we start implementing real functionality, we need to be in the "red zone"
  return null
}
// If the test never fails, then it doesn't test anything.
const result = divide(10, 5);
const expected = 2;
expect(result).toEqual(expected); // expect(received).toEqual(expected): Expected: 2 >> Received: null

//Now that our test is failing for the right reason, we can fix it.
function divide(a, b) {
  return a / b;
}

//test code can be improved
it("returns the result of dividing the first by the second", () => {
  const testCases = [
    { a: 10, b: 5, expected: 2 },
    { a: 15, b: 5, expected: 3 },
    { a: 9, b: 3, expected: 3 },
  ];

  testCases.forEach(({ a, b, expected }) => {
    const result = divide(a, b);
    expect(result).toEqual(expected);
  });
});

// Let's move on to fractions now.
describe("when given 2 numbers that can't be equally divided", () => {
  it("should return the division result with 1 digit after the decimal point", () => {
    const result = divide(10, 3);
    const expected = 3.3;
    expect(result).toEqual(expected);
  });
});
// Let's start implementing the functionality.
function divide(a, b) {
  return Number((a / b).toFixed(1));
}






