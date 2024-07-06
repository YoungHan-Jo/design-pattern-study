import { MenuItem } from './MenuItem';

export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

export class CafeMenuIterator implements Iterator<MenuItem> {
  private items: Map<string, MenuItem>;
  private keys: string[];
  private position = 0;

  constructor(items: Map<string, MenuItem>) {
    this.items = items;
    this.keys = Array.from(items.keys());
  }

  hasNext(): boolean {
    if (
      this.position >= this.keys.length ||
      this.keys[this.position] === undefined
    ) {
      return false;
    }
    return true;
  }
  next(): MenuItem {
    const menuItem = this.items.get(this.keys[this.position]);
    this.position++;
    return menuItem;
  }
}

export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
  private items: MenuItem[];
  private position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === undefined
    ) {
      return false;
    }
    return true;
  }
  next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position++;
    return menuItem;
  }
}

export class DinerMenuIterator implements Iterator<MenuItem> {
  private items: MenuItem[];
  private position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === undefined
    ) {
      return false;
    }
    return true;
  }
  next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position++;
    return menuItem;
  }
}
