import { $Camera } from "@package/net/minecraft/client";
import { $HitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/github/exopandora/shouldersurfing/mixins" {
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        invokeCanRenderCrosshairForSpectator(arg0: $HitResult): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GuiAccessor}.
     */
    export type $GuiAccessor_ = ((arg0: $HitResult) => boolean);
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        getMainCamera(): $Camera;
        get mainCamera(): $Camera;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = (() => $Camera);
}
