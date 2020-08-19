import { Observable } from "../Observable.d.ts";
import { ColdObservable } from "./ColdObservable.d.ts";
import { HotObservable } from "./HotObservable.d.ts";
import { TestMessage } from "./TestMessage.d.ts";
import { SubscriptionLog } from "./SubscriptionLog.d.ts";
import { VirtualTimeScheduler } from "../scheduler/VirtualTimeScheduler.d.ts";
export interface RunHelpers {
  cold: typeof TestScheduler.prototype.createColdObservable;
  hot: typeof TestScheduler.prototype.createHotObservable;
  flush: typeof TestScheduler.prototype.flush;
  time: typeof TestScheduler.prototype.createTime;
  expectObservable: typeof TestScheduler.prototype.expectObservable;
  expectSubscriptions: typeof TestScheduler.prototype.expectSubscriptions;
}
export declare type observableToBeFn = (
  marbles: string,
  values?: any,
  errorValue?: any,
) => void;
export declare type subscriptionLogsToBeFn = (
  marbles: string | string[],
) => void;
export declare class TestScheduler extends VirtualTimeScheduler {
  assertDeepEqual: (actual: any, expected: any) => boolean | void;
  /**
     * The number of virtual time units each character in a marble diagram represents. If
     * the test scheduler is being used in "run mode", via the `run` method, this is temporarly
     * set to `1` for the duration of the `run` block, then set back to whatever value it was.
     * @nocollapse
     */
  static frameTimeFactor: number;
  /**
     * @deprecated remove in v8. Not for public use.
     */
  readonly hotObservables: HotObservable<any>[];
  /**
     * @deprecated remove in v8. Not for public use.
     */
  readonly coldObservables: ColdObservable<any>[];
  /**
     * Test meta data to be processed during `flush()`
     */
  private flushTests;
  /**
     * Indicates whether the TestScheduler instance is operating in "run mode",
     * meaning it's processing a call to `run()`
     */
  private runMode;
  /**
     *
     * @param assertDeepEqual A function to set up your assertion for your test harness
     */
  constructor(assertDeepEqual: (actual: any, expected: any) => boolean | void);
  createTime(marbles: string): number;
  /**
     * @param marbles A diagram in the marble DSL. Letters map to keys in `values` if provided.
     * @param values Values to use for the letters in `marbles`. If ommitted, the letters themselves are used.
     * @param error The error to use for the `#` marble (if present).
     */
  createColdObservable<T = string>(marbles: string, values?: {
    [marble: string]: T;
  }, error?: any): ColdObservable<T>;
  /**
     * @param marbles A diagram in the marble DSL. Letters map to keys in `values` if provided.
     * @param values Values to use for the letters in `marbles`. If ommitted, the letters themselves are used.
     * @param error The error to use for the `#` marble (if present).
     */
  createHotObservable<T = string>(marbles: string, values?: {
    [marble: string]: T;
  }, error?: any): HotObservable<T>;
  private materializeInnerObservable;
  expectObservable(
    observable: Observable<any>,
    subscriptionMarbles?: string | null,
  ): ({
    toBe: observableToBeFn;
  });
  expectSubscriptions(actualSubscriptionLogs: SubscriptionLog[]): ({
    toBe: subscriptionLogsToBeFn;
  });
  flush(): void;
  /** @nocollapse */
  static parseMarblesAsSubscriptions(
    marbles: string | null,
    runMode?: boolean,
  ): SubscriptionLog;
  /** @nocollapse */
  static parseMarbles(
    marbles: string,
    values?: any,
    errorValue?: any,
    materializeInnerObservables?: boolean,
    runMode?: boolean,
  ): TestMessage[];
  run<T>(callback: (helpers: RunHelpers) => T): T;
}
