import {GeometricOperations} from "./geometric-operations";

export namespace AreaOperation {
    export function sum(shapes: Array<GeometricOperations>) {
        let area = 0;
        for(let shape of shapes) {
            area += shape.area();
        }
        return area;
    }
}