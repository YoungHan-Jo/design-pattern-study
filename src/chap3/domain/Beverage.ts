export abstract class Beverage {
  private description: string = 'Unknown Beverage';

  constructor({ description }: { description?: string }) {
    if (description) {
      this.description = description;
    }
  }

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export class DarkRoast extends Beverage {
  public constructor() {
    super({ description: 'Dark Roast' });
  }
  public cost(): number {
    return 0.99;
  }
}

export class Espresso extends Beverage {
  public constructor() {
    super({ description: 'Espresso' });
  }
  public cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  public constructor() {
    super({ description: 'House Blend' });
  }
  public cost(): number {
    return 0.89;
  }
}

export class Decaf extends Beverage {
  public constructor() {
    super({ description: 'Decaf' });
  }
  public cost(): number {
    return 1.05;
  }
}
