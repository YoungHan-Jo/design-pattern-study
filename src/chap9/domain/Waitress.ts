import { Iterator } from './Iterator';
import { MenuComponent } from './MenuComponent';
import { MenuItem } from './MenuItem';

export class Waitress {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu(): void {
    this.allMenus.print();
  }

  private printMenuItems(iterator: Iterator<MenuItem>): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(menuItem.getName());
      console.log(menuItem.getPrice());
      console.log(menuItem.getDescription());
    }
  }
}
