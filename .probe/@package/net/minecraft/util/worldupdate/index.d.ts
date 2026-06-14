import { $SimpleRegionStorage, $ChunkStorage, $RegionFile } from "@package/net/minecraft/world/level/chunk/storage";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $ListIterator, $List_, $Set } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";

declare module "@package/net/minecraft/util/worldupdate" {
    export class $WorldUpgrader$SimpleRegionStorageUpgrader extends $WorldUpgrader$AbstractUpgrader<$SimpleRegionStorage> {
    }
    export class $WorldUpgrader$ChunkUpgrader extends $WorldUpgrader$AbstractUpgrader<$ChunkStorage> {
    }
    export class $WorldUpgrader$EntityUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader$AbstractUpgrader<T extends $AutoCloseable> {
    }
    export class $WorldUpgrader$PoiUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader {
        cancel(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getProgress(): number;
        getStatus(): $Component;
        isFinished(): boolean;
        getConverted(): number;
        getTotalChunks(): number;
        getSkipped(): number;
        dimensionProgress(arg0: $ResourceKey_<$Level>): number;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer, arg2: $RegistryAccess, arg3: boolean, arg4: boolean);
        get progress(): number;
        get status(): $Component;
        get finished(): boolean;
        get converted(): number;
        get totalChunks(): number;
        get skipped(): number;
    }
    export class $WorldUpgrader$FileToUpgrade extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldUpgrader$FileToUpgrade}.
     */
    export type $WorldUpgrader$FileToUpgrade_ = { chunksToUpgrade?: $List_<$ChunkPos>, file?: $RegionFile,  } | [chunksToUpgrade?: $List_<$ChunkPos>, file?: $RegionFile, ];
    export class $WorldUpgrader$DimensionToUpgrade<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldUpgrader$DimensionToUpgrade}.
     */
    export type $WorldUpgrader$DimensionToUpgrade_<T> = { storage?: any, dimensionKey?: $ResourceKey_<$Level>, files?: $ListIterator<$WorldUpgrader$FileToUpgrade_>,  } | [storage?: any, dimensionKey?: $ResourceKey_<$Level>, files?: $ListIterator<$WorldUpgrader$FileToUpgrade_>, ];
}
