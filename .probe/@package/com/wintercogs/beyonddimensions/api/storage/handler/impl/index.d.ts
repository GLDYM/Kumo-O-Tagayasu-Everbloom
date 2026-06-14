import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IStackKey, $KeyAmount_, $KeyAmount } from "@package/com/wintercogs/beyonddimensions/api/storage/key";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IStackHandler } from "@package/com/wintercogs/beyonddimensions/api/storage/handler";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum, $Object, $AutoCloseable } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";

declare module "@package/com/wintercogs/beyonddimensions/api/storage/handler/impl" {
    export class $UnorderedStackHandlerRemoveZero extends $AbstractUnorderedStackHandler {
        slotMaxSize: number;
        slotCapacity: number;
        constructor(arg0: $AbstractUnorderedStackHandler$UiTimestampPolicy_);
        constructor(arg0: $AbstractUnorderedStackHandler$UiTimestampPolicy_, arg1: number, arg2: number);
    }
    export class $AbstractUnorderedStackHandler$TypeBucket {
        size(): number;
        get(arg0: number): $IStackKey<never>;
        constructor();
    }
    export class $AbstractUnorderedStackHandler$UiTimestampPolicy extends $Enum<$AbstractUnorderedStackHandler$UiTimestampPolicy> {
        static values(): $AbstractUnorderedStackHandler$UiTimestampPolicy[];
        static valueOf(arg0: string): $AbstractUnorderedStackHandler$UiTimestampPolicy;
        static AUTO: $AbstractUnorderedStackHandler$UiTimestampPolicy;
        static NONE: $AbstractUnorderedStackHandler$UiTimestampPolicy;
    }
    /**
     * Values that may be interpreted as {@link $AbstractUnorderedStackHandler$UiTimestampPolicy}.
     */
    export type $AbstractUnorderedStackHandler$UiTimestampPolicy_ = "none" | "auto";
    export class $AbstractUnorderedStackHandler implements $IStackHandler {
        extract(arg0: number, arg1: number, arg2: boolean): $KeyAmount;
        extract(arg0: $IStackKey<never>, arg1: number, arg2: boolean, arg3: boolean): $KeyAmount;
        extract(arg0: $TagKey_<never>, arg1: number, arg2: boolean): $KeyAmount;
        insert(arg0: $IStackKey<never>, arg1: number, arg2: boolean): $KeyAmount;
        insert(arg0: number, arg1: $IStackKey<never>, arg2: number, arg3: boolean): $KeyAmount;
        isEmpty(): boolean;
        setLastModifiedTime(arg0: $IStackKey<never>, arg1: number): void;
        setCreationTime(arg0: $IStackKey<never>, arg1: number): void;
        onChange(): void;
        getBucket(arg0: $ResourceLocation_): ($AbstractUnorderedStackHandler$TypeBucket) | undefined;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        hasStack(arg0: $IStackKey<never>): boolean;
        getStorage(): $List<$KeyAmount>;
        getCreationTimeMap(): $Map<$IStackKey<never>, number>;
        subscribeDelta(arg0: $Object, arg1: $AbstractUnorderedStackHandler$DeltaListener_): $AutoCloseable;
        clearStorage(): void;
        getZeroPolicy(): $AbstractUnorderedStackHandler$ZeroPolicy;
        setZeroPolicy(arg0: $AbstractUnorderedStackHandler$ZeroPolicy_): void;
        subscribeAny(arg0: $Object, arg1: $AbstractUnorderedStackHandler$AnyChangeListener_): $AutoCloseable;
        subscribeAnyWeak<T>(arg0: T, arg1: $Consumer_<T>): $AutoCloseable;
        subscribeDeltaWeak<T>(arg0: T, arg1: $AbstractUnorderedStackHandler$QuadConsumer_<T, $IStackKey<never>, number, boolean>): $AutoCloseable;
        setAmountByKey(arg0: $IStackKey<never>, arg1: number): number;
        getStackBySlot(arg0: number): $KeyAmount;
        getSlotCapacity(arg0: number): number;
        isFullSlotsSize(): boolean;
        setSlotMaxSize(arg0: number): void;
        setSlotCapacity(arg0: number): void;
        getStackByKey(arg0: $IStackKey<never>): $KeyAmount;
        getOutStackByKey(arg0: $IStackKey<never>): $Object;
        setStackDirectly(arg0: number, arg1: $IStackKey<never>, arg2: number): void;
        addStackDirectly(arg0: $IStackKey<never>, arg1: number): void;
        isStackValid(arg0: number, arg1: $IStackKey<never>): boolean;
        setUiTimestampPolicy(arg0: $AbstractUnorderedStackHandler$UiTimestampPolicy_): void;
        getLastModifiedTimeMap(): $Map<$IStackKey<never>, number>;
        getUiTimestampPolicy(): $AbstractUnorderedStackHandler$UiTimestampPolicy;
        extract(arg0: $IStackKey<never>, arg1: number, arg2: boolean): $KeyAmount;
        getSlots(): number;
        slotMaxSize: number;
        slotCapacity: number;
        get empty(): boolean;
        get storage(): $List<$KeyAmount>;
        get creationTimeMap(): $Map<$IStackKey<never>, number>;
        get fullSlotsSize(): boolean;
        get lastModifiedTimeMap(): $Map<$IStackKey<never>, number>;
        get slots(): number;
    }
    export class $AbstractUnorderedStackHandler$QuadConsumer<A, B, C, D> {
    }
    export interface $AbstractUnorderedStackHandler$QuadConsumer<A, B, C, D> {
        accept(arg0: A, arg1: B, arg2: C, arg3: D): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractUnorderedStackHandler$QuadConsumer}.
     */
    export type $AbstractUnorderedStackHandler$QuadConsumer_<A, B, C, D> = ((arg0: A, arg1: B, arg2: C, arg3: D) => void);
    export class $AbstractUnorderedStackHandler$ZeroPolicy extends $Enum<$AbstractUnorderedStackHandler$ZeroPolicy> {
        static values(): $AbstractUnorderedStackHandler$ZeroPolicy[];
        static valueOf(arg0: string): $AbstractUnorderedStackHandler$ZeroPolicy;
        static KEEP_ZERO: $AbstractUnorderedStackHandler$ZeroPolicy;
        static REMOVE_ON_ZERO: $AbstractUnorderedStackHandler$ZeroPolicy;
    }
    /**
     * Values that may be interpreted as {@link $AbstractUnorderedStackHandler$ZeroPolicy}.
     */
    export type $AbstractUnorderedStackHandler$ZeroPolicy_ = "keep_zero" | "remove_on_zero";
    export class $StackHandler$SlotBucket {
        size(): number;
        get(arg0: number): number;
        snapshot(): $List<number>;
        constructor();
    }
    export class $AbstractUnorderedStackHandler$AnyChangeListener {
    }
    export interface $AbstractUnorderedStackHandler$AnyChangeListener {
        onAnyChange(): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractUnorderedStackHandler$AnyChangeListener}.
     */
    export type $AbstractUnorderedStackHandler$AnyChangeListener_ = (() => void);
    export class $StackHandler implements $IStackHandler {
        extract(arg0: number, arg1: number, arg2: boolean): $KeyAmount;
        extract(arg0: $IStackKey<never>, arg1: number, arg2: boolean, arg3: boolean): $KeyAmount;
        insert(arg0: number, arg1: $IStackKey<never>, arg2: number, arg3: boolean): $KeyAmount;
        insert(arg0: $IStackKey<never>, arg1: number, arg2: boolean): $KeyAmount;
        isEmpty(): boolean;
        onChange(): void;
        getSlots(): number;
        getBucket(arg0: $IStackKey<never>): ($StackHandler$SlotBucket) | undefined;
        getBucket(arg0: $ResourceLocation_): ($StackHandler$SlotBucket) | undefined;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        hasStack(arg0: $IStackKey<never>): boolean;
        getStorage(): $List<$KeyAmount>;
        clearStorage(): void;
        getStackBySlot(arg0: number): $KeyAmount;
        getSlotCapacity(arg0: number): number;
        getStackByKey(arg0: $IStackKey<never>): $KeyAmount;
        getOutStackByKey(arg0: $IStackKey<never>): $Object;
        setStackDirectly(arg0: number, arg1: $IStackKey<never>, arg2: number): void;
        addStackDirectly(arg0: $IStackKey<never>, arg1: number): void;
        isStackValid(arg0: number, arg1: $IStackKey<never>): boolean;
        extract(arg0: $IStackKey<never>, arg1: number, arg2: boolean): $KeyAmount;
        static TYPE_CODEC: $MapCodec<$StackHandler>;
        static CODEC: $Codec<$StackHandler>;
        constructor(arg0: $List_<$KeyAmount_>);
        constructor(arg0: number);
        get empty(): boolean;
        get slots(): number;
        get storage(): $List<$KeyAmount>;
    }
    export class $AbstractUnorderedStackHandler$DeltaListener {
    }
    export interface $AbstractUnorderedStackHandler$DeltaListener {
        onDelta(arg0: $IStackKey<never>, arg1: number, arg2: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractUnorderedStackHandler$DeltaListener}.
     */
    export type $AbstractUnorderedStackHandler$DeltaListener_ = ((arg0: $IStackKey<never>, arg1: number, arg2: boolean) => void);
}
