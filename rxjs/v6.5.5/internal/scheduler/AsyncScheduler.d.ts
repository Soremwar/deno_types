import { Scheduler } from "../Scheduler.d.ts";
import { Action } from "./Action.d.ts";
import { AsyncAction } from "./AsyncAction.d.ts";
import { SchedulerAction } from "../types.d.ts";
import { Subscription } from "../Subscription.d.ts";
export declare class AsyncScheduler extends Scheduler {
  static delegate?: Scheduler;
  actions: Array<AsyncAction<any>>;
  /**
     * A flag to indicate whether the Scheduler is currently executing a batch of
     * queued actions.
     * @type {boolean}
     * @deprecated internal use only
     */
  active: boolean;
  /**
     * An internal ID used to track the latest asynchronous task such as those
     * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
     * others.
     * @type {any}
     * @deprecated internal use only
     */
  scheduled: any;
  constructor(SchedulerAction: typeof Action, now?: () => number);
  schedule<T>(
    work: (this: SchedulerAction<T>, state?: T) => void,
    delay?: number,
    state?: T,
  ): Subscription;
  flush(action: AsyncAction<any>): void;
}
