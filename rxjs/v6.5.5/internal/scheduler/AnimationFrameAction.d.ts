import { AsyncAction } from "./AsyncAction.d.ts";
import { AnimationFrameScheduler } from "./AnimationFrameScheduler.d.ts";
import { SchedulerAction } from "../types.d.ts";
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class AnimationFrameAction<T> extends AsyncAction<T> {
  protected scheduler: AnimationFrameScheduler;
  protected work: (this: SchedulerAction<T>, state?: T) => void;
  constructor(
    scheduler: AnimationFrameScheduler,
    work: (this: SchedulerAction<T>, state?: T) => void,
  );
  protected requestAsyncId(
    scheduler: AnimationFrameScheduler,
    id?: any,
    delay?: number,
  ): any;
  protected recycleAsyncId(
    scheduler: AnimationFrameScheduler,
    id?: any,
    delay?: number,
  ): any;
}
