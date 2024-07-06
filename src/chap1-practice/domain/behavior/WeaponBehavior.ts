export interface WeaponBehavior {
  useWeapon(): void;
}

export class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('KnifeBehavior useWeapon');
  }
}

export class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('BowAndArrowBehavior useWeapon');
  }
}

export class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('AxeBehavior useWeapon');
  }
}

export class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('SwordBehavior useWeapon');
  }
}
