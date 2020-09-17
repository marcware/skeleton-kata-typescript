class FizzBuzz {
    static readonly  FIZZ = 3;
    static readonly  BUZZ = 5;

    static calculate(number: number): string {

        if (number === this.FIZZ) {
            return "Fizz";
        }else if(number === this.BUZZ){
            return "Buzz";
        }
        return number.toString();
    }
}

export default FizzBuzz
