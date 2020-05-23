import { AsyncAction } from './AsyncAction.d.ts';
import { Subscription } from '../Subscription.d.ts';
import { AsyncScheduler } from './AsyncScheduler.d.ts';
import { SchedulerAction } from '../types.d.ts';
export declare class VirtualTimeScheduler extends AsyncScheduler {
    maxFrames: number;
    /** @deprecated remove in v8. `frameTimeFactor` is not used in VirtualTimeScheduler directly. */
    static frameTimeFactor: number;
    /**
     * The current frame for the state of the virtual scheduler instance. The the difference
     * between two "frames" is synonymous with the passage of "virtual time units". So if
     * you record `scheduler.frame` to be `1`, then later, observe `scheduler.frame` to be at `11`,
     * that means `10` virtual time units have passed.
     */
    frame: number;
    /**
     * Used internally to examine the current virtual action index being processed.
     * @deprecated remove in v8. Should be a private API.
     */
    index: number;
    /**
     * This creates an instance of a `VirtualTimeScheduler`. Experts only. The signature of
     * this constructor is likely to change in the long run.
     *
     * @param SchedulerAction The type of Action to initialize when initializing actions during scheduling.
     * @param maxFrames The maximum number of frames to process before stopping. Used to prevent endless flush cycles.
     */
    constructor(SchedulerAction?: typeof AsyncAction, maxFrames?: number);
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    flush(): void;
}
export declare class VirtualAction<T> extends AsyncAction<T> {
    protected scheduler: VirtualTimeScheduler;
    protected work: (this: SchedulerAction<T>, state?: T) => void;
    protected index: number;
    protected active: boolean;
    constructor(scheduler: VirtualTimeScheduler, work: (this: SchedulerAction<T>, state?: T) => void, index?: number);
    schedule(state?: T, delay?: number): Subscription;
    protected requestAsyncId(scheduler: VirtualTimeScheduler, id?: any, delay?: number): any;
    protected recycleAsyncId(scheduler: VirtualTimeScheduler, id?: any, delay?: number): any;
    protected _execute(state: T, delay: number): any;
    static sortActions<T>(a: VirtualAction<T>, b: VirtualAction<T>): 1 | 0 | -1;
}
