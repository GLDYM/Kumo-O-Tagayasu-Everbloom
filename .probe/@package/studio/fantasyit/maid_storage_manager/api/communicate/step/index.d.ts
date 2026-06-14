import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Map_ } from "@package/java/util";

declare module "@package/studio/fantasyit/maid_storage_manager/api/communicate/step" {
    export class $IActionStep {
    }
    export interface $IActionStep {
        start(arg0: $EntityMaid, arg1: $EntityMaid): $ActionResult;
        stop(arg0: $EntityMaid, arg1: $EntityMaid): void;
        prepare(arg0: $EntityMaid, arg1: $EntityMaid): boolean;
        tick(arg0: $EntityMaid, arg1: $EntityMaid): $ActionResult;
        isAvailable(arg0: $Map_<$ResourceLocation_, boolean>, arg1: $EntityMaid, arg2: $EntityMaid): boolean;
        isPrepareDone(arg0: $EntityMaid, arg1: $EntityMaid): boolean;
        shouldRunPrepare(arg0: $EntityMaid, arg1: $EntityMaid, arg2: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IActionStep}.
     */
    export type $IActionStep_ = ((arg0: $EntityMaid, arg1: $EntityMaid) => $ActionResult_);
    export class $ActionResult extends $Enum<$ActionResult> {
        static values(): $ActionResult[];
        static valueOf(arg0: string): $ActionResult;
        isSuccess(): boolean;
        isEnd(): boolean;
        isKeepon(): boolean;
        static CONTINUE: $ActionResult;
        static SOFT_FAIL: $ActionResult;
        static SUCCESS: $ActionResult;
        static FAIL: $ActionResult;
        get success(): boolean;
        get end(): boolean;
        get keepon(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ActionResult}.
     */
    export type $ActionResult_ = "success" | "continue" | "soft_fail" | "fail";
}
