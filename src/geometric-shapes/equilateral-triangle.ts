import {GeometricOperations} from "../operations/geometric-operations";

export class EquilateralTriangle implements GeometricOperations{
    public side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return (Math.sqrt(3) * Math.pow(this.side,2))/ 4;
    }

    perimeter(): number {
        return this.side * 3;
    }
}