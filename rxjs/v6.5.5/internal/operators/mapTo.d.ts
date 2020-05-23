import { OperatorFunction } from '../types.d.ts';
export declare function mapTo<R>(value: R): OperatorFunction<any, R>;
/** @deprecated remove in v8. Use mapTo<R>(value: R): OperatorFunction<any, R> signature instead **/
export declare function mapTo<T, R>(value: R): OperatorFunction<T, R>;
