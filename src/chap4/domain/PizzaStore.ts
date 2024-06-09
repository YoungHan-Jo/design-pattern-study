import { PizzaType } from "../constants/PizzaType";
import { Pizza } from "./Pizza";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

export class PizzaStore {
    private factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    public orderPizza(type: PizzaType): Pizza {
        const pizza = this.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

}