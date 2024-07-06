import { CafeMenuIterator, Iterator } from './Iterator';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

export class CafeMenu extends Menu {
  private menuItems: Map<string, MenuItem>;

  public constructor() {
    super({ name: 'CAFE MENU', description: 'Breakfast' });
    this.menuItems = new Map<string, MenuItem>();

    this.addItem(
      'Veggie Burger and Air Fries',
      'Veggie burger on a whole wheat bun, lettuce, tomato, and fries',
      true,
      3.99,
    );
    this.addItem(
      'Soup of the day',
      'A cup of the soup of the day, with a side salad',
      false,
      3.69,
    );
    this.addItem(
      'Burrito',
      'A large burrito, with whole pinto beans, salsa, guacamole',
      true,
      4.29,
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ): void {
    this.menuItems.set(
      name,
      new MenuItem({ name, description, vegetarian, price }),
    );
  }

  public createIterator(): Iterator<MenuItem> {
    return new CafeMenuIterator(this.menuItems);
  }
}
