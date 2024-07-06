import { StreamingPlayer } from './SteamingPlayer';
import { Tuner } from './Tuner';

export class Amplifier {
  private tuner: Tuner;
  private player: StreamingPlayer;

  constructor() {
    this.tuner = new Tuner();
    this.player = new StreamingPlayer();
  }

  public on(): void {
    console.log('Amplifier is on');
  }

  public off(): void {
    console.log('Amplifier is off');
  }

  public setStreamingPlayer(player: StreamingPlayer): void {
    this.player = player;
  }

  public setTuner(tuner: Tuner): void {
    this.tuner = tuner;
  }

  public setVolume(level: number): void {
    console.log(`Amplifier volume set to ${level}`);
  }

  public setStereoSound(): void {
    console.log('Amplifier stereo sound on');
  }

  public setSurroundSound(): void {
    console.log('Amplifier surround sound on (5 speakers, 1 subwoofer)');
  }
}
