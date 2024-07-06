import { WeatherData } from './WeatherData';

export interface Observer {
  update(): void;
}

interface DisplayElement {
  display(): void;
}

export class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  public constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }
  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }
  public display(): void {
    console.log(`
            current condition: temperature ${this.temperature}F,
            humidity ${this.humidity}%`);
  }
}

export class StatisticDisplay implements Observer, DisplayElement {
  update(): void {
    throw new Error('Method not implemented.');
  }

  public display(): void {
    console.log('StatisticDisplay display');
  }
}

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92;
  private lastPressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display();
  }

  public display(): void {
    console.log('ForecastDisplay display');
  }
}
