
declare module "@package/fi/dy/masa/minihud/util" {
    export class $IServerEntityManager {
    }
    export interface $IServerEntityManager {
        minihud$getIndexSize(): number;
        minihud$getUuidSize(): number;
    }
    export class $ConduitExtra {
    }
    export interface $ConduitExtra {
        minihud$setActivatingBlockCount(arg0: number): void;
        minihud$getStoredActivatingBlockCount(): number;
        minihud$getCurrentActivatingBlockCount(): number;
    }
}
