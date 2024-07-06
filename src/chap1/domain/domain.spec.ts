import { LogMessage } from '../constants/logMessage';
import { FlyRocketPowered } from './behavior/FlyBehavior';
import { MallardDuck } from './duck/MallardDuck';
import { ModelDuck } from './duck/ModelDuck';

describe('duck domain', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  it('Maller Duck can fly and quack', () => {
    // Given
    const mallarDuck = new MallardDuck();

    const performFly = jest.spyOn(mallarDuck, 'performFly');
    const performQuack = jest.spyOn(mallarDuck, 'performQuack');

    // When
    mallarDuck.performFly();
    mallarDuck.performQuack();

    // Then
    expect(performFly).toHaveBeenCalled();
    expect(performQuack).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(LogMessage.FlyWithWings);

    expect(consoleSpy).not.toHaveBeenCalledWith(LogMessage.FlyNoWay);
    expect(consoleSpy).not.toHaveBeenCalledWith(LogMessage.FlyRocketPowered);
  });

  it('model can change flyBehavior to rocket powered', () => {
    // Given
    const modelDuck = new ModelDuck();

    // When
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();

    // Then
    expect(modelDuck).toHaveProperty('flyBehavior', new FlyRocketPowered());

    expect(consoleSpy).not.toHaveBeenCalledWith(LogMessage.FlyNoWay);

    expect(consoleSpy).toHaveBeenCalledWith(LogMessage.FlyRocketPowered);
  });
});
