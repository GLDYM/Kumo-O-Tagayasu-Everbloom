import { $BlockPos_, $Direction_, $AxisCycle_, $Direction$Axis, $Direction$Axis_, $Direction } from "@package/net/minecraft/core";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $VoxelShapeAccess, $BitSetDVSAccess, $SubShapeAccess, $ArrayVSAccess, $SliceShapeAccess, $DiscreteVSAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $VoxelShapeAccessor as $VoxelShapeAccessor$1 } from "@package/com/copycatsplus/copycats/mixin/copycat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AbstractDoubleList, $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShapeAccessor } from "@package/team/creative/creativecore/mixin";
import { $Iterable_, $Object } from "@package/java/lang";
import { $List, $SequencedCollection, $BitSet } from "@package/java/util";
import { $Vec3_, $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $ArrayVoxelShape extends $VoxelShape implements $VoxelShapeAccess, $ArrayVSAccess {
        getXPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        setZPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
    }
    export class $BitSetDiscreteVoxelShape extends $DiscreteVoxelShape implements $DiscreteVSAccess, $BitSetDVSAccess {
        static withFilledBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $BitSetDiscreteVoxelShape;
        isInterior(arg0: number, arg1: number, arg2: number): boolean;
        getXMin(): number;
        getYMin(): number;
        getStorage(): $BitSet;
        getZMin(): number;
        getYMax(): number;
        getXMax(): number;
        getZMax(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $DiscreteVoxelShape);
        get XMin(): number;
        get YMin(): number;
        get storage(): $BitSet;
        get ZMin(): number;
        get YMax(): number;
        get XMax(): number;
        get ZMax(): number;
    }
    export class $SubShape extends $DiscreteVoxelShape implements $DiscreteVSAccess, $SubShapeAccess {
        getParent(): $DiscreteVoxelShape;
        getStartX(): number;
        getStartY(): number;
        getStartZ(): number;
        getEndX(): number;
        getEndY(): number;
        getEndZ(): number;
        get parent(): $DiscreteVoxelShape;
        get startX(): number;
        get startY(): number;
        get startZ(): number;
        get endX(): number;
        get endY(): number;
        get endZ(): number;
    }
    export class $EntityCollisionContext implements $CollisionContext {
        getEntity(): $Entity;
        isAbove(arg0: $VoxelShape, arg1: $BlockPos_, arg2: boolean): boolean;
        isHoldingItem(arg0: $Item_): boolean;
        canStandOnFluid(arg0: $FluidState, arg1: $FluidState): boolean;
        isDescending(): boolean;
        get entity(): $Entity;
        get descending(): boolean;
    }
    export class $Shapes {
        static join(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $BooleanOp_): $VoxelShape;
        static empty(): $VoxelShape;
        static create(arg0: $AABB_): $VoxelShape;
        static create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $VoxelShape;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $VoxelShape;
        static collide(arg0: $Direction$Axis_, arg1: $AABB_, arg2: $Iterable_<$VoxelShape>, arg3: number): number;
        static block(): $VoxelShape;
        static or(arg0: $VoxelShape, arg1: $VoxelShape): $VoxelShape;
        static or(arg0: $VoxelShape, ...arg1: $VoxelShape[]): $VoxelShape;
        static joinUnoptimized(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $BooleanOp_): $VoxelShape;
        static getFaceShape(arg0: $VoxelShape, arg1: $Direction_): $VoxelShape;
        static faceShapeOccludes(arg0: $VoxelShape, arg1: $VoxelShape): boolean;
        static blockOccudes(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $Direction_): boolean;
        static mergedFaceOccludes(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $Direction_): boolean;
        static joinIsNotEmpty(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $BooleanOp_): boolean;
        static INFINITY: $VoxelShape;
        static BIG_EPSILON: number;
        static EPSILON: number;
        constructor();
    }
    export class $CollisionContext {
        static of(arg0: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        isAbove(arg0: $VoxelShape, arg1: $BlockPos_, arg2: boolean): boolean;
        isHoldingItem(arg0: $Item_): boolean;
        canStandOnFluid(arg0: $FluidState, arg1: $FluidState): boolean;
        isDescending(): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $VoxelShapeAccessor$1, $VoxelShapeAccessor, $VoxelShapeAccess {
        min(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        min(arg0: $Direction$Axis_): number;
        max(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        max(arg0: $Direction$Axis_): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(arg0: $Direction$Axis_, arg1: $AABB_, arg2: number): number;
        move(arg0: number, arg1: number, arg2: number): $VoxelShape;
        getCoords(arg0: $Direction$Axis_): $DoubleList;
        getFaceShape(arg0: $Direction_): $VoxelShape;
        forAllBoxes(arg0: $Shapes$DoubleLineConsumer_): void;
        singleEncompassing(): $VoxelShape;
        forAllEdges(arg0: $Shapes$DoubleLineConsumer_): void;
        clip(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_): $BlockHitResult;
        toAabbs(): $List<$AABB>;
        closestPointTo(arg0: $Vec3_): ($Vec3) | undefined;
        getShape(): $DiscreteVoxelShape;
        copycats$callGetCoords(arg0: $Direction$Axis_): $DoubleList;
        copycats$getShape(): $DiscreteVoxelShape;
        copycats$setShape(arg0: $DiscreteVoxelShape): void;
        setShape(arg0: $DiscreteVoxelShape): void;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
        get empty(): boolean;
    }
    export class $CubePointRange extends $AbstractDoubleList {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        pop(): number;
        reversed(): $SequencedCollection<number>;
        constructor(arg0: number);
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $BooleanOp {
        static SAME: $BooleanOp;
        static OR: $BooleanOp;
        static TRUE: $BooleanOp;
        static NOT_AND: $BooleanOp;
        static ONLY_SECOND: $BooleanOp;
        static FIRST: $BooleanOp;
        static CAUSED_BY: $BooleanOp;
        static NOT_SAME: $BooleanOp;
        static NOT_OR: $BooleanOp;
        static AND: $BooleanOp;
        static FALSE: $BooleanOp;
        static SECOND: $BooleanOp;
        static CAUSES: $BooleanOp;
        static ONLY_FIRST: $BooleanOp;
        static NOT_FIRST: $BooleanOp;
        static NOT_SECOND: $BooleanOp;
    }
    export interface $BooleanOp {
        apply(arg0: boolean, arg1: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanOp}.
     */
    export type $BooleanOp_ = ((arg0: boolean, arg1: boolean) => boolean);
    export class $IndirectMerger implements $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        constructor(arg0: $DoubleList, arg1: $DoubleList, arg2: boolean, arg3: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(arg0: $Direction_, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $CubeVoxelShape extends $VoxelShape {
    }
    export class $NonOverlappingMerger extends $AbstractDoubleList implements $IndexMerger {
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        pop(): number;
        reversed(): $SequencedCollection<number>;
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape implements $DiscreteVSAccess {
        isEmpty(): boolean;
        fill(arg0: number, arg1: number, arg2: number): void;
        getSize(arg0: $Direction$Axis_): number;
        isFull(arg0: number, arg1: number, arg2: number): boolean;
        isFull(arg0: $AxisCycle_, arg1: number, arg2: number, arg3: number): boolean;
        forAllFaces(arg0: $DiscreteVoxelShape$IntFaceConsumer_): void;
        forAllBoxes(arg0: $DiscreteVoxelShape$IntLineConsumer_, arg1: boolean): void;
        forAllEdges(arg0: $DiscreteVoxelShape$IntLineConsumer_, arg1: boolean): void;
        isFullWide(arg0: number, arg1: number, arg2: number): boolean;
        isFullWide(arg0: $AxisCycle_, arg1: number, arg2: number, arg3: number): boolean;
        firstFull(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        firstFull(arg0: $Direction$Axis_): number;
        lastFull(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        lastFull(arg0: $Direction$Axis_): number;
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get empty(): boolean;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $OffsetDoubleList extends $AbstractDoubleList {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        pop(): number;
        reversed(): $SequencedCollection<number>;
        constructor(arg0: $DoubleList, arg1: number);
    }
    export class $IndexMerger$IndexConsumer {
    }
    export interface $IndexMerger$IndexConsumer {
        merge(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IndexMerger$IndexConsumer}.
     */
    export type $IndexMerger$IndexConsumer_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $IdenticalMerger implements $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        constructor(arg0: $DoubleList);
        get list(): $DoubleList;
    }
    export class $DiscreteCubeMerger implements $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $IndexMerger {
    }
    export interface $IndexMerger {
    }
    export class $SliceShape extends $VoxelShape implements $SliceShapeAccess, $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        constructor(arg0: $VoxelShape, arg1: $Direction$Axis_, arg2: number);
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
