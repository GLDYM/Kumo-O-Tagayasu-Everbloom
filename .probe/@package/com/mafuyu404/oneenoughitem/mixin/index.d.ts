import { $PatchedDataComponentMap } from "@package/net/minecraft/core/component";

declare module "@package/com/mafuyu404/oneenoughitem/mixin" {
    export class $ItemStackAccessor {
    }
    export interface $ItemStackAccessor {
        oei$getComponents(): $PatchedDataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackAccessor}.
     */
    export type $ItemStackAccessor_ = (() => $PatchedDataComponentMap);
}
