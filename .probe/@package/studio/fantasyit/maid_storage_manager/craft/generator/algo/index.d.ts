import { $SpecialCraftNode, $Node, $IngredientNode, $ItemNode } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo/node";
import { $Function_ } from "@package/java/util/function";
import { $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $Ingredient_, $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IAutoCraftGuideGenerator } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/type/base";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UUID_, $List, $List_ } from "@package/java/util";
export * as node from "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo/node";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo" {
    export class $ICachableGeneratorGraph {
    }
    export interface $ICachableGeneratorGraph {
        getNode(arg0: number): $Node;
        process(): boolean;
        addCraftGuide(arg0: $CraftGuideData): void;
        getCraftGuides(): $List<$CraftGuideData>;
        setItems(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>): void;
        getNodes(): $List<$Node>;
        clearStates(): void;
        blockType(arg0: $ResourceLocation_): void;
        addRecipe(arg0: $RecipeHolder_<$Recipe<never>>, arg1: $Function_<$List<$ItemStack>, $CraftGuideData>): void;
        addRecipe(arg0: $ResourceLocation_, arg1: $List_<$Ingredient_>, arg2: $List_<number>, arg3: $List_<$ItemStack_>, arg4: $Function_<$List<$ItemStack>, $CraftGuideData>): void;
        addRecipe(arg0: $ResourceLocation_, arg1: $List_<$Ingredient_>, arg2: $List_<number>, arg3: $ItemStack_, arg4: $Function_<$List<$ItemStack>, $CraftGuideData>): void;
        blockRecipe(arg0: $ResourceLocation_): void;
        removeBlockedType(arg0: $ResourceLocation_): void;
        getPushedSteps(): number;
        getProcessedSteps(): number;
        addToQueue(arg0: $Node): void;
        getItemNodeOrCreate(arg0: $ItemStack_, arg1: boolean): $ItemNode;
        invalidAllCraftWithType(arg0: $ResourceLocation_): void;
        addRecipeWrapId(arg0: $RecipeHolder_<$Recipe<never>>, arg1: $ResourceLocation_, arg2: $Function_<$List<$ItemStack>, $CraftGuideData>): void;
        addOrGetCahcedIngredientNode(arg0: $Ingredient_, arg1: $UUID_): $IngredientNode;
        addRecipeWithIngredients(arg0: $ResourceLocation_, arg1: $List_<$Ingredient_>, arg2: $List_<number>, arg3: $List_<$ItemStack_>, arg4: $List_<$IngredientNode>, arg5: $Function_<$List<$ItemStack>, $CraftGuideData>, arg6: $ResourceLocation_, arg7: boolean): void;
        hasCachedIngredientNode(arg0: $UUID_): boolean;
        setCurrentGeneratorType(arg0: $IAutoCraftGuideGenerator): void;
        setCurrentGeneratorType(arg0: $ResourceLocation_, arg1: boolean): void;
        removeBlockedRecipe(arg0: $ResourceLocation_): void;
        addSpecialCraftNode(arg0: $Function_<number, $SpecialCraftNode>): void;
        get craftGuides(): $List<$CraftGuideData>;
        get nodes(): $List<$Node>;
        get pushedSteps(): number;
        get processedSteps(): number;
    }
}
