import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/snownee/kiwi/mixin/forge" {
    export class $BlockColorsAccess {
    }
    export interface $BlockColorsAccess {
        getBlockColors(): $Map<$Block, $BlockColor>;
        get blockColors(): $Map<$Block, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $BlockColorsAccess}.
     */
    export type $BlockColorsAccess_ = (() => $Map_<$Block_, $BlockColor>);
    export class $ItemColorsAccess {
    }
    export interface $ItemColorsAccess {
        getItemColors(): $Map<$Item, $ItemColor>;
        get itemColors(): $Map<$Item, $ItemColor>;
    }
    /**
     * Values that may be interpreted as {@link $ItemColorsAccess}.
     */
    export type $ItemColorsAccess_ = (() => $Map_<$Item_, $ItemColor>);
}
