import { $CraftLayer } from "@package/studio/fantasyit/maid_storage_manager/craft/work";
import { $CraftGuideStepData, $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $CraftContextOperator } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/helper";
import { $AbstractCraftActionContext$Result } from "@package/studio/fantasyit/maid_storage_manager/craft/context";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/context" {
    export class $IKJSCraftContext {
    }
    export interface $IKJSCraftContext {
        start(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer, arg4: $CraftContextOperator): $AbstractCraftActionContext$Result;
        stop(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer, arg4: $CraftContextOperator): void;
        tick(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer, arg4: $CraftContextOperator): $AbstractCraftActionContext$Result;
    }
}
