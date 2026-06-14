import { $UnorderedStackHandlerRemoveZero, $AbstractUnorderedStackHandler$UiTimestampPolicy_ } from "@package/com/wintercogs/beyonddimensions/api/storage/handler/impl";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $HashMap, $UUID, $List, $Set } from "@package/java/util";
import { $ServerTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as helper from "@package/com/wintercogs/beyonddimensions/api/dimensionnet/helper";

declare module "@package/com/wintercogs/beyonddimensions/api/dimensionnet" {
    export class $NetPermissionlevel extends $Enum<$NetPermissionlevel> {
        static values(): $NetPermissionlevel[];
        static valueOf(arg0: string): $NetPermissionlevel;
        static Owner: $NetPermissionlevel;
        static Manager: $NetPermissionlevel;
        static Member: $NetPermissionlevel;
    }
    /**
     * Values that may be interpreted as {@link $NetPermissionlevel}.
     */
    export type $NetPermissionlevel_ = "member" | "manager" | "owner";
    export class $UnifiedStorage extends $UnorderedStackHandlerRemoveZero {
        static getEmpty(): $UnifiedStorage;
        slotMaxSize: number;
        slotCapacity: number;
        constructor(arg0: $DimensionsNet, arg1: $AbstractUnorderedStackHandler$UiTimestampPolicy_);
        constructor(arg0: $DimensionsNet, arg1: $AbstractUnorderedStackHandler$UiTimestampPolicy_, arg2: number, arg3: number);
        static get empty(): $UnifiedStorage;
    }
    export class $PlayerPermissionInfo extends $Record {
        name(): string;
        level(): $NetPermissionlevel;
        static NET_PERMISSIONLEVEL_STREAM_CODEC: $StreamCodec<$ByteBuf, $NetPermissionlevel>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PlayerPermissionInfo>;
        constructor(name: string, level: $NetPermissionlevel_);
    }
    /**
     * Values that may be interpreted as {@link $PlayerPermissionInfo}.
     */
    export type $PlayerPermissionInfo_ = { name?: string, level?: $NetPermissionlevel_,  } | [name?: string, level?: $NetPermissionlevel_, ];
    export class $DimensionsNet extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $DimensionsNet;
        getId(): number;
        static create(): $DimensionsNet;
        getOwner(): $UUID;
        setOwner(arg0: $UUID_): void;
        setId(arg0: number): void;
        addPlayer(arg0: $UUID_): void;
        getPlayerPermissionInfoMap(arg0: $MinecraftServer): $HashMap<$UUID, $PlayerPermissionInfo>;
        static getPrimaryNetFromPlayer(arg0: $Player): $DimensionsNet;
        static getAllNetFromPlayer(arg0: $Player): $List<$DimensionsNet>;
        getPlayers(): $Set<$UUID>;
        hasCustomName(): boolean;
        getCustomName(): string;
        setCustomName(arg0: string): void;
        removePlayer(arg0: $UUID_): void;
        static hasAnyNet(arg0: $Player): boolean;
        onServerTick(arg0: $ServerTickEvent$Pre): void;
        isManager(arg0: $Player): boolean;
        isManager(arg0: $UUID_): boolean;
        isOwner(arg0: $Player): boolean;
        isOwner(arg0: $UUID_): boolean;
        addManager(arg0: $UUID_): void;
        static getNetFromId(arg0: number): $DimensionsNet;
        /**
         * @deprecated
         */
        static getNetFromPlayer(arg0: $Player): $DimensionsNet;
        removeManager(arg0: $UUID_): void;
        destroySelf(): void;
        mergeOtherNet(arg0: $DimensionsNet): void;
        getUnifiedStorage(): $UnifiedStorage;
        static getNetworkName(arg0: number, arg1: string): $Component;
        getNetworkName(): $Component;
        static buildNewNetName(arg0: $MinecraftServer): string;
        static buildNetDataName(arg0: number): string;
        getManagers(): $Set<$UUID>;
        static hasPrimaryNet(arg0: $Player): boolean;
        static clearPrimaryNetForPlayer(arg0: $Player): void;
        static setPrimaryNetForPlayer(arg0: $Player, arg1: $DimensionsNet): boolean;
        static createNewNetForPlayer(arg0: $Player, arg1: number, arg2: number): $DimensionsNet;
        deleted: boolean;
        static MAX_NETWORK_NAME_LENGTH: number;
        static NO_PRIMARY_NET_ID: number;
        constructor(arg0: boolean);
        get players(): $Set<$UUID>;
        get unifiedStorage(): $UnifiedStorage;
        get managers(): $Set<$UUID>;
    }
}
