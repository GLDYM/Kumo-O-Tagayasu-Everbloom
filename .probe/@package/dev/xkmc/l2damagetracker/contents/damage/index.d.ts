import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceKey } from "@package/net/minecraft/resources";
import { $TreeSet, $Set } from "@package/java/util";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/xkmc/l2damagetracker/contents/damage" {
    export class $DamageState {
        static newSet(): $TreeSet<$DamageState>;
    }
    export interface $DamageState {
        getId(): $ResourceLocation;
        overrides(arg0: $DamageState): boolean;
        gatherTags(arg0: $Consumer_<$TagKey<$DamageType>>): void;
        removeTags(arg0: $Consumer_<$TagKey<$DamageType>>): void;
        get id(): $ResourceLocation;
    }
    export class $DamageTypeWrapper {
    }
    export interface $DamageTypeWrapper {
        type(): $ResourceKey<$DamageType>;
        isEnabled(arg0: $DamageState): boolean;
        getObject(): $DamageType;
        enable(arg0: $DamageState): $DamageTypeWrapper;
        gen(arg0: $DamageWrapperTagProvider): void;
        states(): $Set<$DamageState>;
        validState(arg0: $DamageState): boolean;
        getHolder(arg0: $Level_): $Holder<$DamageType>;
        toRoot(): $DamageTypeWrapper;
        get object(): $DamageType;
    }
}
