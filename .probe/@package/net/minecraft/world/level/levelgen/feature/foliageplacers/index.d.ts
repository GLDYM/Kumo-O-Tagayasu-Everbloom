import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/foliageplacers" {
    export interface $FoliagePlacerType extends RegistryMarked<RegistryTypes.WorldgenFoliagePlacerTypeTag, RegistryTypes.WorldgenFoliagePlacerType> {}
    export class $FoliagePlacer {
        createFoliage(arg0: $LevelSimulatedReader, arg1: $FoliagePlacer$FoliageSetter, arg2: $RandomSource, arg3: $TreeConfiguration, arg4: number, arg5: $FoliagePlacer$FoliageAttachment, arg6: number, arg7: number): void;
        foliageHeight(arg0: $RandomSource, arg1: number, arg2: $TreeConfiguration): number;
        foliageRadius(arg0: $RandomSource, arg1: number): number;
        static CODEC: $Codec<$FoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageAttachment {
        pos(): $BlockPos;
        doubleTrunk(): boolean;
        radiusOffset(): number;
        constructor(arg0: $BlockPos_, arg1: number, arg2: boolean);
    }
    export class $FancyFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$FancyFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $RandomSpreadFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$RandomSpreadFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_, arg3: number);
    }
    export class $PineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$PineFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_);
    }
    export class $FoliagePlacerType<P extends $FoliagePlacer> {
        codec(): $MapCodec<P>;
        static MEGA_PINE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaPineFoliagePlacer>;
        static PINE_FOLIAGE_PLACER: $FoliagePlacerType<$PineFoliagePlacer>;
        static RANDOM_SPREAD_FOLIAGE_PLACER: $FoliagePlacerType<$RandomSpreadFoliagePlacer>;
        static MEGA_JUNGLE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaJungleFoliagePlacer>;
        static SPRUCE_FOLIAGE_PLACER: $FoliagePlacerType<$SpruceFoliagePlacer>;
        static BUSH_FOLIAGE_PLACER: $FoliagePlacerType<$BushFoliagePlacer>;
        static ACACIA_FOLIAGE_PLACER: $FoliagePlacerType<$AcaciaFoliagePlacer>;
        static BLOB_FOLIAGE_PLACER: $FoliagePlacerType<$BlobFoliagePlacer>;
        static DARK_OAK_FOLIAGE_PLACER: $FoliagePlacerType<$DarkOakFoliagePlacer>;
        static CHERRY_FOLIAGE_PLACER: $FoliagePlacerType<$CherryFoliagePlacer>;
        static FANCY_FOLIAGE_PLACER: $FoliagePlacerType<$FancyFoliagePlacer>;
        constructor(arg0: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $FoliagePlacerType}.
     */
    export type $FoliagePlacerType_<P> = RegistryTypes.WorldgenFoliagePlacerType;
    export class $MegaPineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaPineFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_);
    }
    export class $DarkOakFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$DarkOakFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $BushFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$BushFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $BlobFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$BlobFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $SpruceFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$SpruceFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_);
    }
    export class $CherryFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$CherryFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: $IntProvider_, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $MegaJungleFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaJungleFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $AcaciaFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$AcaciaFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageSetter {
    }
    export interface $FoliagePlacer$FoliageSetter {
        set(arg0: $BlockPos_, arg1: $BlockState_): void;
        isSet(arg0: $BlockPos_): boolean;
    }
}
