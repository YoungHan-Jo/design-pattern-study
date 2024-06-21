export class TheaterLights {
    public dim(level: number): void {
        console.log("Theater Ceiling Lights dimming to " + level + "%");
    }

    public on(): void {
        console.log("Theater Ceiling Lights on");
    }

    public off(): void {
        console.log("Theater Ceiling Lights off");
    }
}