"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareArray = exports.CubicArray = void 0;
const arrayND_1 = require("./arrayND");
__exportStar(require("./multi-map"), exports);
__exportStar(require("./arrayND"), exports);
__exportStar(require("./point3D"), exports);
class CubicArray extends arrayND_1.ArrayND {
    constructor(size, arrayConstructor) {
        super(size, 3, arrayConstructor);
    }
}
exports.CubicArray = CubicArray;
class SquareArray extends arrayND_1.ArrayND {
    constructor(size, arrayConstructor) {
        super(size, 2, arrayConstructor);
    }
}
exports.SquareArray = SquareArray;
