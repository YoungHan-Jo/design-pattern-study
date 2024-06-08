import { FlyNoWay } from "../behavior/FlyBehavior";
import { MuteQuack } from "../behavior/QuackBehavior";
import { Duck } from "./Duck";

export class ModelDuck extends Duck {

    constructor() {
        super({
            flyBehavior: new FlyNoWay(),
            quackBehavior: new MuteQuack()
        })
    }
    public display(): void {
        console.log('ModelDuck display')
    }

}