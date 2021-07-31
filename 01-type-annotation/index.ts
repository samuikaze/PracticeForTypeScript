let canBeNullableString: string;

canBeNullableString = 'hello';

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = 'Assigned with string.';
absolutelyEitherNullOrString = null;

let info = {
  name: 'Maxwell',
  age: 20,
  hasPet: false,
};

let someone = {
  knows: undefined,
  identity: null,
}

let addition = function (param1: string, param2: string): string {
  return param1 + param2;
}

console.log(addition('3', '4'));

let numbers = [1, 2, 3, 4, 5];
let strings = ['test', 'string', 'array', 's', 3];

let miscellaneousArraysArray = [
  [1, 2, 3],
  ['Hello', 'World'],
  [true, true, 123, null],
  ['String', undefined],
];
