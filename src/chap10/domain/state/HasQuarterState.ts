import { GumballMachine } from "../GumballMachine";
import { State } from "./State.interface";

export class HasQuarterState implements State {
    private gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.log("You can't insert another quarter");
    }

    public ejectQuarter(): void {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    public turnCrank(): void {
        console.log("You turned...");
        const winner = this.getRandomNumber();
        if (winner === 0 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    public dispense(): void {
        console.log("No gumball dispensed");
    }

    private getRandomNumber(): number {
        return Math.floor(Math.random() * 10);
    }

}