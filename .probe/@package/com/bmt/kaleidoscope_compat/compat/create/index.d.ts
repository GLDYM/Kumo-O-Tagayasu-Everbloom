import { $RecipeItem$RecipeRecord_, $RecipeItem$RecipeRecord } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/item";

declare module "@package/com/bmt/kaleidoscope_compat/compat/create" {
    export class $StockpotArmAutomation {
    }
    export interface $StockpotArmAutomation {
        kaleidoscopeCompat$setStoredRecipe(arg0: $RecipeItem$RecipeRecord_): void;
        kaleidoscopeCompat$getStoredRecipe(): $RecipeItem$RecipeRecord;
    }
}
