import { $Band } from "@package/dev/worldgen/lithostitched/api/worldgen/bandlands";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $List_, $List } from "@package/java/util";
import { $SurfaceSystem } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/impl/worldgen/bandlands" {
    export class $Bandlands {
        base(): $BlockState;
        getBand(system: $SurfaceSystem, x: number, y: number, z: number): $BlockState;
        fillBands(random: $RandomSource): void;
        bands(): $List<$Band>;
        static CODEC: $Codec<$Bandlands>;
        constructor(base: $BlockState_, bands: $List_<$Band>);
    }
    /**
     * Values that may be interpreted as {@link $Bandlands}.
     */
    export type $Bandlands_ = RegistryTypes.LithostitchedBandlands;
    export interface $Bandlands extends RegistryMarked<RegistryTypes.LithostitchedBandlandsTag, RegistryTypes.LithostitchedBandlands> {}
}
