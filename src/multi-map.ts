/*
    Multimap is a map that can have multiple values for a key and multiple keys for a value.
*/

export class MultiMap< K, V extends {id : number}> {

    // Lookup for all entities
    private all_values : Map<number, V> = new Map()

    // Lookup for all values subscribed to a key
    private lookupByKey : Map<K, Set<V>> = new Map()

    // Lookup for all values and values it associated with a key
    private lookupByValue : Map<V, Set<K>> = new Map()

    // Utilites
    private add_singular ( key : K, value : V ) {
        const entity_value = this.all_values.get(value.id)
        if (!entity_value) this.all_values.set(value.id, value)

        const valueList = this.lookupByKey.get(key)
        if (!valueList) this.lookupByKey.set(key, new Set([value]))
        else valueList.add(value)

        const entityList = this.lookupByValue.get(value)
        if (!entityList) this.lookupByValue.set(value, new Set([key]))
        else entityList.add(key)
    }

    public add ( key : K | K[], value : V | V[]) {
        
        const key_array = Array.isArray(key) ? key : [key]
        const value_array = Array.isArray(value) ? value : [value]

        key_array.forEach( key => {
            value_array.forEach( value => {
                this.add_singular(key, value)
            })
        })
    }

    public removePair (key : K, value : V) {
        
        this.lookupByKey.get(key).delete(value)
        this.lookupByValue.get(value).delete(key)

        const lastKey = this.lookupByKey.get(key).size === 0
        const lastValue = this.lookupByValue.get(value).size === 0

        if (lastKey) this.lookupByKey.delete(key)
        if (lastValue) this.lookupByValue.delete(value)
        if (lastKey && lastValue) this.all_values.delete(value.id)

    }

    public deleteKey ( keys : K | K[] ) {
        const key_array = Array.isArray(keys) ? keys : [keys]
        key_array.forEach( key => {
            const valueList = this.lookupByKey.get(key)
            if (valueList) {
                valueList.forEach( value => {
                    this.removePair(key, value)
                })
            }  
        })
    }

    public deleteValue ( values : V | V[] ) {
        const value_array = Array.isArray(values) ? values : [values]
        value_array.forEach( value => {
            const keyList = this.lookupByValue.get(value)
            if (keyList) {
                keyList.forEach( key => {
                    this.removePair(key, value)
                })
            }
        })
    }


    public deleteID ( ids : number | number[] ) {

        const id_array = Array.isArray(ids) ? ids : [ids]
        id_array.forEach( id => {
            const value = this.all_values.get(id)
            const keyList = this.lookupByValue.get(value)
            if (keyList) {
                keyList.forEach( key => {
                    this.removePair(key, value)
                })
            }
        })

    }

    // Getters

    get_byID ( id : number ) {
        return this.all_values.get(id)
    }

    get_valuesByKey ( key : K ) { 
        return this.lookupByKey.get(key) || [] 
    }

    get_keysByValue ( value : V ) {
        return this.lookupByValue.get(value) || []
    }

    get_allValues () {
        return Array.from(this.all_values.values())
    }

    get_allKeys () {
        return Array.from(this.lookupByKey.keys())
    }

    get_valuesCount () {
        return this.all_values.size
    }

}
