import MagicAttack from "../abilities/MagicAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicWand extends Weapon {
  public readonly name = 'Basic Wand';

  public attackStrategy = new MagicAttack();

  public availableRoles = [
    Role.WARLOCK
  ];
}
