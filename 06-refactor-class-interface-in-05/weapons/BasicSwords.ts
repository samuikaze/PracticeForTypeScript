import MeleeAttack from "../abilities/MeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicSwords extends Weapon {
  public readonly name = 'Basic Sword';

  public attackStrategy = new MeleeAttack();

  public availableRoles = [
    Role.SWORDSMAN,
    Role.HIGHWAYMAN
  ];
}
