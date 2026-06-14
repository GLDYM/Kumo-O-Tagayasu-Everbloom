
declare module "@package/bagu_chan/bagus_lib/util" {
    export class $DialogHandler$DrawString {
        draw(arg0: number, arg1: number, arg2: number): boolean;
        getLastTick(): number;
        constructor(arg0: number, arg1: number, arg2: string, arg3: $DialogHandler$DrawString$DrawFunction_, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: string, arg3: $DialogHandler$DrawString$DrawFunction_);
        get lastTick(): number;
    }
    export class $DialogHandler$DrawString$DrawFunction {
    }
    export interface $DialogHandler$DrawString$DrawFunction {
        apply(arg0: string, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DialogHandler$DrawString$DrawFunction}.
     */
    export type $DialogHandler$DrawString$DrawFunction_ = ((arg0: string, arg1: number, arg2: number) => void);
}
