import { $BlockPos, $BlockPos_, $Holder_, $HolderSet_, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Set_ } from "@package/java/util";
import { $PositionalRandomFactory, $SurfaceSystem, $SurfaceRules$Condition, $SurfaceRules$Context } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";
export * as mnbs from "@package/dev/worldgen/lithostitched/duck/mnbs";

declare module "@package/dev/worldgen/lithostitched/duck" {
    export class $MansionRoomDuck {
    }
    export interface $MansionRoomDuck extends $RegistryHolder {
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        lithostitched$floorNumber(): number;
    }
    export class $ContextBiomeAccessor {
        static cast(context: $SurfaceRules$Context): $ContextBiomeAccessor;
        static willAlwaysMatch(biomes: $HolderSet_<$Biome>, possibleBiomes: $Set_<$Holder_<$Biome>>): boolean;
        static canNeverMatch(biomes: $HolderSet_<$Biome>, possibleBiomes: $Set_<$Holder_<$Biome>>): boolean;
    }
    export interface $ContextBiomeAccessor {
        biomeMatches(holderSet: $HolderSet_<$Biome>): $SurfaceRules$Condition;
    }
    /**
     * Values that may be interpreted as {@link $ContextBiomeAccessor}.
     */
    export type $ContextBiomeAccessor_ = ((holderSet: $HolderSet<$Biome>) => $SurfaceRules$Condition);
    export class $SurfaceSystemAccessor {
    }
    export interface $SurfaceSystemAccessor {
        getBandOffsetNoise(): $NormalNoise;
        getNoiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
        get noiseRandom(): $PositionalRandomFactory;
    }
    export class $RegistryHolder {
    }
    export interface $RegistryHolder {
        setRegistries(registryAccess: $RegistryAccess): void;
        getRegistries(): $RegistryAccess;
    }
    export class $StructurePoolAccess {
    }
    export interface $StructurePoolAccess {
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        get lithostitchedTemplates(): $LithostitchedTemplates;
    }
    export class $ReferencePosDuck {
    }
    export interface $ReferencePosDuck {
        setReferencePos(blockPos: $BlockPos_): void;
        set referencePos(value: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $ReferencePosDuck}.
     */
    export type $ReferencePosDuck_ = ((blockPos: $BlockPos) => void);
    export class $ContextAccessor {
    }
    export interface $ContextAccessor {
        getY(): number;
        getSystem(): $SurfaceSystem;
        getZ(): number;
        getChunk(): $ChunkAccess;
        getX(): number;
        getStoneDepthBelow(): number;
        get y(): number;
        get system(): $SurfaceSystem;
        get z(): number;
        get chunk(): $ChunkAccess;
        get x(): number;
        get stoneDepthBelow(): number;
    }
}
