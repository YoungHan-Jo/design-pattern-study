export class Hottub {
    public on(): void {
        console.log('Hottub is on');
    }

    public off(): void {
        console.log('Hottub is off');
    }

    public circulate(): void {
        console.log('Hottub is bubbling!');
    }

    public jetsOn(): void {
        console.log('Hottub jets are on');
    }

    public jetsOff(): void {
        console.log('Hottub jets are off');
    }

    public setTemperature(temperature: number): void {
        console.log(`Hottub temperature set to ${temperature}`);
    }
}