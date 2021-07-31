let myName: string = 'Maxwell';
let age: number = 20;
let hasPet: boolean = false;
let nothing: undefined = undefined;
let nothingLiterally: string | null = null;

nothingLiterally = 'TestForString';

console.log(`
  Type of variables:
  myName: ${typeof myName}
  age: ${typeof age}
  hasPet: ${typeof hasPet}
  nothing: ${typeof nothing}
  nothingLIterally: ${typeof nothingLiterally}
`);
