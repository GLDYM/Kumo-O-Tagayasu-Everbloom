import { $EndimationKeyframe } from "@package/com/teamabnormals/blueprint/core/endimator";
import { $Function, $Function_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/teamabnormals/blueprint/core/endimator/interpolation" {
    export class $EndimationInterpolator extends $Record {
        type(): $InterpolationType;
        apply(arg0: $Vector3f, arg1: $EndimationKeyframe[], arg2: $EndimationKeyframe, arg3: $EndimationKeyframe, arg4: number, arg5: number, arg6: number): void;
        easer(): $Function<number, number>;
        static CODEC: $Codec<$EndimationInterpolator>;
        constructor(type: $InterpolationType, easer: $Function_<number, number>);
    }
    /**
     * Values that may be interpreted as {@link $EndimationInterpolator}.
     */
    export type $EndimationInterpolator_ = { easer?: $Function_<number, number>, type?: $InterpolationType,  } | [easer?: $Function_<number, number>, type?: $InterpolationType, ];
}
