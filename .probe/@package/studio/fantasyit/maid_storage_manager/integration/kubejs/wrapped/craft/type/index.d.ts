import { $CraftLayer } from "@package/studio/fantasyit/maid_storage_manager/craft/work";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $CraftGuideStepData, $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractCraftActionContext } from "@package/studio/fantasyit/maid_storage_manager/craft/context";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $CraftGuideOperator } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/helper";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/type" {
    export class $IKJSCraftType {
    }
    export interface $IKJSCraftType {
        type(): $ResourceLocation;
        available(arg0: $CraftGuideData): boolean;
        actionType(): $ResourceLocation;
        isSpecialType(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): boolean;
    }
    export class $IKJSCraftType$Full {
    }
    export interface $IKJSCraftType$Full extends $IKJSCraftType {
        start(arg0: $Supplier_<$AbstractCraftActionContext>, arg1: $EntityMaid, arg2: $CraftGuideData, arg3: $CraftGuideStepData, arg4: $CraftLayer): $AbstractCraftActionContext;
        icon(): $ItemStack;
        onTypeUsing(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $CraftGuideData, arg3: $CraftGuideOperator): void;
        transformSteps(arg0: $CraftGuideStepData[], arg1: $CraftGuideOperator): $CraftGuideStepData[];
        createGui(arg0: number, arg1: $Level_, arg2: $Player, arg3: $CraftGuideData): $AbstractContainerMenu;
    }
}
