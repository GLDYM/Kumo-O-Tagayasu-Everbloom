import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";

declare module "@package/fi/dy/masa/itemscroller/villager" {
    export class $IMerchantScreenHandler {
    }
    export interface $IMerchantScreenHandler {
        itemscroller$getOriginalList(): $MerchantOffers;
    }
    /**
     * Values that may be interpreted as {@link $IMerchantScreenHandler}.
     */
    export type $IMerchantScreenHandler_ = (() => $MerchantOffers);
}
