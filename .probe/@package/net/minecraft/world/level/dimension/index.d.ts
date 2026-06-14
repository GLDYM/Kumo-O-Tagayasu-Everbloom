import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Dynamic, $DataResult, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $OptionalLong } from "@package/java/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $Path_, $Path } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $DimensionTypeAccessor } from "@package/net/irisshaders/iris/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as end from "@package/net/minecraft/world/level/dimension/end";

declare module "@package/net/minecraft/world/level/dimension" {
    export class $BuiltinDimensionTypes {
        static OVERWORLD: $ResourceKey<$DimensionType>;
        static END_EFFECTS: $ResourceLocation;
        static NETHER: $ResourceKey<$DimensionType>;
        static NETHER_EFFECTS: $ResourceLocation;
        static END: $ResourceKey<$DimensionType>;
        static OVERWORLD_EFFECTS: $ResourceLocation;
        static OVERWORLD_CAVES: $ResourceKey<$DimensionType>;
        constructor();
    }
    export class $LevelStem extends $Record {
        type(): $Holder<$DimensionType>;
        generator(): $ChunkGenerator;
        static CODEC: $Codec<$LevelStem>;
        static OVERWORLD: $ResourceKey<$LevelStem>;
        static NETHER: $ResourceKey<$LevelStem>;
        static END: $ResourceKey<$LevelStem>;
        constructor(arg0: $Holder_<$DimensionType>, arg1: $ChunkGenerator);
    }
    /**
     * Values that may be interpreted as {@link $LevelStem}.
     */
    export type $LevelStem_ = { generator?: $ChunkGenerator, type?: $Holder_<$DimensionType>,  } | [generator?: $ChunkGenerator, type?: $Holder_<$DimensionType>, ];
    export interface $DimensionType extends RegistryMarked<RegistryTypes.DimensionTypeTag, RegistryTypes.DimensionType> {}
    export class $DimensionType extends $Record implements $DimensionTypeAccessor {
        timeOfDay(arg0: number): number;
        /**
         * @deprecated
         */
        static parseLegacy(arg0: $Dynamic<never>): $DataResult<$ResourceKey<$Level>>;
        natural(): boolean;
        height(): number;
        piglinSafe(): boolean;
        monsterSpawnBlockLightLimit(): number;
        fixedTime(): $OptionalLong;
        hasRaids(): boolean;
        monsterSpawnLightTest(): $IntProvider;
        bedWorks(): boolean;
        static getTeleportationScale(arg0: $DimensionType_, arg1: $DimensionType_): number;
        logicalHeight(): number;
        respawnAnchorWorks(): boolean;
        hasCeiling(): boolean;
        moonPhase(arg0: number): number;
        monsterSettings(): $DimensionType$MonsterSettings;
        static getStorageFolder(arg0: $ResourceKey_<$Level>, arg1: $Path_): $Path;
        effectsLocation(): $ResourceLocation;
        ultraWarm(): boolean;
        minY(): number;
        infiniburn(): $TagKey<$Block>;
        hasFixedTime(): boolean;
        coordinateScale(): number;
        hasSkyLight(): boolean;
        ambientLight(): number;
        getAmbientLight(): number;
        getFixedTime(): $OptionalLong;
        static MIN_Y: number;
        static CODEC: $Codec<$Holder<$DimensionType>>;
        static MIN_HEIGHT: number;
        static MAX_Y: number;
        static Y_SIZE: number;
        static WAY_ABOVE_MAX_Y: number;
        static WAY_BELOW_MIN_Y: number;
        static DIRECT_CODEC: $Codec<$DimensionType>;
        static BITS_FOR_Y: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DimensionType>>;
        static MOON_BRIGHTNESS_PER_PHASE: number[];
        constructor(arg0: $OptionalLong, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: number, arg11: $TagKey_<$Block>, arg12: $ResourceLocation_, arg13: number, arg14: $DimensionType$MonsterSettings_);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType}.
     */
    export type $DimensionType_ = RegistryTypes.DimensionType | { ultraWarm?: boolean, minY?: number, respawnAnchorWorks?: boolean, infiniburn?: $TagKey_<$Block>, coordinateScale?: number, fixedTime?: $OptionalLong, natural?: boolean, monsterSettings?: $DimensionType$MonsterSettings_, effectsLocation?: $ResourceLocation_, ambientLight?: number, hasSkyLight?: boolean, logicalHeight?: number, hasCeiling?: boolean, height?: number, bedWorks?: boolean,  } | [ultraWarm?: boolean, minY?: number, respawnAnchorWorks?: boolean, infiniburn?: $TagKey_<$Block>, coordinateScale?: number, fixedTime?: $OptionalLong, natural?: boolean, monsterSettings?: $DimensionType$MonsterSettings_, effectsLocation?: $ResourceLocation_, ambientLight?: number, hasSkyLight?: boolean, logicalHeight?: number, hasCeiling?: boolean, height?: number, bedWorks?: boolean, ];
    export class $DimensionType$MonsterSettings extends $Record {
        piglinSafe(): boolean;
        monsterSpawnBlockLightLimit(): number;
        hasRaids(): boolean;
        monsterSpawnLightTest(): $IntProvider;
        static CODEC: $MapCodec<$DimensionType$MonsterSettings>;
        constructor(arg0: boolean, arg1: boolean, arg2: $IntProvider_, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType$MonsterSettings}.
     */
    export type $DimensionType$MonsterSettings_ = { monsterSpawnLightTest?: $IntProvider_, hasRaids?: boolean, monsterSpawnBlockLightLimit?: number, piglinSafe?: boolean,  } | [monsterSpawnLightTest?: $IntProvider_, hasRaids?: boolean, monsterSpawnBlockLightLimit?: number, piglinSafe?: boolean, ];
    export class $DimensionDefaults {
        static OVERWORLD_MIN_Y: number;
        static OVERWORLD_LEVEL_HEIGHT: number;
        static OVERWORLD_GENERATION_HEIGHT: number;
        static NETHER_GENERATION_HEIGHT: number;
        static NETHER_LOGICAL_HEIGHT: number;
        static OVERWORLD_LOGICAL_HEIGHT: number;
        static NETHER_LEVEL_HEIGHT: number;
        static END_MIN_Y: number;
        static END_GENERATION_HEIGHT: number;
        static NETHER_MIN_Y: number;
        static END_LEVEL_HEIGHT: number;
        static END_LOGICAL_HEIGHT: number;
        constructor();
    }
}
