import { $CraftingContainer } from "@package/net/minecraft/world/inventory";

declare module "@package/fi/dy/masa/itemscroller/mixin/recipe" {
    export class $IMixinCraftingResultSlot {
    }
    export interface $IMixinCraftingResultSlot {
        itemscroller_getCraftingInventory(): $CraftingContainer;
    }
    /**
     * Values that may be interpreted as {@link $IMixinCraftingResultSlot}.
     */
    export type $IMixinCraftingResultSlot_ = (() => $CraftingContainer);
}
