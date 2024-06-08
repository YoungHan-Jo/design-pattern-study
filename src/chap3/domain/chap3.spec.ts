import { DarkRoast, Espresso } from "./Beverage"
import { Milk, Mocha } from "./CondimentDecorator";

describe('domain', () => {

    const EspressoCost = 1.99;
    const DarkRoastCost = 0.99;
    const MochaCost = 0.20;
    const MilkCost = 0.10;


    it('no condiment', () => {
        // Given
        const espresso = new Espresso();

        // When
        espresso.getDescription();

        // Then
        expect(espresso.getDescription()).toBe('Espresso');
    })

    it('add 1 condiment', () => {
        // Given
        const espresso = new Espresso();

        // When
        const mochaEspresso = new Mocha(espresso);
        mochaEspresso.getDescription();

        // Then
        expect(mochaEspresso.getDescription()).toBe('Espresso, Mocha');
        expect(mochaEspresso.cost()).toBe(EspressoCost + MochaCost);
    })

    it('add 2 condiments', () => {
        // Given
        const darkRoast = new DarkRoast();

        // When
        const darkRoastMocha = new Mocha(darkRoast);
        const darkRoastMochaLatte = new Milk(darkRoastMocha)
        darkRoastMochaLatte.getDescription();

        // Then
        expect(darkRoastMochaLatte.getDescription()).toBe('Dark Roast, Mocha, Milk');
        expect(darkRoastMochaLatte.cost()).toBe(DarkRoastCost + MochaCost + MilkCost);

    })
})