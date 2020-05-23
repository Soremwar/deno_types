import { OperatorFunction, MonoTypeOperatorFunction } from '../types.d.ts';
export declare function filter<T, S extends T>(predicate: (value: T, index: number) => value is S, thisArg?: any): OperatorFunction<T, S>;
export declare function filter<T>(predicate: BooleanConstructor): OperatorFunction<T | null | undefined, NonNullable<T>>;
export declare function filter<T>(predicate: (value: T, index: number) => boolean, thisArg?: any): MonoTypeOperatorFunction<T>;
