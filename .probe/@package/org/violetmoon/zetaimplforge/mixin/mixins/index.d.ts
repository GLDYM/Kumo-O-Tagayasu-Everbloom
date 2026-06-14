import { $PotionBrewing$Mix_, $Potion, $PotionBrewing$Mix, $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $List_, $List } from "@package/java/util";
export * as client from "@package/org/violetmoon/zetaimplforge/mixin/mixins/client";

declare module "@package/org/violetmoon/zetaimplforge/mixin/mixins" {
    export class $AccessorPotionBrewing {
    }
    export interface $AccessorPotionBrewing {
        getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        get potionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorPotionBrewing}.
     */
    export type $AccessorPotionBrewing_ = (() => $List_<$PotionBrewing$Mix_<$Potion_>>);
    export class $WeatheringCopperMixin {
    }
    export interface $WeatheringCopperMixin {
    }
}
