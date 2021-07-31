enum Role {
  // 劍士
  SWORDSMAN = 'Swordsman',
  // 術士
  WARLOCK = 'Warlock',
  // 攔路強盜
  HIGHWAYMAN = 'Highwayman',
  // 賞金獵人
  BOUNTY_HUNTER = 'BountyHunter',
  MONSTER = 'Monster',
};

interface ICharacter {
  name: string;
  role: Role;
  attack(target: ICharacter): void;
}

interface IState {
  health: number;
  mana: number;
  strength: number;
  defense: number;
}

class Character implements ICharacter, IState {
  public health: number = 50;
  public mana: number = 10;
  public strength: number = 10;
  public defense: number = 5;

  constructor(
    public name: string,
    public role: Role
  ) {}

  public attack(target: ICharacter) {
    let verb: string;

    switch (this.role) {
      case Role.SWORDSMAN:
        verb = 'attacking';
        break;
      case Role.WARLOCK:
        verb = 'cursing';
        break;
      case Role.HIGHWAYMAN:
        verb = 'ambushing';
        break;
      case Role.BOUNTY_HUNTER:
        verb = 'threatening';
        break;
      default:
        throw new Error(`${this.role} does not exist!`);
    }

    console.log(`${this.name} is ${verb} ${target.name}`);
  }
}

class Monster implements ICharacter {
  public role = Role.MONSTER;

  constructor(
    public name: string
  ) {}

  public attack(target: ICharacter) {
    console.log(
      `${this.name} is attacking the ${target.role} - ${target.name}`
    );
  }
}

class BountyHunter extends Character {
  public hostages: ICharacter[] = [];

  constructor(name: string) {
    super(name, Role.BOUNTY_HUNTER);
  }

  public capture(target: ICharacter, successRate: number) {
    const randomNumber = Math.random();
    let message: string;
    let targetTitle = `${target.name} the ${target.role}`;

    if (randomNumber > (1 - successRate)) {
      this.hostages = [...this.hostages, target];

      message = `${this.name} has captured ${targetTitle}`;
    } else {
      message = `${this.name} failed to capture ${targetTitle}`;
    }

    console.log(message);
  }

  public sellHostages() {
    const totalPrice = this.hostages.length * 1000;
    const hostagesInfo = this.hostages
                             .map(hostage => `${hostage.name} the ${hostage.role}`)
                             .join('\n');

    console.log(`
      ${this.name} sells all the hostages, including: ${hostagesInfo}

      Receive Gold: $${totalPrice}
    `);

    this.hostages = [];
  }
}

/* let aHumanCharacter = new Character('Maxwell', Role.SWORDSMAN);
let aMonster = new Monster('Sticky Slime');

aHumanCharacter.attack(aMonster);
aMonster.attack(aHumanCharacter); */

let bountyHunter = new BountyHunter('Martin');
let wantedCharacter = new Character('Maxwell', Role.HIGHWAYMAN);
let wantedMonster = new Monster('Eikthyrnir');
let desperado = new Character('Legendary Joe', Role.HIGHWAYMAN);

bountyHunter.capture(wantedCharacter, 1);
bountyHunter.capture(wantedMonster, 0.5);
bountyHunter.capture(desperado, 0.01);

bountyHunter.sellHostages();
