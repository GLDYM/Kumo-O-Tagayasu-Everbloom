import { $Music } from "@package/net/minecraft/sounds";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderGetter } from "@package/net/minecraft/core";
import { $AccessorOverworldBiomes } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $MobSpawnSettings$Builder, $BiomeGenerationSettings$Builder, $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ConfiguredWorldCarver_ } from "@package/net/minecraft/world/level/levelgen/carver";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/net/minecraft/data/worldgen/biome" {
    export class $EndBiomes {
        static smallEndIslands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endMidlands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endHighlands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static theEnd(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endBarrens(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        constructor();
    }
    export class $NetherBiomes {
        static soulSandValley(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static netherWastes(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static crimsonForest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static warpedForest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static basaltDeltas(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        constructor();
    }
    export class $OverworldBiomes implements $AccessorOverworldBiomes {
        static plains(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean, arg4: boolean): $Biome;
        static biome(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MobSpawnSettings$Builder, arg8: $BiomeGenerationSettings$Builder, arg9: $Music): $Biome;
        static biome(arg0: boolean, arg1: number, arg2: number, arg3: $MobSpawnSettings$Builder, arg4: $BiomeGenerationSettings$Builder, arg5: $Music): $Biome;
        static ocean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static grove(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static forest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean, arg4: boolean): $Biome;
        static beach(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean): $Biome;
        static badlands(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static river(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static jungle(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static desert(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static savanna(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean, arg3: boolean): $Biome;
        static swamp(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static taiga(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static mangroveSwamp(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static dripstoneCaves(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static oldGrowthTaiga(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static jaggedPeaks(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static windsweptHills(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static snowySlopes(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static frozenOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static sparseJungle(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static frozenPeaks(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static bambooJungle(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static lukeWarmOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static mushroomFields(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static calculateSkyColor(arg0: number): number;
        static biome$quark_$md$70d283$0(arg0: boolean, arg1: number, arg2: number, arg3: $MobSpawnSettings$Builder, arg4: $BiomeGenerationSettings$Builder, arg5: $Music): $Biome;
        static darkForest(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static stonyPeaks(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static warmOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static coldOcean(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static lushCaves(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static deepDark(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static globalOverworldGeneration(arg0: $BiomeGenerationSettings$Builder): void;
        static meadowOrCherryGrove(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>, arg2: boolean): $Biome;
        static theVoid(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static globalOverworldGeneration$quark_$md$70d283$1(arg0: $BiomeGenerationSettings$Builder): void;
        static SWAMP_SKELETON_WEIGHT: number;
        static NORMAL_MUSIC: $Music;
        constructor();
    }
    export class $BiomeData {
        static bootstrap(arg0: $BootstrapContext<$Biome_>): void;
        constructor();
    }
}
