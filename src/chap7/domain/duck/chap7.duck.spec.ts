import { Duck, MallardDuck } from './Duck';
import { DuckAdapter } from './DuckAdapter';
import { Turkey, WildTurkey } from './Turkey';
import { TurkeyAdapter } from './TurkeyAdapter';

describe('duck', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  it('duck test', () => {
    // Given
    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    const testDuck = (duck: Duck) => {
      duck.quack();
      duck.fly();
    };

    // When
    testDuck(turkeyAdapter);

    // Then
    expect(consoleSpy).toHaveBeenCalledWith('Gobble gobble');
    expect(consoleSpy).toHaveBeenCalledWith('I am flying a short distance');
  });

  it('duck adapter test', () => {
    // Given
    const duck = new MallardDuck();
    const duckAdapter = new DuckAdapter(duck);

    const testTurkey = (turkey: Turkey) => {
      turkey.gobble();
      turkey.fly();
    };
    // When

    testTurkey(duckAdapter);

    // Then
    expect(consoleSpy).toHaveBeenCalledWith('Quack');
  });
});
