import { Iterator } from "./Iterator";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class Waitress {
    private menus: Menu[];

    constructor(menus: Menu[]) {
        this.menus = menus;
    }

    public printMenu(): void {
        const menuIterators = this.menus.map(menu => menu.createIterator())
        menuIterators.forEach(iterator => this.printMenuItems(iterator))
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