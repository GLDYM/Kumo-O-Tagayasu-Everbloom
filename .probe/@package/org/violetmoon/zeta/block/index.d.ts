import { $BlockAndTintGetter, $BlockGetter, $ItemLike_, $LevelReader } from "@package/net/minecraft/world/level";
import { $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $IDisableable } from "@package/org/violetmoon/zeta/module";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IZetaBlockExtensions } from "@package/org/violetmoon/zeta/block/ext";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $SoundType } from "@package/net/minecraft/world/level/block";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
export * as ext from "@package/org/violetmoon/zeta/block/ext";

declare module "@package/org/violetmoon/zeta/block" {
    export class $IZetaBlock {
    }
    export interface $IZetaBlock extends $IZetaBlockExtensions, $IDisableable<$IZetaBlock>, $IBlockExtension {
        getBlock(): $Block;
        isStickyBlock(arg0: $BlockState_): boolean;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        collisionExtendsVertically(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        canStickTo(arg0: $BlockState_, arg1: $BlockState_): boolean;
        isConduitFrame(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getEnchantPowerBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        getToolModifiedState(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        isScaffolding(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        setCreativeTab(arg0: $ResourceKey_<$CreativeModeTab>, arg1: $ItemLike_, arg2: boolean): $Block;
        setCreativeTab(arg0: $ResourceKey_<$CreativeModeTab>): $Block;
        makesOpenTrapdoorAboveClimbable(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getFlammabilityZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getFireSpreadSpeedZeta(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isLadder(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        get block(): $Block;
    }
}
