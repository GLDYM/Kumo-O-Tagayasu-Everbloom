import { $IZetaLoadEvent, $IZetaPlayEvent } from "@package/org/violetmoon/zeta/event/bus";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/org/violetmoon/zeta/client/event/play" {
    export class $ZScreenshot {
    }
    export interface $ZScreenshot extends $IZetaPlayEvent {
    }
    export class $ZFirstClientTick {
    }
    export interface $ZFirstClientTick extends $IZetaLoadEvent {
    }
    export class $ZEarlyRender {
    }
    export interface $ZEarlyRender extends $IZetaPlayEvent {
        guiGraphics(): $GuiGraphics;
    }
    /**
     * Values that may be interpreted as {@link $ZEarlyRender}.
     */
    export type $ZEarlyRender_ = (() => $GuiGraphics);
}
