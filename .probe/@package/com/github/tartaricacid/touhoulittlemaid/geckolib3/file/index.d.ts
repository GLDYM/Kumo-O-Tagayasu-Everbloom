import { $Record } from "@package/java/lang";
import { $Map_, $Map, $Collection } from "@package/java/util";
import { $Animation } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/builder";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/file" {
    export class $AnimationFile extends $Record {
        getAnimation(arg0: string): $Animation;
        animations(): $Map<string, $Animation>;
        putAnimation(arg0: string, arg1: $Animation): void;
        getAllAnimations(): $Collection<$Animation>;
        constructor();
        constructor(animations: $Map_<string, $Animation>);
        get allAnimations(): $Collection<$Animation>;
    }
    /**
     * Values that may be interpreted as {@link $AnimationFile}.
     */
    export type $AnimationFile_ = { animations?: $Map_<string, $Animation>,  } | [animations?: $Map_<string, $Animation>, ];
}
