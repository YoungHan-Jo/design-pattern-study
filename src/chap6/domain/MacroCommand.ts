import { Command } from "./Command";

export class MacroCommand implements Command {
    private commands: Command[];

    public constructor(commands: Command[]) {
        this.commands = commands;
    }

    excute(): void {
        for (const command of this.commands) {
            command.excute();
        }
    }
    undo(): void {
        for (const command of this.commands) {
            command.undo();
        }
    }

}