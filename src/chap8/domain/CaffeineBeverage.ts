export abstract class CaffeineBeverage {
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  private boilWater(): void {
    console.log('Boiling water');
  }

  private pourInCup(): void {
    console.log('Pouring into cup');
  }

  protected abstract brew(): void;

  protected abstract addCondiments(): void;

  // Hook method
  protected customerWantsCondiments(): boolean {
    return true;
  }
}
