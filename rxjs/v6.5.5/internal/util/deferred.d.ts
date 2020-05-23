export declare class Deferred<T> {
    resolve: (value?: T | PromiseLike<T> | undefined) => void;
    reject: (reason?: any) => void;
    promise: Promise<T>;
}
