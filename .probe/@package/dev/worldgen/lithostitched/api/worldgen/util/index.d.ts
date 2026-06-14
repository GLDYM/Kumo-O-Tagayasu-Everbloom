import { $Music, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Biome$TemperatureModifier_, $AmbientMoodSettings, $AmbientParticleSettings, $Biome$TemperatureModifier, $BiomeSpecialEffects$GrassColorModifier_, $AmbientAdditionsSettings, $BiomeSpecialEffects$GrassColorModifier } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $PlacementCondition$Context_ } from "@package/dev/worldgen/lithostitched/api/worldgen/placementcondition";
import { $Enum, $Record } from "@package/java/lang";
import { $DensityFunction_, $DensityFunction$NoiseHolder_, $DensityFunction, $RandomState, $DensityFunction$Visitor, $NoiseRouter_, $PositionalRandomFactory, $NoiseGeneratorSettings_, $DensityFunction$NoiseHolder } from "@package/net/minecraft/world/level/levelgen";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/util" {
    export class $DensityFunctionWrapper implements $DensityFunction$Visitor {
        apply(densityFunction: $DensityFunction_): $DensityFunction;
        visitNoise(noiseHolder: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
        constructor(context: $PlacementCondition$Context_, settings: $NoiseGeneratorSettings_);
        constructor(seed: number, useLegacySource: boolean, randomState: $RandomState, random: $PositionalRandomFactory);
    }
    export class $NoiseRouterTarget extends $Enum<$NoiseRouterTarget> implements $StringRepresentable {
        static values(): $NoiseRouterTarget[];
        static valueOf(name: string): $NoiseRouterTarget;
        getSerializedName(): string;
        getDensityFunction(router: $NoiseRouter_): $DensityFunction;
        getRemappedEnumConstantName(): string;
        static LAVA: $NoiseRouterTarget;
        static CODEC: $Codec<$NoiseRouterTarget>;
        static FLUID_LEVEL_FLOODEDNESS: $NoiseRouterTarget;
        static CONTINENTS: $NoiseRouterTarget;
        static VEIN_RIDGED: $NoiseRouterTarget;
        static BARRIER: $NoiseRouterTarget;
        static EROSION: $NoiseRouterTarget;
        static INITIAL_DENSITY: $NoiseRouterTarget;
        static FLUID_LEVEL_SPREAD: $NoiseRouterTarget;
        static TEMPERATURE: $NoiseRouterTarget;
        static FINAL_DENSITY: $NoiseRouterTarget;
        static VEIN_GAP: $NoiseRouterTarget;
        static RIDGES: $NoiseRouterTarget;
        static DEPTH: $NoiseRouterTarget;
        static VEGETATION: $NoiseRouterTarget;
        static VEIN_TOGGLE: $NoiseRouterTarget;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $NoiseRouterTarget}.
     */
    export type $NoiseRouterTarget_ = "barrier" | "fluid_level_floodedness" | "fluid_level_spread" | "lava" | "temperature" | "vegetation" | "continents" | "erosion" | "depth" | "ridges" | "initial_density_without_jaggedness" | "final_density" | "vein_toggle" | "vein_ridged" | "vein_gap";
    export class $WeightedSpawnerData extends $Record {
        type(): $EntityType<never>;
        minCount(): number;
        weight(): number;
        maxCount(): number;
        static CODEC: $Codec<$WeightedSpawnerData>;
        constructor(type: $EntityType_<never>, weight: number, minCount: number, maxCount: number);
    }
    /**
     * Values that may be interpreted as {@link $WeightedSpawnerData}.
     */
    export type $WeightedSpawnerData_ = { weight?: number, type?: $EntityType_<never>, maxCount?: number, minCount?: number,  } | [weight?: number, type?: $EntityType_<never>, maxCount?: number, minCount?: number, ];
    export class $BiomeEffects extends $Record {
        music(): ($Music) | undefined;
        moodSound(): ($AmbientMoodSettings) | undefined;
        waterFogColor(): (number) | undefined;
        grassColorModifier(): ($BiomeSpecialEffects$GrassColorModifier) | undefined;
        foliageColor(): (number) | undefined;
        grassColor(): (number) | undefined;
        musicVolume(): (number) | undefined;
        ambientSound(): ($Holder<$SoundEvent>) | undefined;
        additionsSound(): ($AmbientAdditionsSettings) | undefined;
        ambientParticle(): ($AmbientParticleSettings) | undefined;
        dryFoliageColor(): (number) | undefined;
        fogColor(): (number) | undefined;
        waterColor(): (number) | undefined;
        skyColor(): (number) | undefined;
        static CODEC: $Codec<$BiomeEffects>;
        constructor(fogColor: (number) | undefined, waterColor: (number) | undefined, waterFogColor: (number) | undefined, skyColor: (number) | undefined, foliageColor: (number) | undefined, dryFoliageColor: (number) | undefined, grassColor: (number) | undefined, grassColorModifier: ($BiomeSpecialEffects$GrassColorModifier_) | undefined, ambientParticle: ($AmbientParticleSettings) | undefined, ambientSound: ($Holder_<$SoundEvent>) | undefined, moodSound: ($AmbientMoodSettings) | undefined, additionsSound: ($AmbientAdditionsSettings) | undefined, music: ($Music) | undefined, musicVolume: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BiomeEffects}.
     */
    export type $BiomeEffects_ = { waterColor?: (number) | undefined, moodSound?: ($AmbientMoodSettings) | undefined, music?: ($Music) | undefined, dryFoliageColor?: (number) | undefined, waterFogColor?: (number) | undefined, skyColor?: (number) | undefined, ambientParticle?: ($AmbientParticleSettings) | undefined, ambientSound?: ($Holder_<$SoundEvent>) | undefined, grassColor?: (number) | undefined, grassColorModifier?: ($BiomeSpecialEffects$GrassColorModifier_) | undefined, foliageColor?: (number) | undefined, additionsSound?: ($AmbientAdditionsSettings) | undefined, musicVolume?: (number) | undefined, fogColor?: (number) | undefined,  } | [waterColor?: (number) | undefined, moodSound?: ($AmbientMoodSettings) | undefined, music?: ($Music) | undefined, dryFoliageColor?: (number) | undefined, waterFogColor?: (number) | undefined, skyColor?: (number) | undefined, ambientParticle?: ($AmbientParticleSettings) | undefined, ambientSound?: ($Holder_<$SoundEvent>) | undefined, grassColor?: (number) | undefined, grassColorModifier?: ($BiomeSpecialEffects$GrassColorModifier_) | undefined, foliageColor?: (number) | undefined, additionsSound?: ($AmbientAdditionsSettings) | undefined, musicVolume?: (number) | undefined, fogColor?: (number) | undefined, ];
    export class $BiomeClimate extends $Record {
        temperature(): (number) | undefined;
        hasPrecipitation(): (boolean) | undefined;
        downfall(): (number) | undefined;
        temperatureModifier(): ($Biome$TemperatureModifier) | undefined;
        static CODEC: $MapCodec<$BiomeClimate>;
        constructor(hasPrecipitation: (boolean) | undefined, temperature: (number) | undefined, temperatureModifier: ($Biome$TemperatureModifier_) | undefined, downfall: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BiomeClimate}.
     */
    export type $BiomeClimate_ = { hasPrecipitation?: (boolean) | undefined, temperatureModifier?: ($Biome$TemperatureModifier_) | undefined, temperature?: (number) | undefined, downfall?: (number) | undefined,  } | [hasPrecipitation?: (boolean) | undefined, temperatureModifier?: ($Biome$TemperatureModifier_) | undefined, temperature?: (number) | undefined, downfall?: (number) | undefined, ];
}
