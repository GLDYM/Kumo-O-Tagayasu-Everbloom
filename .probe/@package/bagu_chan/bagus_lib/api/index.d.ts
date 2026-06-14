import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $BaguAnimationController } from "@package/bagu_chan/bagus_lib/animation";
export * as client from "@package/bagu_chan/bagus_lib/api/client";

declare module "@package/bagu_chan/bagus_lib/api" {
    export class $IBaguData {
    }
    export interface $IBaguData {
        getBagusData(): $CompoundTag;
        setBagusData(arg0: $CompoundTag_): void;
    }
    export class $IBaguAnimate {
    }
    export interface $IBaguAnimate {
        getBaguController(): $BaguAnimationController<any>;
        get baguController(): $BaguAnimationController<any>;
    }
    /**
     * Values that may be interpreted as {@link $IBaguAnimate}.
     */
    export type $IBaguAnimate_ = (() => $BaguAnimationController<any>);
}
