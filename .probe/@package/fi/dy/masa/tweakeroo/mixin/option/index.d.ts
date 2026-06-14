
declare module "@package/fi/dy/masa/tweakeroo/mixin/option" {
    export class $IMixinSimpleOption<T> {
    }
    export interface $IMixinSimpleOption<T> {
        tweakeroo_setValueWithoutCheck(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $IMixinSimpleOption}.
     */
    export type $IMixinSimpleOption_<T> = ((arg0: T) => void);
}
