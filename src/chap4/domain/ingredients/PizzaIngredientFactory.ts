import {
  BlackOlives,
  Cheese,
  Clams,
  Dough,
  EggPlant,
  FreshClams,
  FrozenClams,
  Garlic,
  MarinaraSauce,
  MozzarellaCheese,
  Mushroom,
  Onion,
  Pepperoni,
  PlumTomatoSauce,
  RedPepper,
  ReggianoCheese,
  Sauce,
  SlicedPepperoni,
  Spinach,
  ThickCrustDough,
  ThinCrustDough,
  Veggies,
} from './';

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }
  createSauce(): Sauce {
    return new MarinaraSauce();
  }
  createCheese(): Cheese {
    return new ReggianoCheese();
  }
  createVeggies(): Veggies[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createClam(): Clams {
    return new FreshClams();
  }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }
  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }
  createCheese(): Cheese {
    return new MozzarellaCheese();
  }
  createVeggies(): Veggies[] {
    return [new BlackOlives(), new Spinach(), new EggPlant()];
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  createClam(): Clams {
    return new FrozenClams();
  }
}
