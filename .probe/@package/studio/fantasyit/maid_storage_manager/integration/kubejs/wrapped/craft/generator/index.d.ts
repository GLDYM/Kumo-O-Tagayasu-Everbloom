import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $ConfigTypes$ConfigType } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/config";
import { $InventoryItem } from "@package/studio/fantasyit/maid_storage_manager/data";
import { $EntityMaid, $MaidPathFindingBFS } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List_, $Map_ } from "@package/java/util";
import { $GeneratorConfigOperator, $CacheOperator, $GraphOperator } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/helper";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/generator" {
    export class $IKJSAutoCraftGuideGenerator$Full {
    }
    export interface $IKJSAutoCraftGuideGenerator$Full extends $IKJSAutoCraftGuideGenerator {
        configurations(arg0: $GeneratorConfigOperator): $ConfigTypes$ConfigType<never>[];
        allowMultiPosition(): boolean;
        canCacheGraph(): boolean;
        positionalAvailable(arg0: $Supplier_<boolean>, arg1: $ServerLevel, arg2: $EntityMaid, arg3: $BlockPos_, arg4: $MaidPathFindingBFS): boolean;
    }
    export class $IKJSAutoCraftGuideGenerator {
    }
    export interface $IKJSAutoCraftGuideGenerator {
        type(): $ResourceLocation;
        generate(arg0: $List_<$InventoryItem>, arg1: $Level_, arg2: $BlockPos_, arg3: $GraphOperator, arg4: $Map_<$ResourceLocation_, $List_<$BlockPos_>>): void;
        configName(): $Component;
        isBlockValid(arg0: $Level_, arg1: $BlockPos_): boolean;
        onCache(arg0: $RecipeManager, arg1: $CacheOperator): void;
    }
}
