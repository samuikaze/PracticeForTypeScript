"use strict";
var CustomPersonInfo = /** @class */ (function () {
    function CustomPersonInfo(name, age, hasPet) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    CustomPersonInfo.prototype.printInfo = function () {
        console.log("\n      Name: " + this.name + "\n      Age: " + this.age + "\n      Owns a pet? " + this.hasPet + "\n    ");
    };
    return CustomPersonInfo;
}());
var person1 = new CustomPersonInfo('Maxwell', 20, false);
person1.printInfo();
