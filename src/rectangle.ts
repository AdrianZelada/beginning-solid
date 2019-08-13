export class Rectangle {
    public height: number;
    public width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    public static SumAreas(rectangles: Array<Rectangle>) {
        let area = 0;
        for(let rectangle of rectangles) {
            area += rectangle.width * rectangle.height;
        }
        return area;
    }

    public static SumPerimetros(rectangles: Array<Rectangle>) {
        let perimetro = 0;
        for(let rectangle of rectangles) {
            perimetro += (rectangle.width*2) + (rectangle.height*2);
        }
        return perimetro;
    }

}