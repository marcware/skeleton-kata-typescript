class FizzBuzz {
    static readonly  FIZZ = 3;
    static readonly  BUZZ = 5;
    static readonly REMAINDER = 0;

    static calculate(number: number): string {

        if (number % this.FIZZ === this.REMAINDER) {
            return "Fizz";
        }else if(number % this.BUZZ === this.REMAINDER){
            return "Buzz";
        }
        return number.toString();
    }
}

export default FizzBuzz
