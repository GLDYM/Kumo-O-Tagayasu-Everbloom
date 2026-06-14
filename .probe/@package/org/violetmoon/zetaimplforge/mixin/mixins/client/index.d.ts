import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $ItemColor, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/org/violetmoon/zetaimplforge/mixin/mixins/client" {
    export class $AccessorBlockColors {
    }
    export interface $AccessorBlockColors {
        zeta$getBlockColors(): $Map<$Block, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBlockColors}.
     */
    export type $AccessorBlockColors_ = (() => $Map_<$Block_, $BlockColor>);
    export class $AccessorItemColors {
    }
    export interface $AccessorItemColors {
        zeta$getItemColors(): $Map<$Item, $ItemColor>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorItemColors}.
     */
    export type $AccessorItemColors_ = (() => $Map_<$Item_, $ItemColor_>);
}
