export interface QuackBehavior {
    quack(): void;
}

export class Quack implements QuackBehavior {
    public quack(): void {
        console.log('quack');
    }
}

export class Squeak implements QuackBehavior {
    public quack(): void {
        console.log('squeak');
    }
}

export class MuteQuack implements QuackBehavior {
    public quack(): void {
        console.log('mute quack');
    }
}