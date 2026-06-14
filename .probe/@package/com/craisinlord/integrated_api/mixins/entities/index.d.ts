import { $Direction_, $Direction } from "@package/net/minecraft/core";

declare module "@package/com/craisinlord/integrated_api/mixins/entities" {
    export class $MerchantOfferAccessor {
    }
    export interface $MerchantOfferAccessor {
        setMaxUses(arg0: number): void;
        set maxUses(value: number);
    }
    /**
     * Values that may be interpreted as {@link $MerchantOfferAccessor}.
     */
    export type $MerchantOfferAccessor_ = ((arg0: number) => void);
    export class $ShulkerEntityInvoker {
    }
    export interface $ShulkerEntityInvoker {
        integratedapi_callSetAttachFace(arg0: $Direction_): void;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerEntityInvoker}.
     */
    export type $ShulkerEntityInvoker_ = ((arg0: $Direction) => void);
}
