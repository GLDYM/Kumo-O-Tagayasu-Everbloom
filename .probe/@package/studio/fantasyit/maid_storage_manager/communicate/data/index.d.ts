import { $ImageAsset } from "@package/studio/fantasyit/maid_storage_manager/menu/base";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IActionWish } from "@package/studio/fantasyit/maid_storage_manager/api/communicate/wish";
import { $List, $List_ } from "@package/java/util";
import { $Function_, $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStackUtil$MATCH_TYPE_, $ItemStackUtil$MATCH_TYPE } from "@package/studio/fantasyit/maid_storage_manager/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/studio/fantasyit/maid_storage_manager/communicate/data" {
    export class $ConfigurableCommunicateData {
        copy(): $ConfigurableCommunicateData;
        buildWish(arg0: $EntityMaid): $List<$IActionWish>;
        static toFixedLength(arg0: $ConfigurableCommunicateData): $ConfigurableCommunicateData;
        static fromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ConfigurableCommunicateData;
        toNbt(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$ConfigurableCommunicateData>;
        items: $List<$ConfigurableCommunicateData$Item>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConfigurableCommunicateData>;
        constructor(arg0: $List_<$ConfigurableCommunicateData$Item>);
    }
    export class $SlotType extends $Enum<$SlotType> {
        getName(): $Component;
        static values(): $SlotType[];
        static valueOf(arg0: string): $SlotType;
        icon(): $ImageAsset;
        getItemStacks(arg0: $EntityMaid): $List<$ItemStack>;
        processSlotItemsAndGetIsFinished(arg0: $EntityMaid, arg1: number, arg2: $BiFunction_<$ItemStack, number, $ItemStack>): (number) | undefined;
        iterItemExceptSlotForMaid(arg0: $EntityMaid, arg1: $Function_<$ItemStack, $ItemStack>): void;
        drawGold(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        tryPlaceItemIn(arg0: $ItemStack_, arg1: $EntityMaid): $ItemStack;
        static CHEST: $SlotType;
        static ALL: $SlotType;
        static HEAD: $SlotType;
        static ETA: $SlotType;
        static LEGS: $SlotType;
        static MAIN_HAND: $SlotType;
        static FLOWER: $SlotType;
        static FEET: $SlotType;
        static BAUBLE: $SlotType;
        static OFF_HAND: $SlotType;
    }
    /**
     * Values that may be interpreted as {@link $SlotType}.
     */
    export type $SlotType_ = "all" | "head" | "chest" | "legs" | "feet" | "main_hand" | "off_hand" | "flower" | "eta" | "bauble";
    export class $ConfigurableCommunicateData$Item {
        static empty(): $ConfigurableCommunicateData$Item;
        copy(): $ConfigurableCommunicateData$Item;
        static fromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ConfigurableCommunicateData$Item;
        toNbt(arg0: $HolderLookup$Provider): $CompoundTag;
        whiteMode: boolean;
        static CODEC: $Codec<$ConfigurableCommunicateData$Item>;
        min: number;
        thresholdCount: number;
        max: number;
        match: $ItemStackUtil$MATCH_TYPE;
        slot: $SlotType;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConfigurableCommunicateData$Item>;
        requires: $List<$ItemStack>;
        constructor(arg0: $List_<$ItemStack_>, arg1: boolean, arg2: $ItemStackUtil$MATCH_TYPE_, arg3: $SlotType_, arg4: number, arg5: number, arg6: number);
    }
}
