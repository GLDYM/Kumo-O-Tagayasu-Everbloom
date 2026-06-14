import { $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RegistryOps } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $List, $Map_, $Map, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/teamabnormals/blueprint/common/world/storage/tracking" {
    export class $IDataManager$DataEntry<T> {
        encode(arg0: $CompoundTag_, arg1: $RegistryOps<$Tag_>): $CompoundTag;
        getValue(): T;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf): $IDataManager$DataEntry<never>;
        clean(): void;
        setValue(arg0: T, arg1: boolean): void;
        isDirty(): boolean;
        readValue(arg0: $CompoundTag_, arg1: $RegistryOps<$Tag_>, arg2: boolean): void;
        readValue(arg0: $RegistryFriendlyByteBuf, arg1: boolean): void;
        markDirty(): void;
        getTrackedData(): $TrackedData<T>;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$IDataManager$DataEntry<never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IDataManager$DataEntry<never>>;
        constructor(arg0: $TrackedData<T>);
        get dirty(): boolean;
        get trackedData(): $TrackedData<T>;
    }
    export class $SyncType extends $Enum<$SyncType> {
        static values(): $SyncType[];
        static valueOf(arg0: string): $SyncType;
        static NOPE: $SyncType;
        static TO_CLIENT: $SyncType;
        static TO_CLIENTS: $SyncType;
    }
    /**
     * Values that may be interpreted as {@link $SyncType}.
     */
    export type $SyncType_ = "nope" | "to_client" | "to_clients";
    export class $TrackedData<T> {
        getDefaultValue(): T;
        getSyncType(): $SyncType;
        isPersistent(): boolean;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        getCodec(): $MapCodec<T>;
        get defaultValue(): T;
        get syncType(): $SyncType;
        get persistent(): boolean;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get codec(): $MapCodec<T>;
    }
    export class $IDataManager {
    }
    export interface $IDataManager {
        getValue<T>(arg0: $TrackedData<T>): T;
        clean(): void;
        setValue<T>(arg0: $TrackedData<T>, arg1: T): void;
        getEntries(arg0: boolean): $Set<$IDataManager$DataEntry<never>>;
        isDirty(): boolean;
        setDataMap(arg0: $Map_<$TrackedData<never>, $IDataManager$DataEntry<never>>): void;
        getDataMap(): $Map<$TrackedData<never>, $IDataManager$DataEntry<never>>;
        getDirtyEntries(): $Set<$IDataManager$DataEntry<never>>;
        get dirty(): boolean;
        get dirtyEntries(): $Set<$IDataManager$DataEntry<never>>;
    }
}
