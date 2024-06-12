export abstract class Pizza {

    protected name: string;
    protected dough: string;
    protected sauce: string;
    protected toppings: string[] = [];

    prepare(): void {
        console.log('Preparing ' + this.name);
        console.log('Tossing dough...');
        console.log('Adding sauce...');
        console.log('Adding toppings: ');
        for (const topping of this.toppings) {
            console.log('   ' + topping);
        }
    }
    bake(): void {
        console.log('Baking for 25 minutes at 350');
    }
    cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }
    box(): void {
        console.log('Place pizza in official PizzaStore box');
    }

    public getName(): string {
        return this.name;
    }
}

export class NYStyleCheesePizza extends Pizza {
    public constructor() {
        super();
        this.name = 'NY Style Sauce and Cheese Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';
        this.toppings.push('Grated Reggiano Cheese');
    }
}

export class ChicagoStyleCheesePizza extends Pizza {
    public constructor() {
        super();
        this.name = 'Chicago Style Deep Dish Cheese Pizza';
        this.dough = 'Extra Thick Crust Dough';
        this.sauce = 'Plum Tomato Sauce';
        this.toppings.push('Shredded Mozzarella Cheese');
    }

    cut(): void {
        console.log('Cutting the pizza into square slices');
    }
}

