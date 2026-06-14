
declare module "@package/fi/dy/masa/tweakeroo/mixin/block" {
    export class $IMixinCommandBlockExecutor {
    }
    export interface $IMixinCommandBlockExecutor {
        setUpdateLastExecution(arg0: boolean): void;
        getUpdateLastExecution(): boolean;
    }
    export class $IMixinAbstractBlock {
    }
    export interface $IMixinAbstractBlock {
        setFriction(arg0: number): void;
        set friction(value: number);
    }
    /**
     * Values that may be interpreted as {@link $IMixinAbstractBlock}.
     */
    export type $IMixinAbstractBlock_ = ((arg0: number) => void);
    export class $IMixinPistonBlock {
    }
    export interface $IMixinPistonBlock {
        getSticky(): boolean;
        get sticky(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPistonBlock}.
     */
    export type $IMixinPistonBlock_ = (() => boolean);
}
