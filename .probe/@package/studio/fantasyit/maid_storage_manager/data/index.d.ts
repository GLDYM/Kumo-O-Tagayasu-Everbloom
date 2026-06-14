import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/oshi/util/tuples";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Target } from "@package/studio/fantasyit/maid_storage_manager/storage";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/studio/fantasyit/maid_storage_manager/data" {
    export class $ItemCount extends $Record {
        static of(arg0: $ItemStack_, arg1: number): $ItemCount;
        static of(arg0: $ItemStack_): $ItemCount;
        count(): number;
        getFirst(): $ItemStack;
        getSecond(): number;
        item(): $ItemStack;
        static CODEC: $Codec<$ItemCount>;
        static EMPTY: $ItemCount;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCount>;
        constructor(arg0: $ItemStack_);
        constructor(item: $ItemStack_, count: number);
        get first(): $ItemStack;
        get second(): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemCount}.
     */
    export type $ItemCount_ = { item?: $ItemStack_, count?: number,  } | [item?: $ItemStack_, count?: number, ];
    export class $InventoryItem$PositionCount extends $Record {
        count(): number;
        pos(): $Target;
        isCraftGuide(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $InventoryItem$PositionCount>;
        constructor(pos: $Target, count: number, isCraftGuide: boolean);
        get craftGuide(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InventoryItem$PositionCount}.
     */
    export type $InventoryItem$PositionCount_ = { isCraftGuide?: boolean, count?: number, pos?: $Target,  } | [isCraftGuide?: boolean, count?: number, pos?: $Target, ];
    export class $InventoryItem implements $INBTSerializable<$CompoundTag> {
        addCount(arg0: $Target, arg1: number): void;
        static fromNbt(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $InventoryItem;
        toPair(): $Pair<$ItemStack, number>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        addCraftGuidePos(arg0: $Target): void;
        itemStack: $ItemStack;
        posAndSlot: $List<$InventoryItem$PositionCount>;
        totalCount: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $InventoryItem>;
        constructor(arg0: $ItemStack_, arg1: number, arg2: $List_<$InventoryItem$PositionCount_>);
        constructor(arg0: $ItemStack_, arg1: number);
    }
}
