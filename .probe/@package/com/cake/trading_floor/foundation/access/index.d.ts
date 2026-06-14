import { $Level_ } from "@package/net/minecraft/world/level";
import { $PotentialMerchantOfferInfo } from "@package/com/cake/trading_floor/compat/jei/virtual_recipes/potential_villager_trade";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/cake/trading_floor/foundation/access" {
    export class $VillagerExperienceAccessor {
    }
    export interface $VillagerExperienceAccessor {
        trading_Floor_Neoforge$addExperienceForTrade(arg0: number, arg1: $MerchantOffer): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerExperienceAccessor}.
     */
    export type $VillagerExperienceAccessor_ = ((arg0: number, arg1: $MerchantOffer) => void);
    export class $ResolvableItemListing {
    }
    export interface $ResolvableItemListing {
        create_trading_floor$resolve(arg0: $RegistryAccess): $PotentialMerchantOfferInfo;
        create_trading_floor$resolve(arg0: $RegistryAccess, arg1: $Level_): $PotentialMerchantOfferInfo;
    }
    export class $TFAdvancementBuilderAccess {
    }
    export interface $TFAdvancementBuilderAccess {
        create_trading_floor$setParent(arg0: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $TFAdvancementBuilderAccess}.
     */
    export type $TFAdvancementBuilderAccess_ = ((arg0: $ResourceLocation) => void);
}
