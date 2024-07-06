import { Command } from './Command';
import { CeilingFan } from './objects';

export abstract class CeilingFanCommand implements Command {
  protected ceilingFan: CeilingFan;
  protected prevSpeed: number;

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  abstract excute(): void;

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
      default:
        break;
    }
  }
}

export class CeilingFanHighCommand extends CeilingFanCommand {
  public constructor(ceilingFan: CeilingFan) {
    super(ceilingFan);
  }

  excute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }
}

export class CeilingFanMediumCommand extends CeilingFanCommand {
  public constructor(ceilingFan: CeilingFan) {
    super(ceilingFan);
  }

  excute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }
}

export class CeilingFanLowCommand extends CeilingFanCommand {
  public constructor(ceilingFan: CeilingFan) {
    super(ceilingFan);
  }

  excute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.low();
  }
}

export class CeilingFanOffCommandWithPrevSpeed extends CeilingFanCommand {
  public constructor(ceilingFan: CeilingFan) {
    super(ceilingFan);
  }

  excute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }
}
