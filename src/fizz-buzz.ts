class FizzBuzz {
    static readonly  FIZZ = 3;
    static readonly  BUZZ = 5;
    static readonly  FIZZBUZZ = 15;
    static readonly REMAINDER = 0;

    static calculate(number: number): string {

        if (FizzBuzz.FizzBuzz(number)) {
            return "FizzBuzz";
        }else if(FizzBuzz.Buzz(number)){
            return "Buzz";
        }else if(FizzBuzz.Fizz(number)){
            return "Fizz";
        }
        return number.toString();
    }

    private static Fizz(number: number):boolean {
        return number % this.FIZZ === this.REMAINDER;
    }

    private static Buzz(number: number):boolean {
        return number % this.BUZZ === this.REMAINDER;
    }

    private static FizzBuzz(number: number):boolean {
        return number % this.FIZZBUZZ === this.REMAINDER;
    }
}

export default FizzBuzz
