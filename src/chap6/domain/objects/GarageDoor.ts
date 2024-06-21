export class GarageDoor {
    private location: string;
    constructor(location: string = 'Garage') {
        this.location = location
    }
    up(): void {
        console.log(`${this.location} door is up`);
    }
    down(): void {
        console.log(`${this.location} door is down`);
    }
    stop(): void {
        console.log(`${this.location} door is stopped`);
    }
    lightOn(): void {
        console.log(`${this.location} light is on`);
    }
    lightOff(): void {
        console.log(`${this.location} light is off`);
    }
}