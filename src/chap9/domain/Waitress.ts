import { Iterator } from "./Iterator";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class Waitress {
    private pancakeHouseMenu: Menu;
    private dinerMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }

    public printMenu(): void {
        const pancakeIterator = this.pancakeHouseMenu.createIterator();
        const dinerIterator = this.dinerMenu.createIterator();

        console.log("MENU\n----\nBREAKFAST");
        this.printMenuItems(pancakeIterator);
        console.log("\nLUNCH");
        this.printMenuItems(dinerIterator);
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