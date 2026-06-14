import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISetLazyTickCounter } from "@package/dev/khloeleclair/create/additionallogistics/common/utilities";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $SyncedBlockEntity extends $BlockEntity {
        notifyUpdate(): void;
        sendData(): void;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
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
        clientsort$setChanged(): void;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity, $ISetLazyTickCounter {
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        invalidate(): void;
        lazyTick(): void;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        award(arg0: $CreateAdvancement): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        getLazyTickCounter(): number;
        setLazyTickCounter(arg0: number): void;
        setLazyTickRate(arg0: number): void;
        isChunkUnloaded(): boolean;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        refreshBlockState(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        markVirtual(): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        canPlayerUse(arg0: $Player): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        set lazyTickRate(value: number);
        get chunkUnloaded(): boolean;
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
    }
}
