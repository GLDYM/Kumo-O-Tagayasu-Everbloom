
declare module "@package/com/github/tartaricacid/touhoulittlemaid/util/functional" {
    export class $QuadFunction<T, U, V, W, R> {
    }
    export interface $QuadFunction<T, U, V, W, R> {
        apply(arg0: T, arg1: U, arg2: V, arg3: W): R;
        andThen<X>(arg0: $QuadFunction_<R, U, V, W, X>): $QuadFunction<T, U, V, W, X>;
    }
    /**
     * Values that may be interpreted as {@link $QuadFunction}.
     */
    export type $QuadFunction_<T, U, V, W, R> = ((arg0: T, arg1: U, arg2: V, arg3: W) => R);
    export class $QuadConsumer<T, U, V, W> {
    }
    export interface $QuadConsumer<T, U, V, W> {
        accept(arg0: T, arg1: U, arg2: V, arg3: W): void;
        andThen(arg0: $QuadConsumer_<T, U, V, W>): $QuadConsumer<T, U, V, W>;
    }
    /**
     * Values that may be interpreted as {@link $QuadConsumer}.
     */
    export type $QuadConsumer_<T, U, V, W> = ((arg0: T, arg1: U, arg2: V, arg3: W) => void);
    export class $TriPredicate<T, U, V> {
    }
    export interface $TriPredicate<T, U, V> {
        test(arg0: T, arg1: U, arg2: V): boolean;
        and(arg0: $TriPredicate_<T, U, V>): $TriPredicate<T, U, V>;
    }
    /**
     * Values that may be interpreted as {@link $TriPredicate}.
     */
    export type $TriPredicate_<T, U, V> = ((arg0: T, arg1: U, arg2: V) => boolean);
    export class $TriConsumer<T, U, V> {
    }
    export interface $TriConsumer<T, U, V> {
        accept(arg0: T, arg1: U, arg2: V): void;
        andThen(arg0: $TriConsumer_<T, U, V>): $TriConsumer<T, U, V>;
    }
    /**
     * Values that may be interpreted as {@link $TriConsumer}.
     */
    export type $TriConsumer_<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
    export class $TriFunction<T, U, V, R> {
    }
    export interface $TriFunction<T, U, V, R> {
        apply(arg0: T, arg1: U, arg2: V): R;
        andThen<W>(arg0: $TriFunction_<R, U, V, W>): $TriFunction<T, U, V, W>;
    }
    /**
     * Values that may be interpreted as {@link $TriFunction}.
     */
    export type $TriFunction_<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
    export class $QuadPredicate<T, U, V, W> {
    }
    export interface $QuadPredicate<T, U, V, W> {
        test(arg0: T, arg1: U, arg2: V, arg3: W): boolean;
        and(arg0: $QuadPredicate_<T, U, V, W>): $QuadPredicate<T, U, V, W>;
    }
    /**
     * Values that may be interpreted as {@link $QuadPredicate}.
     */
    export type $QuadPredicate_<T, U, V, W> = ((arg0: T, arg1: U, arg2: V, arg3: W) => boolean);
}
