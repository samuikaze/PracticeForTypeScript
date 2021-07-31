class CircleGrometryV2 {
  private static PI: number = 3.1415926535;

  constructor(public radius: number) {}

  get area(): number {
    return CircleGrometryV2.PI * (this.radius ** 2);
  }

  set area(value: number) {
    this.radius = (value / CircleGrometryV2.PI) ** 0.5;
  }

  public circumference(): number {
    return 2 * CircleGrometryV2.PI * this.radius;
  }

  public static getPI(): number {
    return CircleGrometryV2.PI;
  }

  public getRadius(): number {
    return this.radius;
  }
}

const randomCircle = new CircleGrometryV2(2);

console.log(randomCircle.area);

randomCircle.area = CircleGrometryV2.getPI() * (5 ** 2);

console.log(`
  Radius: ${randomCircle.getRadius()}
  Area: ${randomCircle.area}
`);
