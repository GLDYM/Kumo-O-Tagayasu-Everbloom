import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/io/github/forgestove/create_cyber_goggles/core/api" {
    export class $OutlineRenderable {
    }
    export interface $OutlineRenderable {
        ccg$render(): void;
        ccg$getRenderDelay(): number;
    }
    /**
     * Values that may be interpreted as {@link $OutlineRenderable}.
     */
    export type $OutlineRenderable_ = (() => void);
    export class $ItemRenderable {
    }
    export interface $ItemRenderable {
        ccg$getItemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ItemRenderable}.
     */
    export type $ItemRenderable_ = (() => $ItemStack_);
    export class $Self<T> {
    }
    export interface $Self<T> {
        thiz(): T;
    }
}
