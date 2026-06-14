import { $BoneKeyFrame } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe/bone";
import { $List_, $List } from "@package/java/util";
export * as bone from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe/bone";
export * as event from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe/event";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe" {
    export class $BoneAnimation {
        positionKeyFrames: $List<$BoneKeyFrame>;
        scaleKeyFrames: $List<$BoneKeyFrame>;
        rotationKeyFrames: $List<$BoneKeyFrame>;
        boneName: string;
        constructor(arg0: string, arg1: $List_<$BoneKeyFrame>, arg2: $List_<$BoneKeyFrame>, arg3: $List_<$BoneKeyFrame>);
    }
}
