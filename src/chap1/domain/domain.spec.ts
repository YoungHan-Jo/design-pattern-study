import { MallardDuck } from "./MallardDuck"

describe('duck domain', () => {

    it('Maller Duck can fly and quack', () => {
        // Given
        const mallarDuck = new MallardDuck();

        const performFly = jest.spyOn(mallarDuck, 'performFly')
        const performQuack = jest.spyOn(mallarDuck, 'performQuack')

        // When
        mallarDuck.performFly();
        mallarDuck.performQuack();

        // Then
        expect(performFly).toHaveBeenCalled();
        expect(performQuack).toHaveBeenCalled();


    })


})