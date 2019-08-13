import {Rectangle} from "./rectangle";
import {AreaOperation} from "./operations/area-operations";
import {PerimeterOperation} from "./operations/perimeter-operations";

function main () {
    let rectangles = [
      new Rectangle(10, 5),
      new Rectangle(8, 7),
      new Rectangle(2, 5),
      new Rectangle(9, 3),
    ];

    let sumAreas = AreaOperation.sum(rectangles);
    let sumPerimetros = PerimeterOperation.sum(rectangles);

    console.log('Suma de Areas', sumAreas);
    console.log('Suma de Perimetros', sumPerimetros);
}

main();