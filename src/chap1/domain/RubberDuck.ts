import { Duck } from "./Duck";
import { FlyBehavior } from "./FlyBehavior";
import { QuackBehavior } from "./QuackBehavior";


export class RubberDuck extends Duck {

    constructor({
        flyBehavior,
        quackBehavior
    }: {
        flyBehavior: FlyBehavior,
        quackBehavior: QuackBehavior
    }) {
        super({ flyBehavior, quackBehavior });
    }

    public display(): void {
        console.log('RubberDuck display');
    }
}
