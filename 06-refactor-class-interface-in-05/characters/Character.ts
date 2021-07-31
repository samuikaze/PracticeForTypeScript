import Armour from '../armours/Armour';
import Equipment from '../equipments/Equipment';
import Weapon from '../weapons/Weapon';
import Role from'./Role';

export default class Character {

  constructor(
    public readonly name: string,
    public readonly role: Role,
    private weaponRef: Weapon,
    private armourRef: Armour,
  ) {}

  public introduce() {
    console.log(`
      Hi, I'm ${this.name} the ${this.role}!
    `);
  }

  public attack(target: Character) {
    this.weaponRef.attack(this, target);
  }

  public equip(equipment: Equipment) {
    const { availableRoles: roles } = equipment;

    if (
      roles.length === 0 ||
      roles.indexOf(this.role) !== -1
    ) {
      if (equipment instanceof Weapon) {
        this.weaponRef = equipment;
      } else if (equipment instanceof Armour) {
        this.armourRef = equipment;
      } else {
        throw new Error(`${this.role} cannot equip ${equipment.name}!`);
      }

      console.log(
        `${this.name} has equipped a ${equipment.type} - ${equipment.name}`
      );
    } else {
      throw new Error(`${this.role} cannot equip ${equipment.name}!`);
    }
  }
}
