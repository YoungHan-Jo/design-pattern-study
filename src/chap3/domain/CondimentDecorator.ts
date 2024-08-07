import { Beverage } from './Beverage';

export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super({});
    this.beverage = beverage;
  }

  public abstract getDescription(): string;
}

export class Tall extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Tall';
  }
  public cost(): number {
    return this.beverage.cost();
  }
}

export class Grande extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Grande';
  }
  public cost(): number {
    return this.beverage.cost() * 1.1;
  }
}

export class Venti extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Venti';
  }
  public cost(): number {
    return this.beverage.cost() * 1.2;
  }
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }
  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }
  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }
  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Milk';
  }
  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
