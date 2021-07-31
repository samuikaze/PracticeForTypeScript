class CircleGrometry {
  private static PI: number = 3.1415926535;

  constructor(public radius: number) {}

  static area(radius: number): number {
    return CircleGrometry.PI * (radius ** 2);
  }

  static circumference(radius: number): number {
    return 2 * CircleGrometry.PI * radius;
  }

  static getPI(): number {
    return CircleGrometry.PI;
  }
}

console.log(`
  ${CircleGrometry.getPI()}
  ${CircleGrometry.area(2)}
  ${CircleGrometry.circumference(2)}
`);
