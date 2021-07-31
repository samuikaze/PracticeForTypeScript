import Attack from "../abilities/Attack";
import MeleeAttack from "../abilities/MeleeAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";
import Equipment from "../equipments/Equipment";
import Equipments from "../equipments/Equipments";

export default abstract class Weapon implements Equipment {
  abstract name: string;

  public type = Equipments.WEAPON;

  abstract availableRoles: Role[] = [];

  abstract attackStrategy = new MeleeAttack();

  public switchAttackStrategy(type: Attack) {
    this.attackStrategy = type;
  }

  public attack(self: Character, target: Character) {
    this.attackStrategy.attack(self, target);
  }
}
