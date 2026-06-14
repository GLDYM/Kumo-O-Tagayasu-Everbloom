import { $Holder_, $HolderSet_, $Holder, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WeightedEntry, $Weight } from "@package/net/minecraft/util/random";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/teamabnormals/atmospheric/common/entity" {
    export interface $CamelVariant extends RegistryMarked<RegistryTypes.AtmosphericCamelVariantTag, RegistryTypes.AtmosphericCamelVariant> {}
    export class $CamelVariant extends $Record {
        assetId(): $ResourceLocation;
        static getSpawnVariant(arg0: $RegistryAccess, arg1: $Holder_<$Biome>): $Holder<$CamelVariant>;
        biomes(): $HolderSet<$Biome>;
        static CODEC: $Codec<$Holder<$CamelVariant>>;
        static DIRECT_CODEC: $Codec<$CamelVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CamelVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$CamelVariant>>;
        constructor(assetId: $ResourceLocation_, biomes: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $CamelVariant}.
     */
    export type $CamelVariant_ = RegistryTypes.AtmosphericCamelVariant | { biomes?: $HolderSet_<$Biome>, assetId?: $ResourceLocation_,  } | [biomes?: $HolderSet_<$Biome>, assetId?: $ResourceLocation_, ];
    export class $TetraVariant extends $Record implements $WeightedEntry {
        description(): $Component;
        weight(): number;
        assetId(): $ResourceLocation;
        getWeight(): $Weight;
        static getSpawnVariant(arg0: $RegistryAccess, arg1: $RandomSource): $Holder<$TetraVariant>;
        static CODEC: $Codec<$Holder<$TetraVariant>>;
        static DIRECT_CODEC: $Codec<$TetraVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TetraVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TetraVariant>>;
        constructor(assetId: $ResourceLocation_, description: $Component_, weight: number);
    }
    /**
     * Values that may be interpreted as {@link $TetraVariant}.
     */
    export type $TetraVariant_ = RegistryTypes.AtmosphericTetraVariant | { description?: $Component_, weight?: number, assetId?: $ResourceLocation_,  } | [description?: $Component_, weight?: number, assetId?: $ResourceLocation_, ];
    export interface $TetraVariant extends RegistryMarked<RegistryTypes.AtmosphericTetraVariantTag, RegistryTypes.AtmosphericTetraVariant> {}
}
