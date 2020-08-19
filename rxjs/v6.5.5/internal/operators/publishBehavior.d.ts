import { Observable } from "../Observable.d.ts";
import { ConnectableObservable } from "../observable/ConnectableObservable.d.ts";
import { UnaryFunction } from "../types.d.ts";
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @name publishBehavior
 */
export declare function publishBehavior<T>(
  value: T,
): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
