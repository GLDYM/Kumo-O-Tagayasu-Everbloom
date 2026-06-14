import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Enum } from "@package/java/lang";

declare module "@package/de/mrjulsen/crn/util" {
    export class $PenaltyResult {
        add(type: $PenaltyResult$Type_): void;
        getPenalties(): $ImmutableMap<$PenaltyResult$Type, number>;
        getPenaltyValue(): number;
        constructor(other: $PenaltyResult);
        constructor();
        get penalties(): $ImmutableMap<$PenaltyResult$Type, number>;
        get penaltyValue(): number;
    }
    export class $PenaltyResult$Type extends $Enum<$PenaltyResult$Type> {
        getName(): string;
        static values(): $PenaltyResult$Type[];
        static valueOf(name: string): $PenaltyResult$Type;
        getCategory(): $PenaltyResult$Category;
        static getTypeByPenalty(category: $PenaltyResult$Category, penalty: number): ($PenaltyResult$Type) | undefined;
        getPenalty(): number;
        static ARRIVING_TRAIN: $PenaltyResult$Type;
        static IDLE_TRAIN: $PenaltyResult$Type;
        static RED_SIGNAL: $PenaltyResult$Type;
        static WAITING_TRAIN: $PenaltyResult$Type;
        static REDSTONE_RED_SIGNAL: $PenaltyResult$Type;
        static ANY_TRAIN: $PenaltyResult$Type;
        static MANUAL_TRAIN: $PenaltyResult$Type;
        get category(): $PenaltyResult$Category;
        get penalty(): number;
    }
    /**
     * Values that may be interpreted as {@link $PenaltyResult$Type}.
     */
    export type $PenaltyResult$Type_ = "manual_train" | "idle_train" | "arriving_train" | "waiting_train" | "any_train" | "red_signal" | "redstone_red_signal";
}
