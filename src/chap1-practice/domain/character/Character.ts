import { AxeBehavior, BowAndArrowBehavior, KnifeBehavior, SwordBehavior, WeaponBehavior } from "../behavior/WeaponBehavior";

export abstract class Character {
    private weapon: WeaponBehavior;

    constructor(weapon: WeaponBehavior) {
        this.weapon = weapon;
    }

    public fight(): void {
        this.weapon.useWeapon();
    }
}

export class King extends Character {
    constructor() {
        super(new SwordBehavior());
    }
}

export class Queen extends Character {
    constructor() {
        super(new BowAndArrowBehavior());
    }
}

export class Knight extends Character {
    constructor() {
        super(new KnifeBehavior());
    }
}

export class Troll extends Character {
    constructor() {
        super(new AxeBehavior());
    }
}