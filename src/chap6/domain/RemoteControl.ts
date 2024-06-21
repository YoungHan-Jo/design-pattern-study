import { Command, NoCommand } from "./Command";

export class RemoteControl {
    private onCommands: Command[];
    private offCommands: Command[];

    public constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);

        const noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
    }

    public setCommand({
        slot,
        onCommand,
        offCommand
    }: {
        slot: number,
        onCommand: Command,
        offCommand: Command
    }): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPushed(slot: number): void {
        this.onCommands[slot].excute();
    }

    public offButtonWasPushed(slot: number): void {
        this.offCommands[slot].excute();
    }

    public toString(): string {
        let result = '';
        for (let i = 0; i < this.onCommands.length; i++) {
            result += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`;
        }
        return result;
    }

}