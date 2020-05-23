import { AsyncAction } from './AsyncAction.d.ts';
import { AsapScheduler } from './AsapScheduler.d.ts';
import { SchedulerAction } from '../types.d.ts';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class AsapAction<T> extends AsyncAction<T> {
    protected scheduler: AsapScheduler;
    protected work: (this: SchedulerAction<T>, state?: T) => void;
    constructor(scheduler: AsapScheduler, work: (this: SchedulerAction<T>, state?: T) => void);
    protected requestAsyncId(scheduler: AsapScheduler, id?: any, delay?: number): any;
    protected recycleAsyncId(scheduler: AsapScheduler, id?: any, delay?: number): any;
}
