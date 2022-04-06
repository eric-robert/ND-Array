export declare class MultiMap<K, V extends {
    id: number;
}> {
    private all_values;
    private lookupByKey;
    private lookupByValue;
    private add_singular;
    add(key: K | K[], value: V | V[]): void;
    removePair(key: K, value: V): void;
    deleteKey(keys: K | K[]): void;
    deleteValue(values: V | V[]): void;
    deleteID(ids: number | number[]): void;
    get_byID(id: number): V;
    get_valuesByKey(key: K): any[] | Set<V>;
    get_keysByValue(value: V): any[] | Set<K>;
    get_allValues(): V[];
    get_allKeys(): K[];
    get_valuesCount(): number;
}
