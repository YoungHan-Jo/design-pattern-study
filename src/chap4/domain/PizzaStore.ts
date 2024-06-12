import { PizzaType } from "../constants/PizzaType";
import { ChicagoStyleCheesePizza, NYStyleCheesePizza, Pizza } from "./Pizza";

export abstract class PizzaStore {

    public orderPizza(type: PizzaType): Pizza {
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    abstract createPizza(type: PizzaType): Pizza
}

export class NYStylePizzaStore extends PizzaStore {
    createPizza(type: PizzaType): Pizza {
        if (type === PizzaType.Cheese) {
            return new NYStyleCheesePizza();
        }
    }
}

export class ChicagoStylePizzaStore extends PizzaStore {
    createPizza(type: PizzaType): Pizza {
        if (type === PizzaType.Cheese) {
            return new ChicagoStyleCheesePizza();
        }
    }
}