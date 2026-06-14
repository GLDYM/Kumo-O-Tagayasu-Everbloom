import { $CraftLayer } from "@package/studio/fantasyit/maid_storage_manager/craft/work";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $CraftGuideStepData, $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $List, $List_ } from "@package/java/util";
import { $AbstractCraftActionContext } from "@package/studio/fantasyit/maid_storage_manager/craft/context";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/type" {
    export class $ICraftType {
    }
    export interface $ICraftType {
        start(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer): $AbstractCraftActionContext;
        getType(): $ResourceLocation;
        available(arg0: $CraftGuideData): boolean;
        getActionType(): $ResourceLocation;
        onTypeUsing(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $CraftGuideData): void;
        transformSteps(arg0: $List_<$CraftGuideStepData>): $List<$CraftGuideStepData>;
        getIcon(): $ItemStack;
        isSpecialType(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): boolean;
        createGui(arg0: number, arg1: $Level_, arg2: $Player, arg3: $CraftGuideData): $AbstractContainerMenu;
        get type(): $ResourceLocation;
        get actionType(): $ResourceLocation;
        get icon(): $ItemStack;
    }
}
