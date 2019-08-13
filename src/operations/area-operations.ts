import {Rectangle} from "../rectangle";

export namespace AreaOperation {
    export function sum(rectangles: Array<Rectangle>) {
        let area = 0;
        for(let rectangle of rectangles) {
            area += rectangle.width * rectangle.height;
        }
        return area;
    }
}