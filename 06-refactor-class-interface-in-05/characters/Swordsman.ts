import Role from "./Role";
import Character from "./Character";
import SwordsmanEquipmentFactory from "../equipments/SwordsmanEquipmentFactory";

export default class Swordsman extends Character {
  constructor(name: string) {
    let SEF = new SwordsmanEquipmentFactory();
    super(
      name,
      Role.SWORDSMAN,
      SEF.createWeapon(),
      SEF.createArmour(),
    );
  }
}
