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
