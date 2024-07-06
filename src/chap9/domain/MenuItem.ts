import { MenuComponent } from './MenuComponent';

export class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private vegetarian: boolean;
    private price: number;

    constructor({
        name,
        description,
        vegetarian,
        price,
    }: {
        name: string;
        description: string;
        vegetarian: boolean;
        price: number;
    }) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    print(): void {
        console.log(' ' + this.getName());
        if (this.isVegetarian()) {
            console.log('(v)');
        }
        console.log(', ' + this.getPrice());
        console.log('-- ' + this.getDescription());
    }
}
