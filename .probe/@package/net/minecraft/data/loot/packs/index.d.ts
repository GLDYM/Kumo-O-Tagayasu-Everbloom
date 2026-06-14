import { $Item_ } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $Map, $Set } from "@package/java/util";
import { $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider, $BlockLootSubProvider, $EntityLootSubProvider } from "@package/net/minecraft/data/loot";
import { $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Record } from "@package/java/lang";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/data/loot/packs" {
    export class $VanillaEntityLoot extends $EntityLootSubProvider {
        elderGuardianLootTable(): $LootTable$Builder;
        static SPECIAL_LOOT_TABLE_TYPES: $Set<$EntityType<never>>;
        registries: $HolderLookup$Provider;
        map: $Map<$EntityType<never>, $Map<$ResourceKey<$LootTable>, $LootTable$Builder>>;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaLootTableProvider {
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaPiglinBarterLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaPiglinBarterLoot}.
     */
    export type $VanillaPiglinBarterLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaEquipmentLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        static trialChamberEquipment(arg0: $Item_, arg1: $Item_, arg2: $ArmorTrim, arg3: $HolderLookup$RegistryLookup<$Enchantment_>): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaEquipmentLoot}.
     */
    export type $VanillaEquipmentLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $TradeRebalanceLootTableProvider {
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaArchaeologyLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaArchaeologyLoot}.
     */
    export type $VanillaArchaeologyLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaBlockLoot extends $BlockLootSubProvider {
        static HAS_SHEARS: $LootItemCondition$Builder;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $VanillaShearingLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaShearingLoot}.
     */
    export type $VanillaShearingLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaFishingLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        static fishingFishLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaFishingLoot}.
     */
    export type $VanillaFishingLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaChestLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        netherBridgeLootTable(): $LootTable$Builder;
        shipwreckTreasureLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        bastionOtherLootTable(): $LootTable$Builder;
        bastionTreasureLootTable(): $LootTable$Builder;
        bastionBridgeLootTable(): $LootTable$Builder;
        endCityTreasureLootTable(): $LootTable$Builder;
        shipwreckMapLootTable(): $LootTable$Builder;
        ancientCityLootTable(): $LootTable$Builder;
        shipwreckSupplyLootTable(): $LootTable$Builder;
        strongholdLibraryLootTable(): $LootTable$Builder;
        woodlandMansionLootTable(): $LootTable$Builder;
        spawnerLootTables(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        bastionHoglinStableLootTable(): $LootTable$Builder;
        strongholdCorridorLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaChestLoot}.
     */
    export type $VanillaChestLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $TradeRebalanceChestLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        desertPyramidLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        ancientCityLootTable(): $LootTable$Builder;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $TradeRebalanceChestLoot}.
     */
    export type $TradeRebalanceChestLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaGiftLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaGiftLoot}.
     */
    export type $VanillaGiftLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
}
