import { GumballMachine } from "../GumballMachine";
import { State } from "./State.interface";

export class NoQuarterState implements State {
    private gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }

    public ejectQuarter(): void {
        console.log("You haven't inserted a quarter");
    }

    public turnCrank(): void {
        console.log("You turned, but there's no quarter");
    }

    public dispense(): void {
        console.log("You need to pay first");
    }
}