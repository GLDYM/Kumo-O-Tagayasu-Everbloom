import { $JsonElement_ } from "@package/com/google/gson";
import { $IValue, $IValue_ } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/molang/value";
import { $ReferenceArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $EventKeyFrame } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe/event";
import { $List } from "@package/java/util";
import { $BoneAnimation } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/builder" {
    export class $ILoopType {
        static fromJson(arg0: $JsonElement_): $ILoopType;
    }
    export interface $ILoopType {
        isRepeatingAfterEnd(): boolean;
        get repeatingAfterEnd(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ILoopType}.
     */
    export type $ILoopType_ = (() => boolean);
    export class $Animation {
        animationName: string;
        boneAnimations: $List<$BoneAnimation>;
        loop: $ILoopType;
        customInstructionKeyframes: $List<$EventKeyFrame<$IValue[]>>;
        animationLength: number;
        constructor(arg0: string, arg1: number, arg2: $ILoopType_, arg3: $ReferenceArrayList<$BoneAnimation>, arg4: $ReferenceArrayList<$EventKeyFrame<$IValue_[]>>);
    }
}
