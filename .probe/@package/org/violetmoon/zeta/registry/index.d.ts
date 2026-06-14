import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack, $DyeItem } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $IZetaBlock } from "@package/org/violetmoon/zeta/block";
import { $DyedItemColor, $DyedItemColor_ } from "@package/net/minecraft/world/item/component";
import { $List_, $Collection, $Map } from "@package/java/util";
import { $Zeta } from "@package/org/violetmoon/zeta";
import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $BiConsumer_, $Function_, $Consumer_, $BooleanSupplier, $Predicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $Holder$Kind, $Holder, $HolderLookup$RegistryLookup, $Registry, $HolderOwner, $WritableRegistry, $Holder$Direct } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ZRegister$Post, $ZRegister } from "@package/org/violetmoon/zeta/event/load";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block, $FlowerPotBlock } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";

declare module "@package/org/violetmoon/zeta/registry" {
    export class $ZetaRegistry {
        register<T>(arg0: T, arg1: $ResourceLocation_, arg2: $ResourceKey_<$Registry<T>>): void;
        register<T>(arg0: T, arg1: string, arg2: $ResourceKey_<$Registry<T>>): void;
        registerBlock(arg0: $Block_, arg1: string): void;
        registerBlock(arg0: $Block_, arg1: $ResourceLocation_): void;
        registerBlock(arg0: $Block_, arg1: $ResourceLocation_, arg2: boolean): void;
        registerBlock(arg0: $Block_, arg1: string, arg2: boolean): void;
        registerItem(arg0: $Item_, arg1: string): void;
        registerItem(arg0: $Item_, arg1: $ResourceLocation_): void;
        getDefers(arg0: $ResourceLocation_): $Collection<$Supplier<$Object>>;
        validateColorsProviders(): void;
        getRegisteredObjects<O>(arg0: $ResourceKey_<$Registry<O>>): $Collection<$Holder<O>>;
        newResourceLocation(arg0: string): $ResourceLocation;
        performDynamicRegistration<T>(arg0: $RegistryOps$RegistryInfoLookup_, arg1: $ResourceKey_<$Registry<never>>, arg2: $WritableRegistry<T>): void;
        registerDynamicF<T>(arg0: $Function_<$RegistryOps$RegistryInfoLookup, T>, arg1: $ResourceLocation_, arg2: $ResourceKey_<$Registry<T>>): $LateBoundHolder<T>;
        registerDynamicF<T>(arg0: $Function_<$RegistryOps$RegistryInfoLookup, T>, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $LateBoundHolder<T>;
        registerDynamicF<T>(arg0: $Function_<$RegistryOps$RegistryInfoLookup, T>, arg1: $ResourceKey_<T>, arg2: $ResourceKey_<$Registry<T>>): $LateBoundHolder<T>;
        assignBlockColor(arg0: string, arg1: $Consumer_<$Block>): void;
        registerDynamic<T>(arg0: T, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $Holder$Direct<T>;
        /**
         * @deprecated
         */
        registerDynamic<T>(arg0: T, arg1: $ResourceLocation_, arg2: $ResourceKey_<$Registry<T>>): $Holder$Direct<T>;
        /**
         * @deprecated
         */
        registerDynamic<T>(arg0: T, arg1: $ResourceKey_<T>, arg2: $ResourceKey_<$Registry<T>>): $Holder$Direct<T>;
        clearDeferCache(arg0: $ResourceLocation_): void;
        assignItemColor(arg0: string, arg1: $Consumer_<$Item>): void;
        getRegistryName<T>(arg0: T, arg1: $Registry<T>): $ResourceLocation;
        internalNames: $Map<$Object, $ResourceLocation>;
        z: $Zeta;
        constructor(arg0: $Zeta);
    }
    export class $RenderLayerRegistry {
        finalize(arg0: $BiConsumer_<$Block, $RenderLayerRegistry$Layer>): void;
        put(arg0: $Block_, arg1: $RenderLayerRegistry$Layer_): void;
        mock(arg0: $Block_, arg1: $Block_): void;
        constructor();
    }
    export class $LateBoundHolder<T> implements $Holder<T> {
        value(): T;
        kind(): $Holder$Kind;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        tags(): $Stream<$TagKey<T>>;
        isBound(): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        getKey(): $ResourceKey<T>;
        getDelegate(): $Holder<T>;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getData<T>(arg0: $DataMapType<T, T>): T;
        registry: $Registry<T>;
        thing: T;
        key: $ResourceKey<T>;
        constructor(arg0: $ResourceKey_<T>);
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
    }
    export class $PottedPlantRegistry {
    }
    export interface $PottedPlantRegistry {
        addPot(arg0: $ResourceLocation_, arg1: $Block_): void;
    }
    /**
     * Values that may be interpreted as {@link $PottedPlantRegistry}.
     */
    export type $PottedPlantRegistry_ = ((arg0: $ResourceLocation, arg1: $Block) => void);
    export class $RenderLayerRegistry$Layer extends $Enum<$RenderLayerRegistry$Layer> {
        static values(): $RenderLayerRegistry$Layer[];
        static valueOf(arg0: string): $RenderLayerRegistry$Layer;
        static CUTOUT: $RenderLayerRegistry$Layer;
        static TRANSLUCENT: $RenderLayerRegistry$Layer;
        static CUTOUT_MIPPED: $RenderLayerRegistry$Layer;
        static SOLID: $RenderLayerRegistry$Layer;
    }
    /**
     * Values that may be interpreted as {@link $RenderLayerRegistry$Layer}.
     */
    export type $RenderLayerRegistry$Layer_ = "solid" | "cutout" | "cutout_mipped" | "translucent";
    export class $DyeablesRegistry {
        register(arg0: $Item_): void;
        register(arg0: $Item_, arg1: $ZetaModule): void;
        register(arg0: $Item_, arg1: $BooleanSupplier_): void;
        register(arg0: $ZRegister): void;
        getColor(arg0: $ItemStack_): $DyedItemColor;
        applyDye(arg0: $ItemStack_, arg1: $DyedItemColor_): void;
        registerPost(arg0: $ZRegister$Post): void;
        isDyeable(arg0: $ItemStack_): boolean;
        getDye(arg0: $ItemStack_): $DyedItemColor;
        dyeItem(arg0: $ItemStack_, arg1: $List_<$DyeItem>): $ItemStack;
        isDyed(arg0: $ItemStack_): boolean;
        dyeableConditions: $Map<$Item, $BooleanSupplier>;
        constructor();
    }
    export class $VariantRegistry {
        static realStateCopy(arg0: $IZetaBlock): $BlockBehaviour$Properties;
        addSlabAndStairs(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addSlabStairsWall(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $Block;
        addFlowerPot(arg0: $Block_, arg1: string, arg2: $Function_<$BlockBehaviour$Properties, $BlockBehaviour$Properties>): $FlowerPotBlock;
        addWall(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addStairs(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addSlab(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        walls: $Map<$IZetaBlock, $Block>;
        stairs: $Map<$IZetaBlock, $Block>;
        slabs: $Map<$IZetaBlock, $Block>;
        constructor(arg0: $Zeta);
    }
}
