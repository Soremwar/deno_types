import { Subscription } from '../Subscription.d.ts';
import { InnerSubscriber } from '../InnerSubscriber.d.ts';
import { OuterSubscriber } from '../OuterSubscriber.d.ts';
export declare function subscribeToResult<T, R>(outerSubscriber: OuterSubscriber<T, R>, result: any, outerValue: undefined, outerIndex: undefined, innerSubscriber: InnerSubscriber<T, R>): Subscription | undefined;
export declare function subscribeToResult<T, R>(outerSubscriber: OuterSubscriber<T, R>, result: any, outerValue?: T, outerIndex?: number): Subscription | undefined;
