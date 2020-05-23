import { Subject } from '../Subject.d.ts';
import { Subscriber } from '../Subscriber.d.ts';
import { Subscription } from '../Subscription.d.ts';
import { Scheduler } from '../Scheduler.d.ts';
import { TestMessage } from './TestMessage.d.ts';
import { SubscriptionLog } from './SubscriptionLog.d.ts';
import { SubscriptionLoggable } from './SubscriptionLoggable.d.ts';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class HotObservable<T> extends Subject<T> implements SubscriptionLoggable {
    messages: TestMessage[];
    subscriptions: SubscriptionLog[];
    scheduler: Scheduler;
    logSubscribedFrame: () => number;
    logUnsubscribedFrame: (index: number) => void;
    constructor(messages: TestMessage[], scheduler: Scheduler);
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<any>): Subscription;
    setup(): void;
}
