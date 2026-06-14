import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $AccessorCompositeEntryBase, $AccessorLootPoolSingletonContainer, $AccessorDynamicLoot, $AccessorLootItem, $AccessorTagEntry, $AccessorNestedLootTable } from "@package/net/darkhax/bookshelf/common/mixin/access/loot";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Iterable_, $Record } from "@package/java/lang";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/entries" {
    export class $LootPoolEntryContainer implements $ComposableEntryContainer {
        validate(arg0: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        conditions: $List<$LootItemCondition>;
        get type(): $LootPoolEntryType;
    }
    export class $LootPoolSingletonContainer extends $LootPoolEntryContainer implements $AccessorLootPoolSingletonContainer {
        static simpleBuilder(arg0: $LootPoolSingletonContainer$EntryConstructor_): $LootPoolSingletonContainer$Builder<never>;
        bookshelf$quality(): number;
        bookshelf$weight(): number;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $NestedLootTable extends $LootPoolSingletonContainer implements $AccessorNestedLootTable {
        static lootTableReference(arg0: $ResourceKey_<$LootTable>): $LootPoolSingletonContainer$Builder<never>;
        static inlineLootTable(arg0: $LootTable): $LootPoolSingletonContainer$Builder<never>;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        bookshelf$contents(): $Either<$ResourceKey<$LootTable>, $LootTable>;
        static CODEC: $MapCodec<$NestedLootTable>;
        functions: $List<$LootItemFunction>;
        contents: $Either<$ResourceKey<$LootTable>, $LootTable>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $EmptyLootItem extends $LootPoolSingletonContainer {
        static emptyItem(): $LootPoolSingletonContainer$Builder<never>;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        static CODEC: $MapCodec<$EmptyLootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $LootPoolSingletonContainer$EntryConstructor {
    }
    export interface $LootPoolSingletonContainer$EntryConstructor {
    }
    /**
     * Values that may be interpreted as {@link $LootPoolSingletonContainer$EntryConstructor}.
     */
    export type $LootPoolSingletonContainer$EntryConstructor_ = (() => void);
    export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $DynamicLoot extends $LootPoolSingletonContainer implements $AccessorDynamicLoot {
        static dynamicEntry(arg0: $ResourceLocation_): $LootPoolSingletonContainer$Builder<never>;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        bookshelf$name(): $ResourceLocation;
        static CODEC: $MapCodec<$DynamicLoot>;
        functions: $List<$LootItemFunction>;
        name: $ResourceLocation;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $CompositeEntryBase extends $LootPoolEntryContainer implements $AccessorCompositeEntryBase {
        static createCodec<T extends $CompositeEntryBase>(arg0: $CompositeEntryBase$CompositeEntryConstructor_<T>): $MapCodec<T>;
        bookshelf$children(): $List<$LootPoolEntryContainer>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
    }
    export class $AlternativesEntry extends $CompositeEntryBase {
        static alternatives(...arg0: $LootPoolEntryContainer$Builder<never>[]): $AlternativesEntry$Builder;
        static alternatives<E>(arg0: $Collection_<E>, arg1: $Function_<E, $LootPoolEntryContainer$Builder<never>>): $AlternativesEntry$Builder;
        static CODEC: $MapCodec<$AlternativesEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
    }
    export class $TagEntry extends $LootPoolSingletonContainer implements $AccessorTagEntry {
        static expandTag(arg0: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        static tagContents(arg0: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        bookshelf$tag(): $TagKey<$Item>;
        bookshelf$expand(): boolean;
        static CODEC: $MapCodec<$TagEntry>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        tag: $TagKey<$Item>;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $LootItem extends $LootPoolSingletonContainer implements $AccessorLootItem {
        static create$bookshelf_$md$70d283$0(arg0: $Holder_<any>, arg1: number, arg2: number, arg3: $List_<any>, arg4: $List_<any>): $LootItem;
        static lootTableItem(arg0: $ItemLike_): $LootPoolSingletonContainer$Builder<never>;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        bookshelf$item(): $Holder<$Item>;
        item: $Holder<$Item>;
        static CODEC: $MapCodec<$LootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
    }
    export class $LootPoolEntry {
    }
    export interface $LootPoolEntry {
        getWeight(arg0: number): number;
        createItemStack(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
    }
    export class $LootPoolSingletonContainer$Builder<T extends $LootPoolSingletonContainer$Builder<T>> extends $LootPoolEntryContainer$Builder<T> implements $FunctionUserBuilder<T> {
        setQuality(arg0: number): T;
        setWeight(arg0: number): T;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): T;
        apply(arg0: $LootItemFunction$Builder_): T;
        unwrap(): T;
        constructor();
        set quality(value: number);
        set weight(value: number);
    }
    export class $LootPoolSingletonContainer$DummyBuilder extends $LootPoolSingletonContainer$Builder<$LootPoolSingletonContainer$DummyBuilder> {
    }
    export class $LootPoolEntries {
        static ITEM: $LootPoolEntryType;
        static GROUP: $LootPoolEntryType;
        static CODEC: $Codec<$LootPoolEntryContainer>;
        static SEQUENCE: $LootPoolEntryType;
        static ALTERNATIVES: $LootPoolEntryType;
        static LOOT_TABLE: $LootPoolEntryType;
        static TAG: $LootPoolEntryType;
        static EMPTY: $LootPoolEntryType;
        static DYNAMIC: $LootPoolEntryType;
        constructor();
    }
    export class $LootPoolSingletonContainer$EntryBase implements $LootPoolEntry {
    }
    export interface $LootPoolEntryType extends RegistryMarked<RegistryTypes.LootPoolEntryTypeTag, RegistryTypes.LootPoolEntryType> {}
    export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
        constructor(...arg0: $LootPoolEntryContainer$Builder<never>[]);
    }
    export class $LootPoolEntryType extends $Record {
        codec(): $MapCodec<$LootPoolEntryContainer>;
        constructor(arg0: $MapCodec_<$LootPoolEntryContainer>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryType}.
     */
    export type $LootPoolEntryType_ = RegistryTypes.LootPoolEntryType | { codec?: $MapCodec_<$LootPoolEntryContainer>,  } | [codec?: $MapCodec_<$LootPoolEntryContainer>, ];
    export class $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
    }
    export interface $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
        create(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>): T;
    }
    /**
     * Values that may be interpreted as {@link $CompositeEntryBase$CompositeEntryConstructor}.
     */
    export type $CompositeEntryBase$CompositeEntryConstructor_<T> = ((arg0: $List<$LootPoolEntryContainer>, arg1: $List<$LootItemCondition>) => T);
    export class $SequentialEntry extends $CompositeEntryBase {
        static sequential(...arg0: $LootPoolEntryContainer$Builder<never>[]): $SequentialEntry$Builder;
        static CODEC: $MapCodec<$SequentialEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
    }
    export class $ComposableEntryContainer {
    }
    export interface $ComposableEntryContainer {
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = (() => void);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        append(arg0: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        unwrap(): T;
        build(): $LootPoolEntryContainer;
        then(arg0: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        otherwise(arg0: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        when(arg0: $LootItemCondition$Builder_): T;
        constructor();
    }
    export class $EntryGroup extends $CompositeEntryBase {
        static list(...arg0: $LootPoolEntryContainer$Builder<never>[]): $EntryGroup$Builder;
        static CODEC: $MapCodec<$EntryGroup>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
    }
}
