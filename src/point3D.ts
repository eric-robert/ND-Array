// Stores a point in 3D space

export class Point3D {

    // Private constructor
    private constructor ( public x : number, public y : number, public z : number) {} 

    // Creation

    static fromPoints (x : number, y : number, z : number) : Point3D {
        return new Point3D(x, y, z)
    }
    static fromArray (arr : number[]) : Point3D {
        return new Point3D(arr[0], arr[1], arr[2])
    }
    static fromObject (obj : {x : number, y : number, z : number}) : Point3D {
        return new Point3D(obj.x, obj.y, obj.z)
    }
    static fromString ( str : string ) : Point3D {
        const arr = str.split(',')
        return new Point3D(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]))
    }

    // Export
    
    toArray () : number[] {
        return [this.x, this.y, this.z]
    }
    toObject () {
        return { x: this.x, y: this.y, z: this.z }
    }
    toString () : string {
        return `${this.x},${this.y},${this.z}`
    }
    toCopy () {
        return new Point3D(this.x, this.y, this.z)
    }

    // Edit Values

    multiply ( val : number ) {
        this.x *= val
        this.y *= val
        this.z *= val
    }

    add ( val : number ) {
        this.x += val
        this.y += val
        this.z += val
    }

    normalize ( val : number ) {
        this.multiply(val / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z))
    }

    integerDivide ( val : number ){
        this.x = Math.floor(this.x / val)
        this.y = Math.floor(this.y / val)
        this.z = Math.floor(this.z / val)
    }

    modulus ( val : number ){
        this.x = (this.x % val + val) % val
        this.y = (this.y % val + val) % val
        this.z = (this.z % val + val) % val
    }

    equals ( val : Point3D ) {
        return this.x === val.x && this.y === val.y && this.z === val.z
    }

    average_with (point : Point3D, t : number ) {
        this.x = this.x * (1 - t) + point.x * t
        this.y = this.y * (1 - t) + point.y * t
        this.z = this.z * (1 - t) + point.z * t
    }


    // Edit new values

    multiply_new ( val : number ) {
        return new Point3D(this.x * val, this.y * val, this.z * val)
    }

    add_new ( val : number ) {
        return new Point3D(this.x + val, this.y + val, this.z + val)
    }

    integerDivide_new ( val : number ){
        return new Point3D(Math.floor(this.x / val), Math.floor(this.y / val), Math.floor(this.z / val))
    }

    modulus_new ( val : number ){
        return new Point3D((this.x % val + val) % val, (this.y % val + val) % val, (this.z % val + val) % val)
    }

    average_with_new (point : Point3D, t : number ) {
        return new Point3D(this.x * (1 - t) + point.x * t, this.y * (1 - t) + point.y * t, this.z * (1 - t) + point.z * t)
    }


}