"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Role;
(function (Role) {
    // 劍士
    Role["SWORDSMAN"] = "Swordsman";
    // 術士
    Role["WARLOCK"] = "Warlock";
    // 攔路強盜
    Role["HIGHWAYMAN"] = "Highwayman";
    // 賞金獵人
    Role["BOUNTY_HUNTER"] = "BountyHunter";
    Role["MONSTER"] = "Monster";
})(Role || (Role = {}));
;
var Character = /** @class */ (function () {
    function Character(name, role) {
        this.name = name;
        this.role = role;
        this.health = 50;
        this.mana = 10;
        this.strength = 10;
        this.defense = 5;
    }
    Character.prototype.attack = function (target) {
        var verb;
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
                throw new Error(this.role + " does not exist!");
        }
        console.log(this.name + " is " + verb + " " + target.name);
    };
    return Character;
}());
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.role = Role.MONSTER;
    }
    Monster.prototype.attack = function (target) {
        console.log(this.name + " is attacking the " + target.role + " - " + target.name);
    };
    return Monster;
}());
var BountyHunter = /** @class */ (function (_super) {
    __extends(BountyHunter, _super);
    function BountyHunter(name) {
        var _this = _super.call(this, name, Role.BOUNTY_HUNTER) || this;
        _this.hostages = [];
        return _this;
    }
    BountyHunter.prototype.capture = function (target, successRate) {
        var randomNumber = Math.random();
        var message;
        var targetTitle = target.name + " the " + target.role;
        if (randomNumber > (1 - successRate)) {
            this.hostages = __spreadArray(__spreadArray([], this.hostages), [target]);
            message = this.name + " has captured " + targetTitle;
        }
        else {
            message = this.name + " failed to capture " + targetTitle;
        }
        console.log(message);
    };
    BountyHunter.prototype.sellHostages = function () {
        var totalPrice = this.hostages.length * 1000;
        var hostagesInfo = this.hostages
            .map(function (hostage) { return hostage.name + " the " + hostage.role; })
            .join('\n');
        console.log("\n      " + this.name + " sells all the hostages, including: " + hostagesInfo + "\n\n      Receive Gold: $" + totalPrice + "\n    ");
        this.hostages = [];
    };
    return BountyHunter;
}(Character));
/* let aHumanCharacter = new Character('Maxwell', Role.SWORDSMAN);
let aMonster = new Monster('Sticky Slime');

aHumanCharacter.attack(aMonster);
aMonster.attack(aHumanCharacter); */
var bountyHunter = new BountyHunter('Martin');
var wantedCharacter = new Character('Maxwell', Role.HIGHWAYMAN);
var wantedMonster = new Monster('Eikthyrnir');
var desperado = new Character('Legendary Joe', Role.HIGHWAYMAN);
bountyHunter.capture(wantedCharacter, 1);
bountyHunter.capture(wantedMonster, 0.5);
bountyHunter.capture(desperado, 0.01);
bountyHunter.sellHostages();
