import {ArrayND} from "./arrayND"
import { PossibleArrays, ArrayContructor} from "./arrayND.types"

export * from './multi-map'
export * from './arrayND'
export * from './point3D'

export class CubicArray<T extends PossibleArrays> extends ArrayND<T> {
    constructor( size : number, arrayConstructor : ArrayContructor<T> ) { 
        super(size, 3, arrayConstructor) 
    }
}

export class SquareArray<T extends PossibleArrays> extends ArrayND<T> {
    constructor( size : number, arrayConstructor : ArrayContructor<T> ) { 
        super(size, 2, arrayConstructor) 
    }
}

