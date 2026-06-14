import { $Pair } from "@package/de/mrjulsen/mcdragonlib/util";
import { $IDelayedWaitCondition_, $IDelayedWaitCondition$DelayedWaitConditionContext_ } from "@package/de/mrjulsen/crn/data/schedule/condition";
import { $PenaltyResult } from "@package/de/mrjulsen/crn/util";
export * as condition from "@package/de/mrjulsen/crn/data/schedule/condition";

declare module "@package/de/mrjulsen/crn/data/schedule" {
    export class $INavigationExtension {
    }
    export interface $INavigationExtension {
        addDelayedWaitCondition(arg0: $Pair<$IDelayedWaitCondition_, $IDelayedWaitCondition$DelayedWaitConditionContext_>): void;
        getPenaltiesByDirection(): ($PenaltyResult) | undefined;
        isDelayedWaitConditionPending(): boolean;
        get penaltiesByDirection(): ($PenaltyResult) | undefined;
        get delayedWaitConditionPending(): boolean;
    }
}
