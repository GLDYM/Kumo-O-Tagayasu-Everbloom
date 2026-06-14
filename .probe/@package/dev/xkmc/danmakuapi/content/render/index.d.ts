import { $Enum } from "@package/java/lang";

declare module "@package/dev/xkmc/danmakuapi/content/render" {
    export class $DisplayType extends $Enum<$DisplayType> {
        getName(): string;
        static values(): $DisplayType[];
        static valueOf(arg0: string): $DisplayType;
        static ADDITIVE: $DisplayType;
        static SOLID: $DisplayType;
        static TRANSPARENT: $DisplayType;
    }
    /**
     * Values that may be interpreted as {@link $DisplayType}.
     */
    export type $DisplayType_ = "solid" | "transparent" | "additive";
}
