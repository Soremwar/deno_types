import { Subscriber } from "../Subscriber.d.ts";
export declare const subscribeToPromise: <T>(
  promise: PromiseLike<T>,
) => (subscriber: Subscriber<T>) => Subscriber<T>;
