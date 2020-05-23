import { Observable } from '../Observable.d.ts';
import { SchedulerLike } from '../types.d.ts';
export declare function fromArray<T>(input: ArrayLike<T>, scheduler?: SchedulerLike): Observable<T>;
