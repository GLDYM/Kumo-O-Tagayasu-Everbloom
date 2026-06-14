import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $PerlinSimplexNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $BiomeAccessor, $BiomeSourceInvoker, $BiomeGenerationSettingsAccessor, $MultiNoiseBiomeSourceAccessor, $MobSpawnSettingsAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ParameterListAccessor } from "@package/dev/worldgen/lithostitched/mixin/common/mnbs";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Map, $Set, $List, $Map_, $List_, $Optional } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Region, $RegionType_ } from "@package/terrablender/api";
import { $Consumer_, $Predicate_, $Function, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $ExtendedBiome } from "@package/net/irisshaders/iris/mixinterface";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BiolithFittestNodes } from "@package/com/terraformersmc/biolith/api/biome";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $InterfaceSearchTree, $InterfaceBiomeSource } from "@package/com/terraformersmc/biolith/impl/biome";
import { $Weight, $WeightedRandomList, $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver_, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $BiomeManagerAccessor as $BiomeManagerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $BiomeManagerAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules";
import { $GenerationStep$Carving, $DensityFunction, $GenerationStep$Carving_, $DensityFunction$FunctionContext, $GenerationStep$Decoration_, $DensityFunction_ } from "@package/net/minecraft/world/level/levelgen";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $LevelReader } from "@package/net/minecraft/world/level";
import { $MobSpawnSettingsBuilderNeoForgeAccessor, $BiomeSpecialEffectsBuilderNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/accessor";
import { $MNBSPLDuck, $MNBSDuck } from "@package/dev/worldgen/lithostitched/duck/mnbs";
import { $MultiNoiseBiomeSourceAccess } from "@package/terrablender/mixin";
import { $IMixinBiomeAccess } from "@package/fi/dy/masa/minihud/mixin/world";
import { $IExtendedMultiNoiseBiomeSource, $IExtendedBiomeSource, $IExtendedParameterList, $IExtendedTheEndBiomeSource } from "@package/terrablender/worldgen";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModifiableBiomeInfo } from "@package/net/neoforged/neoforge/common/world";
import { $BiomeFTBC } from "@package/dev/ftb/mods/ftbchunks/core";

