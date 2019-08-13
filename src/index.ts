import {Rectangle} from "./geometric-shapes/rectangle";
import {AreaOperation} from "./operations/area-operations";
import {PerimeterOperation} from "./operations/perimeter-operations";
import {EquilateralTriangle} from "./geometric-shapes/equilateral-triangle";

function main () {
    let shapes = [
      new Rectangle(10, 5),
      new EquilateralTriangle(8),
      new Rectangle(2, 5),
      new Rectangle(9, 3),
      new EquilateralTriangle(3)
    ];

    let sumAreas = AreaOperation.sum(shapes);
    let sumPerimetros = PerimeterOperation.sum(shapes);

    console.log('Suma de Areas', sumAreas);
    console.log('Suma de Perimetros', sumPerimetros);
}

main();