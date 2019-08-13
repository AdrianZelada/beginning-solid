import {Rectangle} from "./geometric-shapes/rectangle";
import {EquilateralTriangle} from "./geometric-shapes/equilateral-triangle";
import {Calculator} from "./calculator";

function main () {
    let shapes = [
      new Rectangle(10, 5),
      new EquilateralTriangle(8),
      new Rectangle(2, 5),
      new Rectangle(9, 3),
      new EquilateralTriangle(3)
    ];

    const calculator = new Calculator();
    calculator.calc(shapes);

    console.log('Suma de Areas', calculator.sumArea);
    console.log('Suma de Perimetros', calculator.sumPerimeter);
}

main();