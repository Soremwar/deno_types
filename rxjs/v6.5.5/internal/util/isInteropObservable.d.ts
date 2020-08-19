import { InteropObservable } from "../types.d.ts";
/** Identifies an input as being Observable (but not necessary an Rx Observable) */
export declare function isInteropObservable(
  input: any,
): input is InteropObservable<any>;
