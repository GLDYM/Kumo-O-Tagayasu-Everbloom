import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/dev/obscuria/tooltips/mixin" {
    export class $ClientTextTooltipAccessor {
    }
    export interface $ClientTextTooltipAccessor {
        getText(): $FormattedCharSequence;
        get text(): $FormattedCharSequence;
    }
    /**
     * Values that may be interpreted as {@link $ClientTextTooltipAccessor}.
     */
    export type $ClientTextTooltipAccessor_ = (() => $FormattedCharSequence);
}
