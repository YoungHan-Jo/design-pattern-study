import { FlyBehavior } from '../behavior/FlyBehavior';
import { QuackBehavior } from '../behavior/QuackBehavior';

export abstract class Duck {
  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;

  public constructor({
    flyBehavior,
    quackBehavior,
  }: {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;
  }) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public setFlyBehavior(flyBehaviore: FlyBehavior): void {
    this.flyBehavior = flyBehaviore;
  }

  public swim(): void {
    console.log('Duck swim');
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public abstract display(): void;
}
