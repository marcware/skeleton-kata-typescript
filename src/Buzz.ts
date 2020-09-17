
import { AbstractHandler } from "./AbstractHandler";

export class Buzz extends AbstractHandler {
   
    static readonly  BUZZ = 5;
    static readonly  FIZZBUZZ = 15;
    static readonly REMAINDER = 0;
    public handle(number: number): string {
        if (number % 5 === 0) {
            return "Buzz";
        }
        return super.handle(number);

    }
}