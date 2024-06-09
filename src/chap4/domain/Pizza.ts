export interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
}

export class CheesePizza implements Pizza {
    prepare() {
        console.log('Preparing Cheese Pizza');
    }
    bake() {
        console.log('Baking Cheese Pizza');
    }
    cut() {
        console.log('Cutting Cheese Pizza');
    }
    box() {
        console.log('Boxing Cheese Pizza');
    }
}

export class PepperoniPizza implements Pizza {
    prepare() {
        console.log('Preparing Pepperoni Pizza');
    }
    bake() {
        console.log('Baking Pepperoni Pizza');
    }
    cut() {
        console.log('Cutting Pepperoni Pizza');
    }
    box() {
        console.log('Boxing Pepperoni Pizza');
    }
}

export class ClamPizza implements Pizza {
    prepare() {
        console.log('Preparing Clam Pizza');
    }
    bake() {
        console.log('Baking Clam Pizza');
    }
    cut() {
        console.log('Cutting Clam Pizza');
    }
    box() {
        console.log('Boxing Clam Pizza');
    }
}

export class VeggiePizza implements Pizza {
    prepare() {
        console.log('Preparing Veggie Pizza');
    }
    bake() {
        console.log('Baking Veggie Pizza');
    }
    cut() {
        console.log('Cutting Veggie Pizza');
    }
    box() {
        console.log('Boxing Veggie Pizza');
    }
}
