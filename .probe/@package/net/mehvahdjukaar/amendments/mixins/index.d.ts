import { $WoodType_, $WoodType } from "@package/net/minecraft/world/level/block/state/properties";
import { $Material } from "@package/net/minecraft/client/resources/model";

declare module "@package/net/mehvahdjukaar/amendments/mixins" {
    export class $SignRendererAccessor {
    }
    export interface $SignRendererAccessor {
        invokeGetSignMaterial(arg0: $WoodType_): $Material;
    }
    /**
     * Values that may be interpreted as {@link $SignRendererAccessor}.
     */
    export type $SignRendererAccessor_ = ((arg0: $WoodType) => $Material);
}
