import { $Enum } from "@package/java/lang";

declare module "@package/dev/xkmc/cuisinedelight/content/logic/transform" {
    export class $Stage extends $Enum<$Stage> {
        static values(): $Stage[];
        static valueOf(arg0: string): $Stage;
        static OVERCOOKED: $Stage;
        static COOKED: $Stage;
        static RAW: $Stage;
    }
    /**
     * Values that may be interpreted as {@link $Stage}.
     */
    export type $Stage_ = "raw" | "cooked" | "overcooked";
}
