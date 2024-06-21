import { Amplifier } from "./Amplifier";

export class StreamingPlayer {
    private amplifier: Amplifier;

    constructor() {
        this.amplifier = new Amplifier();
    }

    public on(): void {
        console.log('Streaming player is on');
    }

    public off(): void {
        console.log('Streaming player is off');
    }

    public play(movie: string): void {
        console.log(`Streaming player is playing ${movie}`);
    }

    public pause(): void {
        console.log('Streaming player is paused');
    }

    public stop(): void {
        console.log('Streaming player is stopped');
    }

    public setSurroundAudio(): void {
        console.log('Streaming player surround audio on');
    }

    public setTwoChannelAudio(): void {
        console.log('Streaming player two channel audio on');
    }
}