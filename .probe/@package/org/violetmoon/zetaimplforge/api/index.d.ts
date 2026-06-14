import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BucketItem } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $IAdvancementModifierDelegate, $IAdvancementModifier } from "@package/org/violetmoon/zeta/api";
import { $Set_ } from "@package/java/util";
import { $Zeta } from "@package/org/violetmoon/zeta";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $ZGatherAdvancementModifiers } from "@package/org/violetmoon/zeta/event/load";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/org/violetmoon/zetaimplforge/api" {
    export class $ForgeZGatherAdvancementModifiers extends $Event implements $ZGatherAdvancementModifiers {
        register(arg0: $IAdvancementModifier): void;
        getDelegate(): $IAdvancementModifierDelegate;
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
        constructor(arg0: $Zeta, arg1: $ZGatherAdvancementModifiers);
        constructor(arg0: $ZGatherAdvancementModifiers);
        get delegate(): $IAdvancementModifierDelegate;
    }
}
