import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $DeferredItem } from "@package/net/neoforged/neoforge/registries";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/item" {
    export class $RecipeItem$RecipeRecord extends $Record {
        type(): $ResourceLocation;
        input(): $List<$ItemStack>;
        output(): $ItemStack;
        static pot(arg0: $DeferredItem<$Item_>, ...arg1: $DeferredItem<$Item_>[]): $RecipeItem$RecipeRecord;
        static pot(arg0: $ItemLike_, ...arg1: $ItemLike_[]): $RecipeItem$RecipeRecord;
        static stockpot(arg0: $ItemLike_, ...arg1: $ItemLike_[]): $RecipeItem$RecipeRecord;
        static stockpot(arg0: $DeferredItem<$Item_>, ...arg1: $DeferredItem<$Item_>[]): $RecipeItem$RecipeRecord;
        flexRecipe(): boolean;
        static CODEC: $Codec<$RecipeItem$RecipeRecord>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeItem$RecipeRecord>;
        constructor(input: $List_<$ItemStack_>, output: $ItemStack_, type: $ResourceLocation_, flexRecipe: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RecipeItem$RecipeRecord}.
     */
    export type $RecipeItem$RecipeRecord_ = { flexRecipe?: boolean, output?: $ItemStack_, input?: $List_<$ItemStack_>, type?: $ResourceLocation_,  } | [flexRecipe?: boolean, output?: $ItemStack_, input?: $List_<$ItemStack_>, type?: $ResourceLocation_, ];
}
