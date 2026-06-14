import { $Level } from "@package/net/minecraft/world/level";
import { $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region" {
    export class $Region extends $Record {
        name(): ($ResourceKey<$Region>) | undefined;
        static create(key: $ResourceKey_<$Region>, level: $ResourceKey_<$Level>, biomes: $HolderSet_<$Biome>, weight: number): $Region;
        static create(level: $ResourceKey_<$LevelStem>, weight: number, biomes: $HolderSet_<$Biome>): $Region;
        dimension(): $ResourceKey<$LevelStem>;
        weight(): number;
        biomes(): $HolderSet<$Biome>;
        static CODEC: $Codec<$Region>;
        static KEY_CODEC: $Codec<$ResourceKey<$Region>>;
        constructor(name: ($ResourceKey_<$Region>) | undefined, dimension: $ResourceKey_<$LevelStem>, biomes: $HolderSet_<$Biome>, weight: number);
    }
    /**
     * Values that may be interpreted as {@link $Region}.
     */
    export type $Region_ = RegistryTypes.LithostitchedRegion | { dimension?: $ResourceKey_<$LevelStem>, weight?: number, biomes?: $HolderSet_<$Biome>, name?: ($ResourceKey_<$Region>) | undefined,  } | [dimension?: $ResourceKey_<$LevelStem>, weight?: number, biomes?: $HolderSet_<$Biome>, name?: ($ResourceKey_<$Region>) | undefined, ];
    export interface $Region extends RegistryMarked<RegistryTypes.LithostitchedRegionTag, RegistryTypes.LithostitchedRegion> {}
}