declare module "@package/net/minecraft/world/level/biome" {
    export class $AmbientMoodSettings {
        getBlockSearchExtent(): number;
        getSoundPositionOffset(): number;
        getTickDelay(): number;
        getSoundEvent(): $Holder<$SoundEvent>;
        static CODEC: $Codec<$AmbientMoodSettings>;
        static LEGACY_CAVE_SETTINGS: $AmbientMoodSettings;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number, arg3: number);
        get blockSearchExtent(): number;
        get soundPositionOffset(): number;
        get tickDelay(): number;
        get soundEvent(): $Holder<$SoundEvent>;
    }
    export interface $Biome extends RegistryMarked<RegistryTypes.WorldgenBiomeTag, RegistryTypes.WorldgenBiome> {}
    export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> implements $StringRepresentable {
        static values(): $Biome$Precipitation[];
        static valueOf(arg0: string): $Biome$Precipitation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAIN: $Biome$Precipitation;
        static CODEC: $Codec<$Biome$Precipitation>;
        static SNOW: $Biome$Precipitation;
        static NONE: $Biome$Precipitation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$Precipitation}.
     */
    export type $Biome$Precipitation_ = "none" | "rain" | "snow";
    export class $MobSpawnSettings implements $MobSpawnSettingsAccessor {
        getCreatureProbability(): number;
        getMobs(arg0: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getSpawnerTypes(): $Set<$MobCategory>;
        getEntityTypes(): $Set<$EntityType<never>>;
        getMobSpawnCost(arg0: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        setSpawners(map: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
        getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        static CODEC: $MapCodec<$MobSpawnSettings>;
        static EMPTY: $MobSpawnSettings;
        static EMPTY_MOB_LIST: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        get creatureProbability(): number;
        get spawnerTypes(): $Set<$MobCategory>;
        get entityTypes(): $Set<$EntityType<never>>;
    }
    export class $BiomeResolver {
    }
    export interface $BiomeResolver {
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeResolver}.
     */
    export type $BiomeResolver_ = ((arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler) => $Holder_<$Biome>);
    export class $Climate$RTree$Node<T> {
        search(arg0: number[], arg1: $Climate$RTree$Leaf<T>, arg2: $Climate$DistanceMetric_<T>): $Climate$RTree$Leaf<T>;
        distance(arg0: number[]): number;
        parameterSpace: $Climate$Parameter[];
        constructor(arg0: $List_<$Climate$Parameter_>);
    }
    export class $BiomeManager$NoiseBiomeSource {
    }
    export interface $BiomeManager$NoiseBiomeSource {
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManager$NoiseBiomeSource}.
     */
    export type $BiomeManager$NoiseBiomeSource_ = ((arg0: number, arg1: number, arg2: number) => $Holder_<$Biome>);
    export class $MultiNoiseBiomeSourceParameterList implements $MNBSPLDuck {
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        lithostitched$getMigrationBiome(): $Optional<any>;
        static knownPresets(): $Map<$MultiNoiseBiomeSourceParameterList$Preset, $Climate$ParameterList<$ResourceKey<$Biome>>>;
        lithostitched$setParameters(parameters: $Climate$ParameterList<any>): void;
        lithostitched$setMigrationBiome(biome: $Optional<any>): void;
        static CODEC: $Codec<$Holder<$MultiNoiseBiomeSourceParameterList>>;
        static DIRECT_CODEC: $Codec<$MultiNoiseBiomeSourceParameterList>;
        constructor(arg0: $MultiNoiseBiomeSourceParameterList$Preset_, arg1: $HolderGetter<$Biome_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList}.
     */
    export type $MultiNoiseBiomeSourceParameterList_ = RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList;
    export class $BiomeSources {
        static bootstrap(arg0: $Registry<$MapCodec_<$BiomeSource>>): $MapCodec<$BiomeSource>;
        constructor();
    }
    export class $FeatureSorter$1FeatureData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$1FeatureData}.
     */
    export type $FeatureSorter$1FeatureData_ = { featureIndex?: number, feature?: $PlacedFeature_, step?: number,  } | [featureIndex?: number, feature?: $PlacedFeature_, step?: number, ];
    export class $Climate$SpawnFinder {
    }
    export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
        getName(): string;
        static values(): $Biome$TemperatureModifier[];
        static valueOf(arg0: string): $Biome$TemperatureModifier;
        modifyTemperature(arg0: $BlockPos_, arg1: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Biome$TemperatureModifier>;
        static NONE: $Biome$TemperatureModifier;
        static FROZEN: $Biome$TemperatureModifier;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$TemperatureModifier}.
     */
    export type $Biome$TemperatureModifier_ = "none" | "frozen";
    export class $BiomeSpecialEffects$Builder implements $BiomeSpecialEffectsBuilderNeoForgeAccessor {
        build(): $BiomeSpecialEffects;
        foliageColorOverride(arg0: number): $BiomeSpecialEffects$Builder;
        ambientAdditionsSound(arg0: $AmbientAdditionsSettings): $BiomeSpecialEffects$Builder;
        waterFogColor(arg0: number): $BiomeSpecialEffects$Builder;
        backgroundMusic(arg0: $Music): $BiomeSpecialEffects$Builder;
        grassColorModifier(arg0: $BiomeSpecialEffects$GrassColorModifier_): $BiomeSpecialEffects$Builder;
        grassColorOverride(arg0: number): $BiomeSpecialEffects$Builder;
        ambientMoodSound(arg0: $AmbientMoodSettings): $BiomeSpecialEffects$Builder;
        ambientLoopSound(arg0: $Holder_<$SoundEvent>): $BiomeSpecialEffects$Builder;
        ambientParticle(arg0: $AmbientParticleSettings): $BiomeSpecialEffects$Builder;
        fogColor(arg0: number): $BiomeSpecialEffects$Builder;
        waterColor(arg0: number): $BiomeSpecialEffects$Builder;
        skyColor(arg0: number): $BiomeSpecialEffects$Builder;
        puzzleslib$setAmbientAdditionsSettings(arg0: ($AmbientAdditionsSettings) | undefined): void;
        puzzleslib$setAmbientLoopSoundEvent(arg0: ($Holder_<$SoundEvent>) | undefined): void;
        puzzleslib$setFoliageColorOverride(arg0: (number) | undefined): void;
        puzzleslib$setBackgroundMusic(arg0: ($Music) | undefined): void;
        puzzleslib$setAmbientParticle(arg0: ($AmbientParticleSettings) | undefined): void;
        puzzleslib$setAmbientMoodSettings(arg0: ($AmbientMoodSettings) | undefined): void;
        puzzleslib$setGrassColorOverride(arg0: (number) | undefined): void;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor();
    }
    export class $Climate$RTree$Leaf<T> extends $Climate$RTree$Node<T> {
        value: T;
        parameterSpace: $Climate$Parameter[];
        constructor(arg0: $Climate$ParameterPoint_, arg1: T);
    }
    export class $Climate$RTree$SubTree<T> extends $Climate$RTree$Node<T> {
        children: $Climate$RTree$Node<T>[];
        parameterSpace: $Climate$Parameter[];
        constructor(arg0: $List_<$Climate$RTree$Node<T>>);
        constructor(arg0: $List_<$Climate$Parameter_>, arg1: $List_<$Climate$RTree$Node<T>>);
    }
    export class $Climate$TargetPoint extends $Record {
        depth(): number;
        erosion(): number;
        weirdness(): number;
        toParameterArray(): number[];
        temperature(): number;
        continentalness(): number;
        humidity(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$TargetPoint}.
     */
    export type $Climate$TargetPoint_ = { weirdness?: number, continentalness?: number, depth?: number, humidity?: number, temperature?: number, erosion?: number,  } | [weirdness?: number, continentalness?: number, depth?: number, humidity?: number, temperature?: number, erosion?: number, ];
    export class $Biome$BiomeBuilder {
        build(): $Biome;
        specialEffects(arg0: $BiomeSpecialEffects): $Biome$BiomeBuilder;
        temperature(arg0: number): $Biome$BiomeBuilder;
        generationSettings(arg0: $BiomeGenerationSettings): $Biome$BiomeBuilder;
        mobSpawnSettings(arg0: $MobSpawnSettings): $Biome$BiomeBuilder;
        hasPrecipitation(arg0: boolean): $Biome$BiomeBuilder;
        downfall(arg0: number): $Biome$BiomeBuilder;
        temperatureAdjustment(arg0: $Biome$TemperatureModifier_): $Biome$BiomeBuilder;
        constructor();
    }
    export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $BiomeSpecialEffects$GrassColorModifier[];
        static valueOf(arg0: string): $BiomeSpecialEffects$GrassColorModifier;
        static getExtensionInfo(): $ExtensionInfo;
        modifyColor(arg0: number, arg1: number, arg2: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BiomeSpecialEffects$GrassColorModifier>;
        static SWAMP: $BiomeSpecialEffects$GrassColorModifier;
        static NONE: $BiomeSpecialEffects$GrassColorModifier;
        static DARK_FOREST: $BiomeSpecialEffects$GrassColorModifier;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSpecialEffects$GrassColorModifier}.
     */
    export type $BiomeSpecialEffects$GrassColorModifier_ = "none" | "dark_forest" | "swamp";
    export class $BiomeGenerationSettings$Builder extends $BiomeGenerationSettings$PlainBuilder {
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $ResourceKey_<$PlacedFeature>): $BiomeGenerationSettings$Builder;
        addCarver(arg0: $GenerationStep$Carving_, arg1: $ResourceKey_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$Builder;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        constructor(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>);
    }
    export class $FeatureSorter {
        static buildFeaturesPerStep<T>(arg0: $List_<T>, arg1: $Function_<T, $List<$HolderSet<$PlacedFeature>>>, arg2: boolean): $List<$FeatureSorter$StepFeatureData>;
        constructor();
    }
    export class $MobSpawnSettings$Builder implements $MobSpawnSettingsBuilderNeoForgeAccessor {
        build(): $MobSpawnSettings;
        creatureGenerationProbability(arg0: number): $MobSpawnSettings$Builder;
        addMobCharge(arg0: $EntityType_<never>, arg1: number, arg2: number): $MobSpawnSettings$Builder;
        addSpawn(arg0: $MobCategory_, arg1: $MobSpawnSettings$SpawnerData): $MobSpawnSettings$Builder;
        puzzleslib$getMobSpawnCosts(): $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
        apply<T>(arg0: $Function_<$ResourceKey<$Biome>, T>): $Climate$ParameterList<T>;
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_ = ((arg0: $Function<$ResourceKey<$Biome>, any>) => $Climate$ParameterList<any>);
    export class $BiomeGenerationSettings implements $BiomeGenerationSettingsAccessor {
        hasFeature(arg0: $PlacedFeature_): boolean;
        features(): $List<$HolderSet<$PlacedFeature>>;
        getFlowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        static createGenerationSettings$lithostitched_$md$70d283$0(arg0: $Map_<any, any>, arg1: $List_<any>): $BiomeGenerationSettings;
        getCarvingStages(): $Set<$GenerationStep$Carving>;
        getCarvers(arg0: $GenerationStep$Carving_): $Iterable<$Holder<$ConfiguredWorldCarver<never>>>;
        getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        static CODEC: $MapCodec<$BiomeGenerationSettings>;
        featureSet: $Supplier<$Set<$PlacedFeature>>;
        static EMPTY: $BiomeGenerationSettings;
        constructor(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, arg1: $List_<$HolderSet_<$PlacedFeature>>);
        get flowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        get carvingStages(): $Set<$GenerationStep$Carving>;
    }
    export class $BiomeGenerationSettings$PlainBuilder {
        build(): $BiomeGenerationSettings;
        addFeature(arg0: number, arg1: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addCarver(arg0: $GenerationStep$Carving_, arg1: $Holder_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$PlainBuilder;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        constructor();
    }
    export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
        static CODEC: $Codec<$MobSpawnSettings$SpawnerData>;
        minCount: number;
        type: $EntityType<never>;
        maxCount: number;
        constructor(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $EntityType_<never>, arg1: $Weight, arg2: number, arg3: number);
    }
    export class $MobSpawnSettings$MobSpawnCost extends $Record {
        charge(): number;
        energyBudget(): number;
        static CODEC: $Codec<$MobSpawnSettings$MobSpawnCost>;
        constructor(energyBudget: number, charge: number);
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnSettings$MobSpawnCost}.
     */
    export type $MobSpawnSettings$MobSpawnCost_ = { charge?: number, energyBudget?: number,  } | [charge?: number, energyBudget?: number, ];
    export class $Climate {
        static target(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Climate$TargetPoint;
        static empty(): $Climate$Sampler;
        static parameters(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number): $Climate$ParameterPoint;
        static parameters(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Climate$ParameterPoint;
        static unquantizeCoord(arg0: number): number;
        static quantizeCoord(arg0: number): number;
        static findSpawnPosition(arg0: $List_<$Climate$ParameterPoint_>, arg1: $Climate$Sampler_): $BlockPos;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterLists {
        static bootstrap(arg0: $BootstrapContext<$MultiNoiseBiomeSourceParameterList_>): void;
        static OVERWORLD: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        static NETHER: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        constructor();
    }
    export class $AmbientParticleSettings {
        getOptions(): $ParticleOptions;
        canSpawn(arg0: $RandomSource): boolean;
        static CODEC: $Codec<$AmbientParticleSettings>;
        constructor(arg0: $ParticleOptions_, arg1: number);
        get options(): $ParticleOptions;
    }
    export class $TheEndBiomeSource extends $BiomeSource implements $IExtendedTheEndBiomeSource {
        static create(arg0: $HolderGetter<$Biome_>): $TheEndBiomeSource;
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: number): void;
        handler$dcg000$terrablender$onGetNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $CallbackInfoReturnable<any>): void;
        static CODEC: $MapCodec<$TheEndBiomeSource>;
    }
    export class $BiomeSpecialEffects {
        getWaterColor(): number;
        getBackgroundMusic(): ($Music) | undefined;
        getWaterFogColor(): number;
        getFogColor(): number;
        getAmbientAdditionsSettings(): ($AmbientAdditionsSettings) | undefined;
        getSkyColor(): number;
        getAmbientLoopSoundEvent(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSettings(): ($AmbientMoodSettings) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        getGrassColorOverride(): (number) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getAmbientParticleSettings(): ($AmbientParticleSettings) | undefined;
        skyColor: number;
        static CODEC: $Codec<$BiomeSpecialEffects>;
        waterFogColor: number;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        foliageColorOverride: (number) | undefined;
        grassColorOverride: (number) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientParticleSettings: ($AmbientParticleSettings) | undefined;
        waterColor: number;
        backgroundMusic: ($Music) | undefined;
        grassColorModifier: $BiomeSpecialEffects$GrassColorModifier;
        fogColor: number;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
    }
    export class $Climate$Parameter extends $Record {
        min(): number;
        max(): number;
        distance(arg0: number): number;
        distance(arg0: $Climate$Parameter_): number;
        static point(arg0: number): $Climate$Parameter;
        static span(arg0: number, arg1: number): $Climate$Parameter;
        static span(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_): $Climate$Parameter;
        span(arg0: $Climate$Parameter_): $Climate$Parameter;
        static CODEC: $Codec<$Climate$Parameter>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Parameter}.
     */
    export type $Climate$Parameter_ = { max?: number, min?: number,  } | [max?: number, min?: number, ];
    export class $Climate$ParameterList<T> implements $ParameterListAccessor<any>, $IExtendedParameterList<any> {
        values(): $List<$Pair<$Climate$ParameterPoint, $Object>>;
        clone(): $Climate$ParameterList<any>;
        getTree(arg0: number): $Climate$RTree<any>;
        getRegion(arg0: number): $Region;
        findValue(arg0: $Climate$TargetPoint_): $Object;
        isInitialized(): boolean;
        findValuePositional(arg0: $Climate$TargetPoint_, arg1: number, arg2: number, arg3: number): $Object;
        findValueBruteForce(arg0: $Climate$TargetPoint_): $Object;
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: $RegionType_, arg2: number): void;
        recreateUniqueness(): void;
        getUniqueness(arg0: number, arg1: number, arg2: number): number;
        getTreeCount(): number;
        findValueIndex(arg0: $Climate$TargetPoint_): $Object;
        findValueIndex(arg0: $Climate$TargetPoint_, arg1: $Climate$DistanceMetric_<$Object>): $Object;
        static codec<T>(arg0: $MapCodec_<T>): $Codec<$Climate$ParameterList<T>>;
        lithostitched$setValues(list: $List_<$Pair<$Climate$ParameterPoint_, $Object>>): void;
        lithostitched$index(rTree: $Climate$RTree<$Object>): void;
        index: $Climate$RTree<$Object>;
        constructor(arg0: $List_<$Pair<$Climate$ParameterPoint_, $Object>>);
        get initialized(): boolean;
        get treeCount(): number;
    }
    export class $Biome$ClimateSettings extends $Record {
        temperature(): number;
        hasPrecipitation(): boolean;
        downfall(): number;
        temperatureModifier(): $Biome$TemperatureModifier;
        static CODEC: $MapCodec<$Biome$ClimateSettings>;
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: $Biome$TemperatureModifier_, downfall: number);
    }
    /**
     * Values that may be interpreted as {@link $Biome$ClimateSettings}.
     */
    export type $Biome$ClimateSettings_ = { hasPrecipitation?: boolean, temperatureModifier?: $Biome$TemperatureModifier_, temperature?: number, downfall?: number,  } | [hasPrecipitation?: boolean, temperatureModifier?: $Biome$TemperatureModifier_, temperature?: number, downfall?: number, ];
    export class $FixedBiomeSource extends $BiomeSource implements $BiomeManager$NoiseBiomeSource {
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        static CODEC: $MapCodec<$FixedBiomeSource>;
        constructor(arg0: $Holder_<$Biome>);
    }
    export class $OverworldBiomeBuilder {
        getDebugStringForTemperature(arg0: number): string;
        getDebugStringForContinentalness(arg0: number): string;
        static getDebugStringForPeaksAndValleys(arg0: number): string;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        getDebugStringForErosion(arg0: number): string;
        getDebugStringForHumidity(arg0: number): string;
        addBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        pickMiddleBiomeOrBadlandsIfHotOrSlopeIfCold(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        addSurfaceBiome(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number, arg7: $ResourceKey_<$Biome>): void;
        addDebugBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addLowSlice(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        pickPlateauBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        addInlandBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        pickShatteredBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickSlopeBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        addMidSlice(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        pickBadlandsBiome(arg0: number, arg1: $Climate$Parameter_): $ResourceKey<$Biome>;
        static isDeepDarkRegion(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction$FunctionContext): boolean;
        pickPeakBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickMiddleBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        addOffCoastBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addBottomBiome(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number, arg7: $ResourceKey_<$Biome>): void;
        pickBeachBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        addHighSlice(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        static getDebugStringForNoiseValue(arg0: number, arg1: $Climate$Parameter_[]): string;
        maybePickWindsweptSavannaBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_, arg3: $ResourceKey_<$Biome>): $ResourceKey<$Biome>;
        getPeaksAndValleysThresholds(): $Climate$Parameter[];
        pickMiddleBiomeOrBadlandsIfHot(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        getContinentalnessThresholds(): $Climate$Parameter[];
        addPeaks(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        addValleys(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        getTemperatureThresholds(): $Climate$Parameter[];
        addUndergroundBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addUndergroundBiome(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number, arg7: $ResourceKey_<$Biome>): void;
        getWeirdnessThresholds(): $Climate$Parameter[];
        getHumidityThresholds(): $Climate$Parameter[];
        getErosionThresholds(): $Climate$Parameter[];
        pickShatteredCoastBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        nearInlandContinentalness: $Climate$Parameter;
        static PEAK_SIZE: number;
        static FAR_INLAND_START: number;
        static NEAR_INLAND_START: number;
        PLATEAU_BIOMES: $ResourceKey<$Biome>[][];
        MIDDLE_BIOMES_VARIANT: $ResourceKey<$Biome>[][];
        static EROSION_INDEX_1_START: number;
        static HIGH_START: number;
        FULL_RANGE: $Climate$Parameter;
        farInlandContinentalness: $Climate$Parameter;
        static VALLEY_SIZE: number;
        temperatures: $Climate$Parameter[];
        static LOW_START: number;
        static HIGH_END: number;
        static EROSION_INDEX_2_START: number;
        midInlandContinentalness: $Climate$Parameter;
        static MID_INLAND_START: number;
        humidities: $Climate$Parameter[];
        FROZEN_RANGE: $Climate$Parameter;
        coastContinentalness: $Climate$Parameter;
        deepOceanContinentalness: $Climate$Parameter;
        inlandContinentalness: $Climate$Parameter;
        UNFROZEN_RANGE: $Climate$Parameter;
        SHATTERED_BIOMES: $ResourceKey<$Biome>[][];
        OCEANS: $ResourceKey<$Biome>[][];
        erosions: $Climate$Parameter[];
        MIDDLE_BIOMES: $ResourceKey<$Biome>[][];
        PLATEAU_BIOMES_VARIANT: $ResourceKey<$Biome>[][];
        static EROSION_DEEP_DARK_DRYNESS_THRESHOLD: number;
        static PEAK_START: number;
        mushroomFieldsContinentalness: $Climate$Parameter;
        static DEPTH_DEEP_DARK_DRYNESS_THRESHOLD: number;
        oceanContinentalness: $Climate$Parameter;
        static PEAK_END: number;
        constructor();
        get peaksAndValleysThresholds(): $Climate$Parameter[];
        get continentalnessThresholds(): $Climate$Parameter[];
        get temperatureThresholds(): $Climate$Parameter[];
        get weirdnessThresholds(): $Climate$Parameter[];
        get humidityThresholds(): $Climate$Parameter[];
        get erosionThresholds(): $Climate$Parameter[];
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
        id(): $ResourceLocation;
        provider(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider;
        usedBiomes(): $Stream<$ResourceKey<$Biome>>;
        static OVERWORLD: $MultiNoiseBiomeSourceParameterList$Preset;
        static CODEC: $Codec<$MultiNoiseBiomeSourceParameterList$Preset>;
        static NETHER: $MultiNoiseBiomeSourceParameterList$Preset;
        static BY_NAME: $Map<$ResourceLocation, $MultiNoiseBiomeSourceParameterList$Preset>;
        constructor(arg0: $ResourceLocation_, arg1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset_ = { id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_,  } | [id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_, ];
    export class $Biome implements $ExtendedBiome, $BiomeAccessor, $BiomeFTBC {
        getTemperature(arg0: $BlockPos_): number;
        getModifiedSpecialEffects(): $BiomeSpecialEffects;
        getModifiedClimateSettings(): $Biome$ClimateSettings;
        shouldSnow(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldMeltFrozenOceanIcebergSlightly(arg0: $BlockPos_): boolean;
        shouldFreeze(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldFreeze(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean): boolean;
        getWaterColor(): number;
        getGenerationSettings(): $BiomeGenerationSettings;
        getBackgroundMusic(): ($Music) | undefined;
        getGrassColor(arg0: number, arg1: number): number;
        coldEnoughToSnow(arg0: $BlockPos_): boolean;
        getBiomeCategory(): number;
        getAmbientMood(): ($AmbientMoodSettings) | undefined;
        getAmbientLoop(): ($Holder<$SoundEvent>) | undefined;
        getFoliageColor(): number;
        getWaterFogColor(): number;
        getMobSettings(): $MobSpawnSettings;
        setBiomeCategory(arg0: number): void;
        hasPrecipitation(): boolean;
        warmEnoughToRain(arg0: $BlockPos_): boolean;
        getDownfall(): number;
        getFogColor(): number;
        getBaseTemperature(): number;
        getPrecipitationAt(arg0: $BlockPos_): $Biome$Precipitation;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getSkyColor(): number;
        modifiableBiomeInfo(): $ModifiableBiomeInfo;
        getFTBCBiomeColorIndex(): number;
        getAmbientAdditions(): ($AmbientAdditionsSettings) | undefined;
        setFTBCBiomeColorIndex(c: number): void;
        setClimateSettings(climateSettings: $Biome$ClimateSettings_): void;
        setSpecialEffects(biomeSpecialEffects: $BiomeSpecialEffects): void;
        setMobSettings(mobSpawnSettings: $MobSpawnSettings): void;
        getClimateSettings(): $Biome$ClimateSettings;
        getSpecialEffects(): $BiomeSpecialEffects;
        setGenerationSettings(biomeGenerationSettings: $BiomeGenerationSettings): void;
        static CODEC: $Codec<$Holder<$Biome>>;
        static NETWORK_CODEC: $Codec<$Biome>;
        /**
         * @deprecated
         */
        static BIOME_INFO_NOISE: $PerlinSimplexNoise;
        static DIRECT_CODEC: $Codec<$Biome>;
        static LIST_CODEC: $Codec<$HolderSet<$Biome>>;
        get modifiedSpecialEffects(): $BiomeSpecialEffects;
        get modifiedClimateSettings(): $Biome$ClimateSettings;
        get waterColor(): number;
        get backgroundMusic(): ($Music) | undefined;
        get ambientMood(): ($AmbientMoodSettings) | undefined;
        get ambientLoop(): ($Holder<$SoundEvent>) | undefined;
        get foliageColor(): number;
        get waterFogColor(): number;
        get downfall(): number;
        get fogColor(): number;
        get baseTemperature(): number;
        get ambientParticle(): ($AmbientParticleSettings) | undefined;
        get skyColor(): number;
        get ambientAdditions(): ($AmbientAdditionsSettings) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Biome}.
     */
    export type $Biome_ = RegistryTypes.WorldgenBiome;
    export interface $MultiNoiseBiomeSourceParameterList extends RegistryMarked<RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterListTag, RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList> {}
    export class $Climate$DistanceMetric<T> {
    }
    export interface $Climate$DistanceMetric<T> {
        distance(arg0: $Climate$RTree$Node<T>, arg1: number[]): number;
    }
    /**
     * Values that may be interpreted as {@link $Climate$DistanceMetric}.
     */
    export type $Climate$DistanceMetric_<T> = ((arg0: $Climate$RTree$Node<T>, arg1: number[]) => number);
    export class $Climate$RTree<T> implements $InterfaceSearchTree<any> {
        static create<T>(arg0: $List_<$Pair<$Climate$ParameterPoint_, T>>): $Climate$RTree<T>;
        search(arg0: $Climate$TargetPoint_, arg1: $Climate$DistanceMetric_<$Object>): $Object;
        biolith$searchTreeGet(point: $Climate$TargetPoint_, distanceFunction: $Climate$DistanceMetric_<any>): $BiolithFittestNodes<any>;
    }
    export class $BiomeManager implements $BiomeManagerAccessor, $IMixinBiomeAccess, $BiomeManagerAccessor$1 {
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        withDifferentSource(arg0: $BiomeManager$NoiseBiomeSource_): $BiomeManager;
        getNoiseBiomeAtQuart(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        static obfuscateSeed(arg0: number): number;
        static getFiddledDistance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
        getNoiseBiomeAtPosition(arg0: $BlockPos_): $Holder<$Biome>;
        getNoiseBiomeAtPosition(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        catnip$getBiomeZoomSeed(): number;
        mfix$getBiomeSource(): $BiomeManager$NoiseBiomeSource;
        minihud_getSeed(): number;
        mfix$getZoomSeed(): number;
        biomeZoomSeed: number;
        noiseBiomeSource: $BiomeManager$NoiseBiomeSource;
        static CHUNK_CENTER_QUART: number;
        constructor(arg0: $BiomeManager$NoiseBiomeSource_, arg1: number);
    }
    export class $Climate$Sampler extends $Record {
        depth(): $DensityFunction;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        erosion(): $DensityFunction;
        weirdness(): $DensityFunction;
        temperature(): $DensityFunction;
        continentalness(): $DensityFunction;
        findSpawnPosition(): $BlockPos;
        sample(arg0: number, arg1: number, arg2: number): $Climate$TargetPoint;
        humidity(): $DensityFunction;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $List_<$Climate$ParameterPoint_>);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Sampler}.
     */
    export type $Climate$Sampler_ = { temperature?: $DensityFunction_, erosion?: $DensityFunction_, weirdness?: $DensityFunction_, continentalness?: $DensityFunction_, humidity?: $DensityFunction_, spawnTarget?: $List_<$Climate$ParameterPoint_>, depth?: $DensityFunction_,  } | [temperature?: $DensityFunction_, erosion?: $DensityFunction_, weirdness?: $DensityFunction_, continentalness?: $DensityFunction_, humidity?: $DensityFunction_, spawnTarget?: $List_<$Climate$ParameterPoint_>, depth?: $DensityFunction_, ];
    export class $Climate$SpawnFinder$Result extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Climate$SpawnFinder$Result}.
     */
    export type $Climate$SpawnFinder$Result_ = { fitness?: number, location?: $BlockPos_,  } | [fitness?: number, location?: $BlockPos_, ];
    export class $AmbientAdditionsSettings {
        getTickChance(): number;
        getSoundEvent(): $Holder<$SoundEvent>;
        static CODEC: $Codec<$AmbientAdditionsSettings>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number);
        get tickChance(): number;
        get soundEvent(): $Holder<$SoundEvent>;
    }
    export class $Climate$ParameterPoint extends $Record {
        offset(): number;
        depth(): $Climate$Parameter;
        erosion(): $Climate$Parameter;
        weirdness(): $Climate$Parameter;
        temperature(): $Climate$Parameter;
        modifyReturnValue$hgi000$quark$dummyOutDisabledParameters(arg0: $List_<any>): $List<any>;
        continentalness(): $Climate$Parameter;
        modifyExpressionValue$hgi000$quark$giveMinimumOffsetIfDisabled(arg0: number): number;
        humidity(): $Climate$Parameter;
        wrapOperation$hgi000$quark$giveMinimumDistanceForDisabledParameters(arg0: $Climate$Parameter_, arg1: number, arg2: $Operation_<any>): number;
        static CODEC: $Codec<$Climate$ParameterPoint>;
        constructor(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$ParameterPoint}.
     */
    export type $Climate$ParameterPoint_ = { temperature?: $Climate$Parameter_, erosion?: $Climate$Parameter_, weirdness?: $Climate$Parameter_, offset?: number, continentalness?: $Climate$Parameter_, humidity?: $Climate$Parameter_, depth?: $Climate$Parameter_,  } | [temperature?: $Climate$Parameter_, erosion?: $Climate$Parameter_, weirdness?: $Climate$Parameter_, offset?: number, continentalness?: $Climate$Parameter_, humidity?: $Climate$Parameter_, depth?: $Climate$Parameter_, ];
    export class $FeatureSorter$StepFeatureData extends $Record {
        features(): $List<$PlacedFeature>;
        indexMapping(): $ToIntFunction<$PlacedFeature>;
        constructor(arg0: $List_<$PlacedFeature_>);
        constructor(arg0: $List_<$PlacedFeature_>, arg1: $ToIntFunction_<$PlacedFeature>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$StepFeatureData}.
     */
    export type $FeatureSorter$StepFeatureData_ = { indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>,  } | [indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>, ];
    export class $CheckerboardColumnBiomeSource extends $BiomeSource {
        static CODEC: $MapCodec<$CheckerboardColumnBiomeSource>;
        constructor(arg0: $HolderSet_<$Biome>, arg1: number);
    }
    export class $Biomes {
        static BEACH: $ResourceKey<$Biome>;
        static SAVANNA: $ResourceKey<$Biome>;
        static SUNFLOWER_PLAINS: $ResourceKey<$Biome>;
        static THE_VOID: $ResourceKey<$Biome>;
        static BIRCH_FOREST: $ResourceKey<$Biome>;
        static FROZEN_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_HILLS: $ResourceKey<$Biome>;
        static DEEP_LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_SPRUCE_TAIGA: $ResourceKey<$Biome>;
        static DEEP_FROZEN_OCEAN: $ResourceKey<$Biome>;
        static END_HIGHLANDS: $ResourceKey<$Biome>;
        static END_MIDLANDS: $ResourceKey<$Biome>;
        static FLOWER_FOREST: $ResourceKey<$Biome>;
        static CHERRY_GROVE: $ResourceKey<$Biome>;
        static ERODED_BADLANDS: $ResourceKey<$Biome>;
        static END_BARRENS: $ResourceKey<$Biome>;
        static SNOWY_TAIGA: $ResourceKey<$Biome>;
        static DEEP_DARK: $ResourceKey<$Biome>;
        static JUNGLE: $ResourceKey<$Biome>;
        static ICE_SPIKES: $ResourceKey<$Biome>;
        static OCEAN: $ResourceKey<$Biome>;
        static SMALL_END_ISLANDS: $ResourceKey<$Biome>;
        static FROZEN_RIVER: $ResourceKey<$Biome>;
        static DARK_FOREST: $ResourceKey<$Biome>;
        static THE_END: $ResourceKey<$Biome>;
        static SNOWY_PLAINS: $ResourceKey<$Biome>;
        static COLD_OCEAN: $ResourceKey<$Biome>;
        static SNOWY_SLOPES: $ResourceKey<$Biome>;
        static WINDSWEPT_SAVANNA: $ResourceKey<$Biome>;
        static LUSH_CAVES: $ResourceKey<$Biome>;
        static DRIPSTONE_CAVES: $ResourceKey<$Biome>;
        static MEADOW: $ResourceKey<$Biome>;
        static STONY_SHORE: $ResourceKey<$Biome>;
        static WINDSWEPT_FOREST: $ResourceKey<$Biome>;
        static PLAINS: $ResourceKey<$Biome>;
        static OLD_GROWTH_BIRCH_FOREST: $ResourceKey<$Biome>;
        static SAVANNA_PLATEAU: $ResourceKey<$Biome>;
        static SPARSE_JUNGLE: $ResourceKey<$Biome>;
        static STONY_PEAKS: $ResourceKey<$Biome>;
        static JAGGED_PEAKS: $ResourceKey<$Biome>;
        static RIVER: $ResourceKey<$Biome>;
        static MANGROVE_SWAMP: $ResourceKey<$Biome>;
        static WARPED_FOREST: $ResourceKey<$Biome>;
        static WOODED_BADLANDS: $ResourceKey<$Biome>;
        static NETHER_WASTES: $ResourceKey<$Biome>;
        static LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_GRAVELLY_HILLS: $ResourceKey<$Biome>;
        static BAMBOO_JUNGLE: $ResourceKey<$Biome>;
        static DEEP_COLD_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_PINE_TAIGA: $ResourceKey<$Biome>;
        static BADLANDS: $ResourceKey<$Biome>;
        static MUSHROOM_FIELDS: $ResourceKey<$Biome>;
        static DEEP_OCEAN: $ResourceKey<$Biome>;
        static TAIGA: $ResourceKey<$Biome>;
        static DESERT: $ResourceKey<$Biome>;
        static SNOWY_BEACH: $ResourceKey<$Biome>;
        static WARM_OCEAN: $ResourceKey<$Biome>;
        static BASALT_DELTAS: $ResourceKey<$Biome>;
        static FOREST: $ResourceKey<$Biome>;
        static SWAMP: $ResourceKey<$Biome>;
        static SOUL_SAND_VALLEY: $ResourceKey<$Biome>;
        static GROVE: $ResourceKey<$Biome>;
        static FROZEN_PEAKS: $ResourceKey<$Biome>;
        static CRIMSON_FOREST: $ResourceKey<$Biome>;
        constructor();
    }
    export class $MultiNoiseBiomeSource extends $BiomeSource implements $MNBSDuck, $MultiNoiseBiomeSourceAccessor, $IExtendedMultiNoiseBiomeSource, $MultiNoiseBiomeSourceAccess {
        clone(): $MultiNoiseBiomeSource;
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        stable(arg0: $ResourceKey_<$MultiNoiseBiomeSourceParameterList>): boolean;
        lithostitched$getEntries(): $Either<any, any>;
        lithostitched$setEntries(entries: $Either<any, any>): void;
        handler$dcc000$terrablender$addDebugInfo(arg0: $List_<any>, arg1: $BlockPos_, arg2: $Climate$Sampler_, arg3: $CallbackInfo): void;
        handler$dcc000$terrablender$getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $CallbackInfoReturnable<any>): void;
        static createFromPreset(arg0: $Holder_<$MultiNoiseBiomeSourceParameterList>): $MultiNoiseBiomeSource;
        static createFromList(arg0: $Climate$ParameterList<$Holder_<$Biome>>): $MultiNoiseBiomeSource;
        getNoiseBiome(arg0: $Climate$TargetPoint_): $Holder<$Biome>;
        getParameters(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        setParameters(either: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
        static CODEC: $MapCodec<$MultiNoiseBiomeSource>;
        static DIRECT_CODEC: $MapCodec<$Climate$ParameterList<$Holder<$Biome>>>;
    }
    export class $BiomeSource implements $BiomeResolver, $InterfaceBiomeSource, $BiomeSourceInvoker, $IExtendedBiomeSource {
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Predicate_<$Holder<$Biome>>, arg6: $RandomSource, arg7: boolean, arg8: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Holder<$Biome>>, arg5: $RandomSource, arg6: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        biolith$getDimensionType(): $ResourceKey<any>;
        biolith$setDimensionType(dimensionTypeEntry: $Holder_<any>): void;
        biolith$setDimensionType(dimensionTypeKey: $ResourceKey_<any>): void;
        appendDeferredBiomesList(arg0: $List_<any>): void;
        findClosestBiome3d(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Holder<$Biome>>, arg5: $Climate$Sampler_, arg6: $LevelReader): $Pair<$BlockPos, $Holder<$Biome>>;
        getBiomesWithin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Climate$Sampler_): $Set<$Holder<$Biome>>;
        possibleBiomes(): $Set<$Holder<$Biome>>;
        addDebugInfo(arg0: $List_<string>, arg1: $BlockPos_, arg2: $Climate$Sampler_): void;
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_): $Holder<$Biome>;
        biolith$getBiomeEntries(): $Climate$ParameterList<$Holder<$Biome>>;
        biolith$getBypass(): boolean;
        biolith$setBypass(value: boolean): void;
        getCodec(): $MapCodec<$BiomeSource>;
        static CODEC: $Codec<$BiomeSource>;
        get codec(): $MapCodec<$BiomeSource>;
    }
}
