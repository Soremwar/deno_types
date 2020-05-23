import { Observable } from '../Observable.d.ts';
import { NodeEventHandler } from './fromEvent.d.ts';
export declare function fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any, removeHandler?: (handler: NodeEventHandler, signal?: any) => void): Observable<T>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any, removeHandler?: (handler: NodeEventHandler, signal?: any) => void, resultSelector?: (...args: any[]) => T): Observable<T>;
