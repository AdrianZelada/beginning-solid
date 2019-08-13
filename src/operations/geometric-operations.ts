export interface OperationArea {
    area():number;
}

export interface OperationPerimeter {
    perimeter():number;
}

export interface GeometricOperations extends OperationArea, OperationPerimeter {}