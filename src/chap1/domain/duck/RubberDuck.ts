import { Duck } from "./Duck";
import { FlyNoWay } from "../behavior/FlyBehavior";
import { MuteQuack } from "../behavior/QuackBehavior";


export class RubberDuck extends Duck {

    constructor() {
        super({ flyBehavior: new FlyNoWay(), quackBehavior: new MuteQuack() });
    }

    public display(): void {
        console.log('RubberDuck display');
    }
}
