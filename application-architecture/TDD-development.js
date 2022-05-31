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









