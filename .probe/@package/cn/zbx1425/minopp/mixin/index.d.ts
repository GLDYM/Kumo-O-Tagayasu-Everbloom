import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/cn/zbx1425/minopp/mixin" {
    export class $KeyMappingAccessor {
    }
    export interface $KeyMappingAccessor {
        getKey(): $InputConstants$Key;
        get key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingAccessor}.
     */
    export type $KeyMappingAccessor_ = (() => $InputConstants$Key);
}
