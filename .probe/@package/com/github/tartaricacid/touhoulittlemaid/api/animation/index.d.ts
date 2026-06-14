import { $Enum } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/animation" {
    export class $IMagicCastingState$CastingPhase extends $Enum<$IMagicCastingState$CastingPhase> {
        static values(): $IMagicCastingState$CastingPhase[];
        static valueOf(arg0: string): $IMagicCastingState$CastingPhase;
        static CASTING: $IMagicCastingState$CastingPhase;
        static INSTANT: $IMagicCastingState$CastingPhase;
        static START: $IMagicCastingState$CastingPhase;
        static END: $IMagicCastingState$CastingPhase;
        static NONE: $IMagicCastingState$CastingPhase;
    }
    /**
     * Values that may be interpreted as {@link $IMagicCastingState$CastingPhase}.
     */
    export type $IMagicCastingState$CastingPhase_ = "none" | "instant" | "start" | "casting" | "end";
    export class $IMagicCastingState {
    }
    export interface $IMagicCastingState {
        isCancelled(): boolean;
        getCurrentPhase(): $IMagicCastingState$CastingPhase;
        setCancelled(arg0: boolean): void;
        get currentPhase(): $IMagicCastingState$CastingPhase;
    }
}
