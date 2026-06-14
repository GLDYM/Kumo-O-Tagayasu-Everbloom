import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Criterion_, $Criterion } from "@package/net/minecraft/advancements";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess } from "@package/net/minecraft/core";
import { $BucketItem } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/org/violetmoon/zeta/api" {
    export class $IAdvancementModifierDelegate {
    }
    export interface $IAdvancementModifierDelegate {
        createTwoByTwoMod(arg0: $Set_<$EntityType_<never>>): $IAdvancementModifier;
        createFuriousCocktailMod(arg0: $BooleanSupplier_, arg1: $Set_<$Holder_<$MobEffect>>): $IAdvancementModifier;
        createAdventuringTimeMod(arg0: $Set_<$ResourceKey_<$Biome>>): $IAdvancementModifier;
        createMonsterHunterMod(arg0: $Set_<$EntityType_<never>>): $IAdvancementModifier;
        createTacticalFishingMod(arg0: $Set_<$BucketItem>): $IAdvancementModifier;
        createASeedyPlaceMod(arg0: $Set_<$Block_>): $IAdvancementModifier;
        createGlowAndBeholdMod(arg0: $Set_<$Block_>): $IAdvancementModifier;
        createWaxOnWaxOffMod(arg0: $Set_<$Block_>, arg1: $Set_<$Block_>): $IAdvancementModifier;
        createFishyBusinessMod(arg0: $Set_<$ItemLike_>): $IAdvancementModifier;
        createBalancedDietMod(arg0: $Set_<$ItemLike_>): $IAdvancementModifier;
    }
    export class $IMutableAdvancement {
    }
    export interface $IMutableAdvancement {
        getCriterion(arg0: string): $Criterion<never>;
        addRequiredCriterion(arg0: string, arg1: $Criterion_<never>): void;
        removeCriterion(arg0: string): void;
        replaceCriterion(arg0: string, arg1: $Criterion_<never>): void;
        addOrCriterion(arg0: string, arg1: $Criterion_<never>): void;
    }
    export class $IAdvancementModifier {
    }
    export interface $IAdvancementModifier {
        apply(arg0: $ResourceLocation_, arg1: $IMutableAdvancement, arg2: $RegistryAccess): boolean;
        isActive(): boolean;
        getTargets(): $Set<$ResourceLocation>;
        setCondition(arg0: $BooleanSupplier_): $IAdvancementModifier;
        get active(): boolean;
        get targets(): $Set<$ResourceLocation>;
        set condition(value: $BooleanSupplier_);
    }
}
