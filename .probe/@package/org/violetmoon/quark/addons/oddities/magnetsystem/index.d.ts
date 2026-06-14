import { $IMagnetTracker } from "@package/org/violetmoon/quark/api";

declare module "@package/org/violetmoon/quark/addons/oddities/magnetsystem" {
    export class $MagnetWorldInterface {
    }
    export interface $MagnetWorldInterface {
        getTracker(): $IMagnetTracker;
        get tracker(): $IMagnetTracker;
    }
    /**
     * Values that may be interpreted as {@link $MagnetWorldInterface}.
     */
    export type $MagnetWorldInterface_ = (() => $IMagnetTracker);
}
