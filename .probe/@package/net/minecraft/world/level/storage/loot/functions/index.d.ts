import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag, $CompoundTag, $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $List, $Map_, $List_, $Set } from "@package/java/util";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_, $UnaryOperator, $Consumer_, $BiFunction, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderSet_, $HolderLookup$Provider, $Holder, $Holder_, $HolderSet } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContextUser, $LootTable, $ContainerComponentManipulator, $ValidationContext, $LootContext$EntityTarget, $LootContext, $IntRange, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack, $Instrument } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Fireworks, $WrittenBookContent_, $WritableBookContent, $WrittenBookContent, $WritableBookContent_, $FireworkExplosion$Shape, $FireworkExplosion_, $FireworkExplosion$Shape_, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Filterable, $Filterable_ } from "@package/net/minecraft/server/network";
import { $IExplorationFunctionExtension } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $ItemPredicate, $ItemPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $NbtProvider } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BannerPattern, $BannerPatternLayers, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/storage/loot/functions" {
    export class $LootItemFunction$Builder {
    }
    export interface $LootItemFunction$Builder {
        build(): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunction$Builder}.
     */
    export type $LootItemFunction$Builder_ = (() => $LootItemFunction);
    export class $ApplyBonusCount extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static addBonusBinomialDistributionCount(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(arg0: $Holder_<$Enchantment>, arg1: number): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(arg0: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        static addOreBonusCount(arg0: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ApplyBonusCount>;
        enchantment: $Holder<$Enchantment>;
        formula: $ApplyBonusCount$Formula;
    }
    export class $SetPotionFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setPotion(arg0: $Holder_<$Potion>): $LootItemConditionalFunction$Builder<never>;
        potion: $Holder<$Potion>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetPotionFunction>;
    }
    export class $EnchantWithLevelsFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantWithLevelsFunction$Builder> {
        fromOptions(arg0: $HolderSet_<$Enchantment>): $EnchantWithLevelsFunction$Builder;
        constructor(arg0: $NumberProvider_);
    }
    export class $LimitCount extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static limitCount(arg0: $IntRange): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$LimitCount>;
        limiter: $IntRange;
    }
    export class $CopyCustomDataFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        /**
         * @deprecated
         */
        static copyData(arg0: $NbtProvider): $CopyCustomDataFunction$Builder;
        static copyData(arg0: $LootContext$EntityTarget_): $CopyCustomDataFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyCustomDataFunction>;
        operations: $List<$CopyCustomDataFunction$CopyOperation>;
        source: $NbtProvider;
    }
    export class $SetStewEffectFunction$Builder extends $LootItemConditionalFunction$Builder<$SetStewEffectFunction$Builder> {
        withEffect(arg0: $Holder_<$MobEffect>, arg1: $NumberProvider_): $SetStewEffectFunction$Builder;
        constructor();
    }
    export class $SetAttributesFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static modifier(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_): $SetAttributesFunction$ModifierBuilder;
        static setAttributes(): $SetAttributesFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetAttributesFunction>;
        replace: boolean;
        modifiers: $List<$SetAttributesFunction$Modifier>;
    }
    export class $LootItemFunction {
        static decorate(arg0: $BiFunction_<$ItemStack, $LootContext, $ItemStack>, arg1: $Consumer_<$ItemStack>, arg2: $LootContext): $Consumer<$ItemStack>;
    }
    export interface $LootItemFunction extends $LootContextUser, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
        getType(): $LootItemFunctionType<$LootItemFunction>;
        get type(): $LootItemFunctionType<$LootItemFunction>;
    }
    export class $ApplyBonusCount$FormulaType extends $Record {
        id(): $ResourceLocation;
        codec(): $Codec<$ApplyBonusCount$Formula>;
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$FormulaType}.
     */
    export type $ApplyBonusCount$FormulaType_ = { id?: $ResourceLocation_, codec?: $Codec<$ApplyBonusCount$Formula>,  } | [id?: $ResourceLocation_, codec?: $Codec<$ApplyBonusCount$Formula>, ];
    export class $SetOminousBottleAmplifierFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setAmplifier(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        amplifier(): $NumberProvider;
        amplifierGenerator: $NumberProvider;
        predicates: $List<$LootItemCondition>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $NumberProvider_);
    }
    export class $SetContainerLootTable extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static withLootTable(arg0: $BlockEntityType_<never>, arg1: $ResourceKey_<$LootTable>, arg2: number): $LootItemConditionalFunction$Builder<never>;
        static withLootTable(arg0: $BlockEntityType_<never>, arg1: $ResourceKey_<$LootTable>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetContainerLootTable>;
        seed: number;
        name: $ResourceKey<$LootTable>;
        type: $Holder<$BlockEntityType<never>>;
    }
    export class $SequenceFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static of(arg0: $List_<$LootItemFunction>): $SequenceFunction;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemFunctionType<$SequenceFunction>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        static INLINE_CODEC: $Codec<$SequenceFunction>;
        static CODEC: $MapCodec<$SequenceFunction>;
        functions: $List<$LootItemFunction>;
        get type(): $LootItemFunctionType<$SequenceFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $ListOperation$ReplaceAll implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceAll>;
        static INSTANCE: $ListOperation$ReplaceAll;
    }
    export class $SetItemCountFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setCount(arg0: $NumberProvider_, arg1: boolean): $LootItemConditionalFunction$Builder<never>;
        static setCount(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        add: boolean;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemCountFunction>;
        value: $NumberProvider;
    }
    export class $LootItemFunctions {
        static compose(arg0: $List_<$BiFunction_<$ItemStack, $LootContext, $ItemStack>>): $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_WRITTEN_BOOK_PAGES: $LootItemFunctionType<$SetWrittenBookPagesFunction>;
        static ENCHANTED_COUNT_INCREASE: $LootItemFunctionType<$EnchantedCountIncreaseFunction>;
        static COPY_NAME: $LootItemFunctionType<$CopyNameFunction>;
        static SET_LOOT_TABLE: $LootItemFunctionType<$SetContainerLootTable>;
        static EXPLOSION_DECAY: $LootItemFunctionType<$ApplyExplosionDecay>;
        static ROOT_CODEC: $Codec<$LootItemFunction>;
        static SET_CUSTOM_DATA: $LootItemFunctionType<$SetCustomDataFunction>;
        static FURNACE_SMELT: $LootItemFunctionType<$SmeltItemFunction>;
        static SET_ATTRIBUTES: $LootItemFunctionType<$SetAttributesFunction>;
        static MODIFY_CONTENTS: $LootItemFunctionType<$ModifyContainerContents>;
        static COPY_COMPONENTS: $LootItemFunctionType<$CopyComponentsFunction>;
        static SET_BOOK_COVER: $LootItemFunctionType<$SetBookCoverFunction>;
        static SET_COMPONENTS: $LootItemFunctionType<$SetComponentsFunction>;
        static ENCHANT_WITH_LEVELS: $LootItemFunctionType<$EnchantWithLevelsFunction>;
        static SET_FIREWORK_EXPLOSION: $LootItemFunctionType<$SetFireworkExplosionFunction>;
        static LIMIT_COUNT: $LootItemFunctionType<$LimitCount>;
        static SET_LORE: $LootItemFunctionType<$SetLoreFunction>;
        static SEQUENCE: $LootItemFunctionType<$SequenceFunction>;
        static REFERENCE: $LootItemFunctionType<$FunctionReference>;
        static SET_DAMAGE: $LootItemFunctionType<$SetItemDamageFunction>;
        static EXPLORATION_MAP: $LootItemFunctionType<$ExplorationMapFunction>;
        static SET_CUSTOM_MODEL_DATA: $LootItemFunctionType<$SetCustomModelDataFunction>;
        static SET_ENCHANTMENTS: $LootItemFunctionType<$SetEnchantmentsFunction>;
        static APPLY_BONUS: $LootItemFunctionType<$ApplyBonusCount>;
        static CODEC: $Codec<$Holder<$LootItemFunction>>;
        static FILL_PLAYER_HEAD: $LootItemFunctionType<$FillPlayerHead>;
        static SET_CONTENTS: $LootItemFunctionType<$SetContainerContents>;
        static SET_WRITABLE_BOOK_PAGES: $LootItemFunctionType<$SetWritableBookPagesFunction>;
        static SET_POTION: $LootItemFunctionType<$SetPotionFunction>;
        static COPY_CUSTOM_DATA: $LootItemFunctionType<$CopyCustomDataFunction>;
        static SET_COUNT: $LootItemFunctionType<$SetItemCountFunction>;
        static SET_NAME: $LootItemFunctionType<$SetNameFunction>;
        static TOGGLE_TOOLTIPS: $LootItemFunctionType<$ToggleTooltips>;
        static SET_FIREWORKS: $LootItemFunctionType<$SetFireworksFunction>;
        static IDENTITY: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_BANNER_PATTERN: $LootItemFunctionType<$SetBannerPatternFunction>;
        static SET_ITEM: $LootItemFunctionType<$SetItemFunction>;
        static COPY_STATE: $LootItemFunctionType<$CopyBlockState>;
        static SET_STEW_EFFECT: $LootItemFunctionType<$SetStewEffectFunction>;
        static SET_OMINOUS_BOTTLE_AMPLIFIER: $LootItemFunctionType<$SetOminousBottleAmplifierFunction>;
        static ENCHANT_RANDOMLY: $LootItemFunctionType<$EnchantRandomlyFunction>;
        static SET_INSTRUMENT: $LootItemFunctionType<$SetInstrumentFunction>;
        static TYPED_CODEC: $Codec<$LootItemFunction>;
        static FILTERED: $LootItemFunctionType<$FilteredFunction>;
        constructor();
    }
    export class $LootItemConditionalFunction$Builder<T extends $LootItemConditionalFunction$Builder<T>> implements $LootItemFunction$Builder, $ConditionUserBuilder<T> {
        unwrap(): T;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        constructor();
    }
    export class $SetCustomDataFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        /**
         * @deprecated
         */
        static setCustomData(arg0: $CompoundTag_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetCustomDataFunction>;
        tag: $CompoundTag;
        static set customData(value: $CompoundTag_);
    }
    export class $SetLoreFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setLore(): $SetLoreFunction$Builder;
        mode: $ListOperation;
        resolutionContext: ($LootContext$EntityTarget) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetLoreFunction>;
        lore: $List<$Component>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Component_>, arg2: $ListOperation, arg3: ($LootContext$EntityTarget_) | undefined);
    }
    export class $SetFireworkExplosionFunction extends $LootItemConditionalFunction {
        static DEFAULT_VALUE: $FireworkExplosion;
        trail: (boolean) | undefined;
        twinkle: (boolean) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetFireworkExplosionFunction>;
        fadeColors: ($IntList) | undefined;
        shape: ($FireworkExplosion$Shape) | undefined;
        colors: ($IntList) | undefined;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($FireworkExplosion$Shape_) | undefined, arg2: ($IntList) | undefined, arg3: ($IntList) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined);
    }
    export class $SetFireworksFunction extends $LootItemConditionalFunction {
        static DEFAULT_VALUE: $Fireworks;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetFireworksFunction>;
        flightDuration: (number) | undefined;
        explosions: ($ListOperation$StandAlone<$FireworkExplosion>) | undefined;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($ListOperation$StandAlone_<$FireworkExplosion_>) | undefined, arg2: (number) | undefined);
    }
    export class $CopyBlockState$Builder extends $LootItemConditionalFunction$Builder<$CopyBlockState$Builder> {
        copy(arg0: $Property<never>): $CopyBlockState$Builder;
    }
    export class $CopyCustomDataFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyCustomDataFunction$Builder> {
        copy(arg0: string, arg1: string): $CopyCustomDataFunction$Builder;
        copy(arg0: string, arg1: string, arg2: $CopyCustomDataFunction$MergeStrategy_): $CopyCustomDataFunction$Builder;
    }
    export class $EnchantedCountIncreaseFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        localvar$dmm000$puzzleslib$run(enchantmentLevel: number, itemStack: $ItemStack_, lootContext: $LootContext): number;
        handler$dmm000$puzzleslib$run(stack: $ItemStack_, context: $LootContext, callback: $CallbackInfoReturnable<any>): void;
        static lootingMultiplier(arg0: $HolderLookup$Provider, arg1: $NumberProvider_): $EnchantedCountIncreaseFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantedCountIncreaseFunction>;
        enchantment: $Holder<$Enchantment>;
        static NO_LIMIT: number;
        limit: number;
        value: $NumberProvider;
    }
    export class $ListOperation {
        static codec(arg0: number): $MapCodec<$ListOperation>;
        static UNLIMITED_CODEC: $MapCodec<$ListOperation>;
    }
    export interface $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
    }
    export class $SetNameFunction$Target extends $Enum<$SetNameFunction$Target> implements $StringRepresentable {
        static values(): $SetNameFunction$Target[];
        static valueOf(arg0: string): $SetNameFunction$Target;
        component(): $DataComponentType<$Component>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SetNameFunction$Target>;
        static CUSTOM_NAME: $SetNameFunction$Target;
        static ITEM_NAME: $SetNameFunction$Target;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SetNameFunction$Target}.
     */
    export type $SetNameFunction$Target_ = "custom_name" | "item_name";
    export class $ApplyBonusCount$UniformBonusCount extends $Record implements $ApplyBonusCount$Formula {
        getType(): $ApplyBonusCount$FormulaType;
        calculateNewCount(arg0: $RandomSource, arg1: number, arg2: number): number;
        bonusMultiplier(): number;
        static CODEC: $Codec<$ApplyBonusCount$UniformBonusCount>;
        static TYPE: $ApplyBonusCount$FormulaType;
        get type(): $ApplyBonusCount$FormulaType;
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$UniformBonusCount}.
     */
    export type $ApplyBonusCount$UniformBonusCount_ = { bonusMultiplier?: number,  } | [bonusMultiplier?: number, ];
    export class $LootItemConditionalFunction$DummyBuilder extends $LootItemConditionalFunction$Builder<$LootItemConditionalFunction$DummyBuilder> {
    }
    export class $SetAttributesFunction$Builder extends $LootItemConditionalFunction$Builder<$SetAttributesFunction$Builder> {
        withModifier(arg0: $SetAttributesFunction$ModifierBuilder): $SetAttributesFunction$Builder;
        constructor(arg0: boolean);
        constructor();
    }
    export class $EnchantedCountIncreaseFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantedCountIncreaseFunction$Builder> {
        setLimit(arg0: number): $EnchantedCountIncreaseFunction$Builder;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_);
        set limit(value: number);
    }
    export class $CopyComponentsFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyComponentsFunction$Builder> {
        include(arg0: $DataComponentType_<never>): $CopyComponentsFunction$Builder;
        exclude(arg0: $DataComponentType_<never>): $CopyComponentsFunction$Builder;
    }
    export class $SetNameFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setName(arg0: $Component_, arg1: $SetNameFunction$Target_): $LootItemConditionalFunction$Builder<never>;
        static setName(arg0: $Component_, arg1: $SetNameFunction$Target_, arg2: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        static createResolver(arg0: $LootContext, arg1: $LootContext$EntityTarget_): $UnaryOperator<$Component>;
        resolutionContext: ($LootContext$EntityTarget) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetNameFunction>;
        name: ($Component) | undefined;
        target: $SetNameFunction$Target;
    }
    export class $SetContainerContents$Builder extends $LootItemConditionalFunction$Builder<$SetContainerContents$Builder> {
        withEntry(arg0: $LootPoolEntryContainer$Builder<never>): $SetContainerContents$Builder;
        constructor(arg0: $ContainerComponentManipulator<never>);
    }
    export class $CopyCustomDataFunction$MergeStrategy extends $Enum<$CopyCustomDataFunction$MergeStrategy> implements $StringRepresentable {
        static values(): $CopyCustomDataFunction$MergeStrategy[];
        static valueOf(arg0: string): $CopyCustomDataFunction$MergeStrategy;
        merge(arg0: $Tag_, arg1: $NbtPathArgument$NbtPath, arg2: $List_<$Tag_>): void;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyCustomDataFunction$MergeStrategy>;
        static MERGE: $CopyCustomDataFunction$MergeStrategy;
        static REPLACE: $CopyCustomDataFunction$MergeStrategy;
        static APPEND: $CopyCustomDataFunction$MergeStrategy;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$MergeStrategy}.
     */
    export type $CopyCustomDataFunction$MergeStrategy_ = "replace" | "append" | "merge";
    export class $SmeltItemFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static smelted(): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SmeltItemFunction>;
    }
    export class $FilteredFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        filter: $ItemPredicate;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FilteredFunction>;
        modifier: $LootItemFunction;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ItemPredicate_, arg2: $LootItemFunction);
    }
    export class $ExplorationMapFunction$Builder extends $LootItemConditionalFunction$Builder<$ExplorationMapFunction$Builder> {
        setDestination(arg0: $TagKey_<$Structure>): $ExplorationMapFunction$Builder;
        setZoom(arg0: number): $ExplorationMapFunction$Builder;
        setSearchRadius(arg0: number): $ExplorationMapFunction$Builder;
        setSkipKnownStructures(arg0: boolean): $ExplorationMapFunction$Builder;
        setMapDecoration(arg0: $Holder_<$MapDecorationType>): $ExplorationMapFunction$Builder;
        constructor();
        set destination(value: $TagKey_<$Structure>);
        set zoom(value: number);
        set searchRadius(value: number);
        set skipKnownStructures(value: boolean);
        set mapDecoration(value: $Holder_<$MapDecorationType>);
    }
    export class $SetStewEffectFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static stewEffect(): $SetStewEffectFunction$Builder;
        effects: $List<$SetStewEffectFunction$EffectEntry>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetStewEffectFunction>;
    }
    export class $ListOperation$ReplaceSection extends $Record implements $ListOperation {
        size(): (number) | undefined;
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        offset(): number;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceSection>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$ReplaceSection}.
     */
    export type $ListOperation$ReplaceSection_ = { offset?: number, size?: (number) | undefined,  } | [offset?: number, size?: (number) | undefined, ];
    export class $CopyNameFunction$NameSource extends $Enum<$CopyNameFunction$NameSource> implements $StringRepresentable {
        static values(): $CopyNameFunction$NameSource[];
        static valueOf(arg0: string): $CopyNameFunction$NameSource;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyNameFunction$NameSource>;
        static LAST_DAMAGE_PLAYER: $CopyNameFunction$NameSource;
        static BLOCK_ENTITY: $CopyNameFunction$NameSource;
        static THIS: $CopyNameFunction$NameSource;
        static ATTACKING_ENTITY: $CopyNameFunction$NameSource;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyNameFunction$NameSource}.
     */
    export type $CopyNameFunction$NameSource_ = "this" | "attacking_entity" | "last_damage_player" | "block_entity" | string;
    export class $SetAttributesFunction$Modifier extends $Record {
        id(): $ResourceLocation;
        slots(): $List<$EquipmentSlotGroup>;
        attribute(): $Holder<$Attribute>;
        amount(): $NumberProvider;
        operation(): $AttributeModifier$Operation;
        static CODEC: $Codec<$SetAttributesFunction$Modifier>;
    }
    /**
     * Values that may be interpreted as {@link $SetAttributesFunction$Modifier}.
     */
    export type $SetAttributesFunction$Modifier_ = { attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, amount?: $NumberProvider_, slots?: $List_<$EquipmentSlotGroup_>, id?: $ResourceLocation_,  } | [attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, amount?: $NumberProvider_, slots?: $List_<$EquipmentSlotGroup_>, id?: $ResourceLocation_, ];
    export class $CopyBlockState extends $LootItemConditionalFunction {
        static copyState(arg0: $Block_): $CopyBlockState$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyBlockState>;
        block: $Holder<$Block>;
        properties: $Set<$Property<never>>;
    }
    export class $SetInstrumentFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setInstrumentOptions(arg0: $TagKey_<$Instrument>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetInstrumentFunction>;
        options: $TagKey<$Instrument>;
        static set instrumentOptions(value: $TagKey_<$Instrument>);
    }
    export class $ListOperation$Insert extends $Record implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        offset(): number;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Insert>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Insert}.
     */
    export type $ListOperation$Insert_ = { offset?: number,  } | [offset?: number, ];
    export class $ApplyBonusCount$BinomialWithBonusCount extends $Record implements $ApplyBonusCount$Formula {
        getType(): $ApplyBonusCount$FormulaType;
        probability(): number;
        calculateNewCount(arg0: $RandomSource, arg1: number, arg2: number): number;
        extraRounds(): number;
        static TYPE: $ApplyBonusCount$FormulaType;
        get type(): $ApplyBonusCount$FormulaType;
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$BinomialWithBonusCount}.
     */
    export type $ApplyBonusCount$BinomialWithBonusCount_ = { probability?: number, extraRounds?: number,  } | [probability?: number, extraRounds?: number, ];
    export class $EnchantRandomlyFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static randomApplicableEnchantment(arg0: $HolderLookup$Provider): $EnchantRandomlyFunction$Builder;
        wrapOperation$gcc000$l2complements$forceOnRandomLoot(arg0: $Stream<any>, arg1: $Operation_<any>): $List<any>;
        static randomEnchantment(): $EnchantRandomlyFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantRandomlyFunction>;
        options: ($HolderSet<$Enchantment>) | undefined;
        onlyCompatible: boolean;
    }
    export class $ModifyContainerContents extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        component: $ContainerComponentManipulator<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ModifyContainerContents>;
        modifier: $LootItemFunction;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $ContainerComponentManipulator<never>, arg2: $LootItemFunction);
    }
    export class $SetComponentsFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setComponent<T>(arg0: $DataComponentType_<T>, arg1: T): $LootItemConditionalFunction$Builder<never>;
        components: $DataComponentPatch;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetComponentsFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $DataComponentPatch_);
    }
    export class $ListOperation$Type extends $Enum<$ListOperation$Type> implements $StringRepresentable {
        static values(): $ListOperation$Type[];
        static valueOf(arg0: string): $ListOperation$Type;
        getSerializedName(): string;
        mapCodec(): $MapCodec<$ListOperation>;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ListOperation$Type>;
        static INSERT: $ListOperation$Type;
        static REPLACE_ALL: $ListOperation$Type;
        static APPEND: $ListOperation$Type;
        static REPLACE_SECTION: $ListOperation$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Type}.
     */
    export type $ListOperation$Type_ = "replace_all" | "replace_section" | "insert" | "append";
    export class $SetBookCoverFunction extends $LootItemConditionalFunction {
        generation: (number) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetBookCoverFunction>;
        author: (string) | undefined;
        title: ($Filterable<string>) | undefined;
        constructor(arg0: $List_<$LootItemCondition>, arg1: ($Filterable_<string>) | undefined, arg2: (string) | undefined, arg3: (number) | undefined);
    }
    export class $SetBannerPatternFunction$Builder extends $LootItemConditionalFunction$Builder<$SetBannerPatternFunction$Builder> {
        addPattern(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $SetBannerPatternFunction$Builder;
    }
    export class $ApplyBonusCount$Formula {
    }
    export interface $ApplyBonusCount$Formula {
        getType(): $ApplyBonusCount$FormulaType;
        calculateNewCount(arg0: $RandomSource, arg1: number, arg2: number): number;
        get type(): $ApplyBonusCount$FormulaType;
    }
    export class $SetWrittenBookPagesFunction extends $LootItemConditionalFunction {
        apply(arg0: $WrittenBookContent_): $WrittenBookContent;
        static PAGE_CODEC: $Codec<$Component>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetWrittenBookPagesFunction>;
        pages: $List<$Filterable<$Component>>;
        pageOperation: $ListOperation;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Filterable_<$Component_>>, arg2: $ListOperation);
    }
    export class $ListOperation$Append implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Append>;
        static INSTANCE: $ListOperation$Append;
    }
    export class $EnchantRandomlyFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantRandomlyFunction$Builder> {
        withOneOf(arg0: $HolderSet_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        withEnchantment(arg0: $Holder_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        allowingIncompatibleEnchantments(): $EnchantRandomlyFunction$Builder;
        constructor();
    }
    export interface $LootItemFunctionType extends RegistryMarked<RegistryTypes.LootFunctionTypeTag, RegistryTypes.LootFunctionType> {}
    export class $LootItemFunctionType<T extends $LootItemFunction> extends $Record {
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionType}.
     */
    export type $LootItemFunctionType_<T> = RegistryTypes.LootFunctionType | { codec?: $MapCodec_<$LootItemFunction>,  } | [codec?: $MapCodec_<$LootItemFunction>, ];
    export class $ToggleTooltips extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ToggleTooltips>;
        values: $Map<$ToggleTooltips$ComponentToggle<never>, boolean>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Map_<$ToggleTooltips$ComponentToggle_<never>, boolean>);
    }
    export class $SetEnchantmentsFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        add: boolean;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetEnchantmentsFunction>;
        enchantments: $Map<$Holder<$Enchantment>, $NumberProvider>;
    }
    export class $SetEnchantmentsFunction$Builder extends $LootItemConditionalFunction$Builder<$SetEnchantmentsFunction$Builder> {
        withEnchantment(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $SetEnchantmentsFunction$Builder;
        constructor();
        constructor(arg0: boolean);
    }
    export class $ApplyBonusCount$OreDrops extends $Record implements $ApplyBonusCount$Formula {
        getType(): $ApplyBonusCount$FormulaType;
        calculateNewCount(arg0: $RandomSource, arg1: number, arg2: number): number;
        static CODEC: $Codec<$ApplyBonusCount$OreDrops>;
        static TYPE: $ApplyBonusCount$FormulaType;
        get type(): $ApplyBonusCount$FormulaType;
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$OreDrops}.
     */
    export type $ApplyBonusCount$OreDrops_ = {  } | [];
    export class $ToggleTooltips$ComponentToggle<T> extends $Record {
        type(): $DataComponentType<T>;
        setter(): $ToggleTooltips$TooltipWither<T>;
        applyIfPresent(arg0: $ItemStack_, arg1: boolean): void;
        constructor(arg0: $DataComponentType_<T>, arg1: $ToggleTooltips$TooltipWither_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$ComponentToggle}.
     */
    export type $ToggleTooltips$ComponentToggle_<T> = { setter?: $ToggleTooltips$TooltipWither_<any>, type?: $DataComponentType_<any>,  } | [setter?: $ToggleTooltips$TooltipWither_<any>, type?: $DataComponentType_<any>, ];
    export class $LootItemConditionalFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        validate(arg0: $ValidationContext): void;
        getType(): $LootItemFunctionType<$LootItemConditionalFunction>;
        static simpleBuilder(arg0: $Function_<$List<$LootItemCondition>, $LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        predicates: $List<$LootItemCondition>;
        get type(): $LootItemFunctionType<$LootItemConditionalFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $CopyComponentsFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static copyComponents(arg0: $CopyComponentsFunction$Source_): $CopyComponentsFunction$Builder;
        include: ($List<$DataComponentType<never>>) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyComponentsFunction>;
        exclude: ($List<$DataComponentType<never>>) | undefined;
        source: $CopyComponentsFunction$Source;
    }
    export class $ListOperation$StandAlone<T> extends $Record {
        value(): $List<T>;
        apply(arg0: $List_<T>): $List<T>;
        operation(): $ListOperation;
        static codec<T>(arg0: $Codec<T>, arg1: number): $Codec<$ListOperation$StandAlone<T>>;
        constructor(arg0: $List_<T>, arg1: $ListOperation);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$StandAlone}.
     */
    export type $ListOperation$StandAlone_<T> = { operation?: $ListOperation, value?: $List_<any>,  } | [operation?: $ListOperation, value?: $List_<any>, ];
    export class $SetCustomModelDataFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        predicates: $List<$LootItemCondition>;
        valueProvider: $NumberProvider;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $NumberProvider_);
    }
    export class $CopyComponentsFunction$Source extends $Enum<$CopyComponentsFunction$Source> implements $StringRepresentable {
        get(arg0: $LootContext): $DataComponentMap;
        static values(): $CopyComponentsFunction$Source[];
        static valueOf(arg0: string): $CopyComponentsFunction$Source;
        getSerializedName(): string;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyComponentsFunction$Source>;
        static BLOCK_ENTITY: $CopyComponentsFunction$Source;
        get serializedName(): string;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyComponentsFunction$Source}.
     */
    export type $CopyComponentsFunction$Source_ = "block_entity";
    export class $FillPlayerHead extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static fillPlayerHead(arg0: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FillPlayerHead>;
        entityTarget: $LootContext$EntityTarget;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $LootContext$EntityTarget_);
    }
    export class $SetContainerContents extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setContents(arg0: $ContainerComponentManipulator<never>): $SetContainerContents$Builder;
        component: $ContainerComponentManipulator<never>;
        entries: $List<$LootPoolEntryContainer>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetContainerContents>;
        static set contents(value: $ContainerComponentManipulator<never>);
    }
    export class $FunctionReference extends $LootItemConditionalFunction {
        static functionReference(arg0: $ResourceKey_<$LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FunctionReference>;
        name: $ResourceKey<$LootItemFunction>;
    }
    export class $SetLoreFunction$Builder extends $LootItemConditionalFunction$Builder<$SetLoreFunction$Builder> {
        setMode(arg0: $ListOperation): $SetLoreFunction$Builder;
        addLine(arg0: $Component_): $SetLoreFunction$Builder;
        setResolutionContext(arg0: $LootContext$EntityTarget_): $SetLoreFunction$Builder;
        constructor();
        set mode(value: $ListOperation);
        set resolutionContext(value: $LootContext$EntityTarget_);
    }
    export class $SetItemDamageFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static setDamage(arg0: $NumberProvider_, arg1: boolean): $LootItemConditionalFunction$Builder<never>;
        static setDamage(arg0: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        add: boolean;
        damage: $NumberProvider;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemDamageFunction>;
    }
    export class $ToggleTooltips$TooltipWither<T> {
    }
    export interface $ToggleTooltips$TooltipWither<T> {
        withTooltip(arg0: T, arg1: boolean): T;
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$TooltipWither}.
     */
    export type $ToggleTooltips$TooltipWither_<T> = ((arg0: T, arg1: boolean) => T);
    export class $ExplorationMapFunction extends $LootItemConditionalFunction implements $IExplorationFunctionExtension {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        supplementaries$setCustomDecoration(arg0: $Holder_<any>): void;
        supplementaries$getCustomDecoration(): $Holder<any>;
        static makeExplorationMap(): $ExplorationMapFunction$Builder;
        handler$bnb000$supplementaries$supp$turnToQuill(arg0: $ItemStack_, arg1: $LootContext, arg2: $CallbackInfoReturnable<any>, arg3: $Vec3_, arg4: $ServerLevel): void;
        predicates: $List<$LootItemCondition>;
        static DEFAULT_ZOOM: number;
        static CODEC: $MapCodec<$ExplorationMapFunction>;
        static DEFAULT_DECORATION: $Holder<$MapDecorationType>;
        static DEFAULT_SKIP_EXISTING: boolean;
        static DEFAULT_DESTINATION: $TagKey<$Structure>;
        destination: $TagKey<$Structure>;
        zoom: number;
        mapDecoration: $Holder<$MapDecorationType>;
        skipKnownStructures: boolean;
        static DEFAULT_SEARCH_RADIUS: number;
        searchRadius: number;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $TagKey_<$Structure>, arg2: $Holder_<$MapDecorationType>, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ApplyExplosionDecay extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static explosionDecay(): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ApplyExplosionDecay>;
    }
    export class $SetBannerPatternFunction extends $LootItemConditionalFunction {
        static setBannerPattern(arg0: boolean): $SetBannerPatternFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetBannerPatternFunction>;
        patterns: $BannerPatternLayers;
        append: boolean;
        static set bannerPattern(value: boolean);
    }
    export class $SetItemFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        item: $Holder<$Item>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemFunction>;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $Holder_<$Item>);
    }
    export class $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
    }
    export interface $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply(arg0: $LootItemFunction$Builder_): T;
        unwrap(): T;
    }
    export class $EnchantWithLevelsFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static enchantWithLevels(arg0: $HolderLookup$Provider, arg1: $NumberProvider_): $EnchantWithLevelsFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantWithLevelsFunction>;
        options: ($HolderSet<$Enchantment>) | undefined;
        levels: $NumberProvider;
    }
    export class $SetAttributesFunction$ModifierBuilder {
        build(): $SetAttributesFunction$Modifier;
        forSlot(arg0: $EquipmentSlotGroup_): $SetAttributesFunction$ModifierBuilder;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_);
    }
    export class $SetStewEffectFunction$EffectEntry extends $Record {
        duration(): $NumberProvider;
        effect(): $Holder<$MobEffect>;
        static CODEC: $Codec<$SetStewEffectFunction$EffectEntry>;
    }
    /**
     * Values that may be interpreted as {@link $SetStewEffectFunction$EffectEntry}.
     */
    export type $SetStewEffectFunction$EffectEntry_ = { duration?: $NumberProvider_, effect?: $Holder_<$MobEffect>,  } | [duration?: $NumberProvider_, effect?: $Holder_<$MobEffect>, ];
    export class $SetWritableBookPagesFunction extends $LootItemConditionalFunction {
        apply(arg0: $WritableBookContent_): $WritableBookContent;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetWritableBookPagesFunction>;
        pages: $List<$Filterable<string>>;
        pageOperation: $ListOperation;
        constructor(arg0: $List_<$LootItemCondition>, arg1: $List_<$Filterable_<string>>, arg2: $ListOperation);
    }
    export class $CopyNameFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static copyName(arg0: $CopyNameFunction$NameSource_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyNameFunction>;
        source: $CopyNameFunction$NameSource;
    }
    export class $CopyCustomDataFunction$CopyOperation extends $Record {
        apply(arg0: $Supplier_<$Tag>, arg1: $Tag_): void;
        op(): $CopyCustomDataFunction$MergeStrategy;
        sourcePath(): $NbtPathArgument$NbtPath;
        targetPath(): $NbtPathArgument$NbtPath;
        static CODEC: $Codec<$CopyCustomDataFunction$CopyOperation>;
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$CopyOperation}.
     */
    export type $CopyCustomDataFunction$CopyOperation_ = { targetPath?: $NbtPathArgument$NbtPath, op?: $CopyCustomDataFunction$MergeStrategy_, sourcePath?: $NbtPathArgument$NbtPath,  } | [targetPath?: $NbtPathArgument$NbtPath, op?: $CopyCustomDataFunction$MergeStrategy_, sourcePath?: $NbtPathArgument$NbtPath, ];
}
