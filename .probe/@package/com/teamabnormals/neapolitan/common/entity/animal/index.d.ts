import { $HolderSet_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/teamabnormals/neapolitan/common/entity/animal" {
    export class $ChimpanzeeVariant extends $Record {
        texture(): $ResourceLocation;
        biomes(): $HolderSet<$Biome>;
        textureFull(): $ResourceLocation;
        screamingTexture(): $ResourceLocation;
        screamingTextureFull(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$ChimpanzeeVariant>>;
        static DIRECT_CODEC: $Codec<$ChimpanzeeVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChimpanzeeVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$ChimpanzeeVariant>>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $HolderSet_<$Biome>);
        constructor(texture: $ResourceLocation_, textureFull: $ResourceLocation_, screamingTexture: $ResourceLocation_, screamingTextureFull: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $ChimpanzeeVariant}.
     */
    export type $ChimpanzeeVariant_ = RegistryTypes.NeapolitanChimpanzeeVariant | { screamingTextureFull?: $ResourceLocation_, textureFull?: $ResourceLocation_, screamingTexture?: $ResourceLocation_, biomes?: $HolderSet_<$Biome>, texture?: $ResourceLocation_,  } | [screamingTextureFull?: $ResourceLocation_, textureFull?: $ResourceLocation_, screamingTexture?: $ResourceLocation_, biomes?: $HolderSet_<$Biome>, texture?: $ResourceLocation_, ];
    export interface $ChimpanzeeVariant extends RegistryMarked<RegistryTypes.NeapolitanChimpanzeeVariantTag, RegistryTypes.NeapolitanChimpanzeeVariant> {}
}
