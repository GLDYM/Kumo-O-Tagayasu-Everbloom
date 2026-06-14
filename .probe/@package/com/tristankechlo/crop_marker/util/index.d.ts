import { $ModelResourceLocation, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";

declare module "@package/com/tristankechlo/crop_marker/util" {
    export class $ModelBakerAddon {
    }
    export interface $ModelBakerAddon {
        FullGrownCropMarker$id(): $ModelResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakerAddon}.
     */
    export type $ModelBakerAddon_ = (() => $ModelResourceLocation_);
    export class $ResourceLocationHelper {
    }
    export interface $ResourceLocationHelper {
        FullGrownCropMarker$shouldHaveMarker(): boolean;
        FullGrownCropMarker$setShouldHaveMarker(arg0: boolean): void;
    }
}
