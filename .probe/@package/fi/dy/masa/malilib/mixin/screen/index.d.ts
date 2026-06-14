import { $Slot } from "@package/net/minecraft/world/inventory";

declare module "@package/fi/dy/masa/malilib/mixin/screen" {
    export class $IMixinHandledScreen {
    }
    export interface $IMixinHandledScreen {
        malilib_getFocusedSlot(): $Slot;
    }
    /**
     * Values that may be interpreted as {@link $IMixinHandledScreen}.
     */
    export type $IMixinHandledScreen_ = (() => $Slot);
}
