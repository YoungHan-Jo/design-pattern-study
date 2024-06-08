import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyBehavior";
import { Quack } from "./QuackBehavior";


export class MallardDuck extends Duck {

    constructor() {
        super({ flyBehavior: new FlyWithWings(), quackBehavior: new Quack() });
    }

    public display(): void {
        console.log('MallardDuck display');
    }

}
