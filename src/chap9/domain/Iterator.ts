import { MenuItem } from "./MenuItem";

export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
    private items: MenuItem[];
    private position = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
    }

    hasNext(): boolean {
        if (this.position >= this.items.length || this.items[this.position] === undefined) {
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
        if (this.position >= this.items.length || this.items[this.position] === undefined) {
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