import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/entity/data" {
    export class $TaskDataKey<T> {
    }
    export interface $TaskDataKey<T> {
        getKey(): $ResourceLocation;
        readSaveData(arg0: $CompoundTag_): T;
        writeSaveData(arg0: T): $CompoundTag;
        readSyncData(arg0: $CompoundTag_): T;
        writeSyncData(arg0: T): $CompoundTag;
        get key(): $ResourceLocation;
    }
}
