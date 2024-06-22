import { Tea } from "./Tea";

describe('chap8.temp', () => {

    const consoleSpy = jest.spyOn(console, 'log');

    it('template method pattern test', () => {
        // Given
        const tea = new Tea();

        // When
        tea.prepareRecipe();

        // Then
        expect(consoleSpy).toHaveBeenCalledWith('Boiling water');
        expect(consoleSpy).toHaveBeenCalledWith('Steeping the tea');
        expect(consoleSpy).toHaveBeenCalledWith('Pouring into cup');
        expect(consoleSpy).toHaveBeenCalledWith('Adding Lemon');

        expect(consoleSpy).not.toHaveBeenCalledWith('Dripping Coffee through filter');
        expect(consoleSpy).not.toHaveBeenCalledWith('Adding Sugar and Milk');

    })
});