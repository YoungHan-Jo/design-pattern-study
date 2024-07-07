import { GumballMachine } from "./domain/GumballMachine"
import { GumballMonitor } from "./domain/GumballMonitor";

describe('chap10', () => {

    const consoleSpy = jest.spyOn(console, 'log');

    it('GumballMachine', () => {
        // Given
        const gumballMachine = new GumballMachine("location A", 5);

        // When
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();

        // Then
        expect(gumballMachine.getCount()).toBeLessThanOrEqual(4);
        expect(gumballMachine.getCount()).toBeGreaterThanOrEqual(3);
        expect(gumballMachine.getState()).toBe(gumballMachine.getNoQuarterState());

    })

    it('toBeSoldOut', () => {
        // Given
        const gumballMachine = new GumballMachine("location B", 1);

        // When
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();

        // Then
        expect(gumballMachine.getCount()).toBe(0);
        expect(gumballMachine.getState()).toBe(gumballMachine.getSoldOutState());
    })

    it('winner test', () => {
        // Given
        const gumballMachine = new GumballMachine("location C", 20);

        // When
        while (gumballMachine.getCount() > 0) {
            gumballMachine.insertQuarter();
            gumballMachine.turnCrank();
            console.log('count :', gumballMachine.getCount());
        }

        // Then
        expect(consoleSpy).toHaveBeenCalledWith("YOU'RE A WINNER! You get two gumballs for your quarter");

    })

    it('report test', () => {
        // Given
        const gumballMachine = new GumballMachine("location D", 20);
        const gumballMonitor = new GumballMonitor(gumballMachine);

        // When
        gumballMonitor.report();


        // Then
        expect(consoleSpy).toHaveBeenCalledWith("Gumball Machine: location D");
        expect(consoleSpy).toHaveBeenCalledWith("Current inventory: 20 gumballs");
        expect(consoleSpy).toHaveBeenCalledWith("Current state: [object Object]");

    })


})