namespace MyMath {
  export const PI = 3.14159;

  export function AreaOfCircle(radius: number) {
    return PI * radius ** 2;
  }

  export function CircumferenceOfCircle(radius: number) {
    return 2 * PI * radius;
  }

  export function CircumferenceOfRectangle(width: number, height: number) {
    return 2 * (width + height);
  }
}

console.log(`
  pi: ${MyMath.PI}
  circle area: ${MyMath.AreaOfCircle(3)}
  circle circumference: ${MyMath.CircumferenceOfCircle(3)}
  rectangle area: ${MyMath.CircumferenceOfRectangle(3, 6)}
`);
