import { $MagicCastingAnimateState } from "@package/com/github/yimeng261/maidspell/client/animation";

declare module "@package/com/github/yimeng261/maidspell/client/spell" {
    export class $CastingAnimateStateAccessor {
    }
    export interface $CastingAnimateStateAccessor {
        maidspell$getCastingAnimateState(): $MagicCastingAnimateState;
    }
    /**
     * Values that may be interpreted as {@link $CastingAnimateStateAccessor}.
     */
    export type $CastingAnimateStateAccessor_ = (() => $MagicCastingAnimateState);
}
