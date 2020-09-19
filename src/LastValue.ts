
import {AbstractHandler} from "./AbstractHandler";

export class LastValue extends AbstractHandler {

    public handle(number: number): string {

        return number.toString();

    }
}