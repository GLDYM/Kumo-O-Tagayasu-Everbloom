import { $IValue_ } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/molang/value";
import { $ExpressionEvaluator } from "@package/com/github/tartaricacid/touhoulittlemaid/molang/runtime";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe/bone" {
    export class $Vector3v {
        "eval"(arg0: $ExpressionEvaluator<never>): $Vector3f;
        constructor(arg0: $IValue_, arg1: $IValue_, arg2: $IValue_);
    }
    export class $BoneKeyFrame {
        getStartTick(): number;
        getLerpPoint(arg0: $ExpressionEvaluator<never>, arg1: number): $Vector3f;
        getTransitionPoint(arg0: $ExpressionEvaluator<never>, arg1: $Vector3f, arg2: number): $Vector3f;
        getTotalTick(): number;
        constructor(arg0: number, arg1: number, arg2: $Vector3v);
        get startTick(): number;
        get totalTick(): number;
    }
}
