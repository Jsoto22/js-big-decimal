import { RoundingModes as Modes } from './roundingModes';
declare class bigDecimal {
    private value;
    static RoundingModes: typeof Modes;
    private static validate;
    constructor(number?: number | string);
    getValue(): string;
    static getPrettyValue(number: any, digits: any, separator: any): string;
    getPrettyValue(digits: any, separator: any): string;
    static round(number: any, precision?: number, mode?: Modes): string;
    round(precision?: number, mode?: Modes): bigDecimal;
    static floor(number: any): any;
    floor(): bigDecimal;
    static ceil(number: any): any;
    ceil(): bigDecimal;
    static add(number1: any, number2: any): string;
    add(number: bigDecimal): bigDecimal;
    static subtract(number1: any, number2: any): string;
    subtract(number: bigDecimal): bigDecimal;
    static multiply(number1: any, number2: any): string;
    multiply(number: bigDecimal): bigDecimal;
    static divide(number1: any, number2: any, precision: any): string;
    divide(number: bigDecimal, precision: any): bigDecimal;
    static compareTo(number1: any, number2: any): 0 | 1 | -1;
    compareTo(number: bigDecimal): 0 | 1 | -1;
    static negate(number: any): string;
    negate(): bigDecimal;
}
export = bigDecimal;
