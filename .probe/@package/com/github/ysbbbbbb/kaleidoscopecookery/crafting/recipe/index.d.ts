import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $Recipe, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $RandomOutput_, $RandomOutput } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/output";
import { $StockpotInput, $SimpleInput } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/container";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/recipe" {
    export class $BaseRecipe<C extends $RecipeInput> {
        static fillInputs(arg0: $List_<$Ingredient_>): $Ingredient[];
        static RECIPES_SIZE: number;
    }
    export interface $BaseRecipe<C extends $RecipeInput> extends $Recipe<C> {
        isSpecial(): boolean;
        assemble(arg0: C, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        get special(): boolean;
    }
    export class $StockpotRecipe extends $Record implements $BaseRecipe<$StockpotInput> {
        matches(arg0: $StockpotInput, arg1: $Level_): boolean;
        result(): $ItemStack;
        time(): number;
        carrier(): $Ingredient;
        getType(): $RecipeType<never>;
        ingredients(): $NonNullList<$Ingredient>;
        soupBase(): $ResourceLocation;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        visuals(): $StockpotVisuals;
        finishedTexture(): $ResourceLocation;
        cookingTexture(): $ResourceLocation;
        cookingBubbleColor(): number;
        finishedBubbleColor(): number;
        isSpecial(): boolean;
        assemble(arg0: $StockpotInput, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        getRemainingItems(arg0: $StockpotInput): $NonNullList<$ItemStack>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(ingredients: $NonNullList<$Ingredient_>, soupBase: $ResourceLocation_, result: $ItemStack_, time: number, carrier: $Ingredient_, visuals: $StockpotVisuals_);
        constructor(arg0: $NonNullList<$Ingredient_>, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_);
        constructor(arg0: $List_<$Ingredient_>, arg1: $ResourceLocation_, arg2: $ItemStack_, arg3: number, arg4: $Ingredient_, arg5: $StockpotVisuals_);
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get group(): string;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $StockpotRecipe}.
     */
    export type $StockpotRecipe_ = { soupBase?: $ResourceLocation_, carrier?: $Ingredient_, result?: $ItemStack_, visuals?: $StockpotVisuals_, time?: number, ingredients?: $NonNullList<$Ingredient_>,  } | [soupBase?: $ResourceLocation_, carrier?: $Ingredient_, result?: $ItemStack_, visuals?: $StockpotVisuals_, time?: number, ingredients?: $NonNullList<$Ingredient_>, ];
    export class $StockpotVisuals extends $Record {
        finishedTexture(): $ResourceLocation;
        cookingTexture(): $ResourceLocation;
        cookingBubbleColor(): number;
        finishedBubbleColor(): number;
        static CODEC: $MapCodec<$StockpotVisuals>;
        static DEFAULT_COOKING_BUBBLE_COLOR: number;
        static DEFAULT_FINISHED_TEXTURE: $ResourceLocation;
        static DEFAULT_FINISHED_BUBBLE_COLOR: number;
        static DEFAULT_COOKING_TEXTURE: $ResourceLocation;
        static DEFAULT: $StockpotVisuals;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StockpotVisuals>;
        constructor(cookingTexture: $ResourceLocation_, finishedTexture: $ResourceLocation_, cookingBubbleColor: number, finishedBubbleColor: number);
    }
    /**
     * Values that may be interpreted as {@link $StockpotVisuals}.
     */
    export type $StockpotVisuals_ = { finishedBubbleColor?: number, finishedTexture?: $ResourceLocation_, cookingTexture?: $ResourceLocation_, cookingBubbleColor?: number,  } | [finishedBubbleColor?: number, finishedTexture?: $ResourceLocation_, cookingTexture?: $ResourceLocation_, cookingBubbleColor?: number, ];
    export class $MillstoneRecipe extends $Record implements $BaseRecipe<$SimpleInput> {
        matches(arg0: $SimpleInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        results(): $List<$RandomOutput>;
        ingredient(): $Ingredient;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        isSpecial(): boolean;
        assemble(arg0: $SimpleInput, arg1: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getGroup(): string;
        getRemainingItems(arg0: $SimpleInput): $NonNullList<$ItemStack>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(ingredient: $Ingredient_, results: $List_<$RandomOutput_>);
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get group(): string;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $MillstoneRecipe}.
     */
    export type $MillstoneRecipe_ = { ingredient?: $Ingredient_, results?: $List_<$RandomOutput_>,  } | [ingredient?: $Ingredient_, results?: $List_<$RandomOutput_>, ];
}
