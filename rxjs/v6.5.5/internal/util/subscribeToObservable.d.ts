import { Subscriber } from "../Subscriber.d.ts";
/**
 * Subscribes to an object that implements Symbol.observable with the given
 * Subscriber.
 * @param obj An object that implements Symbol.observable
 */
export declare const subscribeToObservable: <T>(
  obj: any,
) => (subscriber: Subscriber<T>) => import("../Subscription.d.ts").Subscription;
