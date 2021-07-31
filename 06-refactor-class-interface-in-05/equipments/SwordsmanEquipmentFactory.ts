import BasicArmour from "../armours/BasicArmour";
import BasicSwords from "../weapons/BasicSwords";
import EquipmentFactory from "./EquipmentFactory";

class SwordsmanEquipmentFactory implements EquipmentFactory {
  public createWeapon() {
    return new BasicSwords();
  }

  public createArmour() {
    return new BasicArmour();
  }
}

export default SwordsmanEquipmentFactory;
