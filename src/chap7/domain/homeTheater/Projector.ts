import { StreamingPlayer } from './SteamingPlayer';

export class Projector {
  private player: StreamingPlayer;

  constructor(player: StreamingPlayer) {
    this.player = player;
  }

  public on(): void {
    console.log('Projector is on');
  }

  public off(): void {
    console.log('Projector is off');
  }

  public tvMode(): void {
    console.log('Projector is in tv mode');
  }

  public wideScreenMode(): void {
    console.log('Projector is in wide screen mode (16x9 aspect ratio)');
  }
}
