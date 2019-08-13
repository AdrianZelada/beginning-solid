import {GeometricOperations} from "./geometric-operations";

export namespace PerimeterOperation {
    export function sum(shapes: Array<GeometricOperations>) {
        let perimetro = 0;
        for(let shape of shapes) {
            perimetro += shape.perimeter();
        }
        return perimetro;
    }
}