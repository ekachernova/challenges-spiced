import { add } from "./index.js"
import { subtract } from "./index.js"
import { multiply } from "./index.js"
import { divide } from "./index.js"

/**
- `add()`

  - returns 5 if called with add(2, 3)
  - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
  - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)
*/

test("add returns 5 with 2 and 3 as the arguments", () =>{
    const result = add(2,3)
    expect(result).toBe(5)
})

test("add returns negative number if greather argument is negative", () =>{
  
  const result = add(-8,4)
  expect(result).toBeLessThan(0)
})

test("add returns number close to 0.3 with arguments 0.1 and 0.2", () =>{
  
  const result = add(0.1,0.2)
  expect(result).toBeCloseTo(0.3)
})

/*
- `subtract()`

  - returns 10 if called with subtract(15, 5)
  - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)
*/

//check if substruct function returns 10 with (15,5)

test("substruct returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15,5);
  expect(result).toBe(10);
})

//check if substruct function returns a negative value if the second argument is greater than the first one
test("substruct function returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(3,18);
  expect(result).toBeLessThan(0);
})


/*
- `multiply()`

  - returns 8 if called with multiply(2, 4)
  - returns a negative value if only the first argument is negative
  - returns a negative value if only the second argument is negative
  - returns a positive value if called with two negative arguments
*/

test("multiply function returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2,4);
  expect(result).toBe(8);
})

test("multiply function returns a negative value if only the first argument is negative", () => {
  const result = multiply(-7,4);
  expect(result).toBeLessThan(0);
})

test("multiply function returns a negative value if only the second argument is negative", () => {
  const result = multiply(2,-8);
  expect(result).toBeLessThan(0);
})

test("multiply function returns a positive value if called with two negative arguments", () => {
  const result = multiply(-3,-8);
  expect(result).toBeGreaterThan(0);
})

/*
- `divide()`
  - returns 3 if called with divide(9, 3)
  - returns "You should not do this!" if called with 0 as second argument
 */
  test("divide function returns 3 if called with divide(9, 3)", () => {
    const result = divide(9,3);
    expect(result).toBe(3);
  })

  test("divide function returns You shouldn't to do that if called with 0 as second argument" , () => {
    const result = divide(9,0);
    expect(result).toBe("You should not do this!");
  })
