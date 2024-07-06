import { CurrentConditionDisplay } from './DisplayObserver';
import { WeatherData } from './WeatherData';

describe('domain', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  let weatherData: WeatherData;

  beforeEach(() => {
    weatherData = new WeatherData();
  });

  it('display', () => {
    // Given
    new CurrentConditionDisplay(weatherData);

    // When
    weatherData.setMeasurements({
      temperature: 80,
      humidity: 65,
      pressure: 30.4,
    });

    // Then
    expect(consoleSpy).toHaveBeenCalledWith(`
            current condition: temperature 80F,
            humidity 65%`);
  });

  it('remove observer', () => {
    // Given
    const display = new CurrentConditionDisplay(weatherData);

    // When
    weatherData.removeObserver(display);

    weatherData.setMeasurements({
      temperature: 90,
      humidity: 75,
      pressure: 30.4,
    });

    // Then
    expect(weatherData).toHaveProperty('observers', []);

    expect(consoleSpy).not.toHaveBeenCalledWith(`
            current condition: temperature 90F,
            humidity 75%`);
  });
});
