class FizzBuzz {
    static readonly  FIZZ = 3;
    static readonly  BUZZ = 5;
    static readonly  FIZZBUZZ = 15;
    static readonly REMAINDER = 0;

    static calculate(number: number): string {

        if (FizzBuzz.FizzBuzz(number)) {
            return "FizzBuzz";
        }else if(number % this.BUZZ === this.REMAINDER){
            return "Buzz";
        }else if(number % this.FIZZ === this.REMAINDER){
            return "Fizz";
        }
        return number.toString();
    }

    private static FizzBuzz(number: number):boolean {
        return number % this.FIZZBUZZ === this.REMAINDER;
    }
}

export default FizzBuzz
