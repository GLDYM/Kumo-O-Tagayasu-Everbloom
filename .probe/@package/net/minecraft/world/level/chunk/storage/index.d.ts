import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ByteArrayOutputStream, $DataOutputStream, $InputStream, $DataInputStream, $OutputStream } from "@package/java/io";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $NbtException, $StreamTagVisitor, $Tag_, $Tag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $ReportedException } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Throwable, $Enum, $Record, $AutoCloseable, $Runnable } from "@package/java/lang";
import { $ChunkEntities, $EntityPersistentStorage } from "@package/net/minecraft/world/level/entity";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/net/minecraft/world/level/chunk/storage" {
    export class $RegionFile implements $AutoCloseable {
        clear(arg0: $ChunkPos): void;
        flush(): void;
        close(): void;
        getPath(): $Path;
        hasChunk(arg0: $ChunkPos): boolean;
        doesChunkExist(arg0: $ChunkPos): boolean;
        getChunkDataInputStream(arg0: $ChunkPos): $DataInputStream;
        getChunkDataOutputStream(arg0: $ChunkPos): $DataOutputStream;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $Path_, arg3: boolean);
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $Path_, arg3: $RegionFileVersion, arg4: boolean);
        get path(): $Path;
    }
    export class $RegionFileStorage implements $AutoCloseable {
        flush(): void;
        info(): $RegionStorageInfo;
        read(arg0: $ChunkPos): $CompoundTag;
        close(): void;
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): void;
        static ANVIL_EXTENSION: string;
    }
    export class $ChunkStorage implements $AutoCloseable {
        write(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        read(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        static getVersion(arg0: $CompoundTag_): number;
        chunkScanner(): $ChunkScanAccess;
        static injectDatafixingContext(arg0: $CompoundTag_, arg1: $ResourceKey_<$Level>, arg2: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): void;
        flushWorker(): void;
        upgradeChunkTag(arg0: $ResourceKey_<$Level>, arg1: $Supplier_<$DimensionDataStorage>, arg2: $CompoundTag_, arg3: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): $CompoundTag;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean);
    }
    export class $RegionStorageInfo extends $Record {
        type(): string;
        level(): string;
        dimension(): $ResourceKey<$Level>;
        withTypeSuffix(arg0: string): $RegionStorageInfo;
        constructor(arg0: string, arg1: $ResourceKey_<$Level>, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $RegionStorageInfo}.
     */
    export type $RegionStorageInfo_ = { type?: string, level?: string, dimension?: $ResourceKey_<$Level>,  } | [type?: string, level?: string, dimension?: $ResourceKey_<$Level>, ];
    export class $IOWorker implements $ChunkScanAccess, $AutoCloseable {
        store(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        close(): void;
        synchronize(arg0: boolean): $CompletableFuture<void>;
        loadAsync(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        storageInfo(): $RegionStorageInfo;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): $CompletableFuture<void>;
    }
    export class $ChunkSerializer {
        static write(arg0: $ServerLevel, arg1: $ChunkAccess): $CompoundTag;
        static read(arg0: $ServerLevel, arg1: $PoiManager, arg2: $RegionStorageInfo_, arg3: $ChunkPos, arg4: $CompoundTag_): $ProtoChunk;
        static packOffsets(arg0: $ShortList[]): $ListTag;
        static getChunkTypeFromTag(arg0: $CompoundTag_): $ChunkType;
        static SKY_LIGHT_TAG: string;
        static Z_POS_TAG: string;
        static SECTIONS_TAG: string;
        static IS_LIGHT_ON_TAG: string;
        static X_POS_TAG: string;
        static HEIGHTMAPS_TAG: string;
        static BLOCK_LIGHT_TAG: string;
        constructor();
    }
    export class $RecreatingSimpleRegionStorage extends $SimpleRegionStorage {
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $RegionStorageInfo_, arg3: $Path_, arg4: $DataFixer, arg5: boolean, arg6: $DataFixTypes_);
    }
    export class $IOWorker$PendingStore {
    }
    export class $ChunkIOErrorReporter {
        static createMisplacedChunkReport(arg0: $ChunkPos, arg1: $ChunkPos): $ReportedException;
    }
    export interface $ChunkIOErrorReporter {
        reportChunkSaveFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportChunkLoadFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
    }
    export class $ChunkScanAccess {
    }
    export interface $ChunkScanAccess {
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkScanAccess}.
     */
    export type $ChunkScanAccess_ = ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture<void>);
    export class $SectionStorage<R> implements $AutoCloseable {
        remove(arg0: number): void;
        flush(arg0: $ChunkPos): void;
        close(): void;
        hasWork(): boolean;
        constructor(arg0: $SimpleRegionStorage, arg1: $Function_<$Runnable, $Codec<R>>, arg2: $Function_<$Runnable, R>, arg3: $RegistryAccess, arg4: $ChunkIOErrorReporter, arg5: $LevelHeightAccessor);
    }
    export class $ChunkSerializer$ChunkReadException extends $NbtException {
        constructor(arg0: string);
    }
    export class $RegionFile$CommitOp {
    }
    export interface $RegionFile$CommitOp {
    }
    /**
     * Values that may be interpreted as {@link $RegionFile$CommitOp}.
     */
    export type $RegionFile$CommitOp_ = (() => void);
    export class $RecreatingChunkStorage extends $ChunkStorage {
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $RegionStorageInfo_, arg3: $Path_, arg4: $DataFixer, arg5: boolean);
    }
    export class $RegionFileVersion {
        wrap(arg0: $InputStream): $InputStream;
        wrap(arg0: $OutputStream): $OutputStream;
        getId(): number;
        static configure(arg0: string): void;
        static getSelected(): $RegionFileVersion;
        static isValidVersion(arg0: number): boolean;
        static fromId(arg0: number): $RegionFileVersion;
        static VERSION_GZIP: $RegionFileVersion;
        static VERSION_LZ4: $RegionFileVersion;
        static VERSION_DEFLATE: $RegionFileVersion;
        static VERSION_NONE: $RegionFileVersion;
        static VERSION_CUSTOM: $RegionFileVersion;
        static DEFAULT: $RegionFileVersion;
        get id(): number;
        static get selected(): $RegionFileVersion;
    }
    export class $RegionBitmap {
        free(arg0: number, arg1: number): void;
        allocate(arg0: number): number;
        force(arg0: number, arg1: number): void;
        getUsed(): $IntSet;
        constructor();
        get used(): $IntSet;
    }
    export class $SimpleRegionStorage implements $AutoCloseable {
        write(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        read(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        synchronize(arg0: boolean): $CompletableFuture<void>;
        storageInfo(): $RegionStorageInfo;
        upgradeChunkTag(arg0: $CompoundTag_, arg1: number): $CompoundTag;
        upgradeChunkTag(arg0: $Dynamic<$Tag_>, arg1: number): $Dynamic<$Tag>;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean, arg4: $DataFixTypes_);
    }
    export class $EntityStorage implements $EntityPersistentStorage<$Entity> {
        flush(arg0: boolean): void;
        close(): void;
        storeEntities(arg0: $ChunkEntities<$Entity>): void;
        loadEntities(arg0: $ChunkPos): $CompletableFuture<$ChunkEntities<$Entity>>;
        constructor(arg0: $SimpleRegionStorage, arg1: $ServerLevel, arg2: $Executor_);
    }
    export class $RegionFileVersion$StreamWrapper<O> {
    }
    export interface $RegionFileVersion$StreamWrapper<O> {
    }
    /**
     * Values that may be interpreted as {@link $RegionFileVersion$StreamWrapper}.
     */
    export type $RegionFileVersion$StreamWrapper_<O> = (() => void);
    export class $IOWorker$Priority extends $Enum<$IOWorker$Priority> {
    }
    /**
     * Values that may be interpreted as {@link $IOWorker$Priority}.
     */
    export type $IOWorker$Priority_ = "foreground" | "background" | "shutdown";
    export class $RegionFile$ChunkBuffer extends $ByteArrayOutputStream {
    }
}
