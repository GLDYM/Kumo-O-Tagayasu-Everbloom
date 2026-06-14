import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setLoaded(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        getSortType(): $WaypointsSort;
        isSortReversed(): boolean;
        isTeleportationEnabled(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        isUsingDefaultTeleportCommand(): boolean;
        getServerTeleportCommandFormat(): string;
        setUsingMultiworldDetection(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        resetSubWorldConnections(arg0: boolean): void;
        setTeleportationEnabled(arg0: boolean): void;
        isUsingMultiworldDetection(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        isIgnoreServerLevelId(): boolean;
        getDefaultMultiworldId(): string;
        setDefaultMultiworldId(arg0: string): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getServerTeleportCommandRotationFormat(): string;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        setSortType(arg0: $WaypointsSort_): void;
        toggleSortType(): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
