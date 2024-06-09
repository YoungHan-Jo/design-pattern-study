import { PizzaType } from "../constants/PizzaType";
import { CheesePizza, ClamPizza, PepperoniPizza, Pizza, VeggiePizza } from "./Pizza";

export class SimplePizzaFactory {

    public constructor() { }

    createPizza(type: PizzaType): Pizza {

        if (type === 'Cheese') {
            return new CheesePizza();
        }
        if (type === 'Pepperoni') {
            return new PepperoniPizza();
        }
        if (type === 'Clam') {
            return new ClamPizza();
        }
        if (type === 'Veggie') {
            return new VeggiePizza();
        }

        return new CheesePizza();
    }

}