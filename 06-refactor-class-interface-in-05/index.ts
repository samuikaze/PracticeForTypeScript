import Swordsman from './characters/Swordsman';
import Warlock from './characters/Warlock';
import Weapons from './weapons/Weapons';
import WeaponFactory from './weapons/WeaponFactory';

let swordsman = new Swordsman('Maxwell');
let warlock = new Warlock('Martin');

const weaponFactory = WeaponFactory.getInstance();
const dagger = weaponFactory.createWeapon(Weapons.DAGGER);
const bw = weaponFactory.createWeapon(Weapons.BASIC_WAND);

swordsman.introduce();
warlock.introduce();

swordsman.attack(warlock);
warlock.attack(swordsman);

swordsman.equip(dagger);
swordsman.attack(warlock);

try {
  swordsman.equip(bw);
} catch (err) {
  console.log(err);
}
