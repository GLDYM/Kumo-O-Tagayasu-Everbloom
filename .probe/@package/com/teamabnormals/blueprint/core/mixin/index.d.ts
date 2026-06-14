import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $SurfaceRules$RuleSource, $SurfaceRules$RuleSource_ } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/teamabnormals/blueprint/core/mixin" {
    export class $NoiseGeneratorSettingsMixin {
    }
    export interface $NoiseGeneratorSettingsMixin {
        setSurfaceRule(arg0: $SurfaceRules$RuleSource_): void;
        set surfaceRule(value: $SurfaceRules$RuleSource_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettingsMixin}.
     */
    export type $NoiseGeneratorSettingsMixin_ = ((arg0: $SurfaceRules$RuleSource) => void);
    export class $FluidInvokerMixin {
    }
    export interface $FluidInvokerMixin {
        callAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
    }
    /**
     * Values that may be interpreted as {@link $FluidInvokerMixin}.
     */
    export type $FluidInvokerMixin_ = ((arg0: $Level, arg1: $BlockPos, arg2: $FluidState, arg3: $RandomSource) => void);
}
