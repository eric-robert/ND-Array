import { ArrayContructor, PossibleArrays } from "./arrayND.types";
export declare class ArrayND<T extends PossibleArrays> {
    private size;
    private dims;
    private arrayConstructor;
    private array;
    constructor(size: number, dims: number, arrayConstructor: ArrayContructor<T>);
    is_inBounds(...dims: number[]): boolean;
    get_idByPos(...pos: number[]): number;
    get_posByID(id: number): number[];
    get_byID(id: number): number;
    get_byPos(...pos: number[]): number;
    get_count(): number;
    get_size(): number;
    get_array(): T;
    set_by_id(id: number, value: number): void;
    set_by_pos(value: number, ...pos: number[]): void;
    set_array(array: T): void;
}
