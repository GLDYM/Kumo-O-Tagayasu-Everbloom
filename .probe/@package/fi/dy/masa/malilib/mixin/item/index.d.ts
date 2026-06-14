import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/fi/dy/masa/malilib/mixin/item" {
    export class $IMixinContainerComponent {
    }
    export interface $IMixinContainerComponent {
        malilib_getStacks(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinContainerComponent}.
     */
    export type $IMixinContainerComponent_ = (() => $NonNullList<$ItemStack_>);
}
