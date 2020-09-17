class FizzBuzz {
    static readonly  FIZZ = 3;

    static calculate(number: number): string {

        if (number === this.FIZZ) {
            return "Fizz";
        }
        return number.toString();
    }
}

export default FizzBuzz
