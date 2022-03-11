export declare class Point3D {
    x: number;
    y: number;
    z: number;
    private constructor();
    static fromPoints(x: number, y: number, z: number): Point3D;
    static fromArray(arr: number[]): Point3D;
    static fromObject(obj: {
        x: number;
        y: number;
        z: number;
    }): Point3D;
    static fromString(str: string): Point3D;
    toArray(): number[];
    toObject(): {
        x: number;
        y: number;
        z: number;
    };
    toString(): string;
    toCopy(): Point3D;
    multiply(val: number): void;
    add(val: number): void;
    normalize(val: number): void;
    integerDivide(val: number): void;
    modulus(val: number): void;
    equals(val: Point3D): boolean;
    average_with(point: Point3D, t: number): void;
}
