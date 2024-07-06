import { LogMessage } from '../../constants/logMessage';

export interface FlyBehavior {
  fly(): void;
}

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log(LogMessage.FlyWithWings);
  }
}

export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log(LogMessage.FlyNoWay);
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log(LogMessage.FlyRocketPowered);
  }
}
