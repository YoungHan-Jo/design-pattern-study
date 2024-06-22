import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class DuckAdapter implements Turkey {
    private duck: Duck;

    public constructor(duck: Duck) {
        this.duck = duck;
    }

    gobble(): void {
        this.duck.quack();
    }
    fly(): void {
        this.duck.fly();
    }

}