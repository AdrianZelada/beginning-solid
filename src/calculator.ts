import {GeometricOperations} from "./operations/geometric-operations";
import {AreaOperation} from "./operations/area-operations";
import {PerimeterOperation} from "./operations/perimeter-operations";

export class Calculator {

    sumArea: number;
    sumPerimeter: number;

    constructor(){}

    calc(shapes: Array<GeometricOperations>) {
        this.sumArea = AreaOperation.sum(shapes);
        this.sumPerimeter = PerimeterOperation.sum(shapes);
    }

}