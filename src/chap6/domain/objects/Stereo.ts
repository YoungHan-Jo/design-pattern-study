export class Stereo {
  private location: string;
  constructor(location: string = 'Living Room') {
    this.location = location;
  }
  public on(): void {
    console.log(`${this.location} Stereo is on`);
  }
  public off(): void {
    console.log(`${this.location} Stereo is off`);
  }
  public setCD(): void {
    console.log(`${this.location} Stereo is set for CD input`);
  }
  public setDVD(): void {
    console.log(`${this.location} Stereo is set for DVD input`);
  }
  public setRadio(): void {
    console.log(`${this.location} Stereo is set for Radio`);
  }
  public setVolume(volume: number): void {
    console.log(`${this.location} Stereo volume set to ${volume}`);
  }
}
