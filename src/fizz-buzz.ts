class FizzBuzz {
    static readonly  FIZZ = 3;

    static calculate(number: number): string {

        if (number === this.FIZZ) {
            return "Fizz";
        }else if(number === 5){
            return "Buzz";
        }
        return number.toString();
    }
}

export default FizzBuzz
