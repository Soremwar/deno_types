import { AsyncAction } from "./AsyncAction.d.ts";
import { AsyncScheduler } from "./AsyncScheduler.d.ts";
export declare class AnimationFrameScheduler extends AsyncScheduler {
  flush(action?: AsyncAction<any>): void;
}
