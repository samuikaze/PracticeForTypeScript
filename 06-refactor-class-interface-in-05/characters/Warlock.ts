import Role from "./Role";
import Character from "./Character";
import WarlockEquipmentFactory from "../equipments/WarlockEquipmentFactory";

export default class Warlock extends Character {
  constructor(name: string) {
    let WEF = new WarlockEquipmentFactory();

    super(
      name,
      Role.WARLOCK,
      WEF.createWeapon(),
      WEF.createArmour(),
    );
  }
}
