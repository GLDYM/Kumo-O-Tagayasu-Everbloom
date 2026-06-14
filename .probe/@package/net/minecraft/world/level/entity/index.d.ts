import { $Writer } from "@package/java/io";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $PersistentEntitySectionManagerAccessor, $TransientEntitySectionManagerAccessor } from "@package/dev/xkmc/fastprojectileapi/mixin";
import { $LongSortedSet, $LongSet, $Long2ObjectFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $Set, $UUID_, $List_ } from "@package/java/util";
import { $IServerEntityManager } from "@package/fi/dy/masa/minihud/util";
import { $ClassInstanceMultiMap, $AbortableIterationConsumer_, $AbortableIterationConsumer$Continuation } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream, $LongStream } from "@package/java/util/stream";
import { $Enum, $Object, $Iterable, $AutoCloseable, $Class } from "@package/java/lang";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(arg0: $Entity): void;
        add(arg0: $Entity): void;
        contains(arg0: $Entity): boolean;
        forEach(arg0: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        isTicking(): boolean;
        static fromFullChunkStatus(arg0: $FullChunkStatus_): $Visibility;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get accessible(): boolean;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        flush(arg0: boolean): void;
        close(): void;
        storeEntities(arg0: $ChunkEntities<T>): void;
        loadEntities(arg0: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> {
        remove(arg0: T): boolean;
        size(): number;
        isEmpty(): boolean;
        add(arg0: T): void;
        getStatus(): $Visibility;
        getEntities(arg0: $AABB_, arg1: $AbortableIterationConsumer_<T>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<T>;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        updateChunkStatus(arg0: $Visibility_): $Visibility;
        storage: $ClassInstanceMultiMap<T>;
        constructor(arg0: $Class<T>, arg1: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forClass<B, T extends B>(arg0: $Class<T>): $EntityTypeTest<B, T>;
        static forExactClass<B, T extends B>(arg0: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        getBaseClass(): $Class<B>;
        tryCast(arg0: B): T;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        getUUID(): $UUID;
        blockPosition(): $BlockPos;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        getBoundingBox(): $AABB;
        shouldBeSaved(): boolean;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        isAlwaysTicking(): boolean;
        get id(): number;
        get UUID(): $UUID;
        set removed(value: $Entity$RemovalReason_);
        get passengersAndSelf(): $Stream<$EntityAccess>;
        get selfAndPassengers(): $Stream<$EntityAccess>;
        get boundingBox(): $AABB;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        remove(arg0: T): void;
        add(arg0: T): void;
        count(): number;
        getEntity(arg0: $UUID_): T;
        getEntity(arg0: number): T;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        getAllEntities(): $Iterable<T>;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onCreated(arg0: T): void;
        onDestroyed(arg0: T): void;
        onTrackingStart(arg0: T): void;
        onSectionChange(arg0: T): void;
        onTickingStart(arg0: T): void;
        onTickingEnd(arg0: T): void;
        onTrackingEnd(arg0: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $PersistentEntitySectionManagerAccessor<any>, $IServerEntityManager {
        count(): number;
        close(): void;
        isLoaded(arg0: $UUID_): boolean;
        tick(): void;
        autoSave(): void;
        saveAll(): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: $Visibility_): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        dumpSections(arg0: $Writer): void;
        addNewEntity(arg0: $Object): boolean;
        canPositionTick(arg0: $BlockPos_): boolean;
        canPositionTick(arg0: $ChunkPos): boolean;
        areEntitiesLoaded(arg0: number): boolean;
        addLegacyChunkEntities(arg0: $Stream<$Object>): void;
        addWorldGenChunkEntities(arg0: $Stream<$Object>): void;
        addNewEntityWithoutEvent(arg0: $Object): boolean;
        gatherStats(): string;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        minihud$getIndexSize(): number;
        minihud$getUuidSize(): number;
        getSectionStorage(): $EntitySectionStorage<$Object>;
        getKnownUuids(): $Set<$UUID>;
        callStopTicking(arg0: $EntityAccess): void;
        callStopTracking(arg0: $EntityAccess): void;
        constructor(arg0: $Class<$Object>, arg1: $LevelCallback<$Object>, arg2: $EntityPersistentStorage<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
        get sectionStorage(): $EntitySectionStorage<$Object>;
        get knownUuids(): $Set<$UUID>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onRemove(arg0: $Entity$RemovalReason_): void;
        onMove(): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> {
        remove(arg0: number): void;
        count(): number;
        getEntities(arg0: $AABB_, arg1: $AbortableIterationConsumer_<T>): void;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        getSection(arg0: number): $EntitySection<T>;
        forEachAccessibleNonEmptySection(arg0: $AABB_, arg1: $AbortableIterationConsumer_<$EntitySection<T>>): void;
        getAllChunksWithExistingSections(): $LongSet;
        getExistingSectionPositionsInChunk(arg0: number): $LongStream;
        getExistingSectionsInChunk(arg0: number): $Stream<$EntitySection<T>>;
        getOrCreateSection(arg0: number): $EntitySection<T>;
        sectionIds: $LongSortedSet;
        constructor(arg0: $Class<T>, arg1: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> implements $TransientEntitySectionManagerAccessor<any> {
        count(): number;
        addEntity(arg0: $Object): void;
        gatherStats(): string;
        stopTicking(arg0: $ChunkPos): void;
        startTicking(arg0: $ChunkPos): void;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        getSectionStorage(): $EntitySectionStorage<$Object>;
        constructor(arg0: $Class<$Object>, arg1: $LevelCallback<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
        get sectionStorage(): $EntitySectionStorage<$Object>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        sectionStorage: $EntitySectionStorage<T>;
        constructor(arg0: $EntityLookup<T>, arg1: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        isEmpty(): boolean;
        getEntities(): $Stream<T>;
        getPos(): $ChunkPos;
        constructor(arg0: $ChunkPos, arg1: $List_<T>);
        get empty(): boolean;
        get entities(): $Stream<T>;
        get pos(): $ChunkPos;
    }
}
