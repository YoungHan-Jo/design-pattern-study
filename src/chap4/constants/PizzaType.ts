export const PizzaType = {
  Cheese: 'Cheese',
  Pepperoni: 'Pepperoni',
  Clam: 'Clam',
  Veggie: 'Veggie',
} as const;

export type PizzaType = (typeof PizzaType)[keyof typeof PizzaType];
