import { Subscriber } from '../Subscriber.d.ts';
import { Subject } from '../Subject.d.ts';
/**
 * Determines whether the ErrorObserver is closed or stopped or has a
 * destination that is closed or stopped - in which case errors will
 * need to be reported via a different mechanism.
 * @param observer the observer
 */
export declare function canReportError(observer: Subscriber<any> | Subject<any>): boolean;
