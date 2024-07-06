import { Command } from './Command';

export class SimpleRemoteControl {
  private slot: Command;

  public constructor() {}

  public setCommand(command: Command): void {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot.excute();
  }
}
