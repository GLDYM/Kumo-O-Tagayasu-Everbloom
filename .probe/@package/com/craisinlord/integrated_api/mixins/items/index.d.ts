import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $MapId } from "@package/net/minecraft/world/level/saveddata/maps";

declare module "@package/com/craisinlord/integrated_api/mixins/items" {
    export class $MapItemAccessor {
        static callCreateNewSavedData(level: $Level_, x: number, z: number, scale: number, trackingPosition: boolean, unlimitedTracking: boolean, dimension: $ResourceKey_<$Level>): $MapId;
    }
    export interface $MapItemAccessor {
    }
}
