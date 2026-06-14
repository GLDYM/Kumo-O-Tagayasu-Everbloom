import { $List_, $List } from "@package/java/util";

declare module "@package/com/teamabnormals/blueprint/client/screen/splash" {
    export class $SplashManagerAccessor {
    }
    export interface $SplashManagerAccessor {
        getSplashes(): $List<string>;
        get splashes(): $List<string>;
    }
    /**
     * Values that may be interpreted as {@link $SplashManagerAccessor}.
     */
    export type $SplashManagerAccessor_ = (() => $List_<string>);
}
