import { AsyncAction } from './AsyncAction.d.ts';
import { Subscription } from '../Subscription.d.ts';
import { QueueScheduler } from './QueueScheduler.d.ts';
import { SchedulerAction } from '../types.d.ts';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class QueueAction<T> extends AsyncAction<T> {
    protected scheduler: QueueScheduler;
    protected work: (this: SchedulerAction<T>, state?: T) => void;
    constructor(scheduler: QueueScheduler, work: (this: SchedulerAction<T>, state?: T) => void);
    schedule(state?: T, delay?: number): Subscription;
    execute(state: T, delay: number): any;
    protected requestAsyncId(scheduler: QueueScheduler, id?: any, delay?: number): any;
}
