import { $RecipeHolder, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $IntMapContainer } from "@package/com/fast/recipesearch";

declare module "@package/fast/fastrecipesearch" {
    export class $IRecipeHolder<T extends $Recipe<never>> {
    }
    export interface $IRecipeHolder<T extends $Recipe<never>> {
        self(): $RecipeHolder<T>;
        setIntContainer(arg0: $IntMapContainer): void;
        getIntContainer(): $IntMapContainer;
    }
}
