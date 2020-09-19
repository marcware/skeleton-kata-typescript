
import { AbstractHandler } from "./AbstractHandler";

export class FizzBuzz extends AbstractHandler {

    static readonly  FIZZBUZZ = 15;
    static readonly REMAINDER = 0;
    public handle(number: number): string {
        if (number % 15 === 0) {
            return "FizzBuzz";
        }
        return super.handle(number);

    }
}