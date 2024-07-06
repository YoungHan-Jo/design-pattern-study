import {
  Cheese,
  Clams,
  Dough,
  Pepperoni,
  PizzaIngredientFactory,
  Sauce,
  Veggies,
} from './ingredients';

export abstract class Pizza {
  protected name: string;
  protected dough: Dough;
  protected sauce: Sauce;
  protected veggies: Veggies[];
  protected cheese: Cheese;
  protected pepperoni: Pepperoni;
  protected clams: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('Baking for 25 minutes at 350');
  }
  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }
  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
}

export class CheesePizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory;

  public constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

export class PepperoniPizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory;

  public constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}

export class VeggiePizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory;

  public constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
  }
}

export class ClamPizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory;

  public constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clams = this.ingredientFactory.createClam();
  }
}
