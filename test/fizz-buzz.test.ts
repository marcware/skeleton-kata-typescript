import FizzBuzz from "../src/fizz-buzz"

describe('Hello World', () => {

  it('Send One return one', () => {
    expect(FizzBuzz.calculate(1)).toEqual("1")
  })

  it('Send Three return Fizz', () => {
    expect(FizzBuzz.calculate(3)).toEqual("Fizz")
  })

  it('Send Five return Buzz', () => {
    expect(FizzBuzz.calculate(5)).toEqual("Buzz")
  })

  it('Send Six return Fizz', () => {
    expect(FizzBuzz.calculate(6)).toEqual("Fizz")
  })

})
