import { Observer } from "./DisplayObserver";

export interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

export class WeatherData implements Subject {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    private observers: Observer[];

    constructor() {
        this.observers = []
    }

    public getTemperature(): number {
        return this.temperature;
    }

    public getHumidity(): number {
        return this.humidity;
    }

    public getPressure(): number {
        return this.pressure;
    }

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(display => display !== observer);
    }

    public notifyObservers(): void {
        for (const display of this.observers) {
            display.update();
        }
    }

    public measurementsChanged(): void {
        this.notifyObservers();
    }

    public setMeasurements({
        temperature,
        humidity,
        pressure
    }: {
        temperature: number;
        humidity: number;
        pressure: number;
    }): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}