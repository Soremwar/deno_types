import { Subject } from './Subject.d.ts';
import { Observer } from './types.d.ts';
import { Subscription } from './Subscription.d.ts';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class SubjectSubscription<T> extends Subscription {
    subject: Subject<T>;
    subscriber: Observer<T>;
    closed: boolean;
    constructor(subject: Subject<T>, subscriber: Observer<T>);
    unsubscribe(): void;
}
