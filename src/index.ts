import {Rectangle} from "./rectangle";

function main () {
    let rectangles = [
      new Rectangle(10, 5),
      new Rectangle(8, 7),
      new Rectangle(2, 5),
      new Rectangle(9, 3),
    ];

    let sumAreas = Rectangle.SumAreas(rectangles);
    let sumPerimetros = Rectangle.SumPerimetros(rectangles);

    console.log('Suma de Areas', sumAreas);
    console.log('Suma de Perimetros', sumPerimetros);
}

main();