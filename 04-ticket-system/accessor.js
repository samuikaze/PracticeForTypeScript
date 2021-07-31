"use strict";
var CircleGrometryV2 = /** @class */ (function () {
    function CircleGrometryV2(radius) {
        this.radius = radius;
    }
    Object.defineProperty(CircleGrometryV2.prototype, "area", {
        get: function () {
            return CircleGrometryV2.PI * (Math.pow(this.radius, 2));
        },
        set: function (value) {
            this.radius = Math.pow((value / CircleGrometryV2.PI), 0.5);
        },
        enumerable: false,
        configurable: true
    });
    CircleGrometryV2.prototype.circumference = function () {
        return 2 * CircleGrometryV2.PI * this.radius;
    };
    CircleGrometryV2.getPI = function () {
        return CircleGrometryV2.PI;
    };
    CircleGrometryV2.prototype.getRadius = function () {
        return this.radius;
    };
    CircleGrometryV2.PI = 3.1415926535;
    return CircleGrometryV2;
}());
var randomCircle = new CircleGrometryV2(2);
console.log(randomCircle.area);
randomCircle.area = CircleGrometryV2.getPI() * (Math.pow(5, 2));
console.log("\n  Radius: " + randomCircle.getRadius() + "\n  Area: " + randomCircle.area + "\n");
