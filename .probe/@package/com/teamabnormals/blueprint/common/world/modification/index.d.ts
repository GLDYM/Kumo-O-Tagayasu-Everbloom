import { $BiomeUtil$ModdedBiomeProvider } from "@package/com/teamabnormals/blueprint/core/util";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $HashSet } from "@package/java/util";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
export * as structure from "@package/com/teamabnormals/blueprint/common/world/modification/structure";

declare module "@package/com/teamabnormals/blueprint/common/world/modification" {
    export interface $ModdedBiomeSlice extends RegistryMarked<RegistryTypes.BlueprintModdedBiomeSlicesTag, RegistryTypes.BlueprintModdedBiomeSlices> {}
    export class $ModdedBiomeSlice extends $Record {
        provider(): $BiomeUtil$ModdedBiomeProvider;
        levels(): $HashSet<$ResourceKey<$LevelStem>>;
        weight(): number;
        static CODEC: $Codec<$ModdedBiomeSlice>;
        constructor(arg0: number, arg1: $BiomeUtil$ModdedBiomeProvider, ...arg2: $ResourceKey_<$LevelStem>[]);
        constructor(levels: $HashSet<$ResourceKey_<$LevelStem>>, weight: number, provider: $BiomeUtil$ModdedBiomeProvider);
    }
    /**
     * Values that may be interpreted as {@link $ModdedBiomeSlice}.
     */
    export type $ModdedBiomeSlice_ = RegistryTypes.BlueprintModdedBiomeSlices | { levels?: $HashSet<$ResourceKey_<$LevelStem>>, provider?: $BiomeUtil$ModdedBiomeProvider, weight?: number,  } | [levels?: $HashSet<$ResourceKey_<$LevelStem>>, provider?: $BiomeUtil$ModdedBiomeProvider, weight?: number, ];
}
