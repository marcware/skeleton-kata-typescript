class FizzBuzz {
    static readonly  FIZZ = 3;
    static readonly  BUZZ = 5;
    static readonly  FIZZBUZZ = 15;
    static readonly REMAINDER = 0;

    static calculate(number: number): string {

        if (number % this.FIZZBUZZ === this.REMAINDER) {
            return "FizzBuzz";
        }else if(number % this.BUZZ === this.REMAINDER){
            return "Buzz";
        }else if(number % this.FIZZ === this.REMAINDER){
            return "Fizz";
        }
        return number.toString();
    }
}

export default FizzBuzz
