import { ArrayND } from "./arrayND";
import { PossibleArrays, ArrayContructor } from "./arrayND.types";
export * from './arrayND';
export * from './point3D';
export declare class CubicArray<T extends PossibleArrays> extends ArrayND<T> {
    constructor(size: number, arrayConstructor: ArrayContructor<T>);
}
export declare class SquareArray<T extends PossibleArrays> extends ArrayND<T> {
    constructor(size: number, arrayConstructor: ArrayContructor<T>);
}
