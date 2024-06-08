import { WeatherData } from "./WeatherData";

export interface Observer {
    update({
        temperature,
        humidity,
        pressure
    }: {
        temperature: number;
        humidity: number;
        pressure: number;
    }): void;
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
    update({ temperature, humidity, pressure: _ }: { temperature: number; humidity: number; pressure: number; }): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }
    public display(): void {
        console.log(`
            current condition: temperature ${this.temperature}F,
            humidity ${this.humidity}%`
        )
    }
}

export class StatisticDisplay implements Observer, DisplayElement {
    update({ temperature, humidity, pressure }: { temperature: number; humidity: number; pressure: number; }): void {
        throw new Error("Method not implemented.");
    }
    public display(): void {
        console.log('StatisticDisplay display');
    }
}

export class ForecastDisplay implements Observer, DisplayElement {
    update({ temperature, humidity, pressure }: { temperature: number; humidity: number; pressure: number; }): void {
        throw new Error("Method not implemented.");
    }
    public display(): void {
        console.log('ForecastDisplay display');
    }
}
