"use strict";
// Stores a point in 3D space
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3D = void 0;
class Point3D {
    // Private constructor
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // Creation
    static fromPoints(x, y, z) {
        return new Point3D(x, y, z);
    }
    static fromArray(arr) {
        return new Point3D(arr[0], arr[1], arr[2]);
    }
    static fromObject(obj) {
        return new Point3D(obj.x, obj.y, obj.z);
    }
    static fromString(str) {
        const arr = str.split(',');
        return new Point3D(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]));
    }
    // Export
    toArray() {
        return [this.x, this.y, this.z];
    }
    toObject() {
        return { x: this.x, y: this.y, z: this.z };
    }
    toString() {
        return `${this.x},${this.y},${this.z}`;
    }
    toCopy() {
        return new Point3D(this.x, this.y, this.z);
    }
    fromArray(arr) {
        this.x = arr[0];
        this.y = arr[1];
        this.z = arr[2];
    }
    fromObject(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.z = obj.z;
    }
    fromString(str) {
        const arr = str.split(',');
        this.x = parseInt(arr[0]);
        this.y = parseInt(arr[1]);
        this.z = parseInt(arr[2]);
    }
    fromPoints(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // Edit Values
    multiply(val) {
        this.x *= val;
        this.y *= val;
        this.z *= val;
    }
    add(val) {
        this.x += val;
        this.y += val;
        this.z += val;
    }
    add_point(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
    }
    normalize(val) {
        this.multiply(val / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z));
    }
    integerDivide(val) {
        this.x = Math.floor(this.x / val);
        this.y = Math.floor(this.y / val);
        this.z = Math.floor(this.z / val);
    }
    modulus(val) {
        this.x = (this.x % val + val) % val;
        this.y = (this.y % val + val) % val;
        this.z = (this.z % val + val) % val;
    }
    equals(val) {
        return this.x === val.x && this.y === val.y && this.z === val.z;
    }
    average_with(point, t) {
        this.x = this.x * (1 - t) + point.x * t;
        this.y = this.y * (1 - t) + point.y * t;
        this.z = this.z * (1 - t) + point.z * t;
    }
    // Edit new values
    multiply_new(val) {
        return new Point3D(this.x * val, this.y * val, this.z * val);
    }
    add_new(val) {
        return new Point3D(this.x + val, this.y + val, this.z + val);
    }
    add_point_new(point) {
        return new Point3D(this.x + point.x, this.y + point.y, this.z + point.z);
    }
    integerDivide_new(val) {
        return new Point3D(Math.floor(this.x / val), Math.floor(this.y / val), Math.floor(this.z / val));
    }
    modulus_new(val) {
        return new Point3D((this.x % val + val) % val, (this.y % val + val) % val, (this.z % val + val) % val);
    }
    average_with_new(point, t) {
        return new Point3D(this.x * (1 - t) + point.x * t, this.y * (1 - t) + point.y * t, this.z * (1 - t) + point.z * t);
    }
}
exports.Point3D = Point3D;
