
import {AbstractHandler} from "./AbstractHandler";

export class Fizz extends AbstractHandler {
    static readonly  FIZZ = 3;
    static readonly REMAINDER = 0;
    public handle(number: number): string {
        if ( number % 3 === 0) {
            return "Fizz";
        }
        return super.handle(number);

    }
}