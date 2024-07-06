export class Light {
  private location: string;
  constructor(location: string = 'Living Room') {
    this.location = location;
  }

  on(): void {
    console.log(`${this.location} Light is on`);
  }
  off(): void {
    console.log(`${this.location} Light is off`);
  }
}
