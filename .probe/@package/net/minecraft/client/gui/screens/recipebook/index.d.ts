import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $WidgetTooltipHolder, $EditBox, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RecipeBookComponentAccessor, $GhostRecipeAccessor } from "@package/umpaz/brewinandchewin/common/mixin/client";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $RecipeBook } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener, $RecipeBookComponentAccessor {
        init(arg0: number, arg1: number, arg2: $Minecraft, arg3: boolean, arg4: $RecipeBookMenu<never, never>): void;
        tick(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(arg0: $NarrationElementOutput): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        isVisible(): boolean;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        charTyped(arg0: string, arg1: number): boolean;
        checkSearchStringUpdate(): void;
        updateScreenPosition(arg0: number, arg1: number): number;
        recipesUpdated(): void;
        hasClickedOutside(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        renderGhostRecipe(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
        slotClicked(arg0: $Slot): void;
        toggleVisibility(): void;
        setupGhostRecipe(arg0: $RecipeHolder_<never>, arg1: $List_<$Slot>): void;
        handler$dbh000$emi$toggleOpen(info: $CallbackInfo): void;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        addItemToSlot(arg0: $Ingredient_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        initVisuals(): void;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        isActive(): boolean;
        getTabOrderGroup(): number;
        brewinandchewin$setStackedContents(arg0: $StackedContents): void;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
        get visible(): boolean;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        getCategory(): $RecipeBookCategories;
        startAnimation(arg0: $Minecraft): void;
        updateVisibility(arg0: $ClientRecipeBook): boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe implements $GhostRecipeAccessor {
        size(): number;
        get(arg0: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        render(arg0: $GuiGraphics, arg1: $Minecraft, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        getRecipe(): $RecipeHolder<never>;
        addIngredient(arg0: $Ingredient_, arg1: number, arg2: number): void;
        setRecipe(arg0: $RecipeHolder_<never>): void;
        brewinandchewin$getTime(): number;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RecipeCollection {
        registryAccess(): $RegistryAccess;
        canCraft(arg0: $StackedContents, arg1: number, arg2: number, arg3: $RecipeBook): void;
        getRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        getRecipes(): $List<$RecipeHolder<never>>;
        hasFitting(): boolean;
        getDisplayRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        updateKnownRecipes(arg0: $RecipeBook): void;
        hasCraftable(): boolean;
        isCraftable(arg0: $RecipeHolder_<never>): boolean;
        hasKnownRecipes(): boolean;
        hasSingleResultItem(): boolean;
        constructor(arg0: $RegistryAccess, arg1: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getItem(): $ItemStack;
        getY(): number;
        getX(): number;
        ingredient: $Ingredient;
        constructor(arg0: $GhostRecipe, arg1: $Ingredient_, arg2: number, arg3: number);
        get item(): $ItemStack;
        get y(): number;
        get x(): number;
    }
    export class $RecipeBookPage {
        init(arg0: $Minecraft, arg1: number, arg2: number): void;
        addListener(arg0: $RecipeBookComponent): void;
        setInvisible(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getMinecraft(): $Minecraft;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        getRecipeBook(): $RecipeBook;
        getLastClickedRecipeCollection(): $RecipeCollection;
        updateCollections(arg0: $List_<$RecipeCollection>, arg1: boolean): void;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        getLastClickedRecipe(): $RecipeHolder<never>;
        recipeCollections: $List<$RecipeCollection>;
        static ITEMS_PER_PAGE: number;
        constructor();
        get minecraft(): $Minecraft;
        get recipeBook(): $RecipeBook;
        get lastClickedRecipeCollection(): $RecipeCollection;
        get lastClickedRecipe(): $RecipeHolder<never>;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        recipeBookPage: $RecipeBookPage;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        searchBox: $EditBox;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        init(arg0: $Minecraft, arg1: $RecipeCollection, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        isFocused(): boolean;
        setFocused(arg0: boolean): void;
        getLastRecipeClicked(): $RecipeHolder<never>;
        getRecipeCollection(): $RecipeCollection;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getTabOrderGroup(): number;
        static BUTTON_SIZE: number;
        constructor();
        get lastRecipeClicked(): $RecipeHolder<never>;
        get recipeCollection(): $RecipeCollection;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        init(arg0: $RecipeCollection, arg1: $RecipeBookPage): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        getRecipe(): $RecipeHolder<never>;
        getTooltipText(): $List<$Component>;
        getCollection(): $RecipeCollection;
        isOnlyOption(): boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static TICKS_TO_SWAP: number;
        height: number;
        constructor();
        get recipe(): $RecipeHolder<never>;
        get tooltipText(): $List<$Component>;
        get collection(): $RecipeCollection;
        get onlyOption(): boolean;
    }
}
