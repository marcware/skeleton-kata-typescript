
import { Buzz } from "./Buzz";
import { Fizz } from "./Fizz";
import { FizzBuzz } from "./FizzBuzz";
import { LastValue } from "./LastValue";


class Transform {

    static calculate(number: number): string {

        const fizz = new Fizz();
        const buzz = new Buzz();
        const fizzBuzz = new FizzBuzz();
        const lastValue = new LastValue();

        const chain = fizzBuzz.setNext(fizz).setNext(buzz).setNext(lastValue);
        return fizzBuzz.handle(number);

    }

}

export default Transform
