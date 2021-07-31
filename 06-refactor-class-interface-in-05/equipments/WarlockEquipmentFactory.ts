import BasicArmour from "../armours/BasicArmour";
import BasicWand from "../weapons/BasicWand";
import EquipmentFactory from "./EquipmentFactory";

class WarlockEquipmentFactory implements EquipmentFactory {
  public createWeapon() {
    return new BasicWand();
  }

  public createArmour() {
    return new BasicArmour();
  }
}

export default WarlockEquipmentFactory;
