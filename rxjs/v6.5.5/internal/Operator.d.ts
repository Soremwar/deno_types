import { Subscriber } from './Subscriber.d.ts';
import { TeardownLogic } from './types.d.ts';
export interface Operator<T, R> {
    call(subscriber: Subscriber<R>, source: any): TeardownLogic;
}
