import { Iterator, PancakeHouseMenuIterator } from "./Iterator";
import { MenuItem } from "./MenuItem";

export class PancakeHouseMenu {
    private menuItems: Array<MenuItem>;

    constructor() {
        this.menuItems = new Array<MenuItem>();

        this.addItem("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
        this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99);
        this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
        this.addItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        this.menuItems.push(new MenuItem({ name, description, vegetarian, price }));
    }

    public createIterator(): Iterator<MenuItem> {
        return new PancakeHouseMenuIterator(this.menuItems);
    }


}