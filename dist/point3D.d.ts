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
    fromArray(arr: number[]): void;
    fromObject(obj: {
        x: number;
        y: number;
        z: number;
    }): void;
    fromString(str: string): void;
    fromPoints(x: number, y: number, z: number): void;
    multiply(val: number): void;
    add(val: number): void;
    add_point(vec: Point3D): void;
    normalize(val: number): void;
    integerDivide(val: number): void;
    modulus(val: number): void;
    equals(val: Point3D): boolean;
    average_with(point: Point3D, t: number): void;
    multiply_new(val: number): Point3D;
    add_new(val: number): Point3D;
    add_point_new(point: Point3D): Point3D;
    integerDivide_new(val: number): Point3D;
    modulus_new(val: number): Point3D;
    average_with_new(point: Point3D, t: number): Point3D;
}
