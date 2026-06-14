import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ICachableGeneratorGraph } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $ConfigTypes$ConfigType } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/config";
import { $InventoryItem } from "@package/studio/fantasyit/maid_storage_manager/data";
import { $EntityMaid, $MaidPathFindingBFS } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_, $Map_ } from "@package/java/util";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/generator/type/base" {
    export class $IAutoCraftGuideGenerator {
    }
    export interface $IAutoCraftGuideGenerator {
        init(): void;
        getType(): $ResourceLocation;
        generate(arg0: $List_<$InventoryItem>, arg1: $Level_, arg2: $BlockPos_, arg3: $ICachableGeneratorGraph, arg4: $Map_<$ResourceLocation_, $List_<$BlockPos_>>): void;
        getConfigurations(): $List<$ConfigTypes$ConfigType<never>>;
        getConfigName(): $Component;
        isBlockValid(arg0: $Level_, arg1: $BlockPos_): boolean;
        allowMultiPosition(): boolean;
        canCacheGraph(): boolean;
        onCache(arg0: $RecipeManager): void;
        positionalAvailable(arg0: $ServerLevel, arg1: $EntityMaid, arg2: $BlockPos_, arg3: $MaidPathFindingBFS): boolean;
        get type(): $ResourceLocation;
        get configurations(): $List<$ConfigTypes$ConfigType<never>>;
        get configName(): $Component;
    }
}
