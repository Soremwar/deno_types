import { Subscriber } from '../Subscriber.d.ts';
export declare function subscribeToAsyncIterable<T>(asyncIterable: AsyncIterable<T>): (subscriber: Subscriber<T>) => void;
