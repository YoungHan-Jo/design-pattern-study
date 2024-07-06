import { Coffee } from './Coffee';

describe('chap8.hook', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  it('hook test', () => {
    // Given
    const coffee = new Coffee();

    // When
    coffee.prepareRecipe();

    // Then
    expect(consoleSpy).toHaveBeenCalledWith('Boiling water');
    expect(consoleSpy).toHaveBeenCalledWith('Dripping Coffee through filter');
    expect(consoleSpy).toHaveBeenCalledWith('Pouring into cup');
    expect(consoleSpy).not.toHaveBeenCalledWith('Adding Sugar and Milk');

    expect(consoleSpy).not.toHaveBeenCalledWith('Adding Lemon');
    expect(consoleSpy).not.toHaveBeenCalledWith('Steeping the tea');
  });
});
