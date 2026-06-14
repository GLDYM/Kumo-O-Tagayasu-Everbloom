import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $FunctionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $BlockLootSubProviderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer, $BiConsumer_, $Function_, $Function } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemCondition$Builder_, $ConditionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Comparable } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
export * as packs from "@package/net/minecraft/data/loot/packs";

declare module "@package/net/minecraft/data/loot" {
    export class $LootTableProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        getTables(): $List<$LootTableProvider$SubProviderEntry>;
        constructor(arg0: $PackOutput, arg1: $Set_<$ResourceKey_<$LootTable>>, arg2: $List_<$LootTableProvider$SubProviderEntry_>, arg3: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
        get tables(): $List<$LootTableProvider$SubProviderEntry>;
    }
    export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootSubProviderAccessor {
        add(arg0: $Block_, arg1: $LootTable$Builder): void;
        add(arg0: $Block_, arg1: $Function_<$Block, $LootTable$Builder>): void;
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(): void;
        createDoublePlantShearsDrop(arg0: $Block_): $LootTable$Builder;
        createSilkTouchDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_, arg2: $NumberProvider_): $LootTable$Builder;
        createNameableBlockEntityTable(arg0: $Block_): $LootTable$Builder;
        createDoublePlantWithSeedDrops(arg0: $Block_, arg1: $Block_): $LootTable$Builder;
        createSinglePropConditionTable<T extends $Comparable<T>>(arg0: $Block_, arg1: $Property<T>, arg2: T): $LootTable$Builder;
        hasShearsOrSilkTouch(): $LootItemCondition$Builder;
        dropWhenSilkTouch(arg0: $Block_): void;
        dropSelf(arg0: $Block_): void;
        createAttachedStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        doesNotHaveSilkTouch(): $LootItemCondition$Builder;
        static createSelfDropDispatchTable(arg0: $Block_, arg1: $LootItemCondition$Builder_, arg2: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        doesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
        dropOther(arg0: $Block_, arg1: $ItemLike_): void;
        static noDrop(): $LootTable$Builder;
        createSilkTouchOrShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        hasSilkTouch(): $LootItemCondition$Builder;
        createStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        createCropDrops(arg0: $Block_, arg1: $Item_, arg2: $Item_, arg3: $LootItemCondition$Builder_): $LootTable$Builder;
        createBeeHiveDrop(arg0: $Block_): $LootTable$Builder;
        createDoorTable(arg0: $Block_): $LootTable$Builder;
        createOreDrop(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        otherWhenSilkTouch(arg0: $Block_, arg1: $Block_): void;
        dropPottedContents(arg0: $Block_): void;
        createGrassDrops(arg0: $Block_): $LootTable$Builder;
        createLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        createBeeNestDrop(arg0: $Block_): $LootTable$Builder;
        createPetalsDrops(arg0: $Block_): $LootTable$Builder;
        createCandleDrops(arg0: $Block_): $LootTable$Builder;
        createBannerDrop(arg0: $Block_): $LootTable$Builder;
        createLapisOreDrops(arg0: $Block_): $LootTable$Builder;
        createShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createRedstoneOreDrops(arg0: $Block_): $LootTable$Builder;
        createCaveVinesDrop(arg0: $Block_): $LootTable$Builder;
        createCopperOreDrops(arg0: $Block_): $LootTable$Builder;
        static createCandleCakeDrops(arg0: $Block_): $LootTable$Builder;
        createSlabItemTable(arg0: $Block_): $LootTable$Builder;
        createSilkTouchOnlyTable(arg0: $ItemLike_): $LootTable$Builder;
        addNetherVinesDropTable(arg0: $Block_, arg1: $Block_): void;
        static createShearsOnlyDrop(arg0: $ItemLike_): $LootTable$Builder;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(arg0: $ItemLike_, arg1: $FunctionUserBuilder<T>): T;
        createPotFlowerItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createOakLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        createMangroveLeavesDrops(arg0: $Block_): $LootTable$Builder;
        createMushroomBlockDrop(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(arg0: $ItemLike_, arg1: $ConditionUserBuilder<T>): T;
        createMultifaceBlockDrops(arg0: $Block_, arg1: $LootItemCondition$Builder_): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_, arg1: $NumberProvider_): $LootTable$Builder;
        createShulkerBoxDrop(arg0: $Block_): $LootTable$Builder;
        create$hasSilkTouch(): $LootItemCondition$Builder;
        static HAS_SHEARS: $LootItemCondition$Builder;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
    }
    export class $LootTableProvider$SubProviderEntry extends $Record {
        provider(): $Function<$HolderLookup$Provider, $LootTableSubProvider>;
        paramSet(): $LootContextParamSet;
        constructor(provider: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet: $LootContextParamSet);
    }
    /**
     * Values that may be interpreted as {@link $LootTableProvider$SubProviderEntry}.
     */
    export type $LootTableProvider$SubProviderEntry_ = { provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet?: $LootContextParamSet,  } | [provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet?: $LootContextParamSet, ];
    export class $LootTableSubProvider {
    }
    export interface $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootTableSubProvider}.
     */
    export type $LootTableSubProvider_ = ((arg0: $BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>) => void);
    export class $EntityLootSubProvider implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(): void;
        static SPECIAL_LOOT_TABLE_TYPES: $Set<$EntityType<never>>;
        registries: $HolderLookup$Provider;
        map: $Map<$EntityType<never>, $Map<$ResourceKey<$LootTable>, $LootTable$Builder>>;
    }
}
