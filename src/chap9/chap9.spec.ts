import { CafeMenu } from './domain/CafeMenu';
import { DinerMenu } from './domain/DinerMenu';
import { Menu } from './domain/Menu';
import { MenuItem } from './domain/MenuItem';
import { PancakeHouseMenu } from './domain/PancakeHouseMenu';
import { Waitress } from './domain/Waitress';

describe('chap9', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    it('chap9', () => {
        // Given
        const pancakeHouseMenu = new Menu({
            name: 'Pancake House Menu',
            description: 'Breakfast',
        });
        const dinerMenu = new Menu({ name: 'Diner Menu', description: 'Lunch' });
        const cafeMenu = new Menu({ name: 'Cafe Menu', description: 'Dinner' });
        const dessertMenu = new Menu({ name: 'Dessert Menu', description: 'Dessert of course!' });

        const allMenus = new Menu({
            name: 'ALL MENUS',
            description: 'All menus combined',
        });

        allMenus.add(pancakeHouseMenu);
        allMenus.add(dinerMenu);
        allMenus.add(cafeMenu);

        dinerMenu.add(
            new MenuItem({
                name: 'Vegetarian BLT',
                description: "(Fakin') Bacon with lettuce & tomato on whole wheat",
                vegetarian: true,
                price: 2.99,
            }),
        );

        dinerMenu.add(dessertMenu);

        dessertMenu.add(
            new MenuItem({
                name: 'Apple Pie',
                description: 'Apple pie with a flakey crust, topped with vanilla icecream',
                vegetarian: true,
                price: 1.59,
            }),
        );

        const waitress = new Waitress(allMenus);

        // When
        waitress.printMenu();

        // Then
        expect(consoleSpy).toHaveBeenCalledWith("-- (Fakin') Bacon with lettuce & tomato on whole wheat")
        expect(consoleSpy).toHaveBeenCalledWith('-- Apple pie with a flakey crust, topped with vanilla icecream')
    });
});
