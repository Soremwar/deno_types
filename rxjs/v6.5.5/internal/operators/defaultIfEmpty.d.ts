import { OperatorFunction } from "../types.d.ts";
export declare function defaultIfEmpty<T, R = T>(
  defaultValue?: R,
): OperatorFunction<T, T | R>;
