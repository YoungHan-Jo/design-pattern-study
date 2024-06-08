export interface FlyBehavior {
    fly(): void;
}

export class FlyWithWings implements FlyBehavior {
    public fly(): void {
        console.log('fly with wings');
    }
}

export class FlyNoWay implements FlyBehavior {
    public fly(): void {
        console.log('fly no way');
    }
}