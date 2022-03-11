import { ArrayContructor, PossibleArrays } from "./arrayND.types"

export class ArrayND<T extends PossibleArrays> {

    private array : T

    // All arrays are square
    constructor( private size : number, private dims : number, private arrayConstructor : ArrayContructor<T> ) {
        this.array = new arrayConstructor(size ** dims)
    }

    // Queries

    is_inBounds (...dims : number[]) : boolean { 
        for (let i = 0; i < this.dims; i++) {
            if (dims[i] < 0 || dims[i] >= this.size) return false
        }
        return true
    }

    // Access

    get_idByPos(...pos : number[]) : number {
        let index = 0
        for (let i = 0; i < this.dims; i++)
            index += pos[i] * this.size ** (this.dims - i - 1)
        return index
    }
    
    get_posByID(id : number) : number[] {
        const resp = []
        const s = this.get_size()
        for (let i = 0; i < this.dims; i++){
            resp.push(Math.floor(
                (id / s ** (this.dims - i - 1)) % s
            ))
        }
        return resp
    }

    get_byID(id : number) : number {
        return this.array[id]
    }

    get_byPos(...pos : number[]) : number {
        if (!this.is_inBounds(...pos)) return 0
        return this.array[this.get_idByPos(...pos)]
    }

    get_count () : number {
        return this.size ** this.dims
    }

    get_size () : number {
        return this.size
    }

    get_array() : T {
        return this.array
    }

    // Setting

    set_by_id(id : number, value : number) {
        this.array[id] = value
    }

    set_by_pos(value : number, ...pos : number[])  {
        if (!this.is_inBounds(...pos)) return 
        this.array[this.get_idByPos(...pos)] = value
    }

    set_array(array : T) {
        this.array = array
    }
    

}