import { $CollisionGetter, $PathNavigationRegion, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Set, $Set_, $List_ } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $BinaryHeap {
        remove(arg0: $Node): void;
        size(): number;
        insert(arg0: $Node): $Node;
        clear(): void;
        isEmpty(): boolean;
        peek(): $Node;
        pop(): $Node;
        changeCost(arg0: $Node, arg1: number): void;
        getHeap(): $Node[];
        constructor();
        get empty(): boolean;
        get heap(): $Node[];
    }
    export class $Path$DebugData extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $Path$DebugData;
        targetNodes(): $Set<$Target>;
        openSet(): $Node[];
        closedSet(): $Node[];
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    /**
     * Values that may be interpreted as {@link $Path$DebugData}.
     */
    export type $Path$DebugData_ = { targetNodes?: $Set_<$Target>, closedSet?: $Node[], openSet?: $Node[],  } | [targetNodes?: $Set_<$Target>, closedSet?: $Node[], openSet?: $Node[], ];
    export class $AmphibiousNodeEvaluator extends $WalkNodeEvaluator {
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor(arg0: boolean);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        static createFromStream(arg0: $FriendlyByteBuf): $Target;
        getBestNode(): $Node;
        updateBest(arg0: number, arg1: $Node): void;
        setReached(): void;
        isReached(): boolean;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(arg0: $Node);
        constructor(arg0: number, arg1: number, arg2: number);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        invalidate(arg0: $BlockPos_): void;
        getOrCompute(arg0: $BlockGetter, arg1: $BlockPos_): $PathType;
        constructor();
    }
    export class $PathfindingContext {
        level(): $CollisionGetter;
        getBlockState(arg0: $BlockPos_): $BlockState;
        mobPosition(): $BlockPos;
        getPathTypeFromState(arg0: number, arg1: number, arg2: number): $PathType;
        constructor(arg0: $CollisionGetter, arg1: $Mob);
    }
    export class $PathFinder {
        findPath(arg0: $ProfilerFiller, arg1: $Node, arg2: $Map_<$Target, $BlockPos_>, arg3: number, arg4: number, arg5: number): $Path;
        findPath(arg0: $PathNavigationRegion, arg1: $Mob, arg2: $Set_<$BlockPos_>, arg3: number, arg4: number, arg5: number): $Path;
        getBestH(arg0: $Node, arg1: $Set_<$Target>): number;
        openSet: $BinaryHeap;
        constructor(arg0: $NodeEvaluator, arg1: number);
    }
    export class $NodeEvaluator {
        done(): void;
        prepare(arg0: $PathNavigationRegion, arg1: $Mob): void;
        getTarget(arg0: number, arg1: number, arg2: number): $Target;
        canFloat(): boolean;
        getStart(): $Node;
        static isBurningBlock(arg0: $BlockState_): boolean;
        setCanWalkOverFences(arg0: boolean): void;
        setCanOpenDoors(arg0: boolean): void;
        setCanPassDoors(arg0: boolean): void;
        setCanFloat(arg0: boolean): void;
        canOpenDoors(): boolean;
        canPassDoors(): boolean;
        getPathType(arg0: $Mob, arg1: $BlockPos_): $PathType;
        getPathType(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number): $PathType;
        getNeighbors(arg0: $Node[], arg1: $Node): number;
        canWalkOverFences(): boolean;
        getPathTypeOfMob(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: $Mob): $PathType;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        getMalus(): number;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $SwimNodeEvaluator extends $NodeEvaluator {
        constructor(arg0: boolean);
    }
    export class $Node {
        inOpenSet(): boolean;
        distanceTo(arg0: $Node): number;
        distanceTo(arg0: $BlockPos_): number;
        distanceToSqr(arg0: $Node): number;
        distanceToSqr(arg0: $BlockPos_): number;
        cloneAndMove(arg0: number, arg1: number, arg2: number): $Node;
        writeToStream(arg0: $FriendlyByteBuf): void;
        static createFromStream(arg0: $FriendlyByteBuf): $Node;
        asBlockPos(): $BlockPos;
        asVec3(): $Vec3;
        static createHash(arg0: number, arg1: number, arg2: number): number;
        distanceToXZ(arg0: $Node): number;
        distanceManhattan(arg0: $BlockPos_): number;
        distanceManhattan(arg0: $Node): number;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $FlyNodeEvaluator extends $WalkNodeEvaluator {
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor();
    }
    export class $WalkNodeEvaluator extends $NodeEvaluator {
        static getFloorLevel(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static getPathTypeStatic(arg0: $PathfindingContext, arg1: $BlockPos$MutableBlockPos): $PathType;
        static getPathTypeStatic(arg0: $Mob, arg1: $BlockPos_): $PathType;
        static checkNeighbourBlocks(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number, arg4: $PathType_): $PathType;
        getPathTypeWithinMobBB(arg0: $PathfindingContext, arg1: number, arg2: number, arg3: number): $Set<$PathType>;
        static SPACE_BETWEEN_WALL_POSTS: number;
        constructor();
    }
    export class $Path {
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        advance(): void;
        replaceNode(arg0: number, arg1: $Node): void;
        getNode(arg0: number): $Node;
        setDebug(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>): void;
        getNextNode(): $Node;
        getNodeCount(): number;
        getNextEntityPos(arg0: $Entity): $Vec3;
        getNextNodePos(): $BlockPos;
        truncateNodes(arg0: number): void;
        getNextNodeIndex(): number;
        writeToStream(arg0: $FriendlyByteBuf): void;
        static createFromStream(arg0: $FriendlyByteBuf): $Path;
        canReach(): boolean;
        getNodePos(arg0: number): $BlockPos;
        getEndNode(): $Node;
        sameAs(arg0: $Path): boolean;
        debugData(): $Path$DebugData;
        getEntityPosAtNode(arg0: $Entity, arg1: number): $Vec3;
        getPreviousNode(): $Node;
        setNextNodeIndex(arg0: number): void;
        getDistToTarget(): number;
        notStarted(): boolean;
        nodes: $List<$Node>;
        constructor(arg0: $List_<$Node>, arg1: $BlockPos_, arg2: boolean);
        get done(): boolean;
        get target(): $BlockPos;
        get nextNode(): $Node;
        get nodeCount(): number;
        get nextNodePos(): $BlockPos;
        get endNode(): $Node;
        get previousNode(): $Node;
        get distToTarget(): number;
    }
}
