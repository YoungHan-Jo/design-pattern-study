export class CeilingFan {
  public static readonly HIGH: number = 3;
  public static readonly MEDIUM: number = 2;
  public static readonly LOW: number = 1;
  public static readonly OFF: number = 0;

  private location: string;
  private speed: number;

  constructor(location: string = 'Living Room') {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  public high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} ceiling fan is on high`);
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  public low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is on low`);
  }

  public off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} ceiling fan is off`);
  }

  public getSpeed(): number {
    return this.speed;
  }
}
