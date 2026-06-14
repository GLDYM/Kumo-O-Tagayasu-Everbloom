import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ItemColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemColorsAccess } from "@package/snownee/kiwi/mixin/forge";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $AccessorItemColors } from "@package/org/violetmoon/zetaimplforge/mixin/mixins/client";
import { $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ItemColorsAccess, $ItemColorsExtension, $AccessorItemColors, $ItemColorsNeoForgeAccessor {
        /**
         * @deprecated
         */
        register(arg0: $ItemColor_, ...arg1: $ItemLike_[]): void;
        getColor(arg0: $ItemStack_, arg1: number): number;
        static createDefault(arg0: $BlockColors): $ItemColors;
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        getItemColors(): $Map<$Item, $ItemColor>;
        zeta$getItemColors(): $Map<$Item, $ItemColor>;
        puzzleslib$getItemColors(): $Map<$Item, $ItemColor>;
        constructor();
        get itemColors(): $Map<$Item, $ItemColor>;
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(arg0: $ItemStack_, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
