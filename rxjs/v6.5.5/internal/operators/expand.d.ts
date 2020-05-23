import { Operator } from '../Operator.d.ts';
import { Subscriber } from '../Subscriber.d.ts';
import { Subscription } from '../Subscription.d.ts';
import { OuterSubscriber } from '../OuterSubscriber.d.ts';
import { InnerSubscriber } from '../InnerSubscriber.d.ts';
import { MonoTypeOperatorFunction, OperatorFunction, ObservableInput, SchedulerLike } from '../types.d.ts';
export declare function expand<T, R>(project: (value: T, index: number) => ObservableInput<R>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, R>;
export declare function expand<T>(project: (value: T, index: number) => ObservableInput<T>, concurrent?: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
export declare class ExpandOperator<T, R> implements Operator<T, R> {
    private project;
    private concurrent;
    private scheduler?;
    constructor(project: (value: T, index: number) => ObservableInput<R>, concurrent: number, scheduler?: SchedulerLike | undefined);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class ExpandSubscriber<T, R> extends OuterSubscriber<T, R> {
    private project;
    private concurrent;
    private scheduler?;
    private index;
    private active;
    private hasCompleted;
    private buffer;
    constructor(destination: Subscriber<R>, project: (value: T, index: number) => ObservableInput<R>, concurrent: number, scheduler?: SchedulerLike | undefined);
    private static dispatch;
    protected _next(value: any): void;
    private subscribeToProjection;
    protected _complete(): void;
    notifyNext(outerValue: T, innerValue: R, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, R>): void;
    notifyComplete(innerSub: Subscription): void;
}
