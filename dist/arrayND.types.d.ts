export declare type PossibleArrays = Uint8Array | Uint16Array | Uint32Array;
export interface ArrayContructor<T extends PossibleArrays> {
    new (size: number): T;
}
