import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";

declare module "@package/com/tristankechlo/crop_marker/mixin" {
    export class $CropBlockAccessor {
    }
    export interface $CropBlockAccessor {
        FullGrownCropMarker$getAgeProp(): $IntegerProperty;
    }
    /**
     * Values that may be interpreted as {@link $CropBlockAccessor}.
     */
    export type $CropBlockAccessor_ = (() => $IntegerProperty);
}
