import { $RecastInstance } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/github/yimeng261/maidspell/mixin/iss/accessor" {
    export class $PlayerRecastsAccessor {
    }
    export interface $PlayerRecastsAccessor {
        maidspell$getRecastLookup(): $Map<string, $RecastInstance>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerRecastsAccessor}.
     */
    export type $PlayerRecastsAccessor_ = (() => $Map_<string, $RecastInstance>);
}
