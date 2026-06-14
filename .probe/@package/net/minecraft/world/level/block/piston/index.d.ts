import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $AccessorPistonMovingBlockEntity } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IExtendedPistonTile } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $IMixinPistonBlock } from "@package/fi/dy/masa/tweakeroo/mixin/block";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBlockHolder } from "@package/net/mehvahdjukaar/moonlight/api/block";
import { $BaseEntityBlock, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $AccessorPistonStructureResolver } from "@package/org/violetmoon/zeta/mixin/mixins";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock implements $IMixinPistonBlock {
        static isPushable(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: boolean, arg5: $Direction_): boolean;
        handler$gnj000$ftbchunks$onMoveBlocks(level: $Level_, blockPos: $BlockPos_, direction: $Direction_, extending: boolean, cir: $CallbackInfoReturnable<any>, pistonStructureResolver: $PistonStructureResolver): void;
        codec(): $MapCodec<$PistonBaseBlock>;
        getSticky(): boolean;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static TRIGGER_EXTEND: number;
        descriptionId: string;
        static PLATFORM_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static TRIGGER_CONTRACT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TRIGGER_DROP: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: boolean, arg1: $BlockBehaviour$Properties);
        get sticky(): boolean;
    }
    export class $PistonMath {
        static getMovementArea(arg0: $AABB_, arg1: $Direction_, arg2: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        static newMovingBlockEntity(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: $Direction_, arg4: boolean, arg5: boolean): $BlockEntity;
        codec(): $MapCodec<$MovingPistonBlock>;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$MovingPistonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        descriptionId: string;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static PLATFORM: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        descriptionId: string;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static TYPE: $EnumProperty<$PistonType>;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SHORT: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver implements $AccessorPistonStructureResolver {
        resolve(): boolean;
        getToPush(): $List<$BlockPos>;
        getPushDirection(): $Direction;
        getToDestroy(): $List<$BlockPos>;
        zeta$pistonDirection(): $Direction;
        zeta$startPos(): $BlockPos;
        zeta$pistonPos(): $BlockPos;
        zeta$extending(): boolean;
        zeta$level(): $Level;
        static MAX_PUSH_DEPTH: number;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean);
        get toPush(): $List<$BlockPos>;
        get pushDirection(): $Direction;
        get toDestroy(): $List<$BlockPos>;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity implements $IExtendedPistonTile, $IBlockHolder, $AccessorPistonMovingBlockEntity {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PistonMovingBlockEntity): void;
        getProgress(arg0: number): number;
        getDirection(): $Direction;
        getMovementDirection(): $Direction;
        static moveCollidedEntities(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $PistonMovingBlockEntity): void;
        handler$gpm000$moonlight$onFinishedShortPulse(arg0: $CallbackInfo): void;
        getHeldBlock(): $BlockState;
        isSourcePiston(): boolean;
        tickMovedBlock(arg0: $Level_, arg1: $BlockPos_): void;
        static moveStuckEntities(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $PistonMovingBlockEntity): void;
        getXOff(arg0: number): number;
        getYOff(arg0: number): number;
        getZOff(arg0: number): number;
        isExtending(): boolean;
        getLastTicked(): number;
        getMovedState(): $BlockState;
        setHeldBlock(arg0: $BlockState_): boolean;
        getCollisionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        static getMoveEntityByPiston$quark_$md$70d283$0(arg0: $Direction_, arg1: $Entity, arg2: number, arg3: $Direction_): void;
        finalTick(): void;
        progressO: number;
        static TICK_MOVEMENT: number;
        lastTicked: number;
        level: $Level;
        progress: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        deathTicks: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: $Direction_, arg4: boolean, arg5: boolean);
        get direction(): $Direction;
        get movementDirection(): $Direction;
        get sourcePiston(): boolean;
        get extending(): boolean;
        get movedState(): $BlockState;
    }
}
