import { Command, NoCommand } from "./Command";

export class RemoteControlWithUndo {
    private onCommands: Command[];
    private offCommands: Command[];
    private undoCommand: Command;

    public constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);

        const noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
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
        this.undoCommand = this.onCommands[slot];
    }

    public offButtonWasPushed(slot: number): void {
        this.offCommands[slot].excute();
        this.undoCommand = this.offCommands[slot];
    }

    public undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }

    public toString(): string {
        let result = '';
        for (let i = 0; i < this.onCommands.length; i++) {
            result += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`;
        }
        result += `[undo] ${this.undoCommand.constructor.name}\n`;
        return result;
    }

}