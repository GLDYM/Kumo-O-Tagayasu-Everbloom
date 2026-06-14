import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JumpControlAccessor } from "@package/com/github/yimeng261/maidspell/mixin/accessor";

declare module "@package/net/minecraft/world/entity/ai/control" {
    export class $Control {
    }
    export interface $Control {
    }
    export class $JumpControl implements $Control, $JumpControlAccessor {
        jump(): void;
        tick(): void;
        maidspell$setJump(arg0: boolean): void;
        constructor(arg0: $Mob);
    }
    export class $MoveControl$Operation extends $Enum<$MoveControl$Operation> {
    }
    /**
     * Values that may be interpreted as {@link $MoveControl$Operation}.
     */
    export type $MoveControl$Operation_ = "wait" | "move_to" | "strafe" | "jumping";
    export class $LookControl implements $Control {
        tick(): void;
        setLookAt(arg0: $Vec3_): void;
        setLookAt(arg0: $Entity): void;
        setLookAt(arg0: number, arg1: number, arg2: number): void;
        setLookAt(arg0: $Entity, arg1: number, arg2: number): void;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isLookingAtTarget(): boolean;
        getWantedX(): number;
        getWantedY(): number;
        getWantedZ(): number;
        constructor(arg0: $Mob);
        get lookingAtTarget(): boolean;
        get wantedX(): number;
        get wantedY(): number;
        get wantedZ(): number;
    }
    export class $SmoothSwimmingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $FlyingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: number, arg2: boolean);
    }
    export class $BodyRotationControl implements $Control {
        clientTick(): void;
        rotateHeadTowardsFront(): void;
        rotateBodyIfNecessary(): void;
        rotateHeadIfNecessary(): void;
        mob: $Mob;
        constructor(arg0: $Mob);
    }
    export class $MoveControl implements $Control {
        tick(): void;
        getSpeedModifier(): number;
        setWantedPosition(arg0: number, arg1: number, arg2: number, arg3: number): void;
        strafe(arg0: number, arg1: number): void;
        hasWanted(): boolean;
        getWantedX(): number;
        getWantedY(): number;
        getWantedZ(): number;
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(arg0: $Mob);
        get speedModifier(): number;
        get wantedX(): number;
        get wantedY(): number;
        get wantedZ(): number;
    }
    export class $SmoothSwimmingLookControl extends $LookControl {
        constructor(arg0: $Mob, arg1: number);
    }
}
