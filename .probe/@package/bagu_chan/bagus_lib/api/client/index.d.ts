import { $AnimationHolder } from "@package/net/neoforged/neoforge/client/entity/animation/json";
import { $AnimationDefinition_ } from "@package/net/minecraft/client/animation";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $AnimationState } from "@package/net/minecraft/world/entity";
import { $Vector3f } from "@package/org/joml";

declare module "@package/bagu_chan/bagus_lib/api/client" {
    export class $IRootModel {
    }
    export interface $IRootModel {
        getBagusRoot(): $ModelPart;
        animateWalkBagu(arg0: $AnimationDefinition_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        animateWalkBagu(arg0: $AnimationHolder, arg1: number, arg2: number, arg3: number, arg4: number): void;
        applyStaticBagu(arg0: $AnimationDefinition_): void;
        applyStaticBagu(arg0: $AnimationHolder): void;
        getCacheVec(): $Vector3f;
        getBetterAnyDescendantWithName(arg0: string): ($ModelPart) | undefined;
        animateBagu(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number): void;
        animateBagu(arg0: $AnimationState, arg1: $AnimationDefinition_, arg2: number, arg3: number): void;
        animateBagu(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number, arg3: number): void;
        animateBagu(arg0: $AnimationState, arg1: $AnimationDefinition_, arg2: number): void;
        get bagusRoot(): $ModelPart;
        get cacheVec(): $Vector3f;
    }
}
