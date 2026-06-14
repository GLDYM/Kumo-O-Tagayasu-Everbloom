import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $Holder_, $HolderSet, $Vec3i, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkGeneratorStructureState } from "@package/net/minecraft/world/level/chunk";
import { $Enum, $Record } from "@package/java/lang";
import { $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/placement" {
    export class $StructurePlacement$FrequencyReducer {
    }
    export interface $StructurePlacement$FrequencyReducer {
        shouldGenerate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$FrequencyReducer}.
     */
    export type $StructurePlacement$FrequencyReducer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export interface $StructurePlacementType extends RegistryMarked<RegistryTypes.WorldgenStructurePlacementTag, RegistryTypes.WorldgenStructurePlacement> {}
    export class $RandomSpreadType extends $Enum<$RandomSpreadType> implements $StringRepresentable {
        static values(): $RandomSpreadType[];
        static valueOf(arg0: string): $RandomSpreadType;
        evaluate(arg0: $RandomSource, arg1: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$RandomSpreadType>;
        static LINEAR: $RandomSpreadType;
        static TRIANGULAR: $RandomSpreadType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RandomSpreadType}.
     */
    export type $RandomSpreadType_ = "linear" | "triangular";
    export class $StructurePlacementType<SP extends $StructurePlacement> {
        static RANDOM_SPREAD: $StructurePlacementType<$RandomSpreadStructurePlacement>;
        static CONCENTRIC_RINGS: $StructurePlacementType<$ConcentricRingsStructurePlacement>;
    }
    export interface $StructurePlacementType<SP extends $StructurePlacement> {
        codec(): $MapCodec<SP>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacementType}.
     */
    export type $StructurePlacementType_<SP> = RegistryTypes.WorldgenStructurePlacement | (() => $MapCodec_<SP>);
    export class $StructurePlacement$FrequencyReductionMethod extends $Enum<$StructurePlacement$FrequencyReductionMethod> implements $StringRepresentable {
        static values(): $StructurePlacement$FrequencyReductionMethod[];
        static valueOf(arg0: string): $StructurePlacement$FrequencyReductionMethod;
        shouldGenerate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructurePlacement$FrequencyReductionMethod>;
        static LEGACY_TYPE_3: $StructurePlacement$FrequencyReductionMethod;
        static LEGACY_TYPE_2: $StructurePlacement$FrequencyReductionMethod;
        static LEGACY_TYPE_1: $StructurePlacement$FrequencyReductionMethod;
        static DEFAULT: $StructurePlacement$FrequencyReductionMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$FrequencyReductionMethod}.
     */
    export type $StructurePlacement$FrequencyReductionMethod_ = "default" | "legacy_type_1" | "legacy_type_2" | "legacy_type_3";
    export class $StructurePlacement {
        type(): $StructurePlacementType<never>;
        applyAdditionalChunkRestrictions(arg0: number, arg1: number, arg2: number): boolean;
        getLocatePos(arg0: $ChunkPos): $BlockPos;
        isStructureChunk(arg0: $ChunkGeneratorStructureState, arg1: number, arg2: number): boolean;
        salt(): number;
        applyInteractionsWithOtherStructures(arg0: $ChunkGeneratorStructureState, arg1: number, arg2: number): boolean;
        static CODEC: $Codec<$StructurePlacement>;
    }
    /**
     * @deprecated
     */
    export class $StructurePlacement$ExclusionZone extends $Record {
        chunkCount(): number;
        otherSet(): $Holder<$StructureSet>;
        static CODEC: $Codec<$StructurePlacement$ExclusionZone>;
        constructor(arg0: $Holder_<$StructureSet>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$ExclusionZone}.
     */
    export type $StructurePlacement$ExclusionZone_ = { chunkCount?: number, otherSet?: $Holder_<$StructureSet>,  } | [chunkCount?: number, otherSet?: $Holder_<$StructureSet>, ];
    export class $RandomSpreadStructurePlacement extends $StructurePlacement {
        getPotentialStructureChunk(arg0: number, arg1: number, arg2: number): $ChunkPos;
        spreadType(): $RandomSpreadType;
        spacing(): number;
        separation(): number;
        static CODEC: $MapCodec<$RandomSpreadStructurePlacement>;
        constructor(arg0: number, arg1: number, arg2: $RandomSpreadType_, arg3: number);
        constructor(arg0: $Vec3i, arg1: $StructurePlacement$FrequencyReductionMethod_, arg2: number, arg3: number, arg4: ($StructurePlacement$ExclusionZone_) | undefined, arg5: number, arg6: number, arg7: $RandomSpreadType_);
    }
    export class $ConcentricRingsStructurePlacement extends $StructurePlacement {
        count(): number;
        spread(): number;
        distance(): number;
        preferredBiomes(): $HolderSet<$Biome>;
        static CODEC: $MapCodec<$ConcentricRingsStructurePlacement>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $HolderSet_<$Biome>);
        constructor(arg0: $Vec3i, arg1: $StructurePlacement$FrequencyReductionMethod_, arg2: number, arg3: number, arg4: ($StructurePlacement$ExclusionZone_) | undefined, arg5: number, arg6: number, arg7: number, arg8: $HolderSet_<$Biome>);
    }
}
