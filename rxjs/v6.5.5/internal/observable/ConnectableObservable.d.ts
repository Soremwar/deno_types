import { Subject } from "../Subject.d.ts";
import { Observable } from "../Observable.d.ts";
import { Subscriber } from "../Subscriber.d.ts";
import { Subscription } from "../Subscription.d.ts";
/**
 * @class ConnectableObservable<T>
 */
export declare class ConnectableObservable<T> extends Observable<T> {
  source: Observable<T>;
  protected subjectFactory: () => Subject<T>;
  protected _subject: Subject<T> | undefined;
  protected _refCount: number;
  protected _connection: Subscription | null | undefined;
  /** @internal */
  _isComplete: boolean;
  constructor(source: Observable<T>, subjectFactory: () => Subject<T>);
  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>): Subscription;
  protected getSubject(): Subject<T>;
  connect(): Subscription;
  refCount(): Observable<T>;
}
export declare const connectableObservableDescriptor: PropertyDescriptorMap;
