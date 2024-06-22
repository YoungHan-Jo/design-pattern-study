import { DinerMenu } from "./DinerMenu";
import { Iterator } from "./Iterator";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenu } from "./PancakeHouseMenu";

export class Waitress {
    private pancakeHouseMenu: PancakeHouseMenu;
    private dinerMenu: DinerMenu;

    constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
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