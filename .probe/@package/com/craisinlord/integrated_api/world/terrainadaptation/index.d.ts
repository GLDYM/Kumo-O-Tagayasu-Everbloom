import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
export * as beardifier from "@package/com/craisinlord/integrated_api/world/terrainadaptation/beardifier";

declare module "@package/com/craisinlord/integrated_api/world/terrainadaptation" {
    export class $CustomAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$CustomAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
    }
    export class $LargeCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$LargeCarvedTopNoBeardAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
        constructor();
    }
    export class $SmallCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$SmallCarvedTopNoBeardAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
        constructor();
    }
    export class $EnhancedTerrainAdaptation {
        type(): $EnhancedTerrainAdaptationType<never>;
        carves(): boolean;
        beards(): boolean;
        getKernel(): number[];
        getKernelRadius(): number;
        getKernelSize(): number;
        getKernelDistance(): number;
        computeDensityFactor(xDistance: number, yDistance: number, zDistance: number, yDistanceToBeardBase: number): number;
        static NONE: $EnhancedTerrainAdaptation;
        get kernel(): number[];
        get kernelRadius(): number;
        get kernelSize(): number;
        get kernelDistance(): number;
    }
    export class $NoneAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$NoneAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
        constructor();
    }
    export class $EnhancedTerrainAdaptationType<C extends $EnhancedTerrainAdaptation> {
        static register<C extends $EnhancedTerrainAdaptation>(resourceLocation: $ResourceLocation_, codec: $MapCodec_<C>): $EnhancedTerrainAdaptationType<C>;
        static ADAPTATION_TYPE_CODEC: $Codec<$EnhancedTerrainAdaptationType<never>>;
        static LARGE_CARVED_TOP_NO_BEARD: $EnhancedTerrainAdaptationType<$LargeCarvedTopNoBeardAdaptation>;
        static ADAPTATION_TYPES_BY_NAME: $Map<$ResourceLocation, $EnhancedTerrainAdaptationType<never>>;
        static NAME_BY_ADAPTATION_TYPES: $Map<$EnhancedTerrainAdaptationType<never>, $ResourceLocation>;
        static CUSTOM: $EnhancedTerrainAdaptationType<$CustomAdaptation>;
        static ADAPTATION_CODEC: $Codec<$EnhancedTerrainAdaptation>;
        static SMALL_CARVED_TOP_NO_BEARD: $EnhancedTerrainAdaptationType<$SmallCarvedTopNoBeardAdaptation>;
        static NONE: $EnhancedTerrainAdaptationType<$NoneAdaptation>;
    }
    export interface $EnhancedTerrainAdaptationType<C extends $EnhancedTerrainAdaptation> {
        codec(): $MapCodec<C>;
    }
    /**
     * Values that may be interpreted as {@link $EnhancedTerrainAdaptationType}.
     */
    export type $EnhancedTerrainAdaptationType_<C> = (() => $MapCodec_<C>);
}
