import { Subscriber } from "../Subscriber.d.ts";
import { PartialObserver } from "../types.d.ts";
export declare function toSubscriber<T>(
  nextOrObserver?: PartialObserver<T> | ((value: T) => void) | null,
  error?: ((error: any) => void) | null,
  complete?: (() => void) | null,
): Subscriber<T>;
