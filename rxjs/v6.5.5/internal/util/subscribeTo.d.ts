import { ObservableInput } from '../types.d.ts';
import { Subscription } from '../Subscription.d.ts';
import { Subscriber } from '../Subscriber.d.ts';
export declare const subscribeTo: <T>(result: ObservableInput<T>) => (subscriber: Subscriber<T>) => Subscription | void;
