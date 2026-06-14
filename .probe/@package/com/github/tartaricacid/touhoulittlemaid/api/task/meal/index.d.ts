import { $Enum } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/task/meal" {
    export class $MaidMealType extends $Enum<$MaidMealType> {
        static values(): $MaidMealType[];
        static valueOf(arg0: string): $MaidMealType;
        static WORK_MEAL: $MaidMealType;
        static HOME_MEAL: $MaidMealType;
        static HEAL_MEAL: $MaidMealType;
    }
    /**
     * Values that may be interpreted as {@link $MaidMealType}.
     */
    export type $MaidMealType_ = "work_meal" | "home_meal" | "heal_meal";
}
