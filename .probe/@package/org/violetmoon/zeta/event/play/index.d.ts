import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $ShapedRecipe, $AbstractCookingRecipe, $Ingredient, $CustomRecipe, $RecipeHolder_, $Recipe, $ShapelessRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $IZetaPlayEvent } from "@package/org/violetmoon/zeta/event/bus";
import { $Collection_, $Collection } from "@package/java/util";

declare module "@package/org/violetmoon/zeta/event/play" {
    export class $ZRecipeCrawl$Digest extends $ZRecipeCrawl {
        get(arg0: $Item_, arg1: boolean): $Collection<$ItemStack>;
        has(arg0: $Item_, arg1: boolean): boolean;
        recursivelyFindCraftedItemsFromStrings(arg0: $Collection_<string>, arg1: $Collection_<string>, arg2: $Collection_<string>, arg3: $Consumer_<$Item>): void;
        recursivelyFindCraftedItems(arg0: $Collection_<$Item_>, arg1: $Collection_<$Item_>, arg2: $Collection_<$Item_>, arg3: $Consumer_<$Item>): void;
        constructor(arg0: $Multimap<$Item_, $ItemStack_>, arg1: $Multimap<$Item_, $ItemStack_>);
    }
    export class $ZRecipeCrawl$Starting extends $ZRecipeCrawl {
        constructor();
    }
    export class $ZRecipeCrawl$Reset extends $ZRecipeCrawl {
        constructor();
    }
    export class $ZRecipeCrawl$Visit$Custom extends $ZRecipeCrawl$Visit<$RecipeHolder<$CustomRecipe>> {
        output: $ItemStack;
        recipe: $Recipe<never>;
        recipeHolder: $RecipeHolder<never>;
        ingredients: $NonNullList<$Ingredient>;
        recipeID: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$CustomRecipe>, arg1: $RegistryAccess);
    }
    export class $ZRecipeCrawl$Visit<T extends $RecipeHolder<never>> extends $ZRecipeCrawl {
        output: $ItemStack;
        recipe: $Recipe<never>;
        recipeHolder: $RecipeHolder<never>;
        ingredients: $NonNullList<$Ingredient>;
        recipeID: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<never>, arg1: $RegistryAccess);
    }
    export class $ZFurnaceFuelBurnTime {
    }
    export interface $ZFurnaceFuelBurnTime extends $IZetaPlayEvent {
        getItemStack(): $ItemStack;
        setBurnTime(arg0: number): void;
        get itemStack(): $ItemStack;
        set burnTime(value: number);
    }
    export class $ZRecipeCrawl$Visit$Shapeless extends $ZRecipeCrawl$Visit<$RecipeHolder<$ShapelessRecipe>> {
        output: $ItemStack;
        recipe: $Recipe<never>;
        recipeHolder: $RecipeHolder<never>;
        ingredients: $NonNullList<$Ingredient>;
        recipeID: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$ShapelessRecipe>, arg1: $RegistryAccess);
    }
    export class $ZRecipeCrawl$Visit$Misc extends $ZRecipeCrawl$Visit<$RecipeHolder<$Recipe<never>>> {
        output: $ItemStack;
        recipe: $Recipe<never>;
        recipeHolder: $RecipeHolder<never>;
        ingredients: $NonNullList<$Ingredient>;
        recipeID: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$Recipe<never>>, arg1: $RegistryAccess);
    }
    export class $ZRecipeCrawl$Visit$Shaped extends $ZRecipeCrawl$Visit<$RecipeHolder<$ShapedRecipe>> {
        output: $ItemStack;
        recipe: $Recipe<never>;
        recipeHolder: $RecipeHolder<never>;
        ingredients: $NonNullList<$Ingredient>;
        recipeID: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$ShapedRecipe>, arg1: $RegistryAccess);
    }
    export class $ZRecipeCrawl implements $IZetaPlayEvent {
        constructor();
    }
    export class $ZRecipeCrawl$Visit$Cooking extends $ZRecipeCrawl$Visit<$RecipeHolder<$AbstractCookingRecipe>> {
        output: $ItemStack;
        recipe: $Recipe<never>;
        recipeHolder: $RecipeHolder<never>;
        ingredients: $NonNullList<$Ingredient>;
        recipeID: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$ShapelessRecipe>, arg1: $RegistryAccess);
    }
}
