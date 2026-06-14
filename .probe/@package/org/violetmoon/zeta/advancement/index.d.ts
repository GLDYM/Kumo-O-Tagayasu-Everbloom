import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $ZAddReloadListener } from "@package/org/violetmoon/zeta/event/load";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IAdvancementModifier } from "@package/org/violetmoon/zeta/api";
import { $Record } from "@package/java/lang";
import { $Zeta } from "@package/org/violetmoon/zeta";
import { $ContextAwarePredicate, $CriterionValidator, $SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger } from "@package/net/minecraft/advancements/critereon";

declare module "@package/org/violetmoon/zeta/advancement" {
    export class $ManualTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        player(): ($ContextAwarePredicate) | undefined;
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ManualTrigger$Instance>;
        constructor(player: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ManualTrigger$Instance}.
     */
    export type $ManualTrigger$Instance_ = { player?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, ];
    export class $ManualTrigger extends $SimpleCriterionTrigger<$ManualTrigger$Instance> {
        trigger(arg0: $ServerPlayer): void;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AdvancementModifierRegistry {
        addListeners(arg0: $ZAddReloadListener): void;
        registerManualTrigger(arg0: string): $ManualTrigger;
        addModifier(arg0: $IAdvancementModifier): void;
        constructor(arg0: $Zeta);
    }
}
