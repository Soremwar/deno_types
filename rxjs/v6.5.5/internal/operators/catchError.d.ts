import { Observable } from '../Observable.d.ts';
import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types.d.ts';
export declare function catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>;
