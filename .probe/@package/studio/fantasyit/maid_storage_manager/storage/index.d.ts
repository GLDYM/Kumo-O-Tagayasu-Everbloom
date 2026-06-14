import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";
import { $IMaidStorage, $IMultiBlockProcessor } from "@package/studio/fantasyit/maid_storage_manager/storage/base";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as base from "@package/studio/fantasyit/maid_storage_manager/storage/base";

declare module "@package/studio/fantasyit/maid_storage_manager/storage" {
    export class $Target {
        getType(): $ResourceLocation;
        static virtual(arg0: $BlockPos_, arg1: $Direction_): $Target;
        getSide(): ($Direction) | undefined;
        sameType(arg0: $BlockPos_, arg1: $Direction_): $Target;
        getPos(): $BlockPos;
        static fromStoreString(arg0: string): $Target;
        withoutSide(): $Target;
        toStoreString(): string;
        static fromNbt(arg0: $CompoundTag_): $Target;
        toNbt(): $CompoundTag;
        getBlockStateInLevel(arg0: $Level_): $BlockState;
        getSideV(): $Direction;
        side: $Direction;
        static CODEC: $Codec<$Target>;
        static VIRTUAL_TYPE: $ResourceLocation;
        pos: $BlockPos;
        type: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Target>;
        constructor(arg0: $ResourceLocation_, arg1: $BlockPos_, arg2: $Direction_);
        constructor(arg0: $ResourceLocation_, arg1: $BlockPos_, arg2: ($Direction_) | undefined);
        constructor(arg0: $ResourceLocation_, arg1: $BlockPos_);
        get sideV(): $Direction;
    }
    export class $CollectStorageEvent extends $Event implements $IModBusEvent {
        getStorages(): $List<$IMaidStorage>;
        addStorage(arg0: $IMaidStorage): void;
        getMultiBlockStorageProcessors(): $List<$IMultiBlockProcessor>;
        addMultiBlockStorageProcessor(arg0: $IMultiBlockProcessor): void;
        constructor(arg0: $List_<$IMaidStorage>, arg1: $List_<$IMultiBlockProcessor>);
        get storages(): $List<$IMaidStorage>;
        get multiBlockStorageProcessors(): $List<$IMultiBlockProcessor>;
    }
}
