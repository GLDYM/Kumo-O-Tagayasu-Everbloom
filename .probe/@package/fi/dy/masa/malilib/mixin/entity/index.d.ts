import { $SimpleContainer } from "@package/net/minecraft/world";
import { $AnimalArmorItem$BodyType, $AnimalArmorItem$BodyType_ } from "@package/net/minecraft/world/item";
import { $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";

declare module "@package/fi/dy/masa/malilib/mixin/entity" {
    export class $IMixinAnimalArmorItem {
    }
    export interface $IMixinAnimalArmorItem {
        malilib_getAnimalArmorType(): $AnimalArmorItem$BodyType;
    }
    /**
     * Values that may be interpreted as {@link $IMixinAnimalArmorItem}.
     */
    export type $IMixinAnimalArmorItem_ = (() => $AnimalArmorItem$BodyType_);
    export class $IMixinPlayerEntity {
    }
    export interface $IMixinPlayerEntity {
        malilib_getEnderItems(): $PlayerEnderChestContainer;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPlayerEntity}.
     */
    export type $IMixinPlayerEntity_ = (() => $PlayerEnderChestContainer);
    export class $IMixinPiglinEntity {
    }
    export interface $IMixinPiglinEntity {
        malilib_getInventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPiglinEntity}.
     */
    export type $IMixinPiglinEntity_ = (() => $SimpleContainer);
    export class $IMixinMerchantEntity {
    }
    export interface $IMixinMerchantEntity {
        malilib_offers(): $MerchantOffers;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMerchantEntity}.
     */
    export type $IMixinMerchantEntity_ = (() => $MerchantOffers);
    export class $IMixinAbstractHorseEntity {
    }
    export interface $IMixinAbstractHorseEntity {
        malilib_getHorseInventory(): $SimpleContainer;
    }
    /**
     * Values that may be interpreted as {@link $IMixinAbstractHorseEntity}.
     */
    export type $IMixinAbstractHorseEntity_ = (() => $SimpleContainer);
}
