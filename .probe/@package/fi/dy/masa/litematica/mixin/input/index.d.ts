import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/fi/dy/masa/litematica/mixin/input" {
    export class $IMixinKeyBinding {
    }
    export interface $IMixinKeyBinding {
        litematica_getBoundKey(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $IMixinKeyBinding}.
     */
    export type $IMixinKeyBinding_ = (() => $InputConstants$Key);
}
