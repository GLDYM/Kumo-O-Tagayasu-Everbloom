import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $IActionWish } from "@package/studio/fantasyit/maid_storage_manager/api/communicate/wish";
import { $IActionStep_, $IActionStep } from "@package/studio/fantasyit/maid_storage_manager/api/communicate/step";
import { $MutableBoolean, $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";

declare module "@package/studio/fantasyit/maid_storage_manager/api/communicate/data" {
    export class $CommunicateHolder extends $Record {
        handler(): $EntityMaid;
        isValid(): boolean;
        requestId(): $UUID;
        constructor(requestId: $UUID_, handler: $EntityMaid);
        get valid(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CommunicateHolder}.
     */
    export type $CommunicateHolder_ = { requestId?: $UUID_, handler?: $EntityMaid,  } | [requestId?: $UUID_, handler?: $EntityMaid, ];
    export class $CommunicatePlan extends $Record {
        handler(): $EntityMaid;
        steps(): $List<$IActionStep>;
        isAvailable(arg0: $EntityMaid): boolean;
        constructor(steps: $List_<$IActionStep_>, handler: $EntityMaid);
    }
    /**
     * Values that may be interpreted as {@link $CommunicatePlan}.
     */
    export type $CommunicatePlan_ = { steps?: $List_<$IActionStep_>, handler?: $EntityMaid,  } | [steps?: $List_<$IActionStep_>, handler?: $EntityMaid, ];
    export class $CommunicateRequest extends $Record {
        handler(): $EntityMaid;
        static create(arg0: $CommunicatePlan_, arg1: $EntityMaid): $CommunicateRequest;
        prepare(): void;
        fail(): void;
        tick(): void;
        isValid(): boolean;
        working(): $MutableBoolean;
        failed(): $MutableBoolean;
        isFinished(): boolean;
        prepared(): $MutableBoolean;
        nextStep(): void;
        getHolder(): $CommunicateHolder;
        currentStep(): $MutableInt;
        requestId(): $UUID;
        plan(): $CommunicatePlan;
        isFailed(): boolean;
        isPrepared(): boolean;
        isWorking(): boolean;
        wisher(): $EntityMaid;
        stopAndClear(): void;
        getCurrentStep(): $IActionStep;
        tickToTimeOut(): $MutableInt;
        resetTimeout(): void;
        startWorking(): void;
        constructor(plan: $CommunicatePlan_, wisher: $EntityMaid, handler: $EntityMaid, requestId: $UUID_, currentStep: $MutableInt, prepared: $MutableBoolean, working: $MutableBoolean, tickToTimeOut: $MutableInt, failed: $MutableBoolean);
        get valid(): boolean;
        get finished(): boolean;
        get holder(): $CommunicateHolder;
    }
    /**
     * Values that may be interpreted as {@link $CommunicateRequest}.
     */
    export type $CommunicateRequest_ = { prepared?: $MutableBoolean, failed?: $MutableBoolean, handler?: $EntityMaid, requestId?: $UUID_, wisher?: $EntityMaid, tickToTimeOut?: $MutableInt, currentStep?: $MutableInt, plan?: $CommunicatePlan_, working?: $MutableBoolean,  } | [prepared?: $MutableBoolean, failed?: $MutableBoolean, handler?: $EntityMaid, requestId?: $UUID_, wisher?: $EntityMaid, tickToTimeOut?: $MutableInt, currentStep?: $MutableInt, plan?: $CommunicatePlan_, working?: $MutableBoolean, ];
    export class $CommunicateWish extends $Record {
        wishes(): $List<$IActionWish>;
        wisher(): $EntityMaid;
        constructor(wisher: $EntityMaid, wishes: $List_<$IActionWish>);
    }
    /**
     * Values that may be interpreted as {@link $CommunicateWish}.
     */
    export type $CommunicateWish_ = { wisher?: $EntityMaid, wishes?: $List_<$IActionWish>,  } | [wisher?: $EntityMaid, wishes?: $List_<$IActionWish>, ];
}
