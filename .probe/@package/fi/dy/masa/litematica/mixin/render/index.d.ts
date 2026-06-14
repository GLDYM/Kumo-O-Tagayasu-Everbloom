import { $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";

declare module "@package/fi/dy/masa/litematica/mixin/render" {
    export class $IMixinBlockRenderManager {
    }
    export interface $IMixinBlockRenderManager {
        litematica_getBuiltinRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    /**
     * Values that may be interpreted as {@link $IMixinBlockRenderManager}.
     */
    export type $IMixinBlockRenderManager_ = (() => $BlockEntityWithoutLevelRenderer);
}
