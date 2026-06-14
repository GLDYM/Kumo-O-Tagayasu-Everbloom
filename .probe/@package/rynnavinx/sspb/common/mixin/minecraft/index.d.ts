import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BitSet } from "@package/java/util";

declare module "@package/rynnavinx/sspb/common/mixin/minecraft" {
    export class $AmbientOcclusionFaceAccessor {
    }
    export interface $AmbientOcclusionFaceAccessor {
        sspb$getBrightness(): number[];
        sspb$getLightmap(): number[];
    }
    export class $ModelBlockRendererAccessor {
    }
    export interface $ModelBlockRendererAccessor {
        sspb$invokeCalculateShape(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: number[], arg4: $Direction_, arg5: number[], arg6: $BitSet): void;
    }
    /**
     * Values that may be interpreted as {@link $ModelBlockRendererAccessor}.
     */
    export type $ModelBlockRendererAccessor_ = ((arg0: $BlockAndTintGetter, arg1: $BlockState, arg2: $BlockPos, arg3: number[], arg4: $Direction, arg5: number[], arg6: $BitSet) => void);
}
