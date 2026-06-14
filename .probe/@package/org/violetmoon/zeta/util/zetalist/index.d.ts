import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zeta/util/zetalist" {
    export class $IZeta {
    }
    export interface $IZeta {
        asZeta(): $Zeta;
    }
    /**
     * Values that may be interpreted as {@link $IZeta}.
     */
    export type $IZeta_ = (() => $Zeta);
}
