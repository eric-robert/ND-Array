"use strict";
/*
    Multimap is a map that can have multiple values for a key and multiple keys for a value.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiMap = void 0;
class MultiMap {
    constructor() {
        // Lookup for all entities
        this.all_values = new Map();
        // Lookup for all values subscribed to a key
        this.lookupByKey = new Map();
        // Lookup for all values and values it associated with a key
        this.lookupByValue = new Map();
    }
    // Utilites
    add_singular(key, value) {
        const entity_value = this.all_values.get(value.id);
        if (!entity_value)
            this.all_values.set(value.id, value);
        const valueList = this.lookupByKey.get(key);
        if (!valueList)
            this.lookupByKey.set(key, new Set([value]));
        else
            valueList.add(value);
        const entityList = this.lookupByValue.get(value);
        if (!entityList)
            this.lookupByValue.set(value, new Set([key]));
        else
            entityList.add(key);
    }
    add(key, value) {
        const key_array = Array.isArray(key) ? key : [key];
        const value_array = Array.isArray(value) ? value : [value];
        key_array.forEach(key => {
            value_array.forEach(value => {
                this.add_singular(key, value);
            });
        });
    }
    removePair(key, value) {
        this.lookupByKey.get(key).delete(value);
        this.lookupByValue.get(value).delete(key);
        const lastKey = this.lookupByKey.get(key).size === 0;
        const lastValue = this.lookupByValue.get(value).size === 0;
        if (lastKey)
            this.lookupByKey.delete(key);
        if (lastValue)
            this.lookupByValue.delete(value);
        if (lastKey && lastValue)
            this.all_values.delete(value.id);
    }
    deleteKey(keys) {
        const key_array = Array.isArray(keys) ? keys : [keys];
        key_array.forEach(key => {
            const valueList = this.lookupByKey.get(key);
            if (valueList) {
                valueList.forEach(value => {
                    this.removePair(key, value);
                });
            }
        });
    }
    deleteValue(values) {
        const value_array = Array.isArray(values) ? values : [values];
        value_array.forEach(value => {
            const keyList = this.lookupByValue.get(value);
            if (keyList) {
                keyList.forEach(key => {
                    this.removePair(key, value);
                });
            }
        });
    }
    deleteID(ids) {
        const id_array = Array.isArray(ids) ? ids : [ids];
        id_array.forEach(id => {
            const value = this.all_values.get(id);
            const keyList = this.lookupByValue.get(value);
            if (keyList) {
                keyList.forEach(key => {
                    this.removePair(key, value);
                });
            }
        });
    }
    // Getters
    get_byID(id) {
        return this.all_values.get(id);
    }
    get_valuesByKey(key) {
        return this.lookupByKey.get(key) || [];
    }
    get_keysByValue(value) {
        return this.lookupByValue.get(value) || [];
    }
    get_allValues() {
        return Array.from(this.all_values.values());
    }
    get_allKeys() {
        return Array.from(this.lookupByKey.keys());
    }
    get_valuesCount() {
        return this.all_values.size;
    }
}
exports.MultiMap = MultiMap;
