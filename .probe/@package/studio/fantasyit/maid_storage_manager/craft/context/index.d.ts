import { $CraftLayer } from "@package/studio/fantasyit/maid_storage_manager/craft/work";
import { $CraftGuideStepData, $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Enum } from "@package/java/lang";
export * as common from "@package/studio/fantasyit/maid_storage_manager/craft/context/common";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/context" {
    export class $AbstractCraftActionContext {
        start(): $AbstractCraftActionContext$Result;
        stop(): void;
        tick(): $AbstractCraftActionContext$Result;
        skipNextBreath(): boolean;
        loadEnv(arg0: $CompoundTag_): void;
        saveEnv(arg0: $CompoundTag_): $CompoundTag;
        constructor(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer);
    }
    export class $AbstractCraftActionContext$Result extends $Enum<$AbstractCraftActionContext$Result> {
        static values(): $AbstractCraftActionContext$Result[];
        static valueOf(arg0: string): $AbstractCraftActionContext$Result;
        static CONTINUE: $AbstractCraftActionContext$Result;
        static SUCCESS: $AbstractCraftActionContext$Result;
        static NOT_DONE_INTERRUPTABLE: $AbstractCraftActionContext$Result;
        static NOT_DONE: $AbstractCraftActionContext$Result;
        static CONTINUE_INTERRUPTABLE: $AbstractCraftActionContext$Result;
        static FAIL: $AbstractCraftActionContext$Result;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCraftActionContext$Result}.
     */
    export type $AbstractCraftActionContext$Result_ = "success" | "fail" | "continue" | "continue_interruptable" | "not_done" | "not_done_interruptable";
}
