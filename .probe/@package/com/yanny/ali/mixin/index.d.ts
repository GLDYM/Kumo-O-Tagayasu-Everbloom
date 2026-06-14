import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/yanny/ali/mixin" {
    export class $MixinBushBlock {
    }
    export interface $MixinBushBlock {
        invokeMayPlaceOn(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MixinBushBlock}.
     */
    export type $MixinBushBlock_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
}
