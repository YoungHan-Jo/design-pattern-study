import { Duck } from './Duck';
import { FlyWithWings } from '../behavior/FlyBehavior';
import { Quack } from '../behavior/QuackBehavior';

export class MallardDuck extends Duck {
  constructor() {
    super({ flyBehavior: new FlyWithWings(), quackBehavior: new Quack() });
  }

  public display(): void {
    console.log('MallardDuck display');
  }
}
