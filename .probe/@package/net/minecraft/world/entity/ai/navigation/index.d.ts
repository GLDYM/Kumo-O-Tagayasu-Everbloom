import { $INavigationMixin } from "@package/com/github/tartaricacid/touhoulittlemaid/api/mixin";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Path, $PathType_, $NodeEvaluator } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $IMixinEntityNavigation } from "@package/fi/dy/masa/minihud/mixin/debug";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanWalkOverFences(arg0: boolean): void;
        setCanOpenDoors(arg0: boolean): void;
        setCanPassDoors(arg0: boolean): void;
        canOpenDoors(): boolean;
        canPassDoors(): boolean;
        setAvoidSun(arg0: boolean): void;
        getSurfaceY(): number;
        constructor(arg0: $Mob, arg1: $Level_);
        set canWalkOverFences(value: boolean);
        set avoidSun(value: boolean);
        get surfaceY(): number;
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation implements $IMixinEntityNavigation, $INavigationMixin {
        stop(): void;
        isDone(): boolean;
        getPath(): $Path;
        tick(): void;
        canFloat(): boolean;
        moveTo(arg0: $Path, arg1: number): boolean;
        moveTo(arg0: $Entity, arg1: number): boolean;
        moveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        moveTo(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getMaxDistanceToWaypoint(): number;
        isStableDestination(arg0: $BlockPos_): boolean;
        recomputePath(): void;
        shouldRecomputePath(arg0: $BlockPos_): boolean;
        setCanFloat(arg0: boolean): void;
        setMaxVisitedNodesMultiplier(arg0: number): void;
        resetMaxVisitedNodesMultiplier(): void;
        shouldTargetNextNodeInDirection(arg0: $Vec3_): boolean;
        touhouLittleMaid$GetSpeedModifier(): number;
        isStuck(): boolean;
        getTargetPos(): $BlockPos;
        setSpeedModifier(arg0: number): void;
        canCutCorner(arg0: $PathType_): boolean;
        isInProgress(): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        createPath(arg0: $Entity, arg1: number): $Path;
        createPath(arg0: $BlockPos_, arg1: number, arg2: number): $Path;
        createPath(arg0: number, arg1: number, arg2: number, arg3: number): $Path;
        createPath(arg0: $BlockPos_, arg1: number): $Path;
        createPath(arg0: $Set_<$BlockPos_>, arg1: number): $Path;
        createPath(arg0: $Stream<$BlockPos_>, arg1: number): $Path;
        minihud_getMaxDistanceToWaypoint(): number;
        constructor(arg0: $Mob, arg1: $Level_);
        get done(): boolean;
        get path(): $Path;
        get maxDistanceToWaypoint(): number;
        set maxVisitedNodesMultiplier(value: number);
        get stuck(): boolean;
        get targetPos(): $BlockPos;
        set speedModifier(value: number);
        get inProgress(): boolean;
        get nodeEvaluator(): $NodeEvaluator;
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        allowBreaching: boolean;
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        setCanOpenDoors(arg0: boolean): void;
        setCanPassDoors(arg0: boolean): void;
        canOpenDoors(): boolean;
        canPassDoors(): boolean;
        constructor(arg0: $Mob, arg1: $Level_);
    }
}
