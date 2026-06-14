import { $CompoundContainerFTBL } from "@package/dev/ftb/mods/ftblibrary/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IMenuProviderExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StackedContentsCompatible, $MenuConstructor, $AbstractContainerMenu, $MenuConstructor_ } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $RandomSupport$Seed128bit, $XoroshiroRandomSource } from "@package/net/minecraft/world/level/levelgen";
import { $ContainerAccessor } from "@package/dev/terminalmc/clientsort/mixin/accessor";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IEntityOwnedInventory } from "@package/fi/dy/masa/malilib/util";
export * as item from "@package/net/minecraft/world/item";
export * as level from "@package/net/minecraft/world/level";
export * as inventory from "@package/net/minecraft/world/inventory";
export * as entity from "@package/net/minecraft/world/entity";
export * as damagesource from "@package/net/minecraft/world/damagesource";
export * as effect from "@package/net/minecraft/world/effect";
export * as phys from "@package/net/minecraft/world/phys";
export * as ticks from "@package/net/minecraft/world/ticks";
export * as scores from "@package/net/minecraft/world/scores";
export * as food from "@package/net/minecraft/world/food";
export * as flag from "@package/net/minecraft/world/flag";

declare module "@package/net/minecraft/world" {
    export class $RandomSequences extends $SavedData {
        reset(arg0: $ResourceLocation_, arg1: number, arg2: boolean, arg3: boolean): void;
        reset(arg0: $ResourceLocation_): void;
        get(arg0: $ResourceLocation_): $RandomSource;
        static load(arg0: number, arg1: $CompoundTag_): $RandomSequences;
        clear(): number;
        static factory(arg0: number): $SavedData$Factory<$RandomSequences>;
        forAllSequences(arg0: $BiConsumer_<$ResourceLocation, $RandomSequence>): void;
        setSeedDefaults(arg0: number, arg1: boolean, arg2: boolean): void;
        constructor(arg0: number);
    }
    export class $BossEvent$BossBarColor extends $Enum<$BossEvent$BossBarColor> {
        getName(): string;
        static values(): $BossEvent$BossBarColor[];
        static valueOf(arg0: string): $BossEvent$BossBarColor;
        static byName(arg0: string): $BossEvent$BossBarColor;
        getFormatting(): $ChatFormatting;
        static RED: $BossEvent$BossBarColor;
        static WHITE: $BossEvent$BossBarColor;
        static PINK: $BossEvent$BossBarColor;
        static BLUE: $BossEvent$BossBarColor;
        static YELLOW: $BossEvent$BossBarColor;
        static PURPLE: $BossEvent$BossBarColor;
        static GREEN: $BossEvent$BossBarColor;
        get formatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $BossEvent$BossBarColor}.
     */
    export type $BossEvent$BossBarColor_ = "pink" | "blue" | "red" | "green" | "yellow" | "purple" | "white";
    export class $DifficultyInstance {
        getSpecialMultiplier(): number;
        getEffectiveDifficulty(): number;
        getDifficulty(): $Difficulty;
        isHarderThan(arg0: number): boolean;
        isHard(): boolean;
        constructor(arg0: $Difficulty_, arg1: number, arg2: number, arg3: number);
        get specialMultiplier(): number;
        get effectiveDifficulty(): number;
        get difficulty(): $Difficulty;
        get hard(): boolean;
    }
    export class $BossEvent$BossBarOverlay extends $Enum<$BossEvent$BossBarOverlay> {
        getName(): string;
        static values(): $BossEvent$BossBarOverlay[];
        static valueOf(arg0: string): $BossEvent$BossBarOverlay;
        static byName(arg0: string): $BossEvent$BossBarOverlay;
        static NOTCHED_6: $BossEvent$BossBarOverlay;
        static NOTCHED_12: $BossEvent$BossBarOverlay;
        static PROGRESS: $BossEvent$BossBarOverlay;
        static NOTCHED_20: $BossEvent$BossBarOverlay;
        static NOTCHED_10: $BossEvent$BossBarOverlay;
    }
    /**
     * Values that may be interpreted as {@link $BossEvent$BossBarOverlay}.
     */
    export type $BossEvent$BossBarOverlay_ = "progress" | "notched_6" | "notched_10" | "notched_12" | "notched_20";
    export class $InteractionResultHolder<T> {
        static fail<T>(arg0: T): $InteractionResultHolder<T>;
        getObject(): T;
        static pass<T>(arg0: T): $InteractionResultHolder<T>;
        static success<T>(arg0: T): $InteractionResultHolder<T>;
        static consume<T>(arg0: T): $InteractionResultHolder<T>;
        getResult(): $InteractionResult;
        static sidedSuccess<T>(arg0: T, arg1: boolean): $InteractionResultHolder<T>;
        constructor(arg0: $InteractionResult_, arg1: T);
        get object(): T;
        get result(): $InteractionResult;
    }
    export class $Nameable {
    }
    export interface $Nameable {
        getName(): $Component;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        get name(): $Component;
        get displayName(): $Component;
        get customName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Nameable}.
     */
    export type $Nameable_ = (() => $Component_);
    export class $CompoundContainer implements $Container, $CompoundContainerFTBL {
        isEmpty(): boolean;
        contains(arg0: $Container): boolean;
        getItem(arg0: number): $ItemStack;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        getMaxStackSize(): number;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        clearContent(): void;
        setChanged(): void;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getContainer1FTBL(): $Container;
        getContainer2FTBL(): $Container;
        clientsort$setChanged(): void;
        constructor(arg0: $Container, arg1: $Container);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
        get container1FTBL(): $Container;
        get container2FTBL(): $Container;
    }
    export class $RandomSequences$DirtyMarkingRandomSource implements $RandomSource {
        nextInt(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
    }
    export class $LockCode extends $Record {
        key(): string;
        unlocksWith(arg0: $ItemStack_): boolean;
        addToTag(arg0: $CompoundTag_): void;
        static fromTag(arg0: $CompoundTag_): $LockCode;
        static CODEC: $Codec<$LockCode>;
        static NO_LOCK: $LockCode;
        static TAG_LOCK: string;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $LockCode}.
     */
    export type $LockCode_ = { key?: string,  } | [key?: string, ];
    export class $SimpleContainer implements $Container, $StackedContentsCompatible, $IEntityOwnedInventory {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        addListener(arg0: $ContainerListener_): void;
        addItem(arg0: $ItemStack_): $ItemStack;
        removeListener(arg0: $ContainerListener_): void;
        getItems(): $NonNullList<$ItemStack>;
        removeAllItems(): $List<$ItemStack>;
        removeItem(arg0: number, arg1: number): $ItemStack;
        createTag(arg0: $HolderLookup$Provider): $ListTag;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        fromTag(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        stillValid(arg0: $Player): boolean;
        removeItemType(arg0: $Item_, arg1: number): $ItemStack;
        clearContent(): void;
        setChanged(): void;
        canAddItem(arg0: $ItemStack_): boolean;
        malilib$getEntityOwner(): $Entity;
        malilib$setEntityOwner(entityOwner: $Entity): void;
        fillStackedContents(arg0: $StackedContents): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        size: number;
        items: $NonNullList<$ItemStack>;
        constructor(arg0: number);
        constructor(...arg0: $ItemStack_[]);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $Clearable {
        static tryClear(arg0: $Object): void;
    }
    export interface $Clearable {
        clearContent(): void;
    }
    /**
     * Values that may be interpreted as {@link $Clearable}.
     */
    export type $Clearable_ = (() => void);
    export class $TickRateManager {
        isFrozen(): boolean;
        tick(): void;
        nanosecondsPerTick(): number;
        tickrate(): number;
        isSteppingForward(): boolean;
        runsNormally(): boolean;
        isEntityFrozen(arg0: $Entity): boolean;
        millisecondsPerTick(): number;
        setTickRate(arg0: number): void;
        setFrozen(arg0: boolean): void;
        setFrozenTicksToRun(arg0: number): void;
        frozenTicksToRun(): number;
        static MIN_TICKRATE: number;
        constructor();
        get steppingForward(): boolean;
        set tickRate(value: number);
    }
    export class $ContainerHelper {
        static saveAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: boolean, arg3: $HolderLookup$Provider): $CompoundTag;
        static saveAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: $HolderLookup$Provider): $CompoundTag;
        static removeItem(arg0: $List_<$ItemStack_>, arg1: number, arg2: number): $ItemStack;
        static takeItem(arg0: $List_<$ItemStack_>, arg1: number): $ItemStack;
        static loadAllItems(arg0: $CompoundTag_, arg1: $NonNullList<$ItemStack_>, arg2: $HolderLookup$Provider): void;
        static clearOrCountMatchingItems(arg0: $Container, arg1: $Predicate_<$ItemStack>, arg2: number, arg3: boolean): number;
        static clearOrCountMatchingItems(arg0: $ItemStack_, arg1: $Predicate_<$ItemStack>, arg2: number, arg3: boolean): number;
        static TAG_ITEMS: string;
        constructor();
    }
    export class $Container {
        static stillValidBlockEntity(arg0: $BlockEntity, arg1: $Player, arg2: number): boolean;
        static stillValidBlockEntity(arg0: $BlockEntity, arg1: $Player): boolean;
        static DEFAULT_DISTANCE_BUFFER: number;
    }
    export interface $Container extends $Clearable, $ContainerAccessor, $ContainerKJS {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setChanged(): void;
        clientsort$setChanged(): void;
        get empty(): boolean;
        get containerSize(): number;
    }
    export class $MenuProvider {
    }
    export interface $MenuProvider extends $MenuConstructor, $IMenuProviderExtension {
        getDisplayName(): $Component;
        get displayName(): $Component;
    }
    export class $BossEvent {
        getName(): $Component;
        setName(arg0: $Component_): void;
        getId(): $UUID;
        setColor(arg0: $BossEvent$BossBarColor_): void;
        getColor(): $BossEvent$BossBarColor;
        getProgress(): number;
        shouldDarkenScreen(): boolean;
        getOverlay(): $BossEvent$BossBarOverlay;
        setPlayBossMusic(arg0: boolean): $BossEvent;
        setCreateWorldFog(arg0: boolean): $BossEvent;
        setOverlay(arg0: $BossEvent$BossBarOverlay_): void;
        setDarkenScreen(arg0: boolean): $BossEvent;
        shouldCreateWorldFog(): boolean;
        setProgress(arg0: number): void;
        shouldPlayBossMusic(): boolean;
        constructor(arg0: $UUID_, arg1: $Component_, arg2: $BossEvent$BossBarColor_, arg3: $BossEvent$BossBarOverlay_);
        get id(): $UUID;
        set playBossMusic(value: boolean);
        set createWorldFog(value: boolean);
        set darkenScreen(value: boolean);
    }
    export class $WorldlyContainer {
    }
    export interface $WorldlyContainer extends $Container {
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
    }
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        containerChanged(arg0: $Container): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerListener}.
     */
    export type $ContainerListener_ = ((arg0: $Container) => void);
    export class $InteractionResult extends $Enum<$InteractionResult> {
        static values(): $InteractionResult[];
        static valueOf(arg0: string): $InteractionResult;
        shouldSwing(): boolean;
        consumesAction(): boolean;
        static sidedSuccess(arg0: boolean): $InteractionResult;
        indicateItemUse(): boolean;
        static SUCCESS: $InteractionResult;
        static PASS: $InteractionResult;
        static CONSUME_PARTIAL: $InteractionResult;
        static SUCCESS_NO_ITEM_USED: $InteractionResult;
        static CONSUME: $InteractionResult;
        static FAIL: $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $InteractionResult}.
     */
    export type $InteractionResult_ = "success" | "success_no_item_used" | "consume" | "consume_partial" | "pass" | "fail";
    export class $RandomSequence {
        random(): $RandomSource;
        static seedForKey(arg0: $ResourceLocation_): $RandomSupport$Seed128bit;
        static CODEC: $Codec<$RandomSequence>;
        constructor(arg0: number, arg1: ($ResourceLocation_) | undefined);
        constructor(arg0: number, arg1: $ResourceLocation_);
        constructor(arg0: $XoroshiroRandomSource);
    }
    export class $WorldlyContainerHolder {
    }
    export interface $WorldlyContainerHolder {
        getContainer(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_): $WorldlyContainer;
    }
    /**
     * Values that may be interpreted as {@link $WorldlyContainerHolder}.
     */
    export type $WorldlyContainerHolder_ = ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos) => $WorldlyContainer);
    export class $InteractionHand extends $Enum<$InteractionHand> {
        static values(): $InteractionHand[];
        static valueOf(arg0: string): $InteractionHand;
        static MAIN_HAND: $InteractionHand;
        static OFF_HAND: $InteractionHand;
    }
    /**
     * Values that may be interpreted as {@link $InteractionHand}.
     */
    export type $InteractionHand_ = "main_hand" | "off_hand";
    export class $Containers {
        static dropContentsOnDestroy(arg0: $BlockState_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_): void;
        static dropItemStack(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_): void;
        static dropContents(arg0: $Level_, arg1: $BlockPos_, arg2: $NonNullList<$ItemStack_>): void;
        static dropContents(arg0: $Level_, arg1: $Entity, arg2: $Container): void;
        static dropContents(arg0: $Level_, arg1: $BlockPos_, arg2: $Container): void;
        constructor();
    }
    export class $RandomizableContainer {
        static setBlockEntityLootTable(arg0: $BlockGetter, arg1: $RandomSource, arg2: $BlockPos_, arg3: $ResourceKey_<$LootTable>): void;
        static LOOT_TABLE_SEED_TAG: string;
        static LOOT_TABLE_TAG: string;
    }
    export interface $RandomizableContainer extends $Container {
        getLevel(): $Level;
        wrapOperation$dle000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        setLootTableSeed(arg0: number): void;
        handler$dno000$youkaishomecoming$trayLoad(arg0: $Player, arg1: $CallbackInfo): void;
        handler$dle000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        getBlockPos(): $BlockPos;
        wrapOperation$dle000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        unpackLootTable(arg0: $Player): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        get level(): $Level;
        get blockPos(): $BlockPos;
    }
    export class $SimpleMenuProvider implements $MenuProvider {
        getDisplayName(): $Component;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        constructor(arg0: $MenuConstructor_, arg1: $Component_);
        get displayName(): $Component;
    }
    export class $ItemInteractionResult extends $Enum<$ItemInteractionResult> {
        static values(): $ItemInteractionResult[];
        static valueOf(arg0: string): $ItemInteractionResult;
        result(): $InteractionResult;
        consumesAction(): boolean;
        static sidedSuccess(arg0: boolean): $ItemInteractionResult;
        static SUCCESS: $ItemInteractionResult;
        static SKIP_DEFAULT_BLOCK_INTERACTION: $ItemInteractionResult;
        static CONSUME_PARTIAL: $ItemInteractionResult;
        static CONSUME: $ItemInteractionResult;
        static PASS_TO_DEFAULT_BLOCK_INTERACTION: $ItemInteractionResult;
        static FAIL: $ItemInteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $ItemInteractionResult}.
     */
    export type $ItemInteractionResult_ = "success" | "consume" | "consume_partial" | "pass_to_default_block_interaction" | "skip_default_block_interaction" | "fail";
    export class $Difficulty extends $Enum<$Difficulty> implements $StringRepresentable {
        static values(): $Difficulty[];
        static valueOf(arg0: string): $Difficulty;
        getKey(): string;
        getId(): number;
        getDisplayName(): $Component;
        getInfo(): $Component;
        static byName(arg0: string): $Difficulty;
        static byId(arg0: number): $Difficulty;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EASY: $Difficulty;
        static CODEC: $StringRepresentable$EnumCodec<$Difficulty>;
        static PEACEFUL: $Difficulty;
        static HARD: $Difficulty;
        static NORMAL: $Difficulty;
        get key(): string;
        get id(): number;
        get displayName(): $Component;
        get info(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Difficulty}.
     */
    export type $Difficulty_ = "peaceful" | "easy" | "normal" | "hard";
}
