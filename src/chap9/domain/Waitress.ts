import { Iterator } from "./Iterator";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class Waitress {
    private pancakeHouseMenu: Menu;
    private dinerMenu: Menu;
    private cafeMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
        this.cafeMenu = cafeMenu;
    }

    public printMenu(): void {
        const pancakeIterator = this.pancakeHouseMenu.createIterator();
        const dinerIterator = this.dinerMenu.createIterator();
        const cafeIterator = this.cafeMenu.createIterator();

        console.log("MENU\n----\nBREAKFAST");
        this.printMenuItems(pancakeIterator);
        console.log("\nLUNCH");
        this.printMenuItems(dinerIterator);
        console.log("\nDINNER");
        this.printMenuItems(cafeIterator);
    }

    private printMenuItems(iterator: Iterator<MenuItem>): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            console.log(menuItem.getName())
            console.log(menuItem.getPrice())
            console.log(menuItem.getDescription())
        }
    }
}