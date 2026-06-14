import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ServerPlaceRecipeAccessor } from "@package/umpaz/brewinandchewin/common/mixin";
import { $RecipeInput, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $Iterator } from "@package/java/util";

declare module "@package/net/minecraft/recipebook" {
    export class $PlaceRecipe<T> {
    }
    export interface $PlaceRecipe<T> {
        addItemToSlot(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): void;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<T>, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PlaceRecipe}.
     */
    export type $PlaceRecipe_<T> = ((arg0: T, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ServerPlaceRecipe<I extends $RecipeInput, R extends $Recipe<I>> implements $PlaceRecipe<number>, $ServerPlaceRecipeAccessor {
        recipeClicked(arg0: $ServerPlayer, arg1: $RecipeHolder_<R>, arg2: boolean): void;
        addItemToSlot(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<number>, arg5: number): void;
        brewinandchewin$setStackedContents(arg0: $StackedContents): void;
        constructor(arg0: $RecipeBookMenu<I, R>);
    }
}
