import { PizzaType } from '../constants/PizzaType';
import {
  CheesePizza,
  ClamPizza,
  PepperoniPizza,
  Pizza,
  VeggiePizza,
} from './Pizza';
import {
  ChicagoPizzaIngredientFactory,
  NYPizzaIngredientFactory,
} from './ingredients';

export abstract class PizzaStore {
  public orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: PizzaType): Pizza;
}

export class NYStylePizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new NYPizzaIngredientFactory();

    if (type === PizzaType.Cheese) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('NY Style Sauce and Cheese Pizza');
    }
    if (type === PizzaType.Veggie) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('NY Style Veggie Pizza');
    }
    if (type === PizzaType.Clam) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('NY Style Clam Pizza');
    }
    if (type === PizzaType.Pepperoni) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('NY Style Pepperoni Pizza');
    }

    return pizza;
  }
}

export class ChicagoStylePizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (type === PizzaType.Cheese) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('Chicago Style Deep Dish Cheese Pizza');
    }
    if (type === PizzaType.Veggie) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('Chicago Style Veggie Pizza');
    }
    if (type === PizzaType.Clam) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('Chicago Style Clam Pizza');
    }
    if (type === PizzaType.Pepperoni) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    }

    return pizza;
  }
}
