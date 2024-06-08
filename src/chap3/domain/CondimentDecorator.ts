import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super({});
        this.beverage = beverage;
    }

    protected getBeverage(): Beverage {
        return this.beverage;
    }

    public abstract getDescription(): string;
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.getBeverage().getDescription() + ', Mocha';
    }
    public cost(): number {
        return this.getBeverage().cost() + 0.20;
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.getBeverage().getDescription() + ', Soy';
    }
    public cost(): number {
        return this.getBeverage().cost() + 0.15;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.getBeverage().getDescription() + ', Whip';
    }
    public cost(): number {
        return this.getBeverage().cost() + 0.10;
    }
}

export class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return this.getBeverage().getDescription() + ', Milk';
    }
    public cost(): number {
        return this.getBeverage().cost() + 0.10;
    }
}

