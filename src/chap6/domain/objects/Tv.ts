export class TV {
  private location: string;
  private channel: number;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} TV is on`);
  }

  public off(): void {
    console.log(`${this.location} TV is off`);
  }
}
