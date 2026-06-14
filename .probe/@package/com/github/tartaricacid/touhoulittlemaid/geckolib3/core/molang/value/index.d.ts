import { $ExpressionEvaluator } from "@package/com/github/tartaricacid/touhoulittlemaid/molang/runtime";
import { $Object } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/molang/value" {
    export class $IValue {
    }
    export interface $IValue {
        evalUnsafe(arg0: $ExpressionEvaluator<never>): $Object;
        evalAsBoolean(arg0: $ExpressionEvaluator<never>): boolean;
        evalAsDouble(arg0: $ExpressionEvaluator<never>): number;
    }
    /**
     * Values that may be interpreted as {@link $IValue}.
     */
    export type $IValue_ = ((arg0: $ExpressionEvaluator<never>) => $Object);
}
