import {Handler} from "./Handler"

export abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler | undefined;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: number): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return "";
    }
}