import Weapons from "./Weapons";
import Weapon from "./Weapon";

import BasicSwords from "./BasicSwords";
import BasicWand from "./BasicWand";
import Dagger from "./Dagger";

export default class WeaponFactory {
  private static instance: WeaponFactory;

  private constructor() {}

  public static getInstance(): WeaponFactory {
    if (!WeaponFactory.instance) {
      WeaponFactory.instance = new WeaponFactory();
    }

    return WeaponFactory.instance;
  }

  public createWeapon(type: Weapons): Weapon {
    switch (type) {
      case Weapons.BASIC_SWORD:
        return new BasicSwords();
      case Weapons.BASIC_WAND:
        return new BasicWand();
      case Weapons.DAGGER:
        return new Dagger();
      default:
        throw new Error(`${Weapons[type]} is not registered!`);
    }
  }
}
