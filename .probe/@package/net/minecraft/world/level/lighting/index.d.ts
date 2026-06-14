import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongLinkedOpenHashSet, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $DataLayer, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $SequencedSet } from "@package/java/util";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";
import { $LongPredicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Object } from "@package/java/lang";
import { $IMixinChunkLightProvider } from "@package/fi/dy/masa/tweakeroo/mixin/world";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getLightValue(arg0: $BlockPos_): number;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(arg0: $LongPredicate_): void;
        getQueueSize(): number;
        static SOURCE: number;
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static isIncreaseFromEmission(arg0: number): boolean;
        static decreaseAllDirections(arg0: number): number;
        static increaseLightFromEmission(arg0: number, arg1: boolean): number;
        static shouldPropagateInDirection(arg0: number, arg1: $Direction_): boolean;
        static increaseSkipOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static decreaseSkipOneDirection(arg0: number, arg1: $Direction_): number;
        static increaseOnlyOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static increaseSkySourceInDirections(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): number;
        static isFromEmptyShape(arg0: number): boolean;
        static getFromLevel(arg0: number): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        getLayer(arg0: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        removeLayer(arg0: number): $DataLayer;
        disableCache(): void;
        hasLayer(arg0: number): boolean;
        setLayer(arg0: number, arg1: $DataLayer): void;
        copyDataLayer(arg0: number): $DataLayer;
    }
    export class $LevelLightEngine implements $LightEventListener {
        getMaxLightSection(): number;
        runLightUpdates(): number;
        lightOnInSection(arg0: $SectionPos): boolean;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        getLightSectionCount(): number;
        checkBlock(arg0: $BlockPos_): void;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getLayerListener(arg0: $LightLayer_): $LayerLightEventListener;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        getDebugData(arg0: $LightLayer_, arg1: $SectionPos): string;
        getMinLightSection(): number;
        queueSectionData(arg0: $LightLayer_, arg1: $SectionPos, arg2: $DataLayer): void;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        propagateLightSources(arg0: $ChunkPos): void;
        getDebugSectionType(arg0: $LightLayer_, arg1: $SectionPos): $LayerLightSectionStorage$SectionType;
        hasLightWork(): boolean;
        handler$zbm000$sodium_extra$checkBlock(arg0: $BlockPos_, arg1: $CallbackInfo): void;
        handler$zbm000$sodium_extra$doLightUpdates(arg0: $CallbackInfoReturnable<any>): void;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        constructor(arg0: $LightChunkGetter, arg1: boolean, arg2: boolean);
        get maxLightSection(): number;
        get lightSectionCount(): number;
        get minLightSection(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
        firstKey(): number;
        lastKey(): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        last(): number;
        reversed(): $SequencedSet<number>;
        constructor(arg0: number, arg1: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static MAX_LEVEL: number;
        constructor(arg0: $LightChunkGetter);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $IMixinChunkLightProvider, $LightEngineAccessor<any, any> {
        runLightUpdates(): number;
        static getLightBlockInto(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $Direction_, arg6: number): number;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        static getOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $VoxelShape;
        static hasDifferentLightProperties(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): boolean;
        checkBlock(arg0: $BlockPos_): void;
        getLightValue(arg0: $BlockPos_): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        getDebugData(arg0: number): string;
        queueSectionData(arg0: number, arg1: $DataLayer): void;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        hasLightWork(): boolean;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        tweakeroo_getChunkProvider(): $LightChunkGetter;
        flywheel$storage(): $Object;
        static MAX_LEVEL: number;
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(arg0: number, arg1: number): void;
        dequeue(arg0: number, arg1: number, arg2: number): void;
        removeFirstLong(): number;
        constructor(arg0: number, arg1: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        flywheel$skyDataLayer(section: number): $DataLayer;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        runLightUpdates(): number;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        getLightValue(arg0: $BlockPos_): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        propagateLightSources(arg0: $ChunkPos): void;
        hasLightWork(): boolean;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        runLightUpdates(): number;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        propagateLightSources(arg0: $ChunkPos): void;
        hasLightWork(): boolean;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        retainData(arg0: number, arg1: boolean): void;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        getDataLayerData(arg0: number): $DataLayer;
        flywheel$callGetDataLayer(arg0: number, arg1: boolean): $DataLayer;
    }
    export class $ChunkSkyLightSources {
        update(arg0: $BlockGetter, arg1: number, arg2: number, arg3: number): boolean;
        fillFrom(arg0: $ChunkAccess): void;
        getHighestLowestSourceY(): number;
        getLowestSourceY(arg0: number, arg1: number): number;
        static NEGATIVE_INFINITY: number;
        constructor(arg0: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        static MAX_LEVEL: number;
        constructor(arg0: $LightChunkGetter);
        constructor(arg0: $LightChunkGetter, arg1: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
    }
}
