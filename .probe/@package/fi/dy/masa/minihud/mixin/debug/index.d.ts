import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";

declare module "@package/fi/dy/masa/minihud/mixin/debug" {
    export class $IMixinEntityNavigation {
    }
    export interface $IMixinEntityNavigation {
        minihud_getMaxDistanceToWaypoint(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinEntityNavigation}.
     */
    export type $IMixinEntityNavigation_ = (() => number);
    export class $IMixinDebugRenderer {
    }
    export interface $IMixinDebugRenderer {
        minihud_getShowChunkBorder(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinDebugRenderer}.
     */
    export type $IMixinDebugRenderer_ = (() => boolean);
    export class $IMixinMobEntity {
    }
    export interface $IMixinMobEntity {
        minihud_getGoalSelector(): $GoalSelector;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMobEntity}.
     */
    export type $IMixinMobEntity_ = (() => $GoalSelector);
}
