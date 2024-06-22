import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
    public brew(): void {
        console.log('Dripping Coffee through filter');
    }
    public addCondiments(): void {
        console.log('Adding Sugar and Milk');
    }

    protected customerWantsCondiments(): boolean {
        return this.getUserInput();
    }

    private getUserInput(): boolean {
        return false;
    }

}