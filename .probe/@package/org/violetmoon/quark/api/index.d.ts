import { $BlockPos, $BlockPos_, $Vec3i, $Direction_ } from "@package/net/minecraft/core";
import { $Collection } from "@package/java/util";
export * as event from "@package/org/violetmoon/quark/api/event";

declare module "@package/org/violetmoon/quark/api" {
    export class $IMagnetTracker {
    }
    export interface $IMagnetTracker {
        clear(): void;
        applyForce(arg0: $BlockPos_, arg1: number, arg2: boolean, arg3: $Direction_, arg4: number, arg5: $BlockPos_): void;
        getTrackedPositions(): $Collection<$BlockPos>;
        getNetForce(arg0: $BlockPos_): $Vec3i;
        actOnForces(arg0: $BlockPos_): void;
        get trackedPositions(): $Collection<$BlockPos>;
    }
}
