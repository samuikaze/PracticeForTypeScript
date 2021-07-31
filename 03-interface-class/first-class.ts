interface UserInfo2 {
  /* name: string;
  age: number;
  hasPet: boolean; */

  printInfo(): void;
}

class CustomPersonInfo implements UserInfo2 {
  constructor(
    private name: string,
    private age: number,
    private hasPet: boolean
  ) {}

  public printInfo() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Owns a pet? ${this.hasPet}
    `);
  }
}

let person1 = new CustomPersonInfo('Maxwell', 20, false);
person1.printInfo();
