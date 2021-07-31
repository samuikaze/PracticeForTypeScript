"use strict";
var canBeNullableString;
canBeNullableString = 'hello';
var absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'Assigned with string.';
absolutelyEitherNullOrString = null;
var info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
var someone = {
    knows: undefined,
    identity: null,
};
var addition = function (param1, param2) {
    return param1 + param2;
};
console.log(addition('3', '4'));
var numbers = [1, 2, 3, 4, 5];
var strings = ['test', 'string', 'array', 's', 3];
var miscellaneousArraysArray = [
    [1, 2, 3],
    ['Hello', 'World'],
    [true, true, 123, null],
    ['String', undefined],
];
