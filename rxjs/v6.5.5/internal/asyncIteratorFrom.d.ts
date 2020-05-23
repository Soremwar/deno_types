import { Observable } from './Observable.d.ts';
export declare function asyncIteratorFrom<T>(source: Observable<T>): AsyncGenerator<T | undefined, void, unknown>;
