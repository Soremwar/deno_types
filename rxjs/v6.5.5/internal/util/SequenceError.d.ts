export interface SequenceError extends Error {
}
export interface SequenceErrorCtor {
  new (message: string): SequenceError;
}
/**
 * An error thrown when something is wrong with the sequence of
 * values arriving on the observable.
 *
 * @see {@link operators/single}
 *
 * @class SequenceError
 */
export declare const SequenceError: SequenceErrorCtor;
