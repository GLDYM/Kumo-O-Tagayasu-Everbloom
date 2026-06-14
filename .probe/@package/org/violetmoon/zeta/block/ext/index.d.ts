import { $BlockAndTintGetter, $BlockGetter, $LevelReader } from "@package/net/minecraft/world/level";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Block_, $Block, $SoundType } from "@package/net/minecraft/world/level/block";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";

declare module "@package/org/violetmoon/zeta/block/ext" {
    export class $BlockExtensionFactory {
        static DEFAULT: $BlockExtensionFactory;
    }
    export interface $BlockExtensionFactory {
        get(arg0: $BlockState_): $IZetaBlockExtensions;
        get(arg0: $Block_): $IZetaBlockExtensions;
        getInternal(arg0: $Block_): $IZetaBlockExtensions;
    }
    /**
     * Values that may be interpreted as {@link $BlockExtensionFactory}.
     */
    export type $BlockExtensionFactory_ = ((arg0: $Block) => $IZetaBlockExtensions);
    export class $IZetaBlockExtensions {
        static DEFAULT: $IZetaBlockExtensions;
    }
    export interface $IZetaBlockExtensions {
        collisionExtendsVerticallyZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        getBeaconColorMultiplierZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        shouldDisplayFluidOverlayZeta(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getEnchantPowerBonusZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getToolModifiedStateZeta(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        getFlammabilityZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getLightEmissionZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getFireSpreadSpeedZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        canSustainPlantZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        isStickyBlockZeta(arg0: $BlockState_): boolean;
        isConduitFrameZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        canStickToZeta(arg0: $BlockState_, arg1: $BlockState_): boolean;
        isLadderZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        isFlammableZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        isScaffoldingZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        getSoundTypeZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        makesOpenTrapdoorAboveClimbableZeta(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
    }
}
