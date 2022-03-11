# Cubic Array

A simple and lightweight multi-dimentional array library 


## Create a cubic array

Install :

```
yarn add cubic-array
```

Create a cubic array of size 10. Meaning a 10 x 10 x 10 array. 
Give the array a datatype by passing a constructor. Supports Uint8, 16, and 32

``` ts
import {CubicArray} from 'cubic-array'

const array = new CubicArray(10, Uint32Array)
```

Uses

```ts


    // Queries

    is_inBounds (...dims : number[]) : boolean {  }

    // Access

    get_idByPos(...pos : number[]) : number { }
    
    get_posByID(id : number) : number[] { }

    get_byID(id : number) : number { }

    get_byPos(...pos : number[]) : number { }

    get_count () : number { }

    get_size () : number { }

    get_array() : T { }

    // Setting

    set_by_id(id : number, value : number) { }

    set_by_pos(value : number, ...pos : number[])  { }

    set_array(array : T) { }
    
```
