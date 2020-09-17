import FizzBuzz from "../src/Transform"

describe('Hello World', () => {

  it('Send One return one', () => {
    expect(FizzBuzz.calculate(1)).toEqual("1")
  })

  it('Send Two return Two', () => {
    expect(FizzBuzz.calculate(2)).toEqual("2")
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

  it('Send Ten return Buzz', () => {
    expect(FizzBuzz.calculate(10)).toEqual("Buzz")
  })

  it('Send Twenty return Fizz', () => {
    expect(FizzBuzz.calculate(12)).toEqual("Fizz")
  })

  it('Send Fifteen return FizzBuzz', () => {
    expect(FizzBuzz.calculate(15)).toEqual("FizzBuzz")
  })

  it('Send Fourtyfive return FizzBuzz', () => {
    expect(FizzBuzz.calculate(45)).toEqual("FizzBuzz")
  })

})
