import { Subscriber } from '../Subscriber.d.ts';
export declare const subscribeToIterable: <T>(iterable: Iterable<T>) => (subscriber: Subscriber<T>) => Subscriber<T> | undefined;
