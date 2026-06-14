import { $BlockGetter, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $StairsShape } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/fi/dy/masa/litematica/mixin/block" {
    export class $IMixinVineBlock {
    }
    export interface $IMixinVineBlock {
        litematica_invokeShouldConnectUp(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinVineBlock}.
     */
    export type $IMixinVineBlock_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction) => boolean);
    export class $IMixinWallMountedBlock {
    }
    export interface $IMixinWallMountedBlock {
        litematica_invokeCanPlaceAt(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinWallMountedBlock}.
     */
    export type $IMixinWallMountedBlock_ = ((arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos) => boolean);
    export class $IMixinStairsBlock {
        static litematica_invokeGetStairShape(state: $BlockState_, worldIn: $BlockGetter, pos: $BlockPos_): $StairsShape;
    }
    export interface $IMixinStairsBlock {
    }
    export class $IMixinFenceGateBlock {
    }
    export interface $IMixinFenceGateBlock {
        litematica_invokeIsWall(arg0: $BlockState_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinFenceGateBlock}.
     */
    export type $IMixinFenceGateBlock_ = ((arg0: $BlockState) => boolean);
    export class $IMixinRedstoneWireBlock {
    }
    export interface $IMixinRedstoneWireBlock {
        litematica_getPlacementState(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $IMixinRedstoneWireBlock}.
     */
    export type $IMixinRedstoneWireBlock_ = ((arg0: $BlockGetter, arg1: $BlockState, arg2: $BlockPos) => $BlockState_);
}
