import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $NormalNoise$NoiseParameters_ } from "@package/net/minecraft/world/level/levelgen/synth";
import { $List, $List_ } from "@package/java/util";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $RandomSource, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleWeightedRandomList$Builder, $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/levelgen/feature/stateproviders" {
    export class $BlockStateProviderType<P extends $BlockStateProvider> {
        codec(): $MapCodec<P>;
        static RANDOMIZED_INT_STATE_PROVIDER: $BlockStateProviderType<$RandomizedIntStateProvider>;
        static DUAL_NOISE_PROVIDER: $BlockStateProviderType<$DualNoiseProvider>;
        static ROTATED_BLOCK_PROVIDER: $BlockStateProviderType<$RotatedBlockProvider>;
        static SIMPLE_STATE_PROVIDER: $BlockStateProviderType<$SimpleStateProvider>;
        static WEIGHTED_STATE_PROVIDER: $BlockStateProviderType<$WeightedStateProvider>;
        static NOISE_THRESHOLD_PROVIDER: $BlockStateProviderType<$NoiseThresholdProvider>;
        static NOISE_PROVIDER: $BlockStateProviderType<$NoiseProvider>;
        constructor(arg0: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateProviderType}.
     */
    export type $BlockStateProviderType_<P> = RegistryTypes.WorldgenBlockStateProviderType;
    export class $BlockStateProvider {
        getState(arg0: $RandomSource, arg1: $BlockPos_): $BlockState;
        static simple(arg0: $BlockState_): $SimpleStateProvider;
        static simple(arg0: $Block_): $SimpleStateProvider;
        static CODEC: $Codec<$BlockStateProvider>;
        constructor();
    }
    export class $DualNoiseProvider extends $NoiseProvider {
        static CODEC: $MapCodec<$DualNoiseProvider>;
        constructor(arg0: $InclusiveRange_<number>, arg1: $NormalNoise$NoiseParameters_, arg2: number, arg3: number, arg4: $NormalNoise$NoiseParameters_, arg5: number, arg6: $List_<$BlockState_>);
    }
    export class $NoiseProvider extends $NoiseBasedStateProvider {
        static CODEC: $MapCodec<$NoiseProvider>;
        constructor(arg0: number, arg1: $NormalNoise$NoiseParameters_, arg2: number, arg3: $List_<$BlockState_>);
    }
    export class $RuleBasedBlockStateProvider$Rule extends $Record {
        then(): $BlockStateProvider;
        ifTrue(): $BlockPredicate;
        static CODEC: $Codec<$RuleBasedBlockStateProvider$Rule>;
        constructor(arg0: $BlockPredicate, arg1: $BlockStateProvider);
    }
    /**
     * Values that may be interpreted as {@link $RuleBasedBlockStateProvider$Rule}.
     */
    export type $RuleBasedBlockStateProvider$Rule_ = { ifTrue?: $BlockPredicate, then?: $BlockStateProvider,  } | [ifTrue?: $BlockPredicate, then?: $BlockStateProvider, ];
    export class $NoiseBasedStateProvider extends $BlockStateProvider {
        static CODEC: $Codec<$BlockStateProvider>;
    }
    export class $RandomizedIntStateProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$RandomizedIntStateProvider>;
        constructor(arg0: $BlockStateProvider, arg1: $IntegerProperty, arg2: $IntProvider_);
        constructor(arg0: $BlockStateProvider, arg1: string, arg2: $IntProvider_);
    }
    export class $WeightedStateProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$WeightedStateProvider>;
        constructor(arg0: $SimpleWeightedRandomList$Builder<$BlockState_>);
        constructor(arg0: $SimpleWeightedRandomList<$BlockState_>);
    }
    export interface $BlockStateProviderType extends RegistryMarked<RegistryTypes.WorldgenBlockStateProviderTypeTag, RegistryTypes.WorldgenBlockStateProviderType> {}
    export class $RotatedBlockProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$RotatedBlockProvider>;
        constructor(arg0: $Block_);
    }
    export class $RuleBasedBlockStateProvider extends $Record {
        getState(arg0: $WorldGenLevel, arg1: $RandomSource, arg2: $BlockPos_): $BlockState;
        fallback(): $BlockStateProvider;
        rules(): $List<$RuleBasedBlockStateProvider$Rule>;
        static simple(arg0: $Block_): $RuleBasedBlockStateProvider;
        static simple(arg0: $BlockStateProvider): $RuleBasedBlockStateProvider;
        static CODEC: $Codec<$RuleBasedBlockStateProvider>;
        constructor(arg0: $BlockStateProvider, arg1: $List_<$RuleBasedBlockStateProvider$Rule_>);
    }
    /**
     * Values that may be interpreted as {@link $RuleBasedBlockStateProvider}.
     */
    export type $RuleBasedBlockStateProvider_ = { rules?: $List_<$RuleBasedBlockStateProvider$Rule_>, fallback?: $BlockStateProvider,  } | [rules?: $List_<$RuleBasedBlockStateProvider$Rule_>, fallback?: $BlockStateProvider, ];
    export class $NoiseThresholdProvider extends $NoiseBasedStateProvider {
        static CODEC: $MapCodec<$NoiseThresholdProvider>;
        constructor(arg0: number, arg1: $NormalNoise$NoiseParameters_, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $List_<$BlockState_>, arg7: $List_<$BlockState_>);
    }
    export class $SimpleStateProvider extends $BlockStateProvider {
        static CODEC: $MapCodec<$SimpleStateProvider>;
    }
}
