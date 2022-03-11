"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayND = void 0;
class ArrayND {
    // All arrays are square
    constructor(size, dims, arrayConstructor) {
        this.size = size;
        this.dims = dims;
        this.arrayConstructor = arrayConstructor;
        this.array = new arrayConstructor(size ** dims);
    }
    // Queries
    is_inBounds(...dims) {
        for (let i = 0; i < this.dims; i++) {
            if (dims[i] < 0 || dims[i] >= this.size)
                return false;
        }
        return true;
    }
    // Access
    get_idByPos(...pos) {
        let index = 0;
        for (let i = 0; i < this.dims; i++)
            index += pos[i] * this.size ** (this.dims - i - 1);
        return index;
    }
    get_posByID(id) {
        const resp = [];
        const s = this.get_size();
        for (let i = 0; i < this.dims; i++) {
            resp.push(Math.floor((id / s ** (this.dims - i - 1)) % s));
        }
        return resp;
    }
    get_byID(id) {
        return this.array[id];
    }
    get_byPos(...pos) {
        if (!this.is_inBounds(...pos))
            return 0;
        return this.array[this.get_idByPos(...pos)];
    }
    get_count() {
        return this.size ** this.dims;
    }
    get_size() {
        return this.size;
    }
    get_array() {
        return this.array;
    }
    // Setting
    set_by_id(id, value) {
        this.array[id] = value;
    }
    set_by_pos(value, ...pos) {
        if (!this.is_inBounds(...pos))
            return;
        this.array[this.get_idByPos(...pos)] = value;
    }
    set_array(array) {
        this.array = array;
    }
}
exports.ArrayND = ArrayND;
