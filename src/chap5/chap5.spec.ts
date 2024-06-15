import { ChocolateBoiler } from "./domain/ChocolateBoiler"

describe('chap5', () => {

    it('singleton', () => {
        // Given
        const chocolate = ChocolateBoiler.getInstance();

        // When
        chocolate.fill();

        const chocolate2 = ChocolateBoiler.getInstance();

        // Then
        expect(chocolate.isEmpty()).toBe(false);
        expect(chocolate.isBoiled()).toBe(false);

        expect(chocolate2.isEmpty()).toBe(false);
        expect(chocolate2.isBoiled()).toBe(false);

        expect(chocolate).toBe(chocolate2);

    })
})