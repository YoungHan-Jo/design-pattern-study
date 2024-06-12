import { ChicagoStylePizzaStore, NYStylePizzaStore, PizzaStore } from "./domain/PizzaStore";
import { SimplePizzaFactory } from "./domain/SimplePizzaFactory";

describe('chap4', () => {

    const consoleSpy = jest.spyOn(console, 'log');

    it('factory method', () => {
        // Given
        const nyStore = new NYStylePizzaStore();
        const chicagoStore = new ChicagoStylePizzaStore();

        // When
        const nyPizza = nyStore.orderPizza('Cheese');
        const chicagoPizza = chicagoStore.orderPizza('Cheese');

        // Then
        expect(nyPizza.getName()).toBe('NY Style Sauce and Cheese Pizza');
        expect(chicagoPizza.getName()).toBe('Chicago Style Deep Dish Cheese Pizza');

    })
})