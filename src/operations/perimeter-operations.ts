import {Rectangle} from "../rectangle";

export namespace PerimeterOperation {
    export function sum(rectangles: Array<Rectangle>) {
        let perimetro = 0;
        for(let rectangle of rectangles) {
            perimetro += (rectangle.width*2) + (rectangle.height*2);
        }
        return perimetro;
    }
}