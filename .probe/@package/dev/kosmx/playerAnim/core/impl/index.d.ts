import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        isActive(): boolean;
        tick(): void;
        getFirstPersonMode(): $FirstPersonMode;
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        setTickDelta(tickDelta: number): void;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        getBend(modelName: string): $Pair<number, number>;
        isFirstPersonAnimationDisabled(): boolean;
        constructor(animation: $IAnimation);
        get active(): boolean;
        get firstPersonMode(): $FirstPersonMode;
        set tickDelta(value: number);
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get firstPersonAnimationDisabled(): boolean;
    }
}
