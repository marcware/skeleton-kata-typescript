import FizzBuzz from "../src/fizz-buzz"

describe('Hello World', () => {

  it('Send One return one', () => {
    expect(FizzBuzz.calculate(1)).toEqual("1")
  })

  it('Send Three return Fizz', () => {
    expect(FizzBuzz.calculate(3)).toEqual("Fizz")
  })

})
