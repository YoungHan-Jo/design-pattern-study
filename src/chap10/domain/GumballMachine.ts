import { NoQuarterState, State } from "./state";
import { HasQuarterState } from "./state/HasQuarterState";
import { SoldOutState } from "./state/SoldOutState";
import { SoldState } from "./state/SoldState";
import { WinnerState } from "./state/WinnerState";

export class GumballMachine {

    private soldOutState: State;
    private noQuarterState: State;
    private hasQuarterState: State;
    private soldState: State;
    private winnerState: State;

    private location: string;
    private state: State;
    private count = 0;

    constructor(location: string, numberGumballs: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);

        this.location = location;
        this.count = numberGumballs;

        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }

    public insertQuarter(): void {
        this.state.insertQuarter();
    }

    public ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    public turnCrank(): void {
        this.state.turnCrank();
        if (this.state === this.soldState || this.state === this.winnerState) {
            this.state.dispense();
        }
    }

    setState(state: State) {
        this.state = state;
    }

    public releaseBall(): void {
        console.log("A gumball comes rolling out the slot...");
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }

    public getState(): State {
        return this.state;
    }

    public getSoldOutState(): State {
        return this.soldOutState;
    }

    public getNoQuarterState(): State {
        return this.noQuarterState;
    }

    public getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    public getSoldState(): State {
        return this.soldState;
    }

    public getWinnerState(): State {
        return this.winnerState;
    }

    public getLocation(): string {
        return this.location;
    }
    public getCount(): number {
        return this.count;
    }

}