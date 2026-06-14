import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $Map, $List } from "@package/java/util";

declare module "@package/bagu_chan/bagus_lib/event" {
    export class $RegisterBagusAnimationEvents extends $Event {
        getEntity(): $Entity;
        getAnimationStateFirstPersonPlayableList(): $List<$ResourceLocation>;
        getAnimationStateMap(): $Map<$ResourceLocation, $AnimationState>;
        addFirstPersonPlayableAnimationState(arg0: $ResourceLocation_): void;
        addAnimationState(arg0: $ResourceLocation_): void;
        constructor(arg0: $Entity);
        get entity(): $Entity;
        get animationStateFirstPersonPlayableList(): $List<$ResourceLocation>;
        get animationStateMap(): $Map<$ResourceLocation, $AnimationState>;
    }
}
