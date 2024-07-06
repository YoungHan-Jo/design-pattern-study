import { DinerMenuIterator, Iterator } from './Iterator';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

export class DinerMenu extends Menu {
  static readonly MAX_ITEMS = 6;
  numberOfItems = 0;
  private menuItems: MenuItem[];

  constructor() {
    super({ name: 'Diner Menu', description: 'Lunch' });
    this.menuItems = [];

    this.addItem(
      'Vegetarian BLT',
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99,
    );
    this.addItem(
      'BLT',
      'Bacon with lettuce & tomato on whole wheat',
      false,
      2.99,
    );
    this.addItem(
      'Soup of the day',
      'Soup of the day, with a side of potato salad',
      false,
      3.29,
    );
    this.addItem(
      'Hotdog',
      'A hot dog, with saurkraut, relish, onions, topped with cheese',
      false,
      3.05,
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ): void {
    const menuItem = new MenuItem({ name, description, vegetarian, price });

    if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.error("Sorry, menu is full! Can't add item to menu");
    } else {
      this.menuItems.push(menuItem);
      this.numberOfItems++;
    }
  }

  public createIterator(): Iterator<MenuItem> {
    return new DinerMenuIterator(this.menuItems);
  }
}
