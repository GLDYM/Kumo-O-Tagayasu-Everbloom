import { $TagKey } from "@package/net/minecraft/tags";
import { $Effect_ } from "@package/com/lnatit/ccw/data";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MutableComponent, $Style } from "@package/net/minecraft/network/chat";
import { $RefiningInput_ } from "@package/com/lnatit/ccw/item/crafting";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List_ } from "@package/java/util";
import { $Holder_, $Registry, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/lnatit/ccw/item/sugaring" {
    export interface $Sugar extends RegistryMarked<RegistryTypes.CcwSugarTag, RegistryTypes.CcwSugar> {}
    export interface $Flavor extends RegistryMarked<RegistryTypes.CcwFlavorTag, RegistryTypes.CcwFlavor> {}
    export class $Sugar extends $Record {
        type(): $Sugar$Type;
        static from(arg0: $RefiningInput_): $Holder<$Sugar>;
        static getItemModel(arg0: $Holder_<$Sugar>): $ResourceLocation;
        ingredient(): $Ingredient;
        static getModelId(arg0: $Holder_<$Sugar>): $ResourceLocation;
        static CODEC: $Codec<$Holder<$Sugar>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Sugar>>;
        constructor(type: $Sugar$Type_, ingredient: $Ingredient_);
    }
    /**
     * Values that may be interpreted as {@link $Sugar}.
     */
    export type $Sugar_ = RegistryTypes.CcwSugar | { ingredient?: $Ingredient_, type?: $Sugar$Type_,  } | [ingredient?: $Ingredient_, type?: $Sugar$Type_, ];
    export class $Flavor {
        static next(arg0: $Holder_<$Flavor>): $Holder<$Flavor>;
        static prefix(arg0: $Holder_<$Flavor>): $MutableComponent;
        static from(arg0: $ItemStack_): $Holder<$Flavor>;
        proxy(): $Holder<$Flavor>;
        style(): $Style;
        static description(arg0: $Holder_<$Flavor>): $MutableComponent;
        onApply(arg0: $ItemStack_): void;
        onRemove(arg0: $ItemStack_): void;
        craftCount(): number;
        preConsume(arg0: $LivingEntity, arg1: $List_<$Effect_>): void;
        ingredient(): $Ingredient;
        static rebuildCache(arg0: $Registry<$Flavor_>): void;
        postConsume(arg0: $LivingEntity, arg1: $List_<$Effect_>): void;
        static CODEC: $Codec<$Holder<$Flavor>>;
        static ORIGINAL: $Flavor;
        static SUGAR_PRODUCTION: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Flavor>>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Flavor}.
     */
    export type $Flavor_ = RegistryTypes.CcwFlavor;
    export class $Sugar$Type extends $Enum<$Sugar$Type> {
        static values(): $Sugar$Type[];
        static valueOf(arg0: string): $Sugar$Type;
        tag(): $TagKey<$Item>;
        static OVERWORLD: $Sugar$Type;
        static NETHER: $Sugar$Type;
        static END: $Sugar$Type;
    }
    /**
     * Values that may be interpreted as {@link $Sugar$Type}.
     */
    export type $Sugar$Type_ = "overworld" | "nether" | "end";
}
