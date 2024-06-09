import { PizzaStore } from "./domain/PizzaStore";
import { SimplePizzaFactory } from "./domain/SimplePizzaFactory";


describe('chap4', () => {

    const consoleSpy = jest.spyOn(console, 'log');

    const simplePizzaFactory = new SimplePizzaFactory();

    it('create pizza using simple factory', () => {
        // Given
        const pizzaStore = new PizzaStore(simplePizzaFactory)

        // When
        pizzaStore.orderPizza('Cheese')

        // Then
        expect(consoleSpy).toHaveBeenCalledWith('Preparing Cheese Pizza');
        expect(consoleSpy).toHaveBeenCalledWith('Baking Cheese Pizza');
        expect(consoleSpy).toHaveBeenCalledWith('Cutting Cheese Pizza');
        expect(consoleSpy).toHaveBeenCalledWith('Boxing Cheese Pizza');



    })
})