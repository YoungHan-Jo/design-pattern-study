import { Amplifier } from "./Amplifier";

export class Tuner {
    private amplifier: Amplifier;

    constructor() {
        this.amplifier = new Amplifier();
    }

    public on(): void {
        console.log('Tuner is on');
    }

    public off(): void {
        console.log('Tuner is off');
    }

    public setFrequency(frequency: number): void {
        console.log(`Tuner setting frequency to ${frequency}`);
    }

    public setAm(): void {
        console.log('Tuner setting AM mode');
    }

    public setFm(): void {
        console.log('Tuner setting FM mode');
    }
}