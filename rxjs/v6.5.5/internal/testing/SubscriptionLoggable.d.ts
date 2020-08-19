import { Scheduler } from "../Scheduler.d.ts";
import { SubscriptionLog } from "./SubscriptionLog.d.ts";
export declare class SubscriptionLoggable {
  subscriptions: SubscriptionLog[];
  scheduler: Scheduler;
  logSubscribedFrame(): number;
  logUnsubscribedFrame(index: number): void;
}
