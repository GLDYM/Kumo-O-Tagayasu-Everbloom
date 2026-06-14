import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Climate$Sampler_, $Biome, $Biome_, $BiomeSource } from "@package/net/minecraft/world/level/biome";
import { $Set } from "@package/java/util";

declare module "@package/com/teamabnormals/blueprint/core/util" {
    export class $BiomeUtil$ModdedBiomeProvider {
        static CODEC: $Codec<$BiomeUtil$ModdedBiomeProvider>;
    }
    export interface $BiomeUtil$ModdedBiomeProvider {
        getAdditionalPossibleBiomes(arg0: $Registry<$Biome_>): $Set<$Holder<$Biome>>;
        codec(): $MapCodec<$BiomeUtil$ModdedBiomeProvider>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $BiomeSource, arg5: $Registry<$Biome_>): $Holder<$Biome>;
    }
}
