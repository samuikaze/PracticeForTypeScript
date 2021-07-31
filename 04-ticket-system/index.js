"use strict";
var CircleGrometry = /** @class */ (function () {
    function CircleGrometry(radius) {
        this.radius = radius;
    }
    CircleGrometry.area = function (radius) {
        return CircleGrometry.PI * (Math.pow(radius, 2));
    };
    CircleGrometry.circumference = function (radius) {
        return 2 * CircleGrometry.PI * radius;
    };
    CircleGrometry.getPI = function () {
        return CircleGrometry.PI;
    };
    CircleGrometry.PI = 3.1415926535;
    return CircleGrometry;
}());
console.log("\n  " + CircleGrometry.getPI() + "\n  " + CircleGrometry.area(2) + "\n  " + CircleGrometry.circumference(2) + "\n");
