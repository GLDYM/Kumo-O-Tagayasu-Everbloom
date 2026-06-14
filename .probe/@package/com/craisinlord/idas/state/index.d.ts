import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $ConcurrentHashMap } from "@package/java/util/concurrent";

declare module "@package/com/craisinlord/idas/state" {
    export class $IStateCacheProvider {
    }
    export interface $IStateCacheProvider {
        getStateCache(): $stateCache;
        get stateCache(): $stateCache;
    }
    /**
     * Values that may be interpreted as {@link $IStateCacheProvider}.
     */
    export type $IStateCacheProvider_ = (() => $stateCache);
    export class $stateCache {
        isCleared(pos: $BlockPos_): boolean;
        setCleared(pos: $BlockPos_, isCleared: boolean): void;
        stateRegionMap: $ConcurrentHashMap<string, $stateRegion>;
        constructor(dimensionPath: $Path_);
    }
    export class $stateRegion {
        reset(): void;
        isCleared(pos: $BlockPos_): boolean;
        setCleared(pos: $BlockPos_, isCleared: boolean): void;
        constructor(basePath: $Path_, regionKey: string);
    }
}
