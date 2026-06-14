import { $Enum } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/client/render" {
    export class $MaidRenderState extends $Enum<$MaidRenderState> {
        static values(): $MaidRenderState[];
        static valueOf(arg0: string): $MaidRenderState;
        static ENTITY: $MaidRenderState;
        static STATUE: $MaidRenderState;
        static GARAGE_KIT: $MaidRenderState;
    }
    /**
     * Values that may be interpreted as {@link $MaidRenderState}.
     */
    export type $MaidRenderState_ = "entity" | "statue" | "garage_kit";
}
