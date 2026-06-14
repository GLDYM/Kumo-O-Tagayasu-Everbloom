import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AnimationState, $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/bagu_chan/bagus_lib/animation" {
    export class $BaguAnimationController<T extends $Entity> {
        /**
         * @deprecated
         */
        addFirstPersonAnimation(arg0: $ResourceLocation_): void;
        startAnimation(arg0: $ResourceLocation_): void;
        stopAnimation(arg0: $ResourceLocation_): void;
        stopAllAnimation(): void;
        /**
         * @deprecated
         */
        addAnimation(arg0: $ResourceLocation_): void;
        getAnimationState(arg0: $ResourceLocation_): $AnimationState;
        hasPlayingAnimation(): boolean;
        constructor(arg0: T);
    }
}
