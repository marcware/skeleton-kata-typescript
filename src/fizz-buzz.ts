class FizzBuzz {
    static calculate(number: number): string {

        if (number === 3) {
            return "Fizz";
        }
        return number.toString();
    }
}

export default FizzBuzz
