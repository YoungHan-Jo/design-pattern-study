import { GumballMachine } from "../GumballMachine";
import { State } from "./State.interface";

export class SoldOutState implements State {
    private gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.log("You can't insert a quarter, the machine is sold out");
    }

    public ejectQuarter(): void {
        console.log("You can't eject, you haven't inserted a quarter yet");
    }

    public turnCrank(): void {
        console.log("You turned, but there are no gumballs");
    }

    public dispense(): void {
        console.log("Oops, out of gumballs!");
    }

}