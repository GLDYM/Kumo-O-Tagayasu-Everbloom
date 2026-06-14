import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AccessorMerchantOffer } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $MerchantOfferAccessor } from "@package/com/craisinlord/integrated_api/mixins/entities";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ArrayList, $SequencedCollection } from "@package/java/util";
import { $PseudoAccessorMerchantOffer } from "@package/org/violetmoon/quark/content/experimental/hax";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPredicate, $DataComponentPredicate$Builder } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer implements $MerchantOfferAccessor, $PseudoAccessorMerchantOffer, $AccessorMerchantOffer {
        copy(): $MerchantOffer;
        take(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getResult(): $ItemStack;
        getMaxUses(): number;
        getDemand(): number;
        getCostB(): $ItemStack;
        getCostA(): $ItemStack;
        quark$setTier(arg0: number): void;
        getItemCostA(): $ItemCost;
        getItemCostB(): ($ItemCost) | undefined;
        increaseUses(): void;
        resetSpecialPriceDiff(): void;
        addToSpecialPriceDiff(arg0: number): void;
        updateDemand(): void;
        needsRestock(): boolean;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        getPriceMultiplier(): number;
        getUses(): number;
        assemble(): $ItemStack;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(arg0: number): void;
        getXp(): number;
        isOutOfStock(): boolean;
        setToOutOfStock(): void;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        quark$getTier(): number;
        resetUses(): void;
        quark$setRewardExp(arg0: boolean): void;
        setMaxUses(arg0: number): void;
        maxUses: number;
        static CODEC: $Codec<$MerchantOffer>;
        uses: number;
        demand: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        get result(): $ItemStack;
        get costB(): $ItemStack;
        get costA(): $ItemStack;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
        get baseCostA(): $ItemStack;
        get priceMultiplier(): number;
        get xp(): number;
        get outOfStock(): boolean;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        copy(): $MerchantOffers;
        getRecipeFor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): $MerchantOffer;
        reversed(): $SequencedCollection<$MerchantOffer>;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        overrideOffers(arg0: $MerchantOffers): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        getTradingPlayer(): $Player;
        setTradingPlayer(arg0: $Player): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        showProgressBar(): boolean;
        getOffers(): $MerchantOffers;
        isClientSide(): boolean;
        getVillagerXp(): number;
        canRestock(): boolean;
        overrideXp(arg0: number): void;
        get notifyTradeSound(): $SoundEvent;
        get offers(): $MerchantOffers;
        get clientSide(): boolean;
        get villagerXp(): number;
    }
    export class $ItemCost extends $Record {
        test(arg0: $ItemStack_): boolean;
        count(): number;
        item(): $Holder<$Item>;
        components(): $DataComponentPredicate;
        withComponents(arg0: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        itemStack(): $ItemStack;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $ItemLike_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCost}.
     */
    export type $ItemCost_ = { components?: $DataComponentPredicate, count?: number, item?: $Holder_<$Item>, itemStack?: $ItemStack_,  } | [components?: $DataComponentPredicate, count?: number, item?: $Holder_<$Item>, itemStack?: $ItemStack_, ];
}
