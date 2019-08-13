import {GeometricOperations} from "../operations/geometric-operations";

export class Rectangle implements GeometricOperations{
    public height: number;
    public width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    area(): number {
        return this.height * this.width;
    }

    perimeter(): number {
        return (this.height * 2) + (this.width * 2);
    }
}