import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $AttachmentType_, $IAttachmentHolder, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkGeneratorAccessor as $ChunkGeneratorAccessor$1 } from "@package/com/github/yimeng261/maidspell/worldgen/accessor";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkAccessAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Set_, $Map, $Map$Entry, $Set, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $Function_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $RandomBlockTickerChunk } from "@package/fuzs/leavesbegone/world/level/chunk";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $AccessorChunkAccess } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $IChunkGenerator } from "@package/org/embeddedt/modernfix/duck";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IGeneratorNearbyStructureHolder } from "@package/com/structureessentials";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        factory(): $Palette$Factory;
        bits(): number;
        createData(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: number): $PalettedContainer$Data<T>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { bits?: number, factory?: $Palette$Factory_,  } | [bits?: number, factory?: $Palette$Factory_, ];
    export class $DataLayer {
        get(arg0: number, arg1: number, arg2: number): number;
        isEmpty(): boolean;
        fill(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        copy(): $DataLayer;
        getData(): number[];
        isDefinitelyHomogenous(): boolean;
        isDefinitelyFilledWith(arg0: number): boolean;
        layerToString(arg0: number): string;
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor(arg0: number[]);
        constructor(arg0: number);
        constructor();
        get empty(): boolean;
        get data(): number[];
        get definitelyHomogenous(): boolean;
    }
    export class $ChunkGenerator implements $ChunkGeneratorAccessor, $IGeneratorNearbyStructureHolder, $ChunkGeneratorAccessor$1 {
        validate(): void;
        handler$dhm000$integrated_stronghold$disableVanillaStrongholds2(structureHolders: $Set_<any>, serverLevel: $ServerLevel, structureManager: $StructureManager, blockPos: $BlockPos_, bl: boolean, structurePlacement: $ConcentricRingsStructurePlacement, cir: $CallbackInfoReturnable<any>): void;
        getFirstOccupiedHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(arg0: $Holder_<$Biome>): $BiomeGenerationSettings;
        createState(arg0: $HolderLookup<$StructureSet_>, arg1: $RandomState, arg2: number): $ChunkGeneratorStructureState;
        createBiomes(arg0: $RandomState, arg1: $Blender, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        addDebugScreenInfo(arg0: $List_<string>, arg1: $RandomState, arg2: $BlockPos_): void;
        applyCarvers(arg0: $WorldGenRegion, arg1: number, arg2: $RandomState, arg3: $BiomeManager, arg4: $StructureManager, arg5: $ChunkAccess, arg6: $GenerationStep$Carving_): void;
        fillFromNoise(arg0: $Blender, arg1: $RandomState, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        spawnOriginalMobs(arg0: $WorldGenRegion): void;
        buildSurface(arg0: $WorldGenRegion, arg1: $StructureManager, arg2: $RandomState, arg3: $ChunkAccess): void;
        refreshFeaturesPerStep(): void;
        applyBiomeDecoration(arg0: $WorldGenLevel, arg1: $ChunkAccess, arg2: $StructureManager): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        maidspell$getDimensionKey(): $ResourceKey<any>;
        findNearestMapStructure(arg0: $ServerLevel, arg1: $HolderSet_<$Structure>, arg2: $BlockPos_, arg3: number, arg4: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getNearestGeneratedStructure(arg0: $Set_<$Holder_<$Structure>>, arg1: $ServerLevel, arg2: $StructureManager, arg3: $BlockPos_, arg4: boolean, arg5: $ConcentricRingsStructurePlacement): $Pair<$BlockPos, $Holder<$Structure>>;
        getGenDepth(): number;
        getBaseHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        getBaseColumn(arg0: number, arg1: number, arg2: $LevelHeightAccessor, arg3: $RandomState): $NoiseColumn;
        handler$dcb000$terrablender$validate(arg0: $CallbackInfo): void;
        createReferences(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkAccess): void;
        getSpawnHeight(arg0: $LevelHeightAccessor): number;
        createStructures(arg0: $RegistryAccess, arg1: $ChunkGeneratorStructureState, arg2: $StructureManager, arg3: $ChunkAccess, arg4: $StructureTemplateManager): void;
        getFirstFreeHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        maidspell$setDimensionKey(arg0: $ResourceKey_<any>): void;
        getNearby(arg0: number): string;
        setNearby(arg0: number, arg1: string): void;
        getMinY(): number;
        getMobsAt(arg0: $Holder_<$Biome>, arg1: $StructureManager, arg2: $MobCategory_, arg3: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getSeaLevel(): number;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        getBiomeSource(): $BiomeSource;
        setBiomeSource(biomeSource: $BiomeSource): void;
        setFeaturesPerStep(supplier: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(arg0: $BiomeSource);
        constructor(arg0: $BiomeSource, arg1: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get genDepth(): number;
        get minY(): number;
        get seaLevel(): number;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        onResize(arg0: number, arg1: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(arg0: number): $BlockState;
        setBlock(arg0: number, arg1: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        idFor(arg0: T): number;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $ChunkGeneratorStructureState implements $IChunkGenerator {
        mfix$setStrongholdCachePath(arg0: $Path_, arg1: $MinecraftServer): void;
        hasStructureChunkInRange(arg0: $Holder_<$StructureSet>, arg1: number, arg2: number, arg3: number): boolean;
        getRingPositionsFor(arg0: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        getPlacementsForStructure(arg0: $Holder_<$Structure>): $List<$StructurePlacement>;
        randomState(): $RandomState;
        getLevelSeed(): number;
        static createForNormal(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        static createForFlat(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        ensureStructuresGenerated(): void;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        getStartForStructure(arg0: $Structure_): $StructureStart;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        storage(): ($LongStream) | undefined;
        paletteEntries(): $List<T>;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>,  } | [storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>, ];
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $LevelChunk, arg1: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        size(): number;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        getConfiguration<A>(arg0: $IdMap<A>, arg1: number): $PalettedContainer$Configuration<A>;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>,  } | [fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity {
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $ChunkAccessAccessor, $AccessorChunkAccess {
        getLevel(): $Level;
        getData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getSections(): $LevelChunkSection[];
        removeData<T>(arg0: $AttachmentType_<T>): T;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getHeight(): number;
        getPos(): $ChunkPos;
        hasData(arg0: $AttachmentType_<never>): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        hasAttachments(): boolean;
        getListenerRegistry(arg0: number): $GameEventListenerRegistry;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getStartForStructure(arg0: $Structure_): $StructureStart;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_): void;
        getHighestGeneratedStatus(): $ChunkStatus;
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        incrementInhabitedTime(arg0: number): void;
        isOldNoiseGeneration(): boolean;
        initializeLightSources(): void;
        getOrCreateNoiseChunk(arg0: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        addPackedPostProcess(arg0: number, arg1: number): void;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getBlockEntityNbtForSaving(arg0: $BlockPos_, arg1: $HolderLookup$Provider): $CompoundTag;
        hasAnyStructureReferences(): boolean;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        static getOrCreateOffsetList(arg0: $ShortList[], arg1: number): $ShortList;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getHighestFilledSectionIndex(): number;
        getMinBuildHeight(): number;
        setUnsaved(arg0: boolean): void;
        addEntity(arg0: $Entity): void;
        isLightCorrect(): boolean;
        isYSpaceEmpty(arg0: number, arg1: number): boolean;
        setBlockEntityNbt(arg0: $CompoundTag_): void;
        setInhabitedTime(arg0: number): void;
        setLightCorrect(arg0: boolean): void;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        getAllReferences(): $Map<any, any>;
        getPersistedStatus(): $ChunkStatus;
        getBlendingData(): $BlendingData;
        isUpgrading(): boolean;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        setHeightmap(arg0: $Heightmap$Types_, arg1: number[]): void;
        getPostProcessing(): $ShortList[];
        hasPrimedHeightmap(arg0: $Heightmap$Types_): boolean;
        /**
         * @deprecated
         */
        carverBiome(arg0: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        getSkyLightSources(): $ChunkSkyLightSources;
        setAllStarts(arg0: $Map_<$Structure_, $StructureStart>): void;
        getBlockEntityNbt(arg0: $BlockPos_): $CompoundTag;
        setBlendingData(arg0: $BlendingData): void;
        isSectionEmpty(arg0: number): boolean;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getOrCreateHeightmapUnprimed(arg0: $Heightmap$Types_): $Heightmap;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        isUnsaved(): boolean;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        setBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean): $BlockState;
        getBlockTicks(): $TickContainerAccess<$Block>;
        getInhabitedTime(): number;
        setBlockEntity(arg0: $BlockEntity): void;
        removeBlockEntity(arg0: $BlockPos_): void;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getUpgradeData(): $UpgradeData;
        getSection(arg0: number): $LevelChunkSection;
        markPosForPostprocessing(arg0: $BlockPos_): void;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getLightEmission(arg0: $BlockPos_): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getMaxLightLevel(): number;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        syncData(arg0: $AttachmentType_<never>): void;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMinSection(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getLevelHeightAccessor(): $LevelHeightAccessor;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: number, arg5: $LevelChunkSection[], arg6: $BlendingData);
        get level(): $Level;
        get sections(): $LevelChunkSection[];
        get pos(): $ChunkPos;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get highestGeneratedStatus(): $ChunkStatus;
        get oldNoiseGeneration(): boolean;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get highestFilledSectionIndex(): number;
        get minBuildHeight(): number;
        get heightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        get persistedStatus(): $ChunkStatus;
        get upgrading(): boolean;
        get postProcessing(): $ShortList[];
        get skyLightSources(): $ChunkSkyLightSources;
        get highestSectionPosition(): number;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get upgradeData(): $UpgradeData;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get minSection(): number;
        get maxSection(): number;
        get levelHeightAccessor(): $LevelHeightAccessor;
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        copyFrom(arg0: $Palette<T>, arg1: $BitStorage): void;
        storage(): $BitStorage;
        palette(): $Palette<T>;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { configuration?: $PalettedContainer$Configuration_<any>, palette?: $Palette<any>, storage?: $BitStorage,  } | [configuration?: $PalettedContainer$Configuration_<any>, palette?: $Palette<any>, storage?: $BitStorage, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $PalettedContainerROExtension<any> {
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        set(arg0: number, arg1: number, arg2: number, arg3: T): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        getAndSet(arg0: number, arg1: number, arg2: number, arg3: T): T;
        release(): void;
        acquire(): void;
        getAll(arg0: $Consumer_<T>): void;
        pack(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        static codecRW<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainer<T>>;
        static codecRO<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainerRO<T>>;
        mfix$getPalette(): $Palette<any>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        onResize(arg0: number, arg1: T): number;
        recreate(): $PalettedContainer<T>;
        getSerializedSize(): number;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        getAndSetUnchecked(arg0: number, arg1: number, arg2: number, arg3: T): T;
        sodium$copy(): $PalettedContainerRO<any>;
        constructor(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainer$Configuration_<T>, arg3: $BitStorage, arg4: $List_<T>);
        constructor(arg0: $IdMap<T>, arg1: T, arg2: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData {
        isEmpty(): boolean;
        write(): $CompoundTag;
        upgrade(arg0: $LevelChunk): void;
        static EMPTY: $UpgradeData;
        constructor(arg0: $CompoundTag_, arg1: $LevelHeightAccessor);
        get empty(): boolean;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        write(arg0: $FriendlyByteBuf): void;
        getAll(arg0: $Consumer_<T>): void;
        pack(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        recreate(): $PalettedContainer<T>;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(arg0: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(arg0: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        idFor(arg0: T): number;
        getSerializedSize(): number;
        constructor(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: $List_<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(arg0: number);
    }
    export class $LevelChunkSection {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        getStates(): $PalettedContainer<$BlockState>;
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_, arg2: number, arg3: number, arg4: number): void;
        isRandomlyTicking(): boolean;
        hasOnlyAir(): boolean;
        maybeHas(arg0: $Predicate_<$BlockState>): boolean;
        readBiomes(arg0: $FriendlyByteBuf): void;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): $BlockState;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: boolean): $BlockState;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getSerializedSize(): number;
        isRandomlyTickingFluids(): boolean;
        isRandomlyTickingBlocks(): boolean;
        recalcBlockCounts(): void;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(arg0: $PalettedContainer<$BlockState_>, arg1: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(arg0: $Registry<$Biome_>);
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get serializedSize(): number;
        get randomlyTickingFluids(): boolean;
        get randomlyTickingBlocks(): boolean;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $RandomBlockTickerChunk {
        isEmpty(): boolean;
        unregisterTickContainerFromLevel(arg0: $ServerLevel): void;
        leavesbegone$getRandomBlockTicks(): $LevelChunkTicks<any>;
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        handler$blj000$leavesbegone$unregisterTickContainerFromLevel$Inject$Tail(level: $ServerLevel, callback: $CallbackInfo): void;
        handler$blj000$leavesbegone$unpackTicks(pos: number, callback: $CallbackInfo): void;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        replaceWithPacketData(arg0: $FriendlyByteBuf, arg1: $CompoundTag_, arg2: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        postProcessGeneration(): void;
        unpackTicks(arg0: number): void;
        getBlockEntity(arg0: $BlockPos_, arg1: $LevelChunk$EntityCreationType_): $BlockEntity;
        runPostLoad(): void;
        replaceBiomes(arg0: $FriendlyByteBuf): void;
        setFullStatus(arg0: $Supplier_<$FullChunkStatus>): void;
        addAndRegisterBlockEntity(arg0: $BlockEntity): void;
        clearAllBlockEntities(): void;
        registerTickContainerInLevel(arg0: $ServerLevel): void;
        leavesbegone$setRandomBlockTicks(randomBlockTicks: $LevelChunkTicks<any>): void;
        setLoaded(arg0: boolean): void;
        getFullStatus(): $FullChunkStatus;
        handler$gkp000$dragonlib$onClearAllBlockEntities(ci: $CallbackInfo): void;
        handler$gkp000$dragonlib$onAddAndRegisterBlockEntity(blockEntity: $BlockEntity, ci: $CallbackInfo): void;
        handler$blj000$leavesbegone$registerTickContainerInLevel(level: $ServerLevel, callback: $CallbackInfo): void;
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ServerLevel, arg1: $ProtoChunk, arg2: $LevelChunk$PostLoadProcessor_);
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $UpgradeData, arg3: $LevelChunkTicks<$Block_>, arg4: $LevelChunkTicks<$Fluid_>, arg5: number, arg6: $LevelChunkSection[], arg7: $LevelChunk$PostLoadProcessor_, arg8: $BlendingData);
        constructor(arg0: $Level_, arg1: $ChunkPos);
        get empty(): boolean;
        set loaded(value: boolean);
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        close(): void;
        tick(arg0: $BooleanSupplier_, arg1: boolean): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: boolean): $LevelChunk;
        updateChunkForced(arg0: $ChunkPos, arg1: boolean): void;
        getChunkNow(arg0: number, arg1: number): $LevelChunk;
        hasChunk(arg0: number, arg1: number): boolean;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        getLightEngine(): $LevelLightEngine;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        gatherStats(): string;
        getLoadedChunksCount(): number;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess {
        getEntities(): $List<$CompoundTag>;
        getOrCreateCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        static packOffsetCoordinates(arg0: $BlockPos_): number;
        static unpackOffsetCoordinates(arg0: number, arg1: number, arg2: $ChunkPos): $BlockPos;
        addEntity(arg0: $CompoundTag_): void;
        getCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        setBelowZeroRetrogen(arg0: $BelowZeroRetrogen): void;
        setCarvingMask(arg0: $GenerationStep$Carving_, arg1: $CarvingMask): void;
        setPersistedStatus(arg0: $ChunkStatus_): void;
        setLightEngine(arg0: $LevelLightEngine): void;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: $BlendingData);
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelChunkSection[], arg3: $ProtoChunkTicks<$Block_>, arg4: $ProtoChunkTicks<$Fluid_>, arg5: $LevelHeightAccessor, arg6: $Registry<$Biome_>, arg7: $BlendingData);
        get entities(): $List<$CompoundTag>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        set belowZeroRetrogen(value: $BelowZeroRetrogen);
        set persistedStatus(value: $ChunkStatus_);
        set lightEngine(value: $LevelLightEngine);
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        idFor(arg0: T): number;
        getSerializedSize(): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>);
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>, arg3: $List_<T>);
        get size(): number;
        get entries(): $List<T>;
        get serializedSize(): number;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        processChunk(arg0: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        close(): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getSection(arg0: $BlockPos_): $LevelChunkSection;
        constructor(arg0: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(arg0: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        idFor(arg0: T): number;
        getSerializedSize(): number;
        constructor(arg0: $IdMap<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        idFor(arg0: T): number;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        get(arg0: number, arg1: number, arg2: number): boolean;
        toArray(): number[];
        stream(arg0: $ChunkPos): $Stream<$BlockPos>;
        set(arg0: number, arg1: number, arg2: number): void;
        setAdditionalMask(arg0: $CarvingMask$Mask_): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number[], arg1: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
