import { $Slot, $ClickType_ } from "@package/net/minecraft/world/inventory";

declare module "@package/fi/dy/masa/itemscroller/mixin/screen" {
    export class $IMixinMerchantScreen {
    }
    export interface $IMixinMerchantScreen {
        itemscroller_getSelectedMerchantRecipe(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMerchantScreen}.
     */
    export type $IMixinMerchantScreen_ = (() => number);
    export class $IMixinScreenWithHandler {
    }
    export interface $IMixinScreenWithHandler {
        itemscroller_getGuiTop(): number;
        itemscroller_getGuiLeft(): number;
        itemscroller_getSlotAtPositionInvoker(arg0: number, arg1: number): $Slot;
        itemscroller_handleMouseClickInvoker(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_): void;
        itemscroller_getHoveredSlot(): $Slot;
        itemscroller_getBackgroundHeight(): number;
        itemscroller_getBackgroundWidth(): number;
    }
}
