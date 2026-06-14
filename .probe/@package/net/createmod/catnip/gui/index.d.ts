import { $BindableTexture } from "@package/net/createmod/catnip/render";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as widget from "@package/net/createmod/catnip/gui/widget";
export * as element from "@package/net/createmod/catnip/gui/element";

declare module "@package/net/createmod/catnip/gui" {
    export class $TextureSheetSegment {
    }
    export interface $TextureSheetSegment extends $BindableTexture {
        getWidth(): number;
        getHeight(): number;
        getStartX(): number;
        getStartY(): number;
        get width(): number;
        get height(): number;
        get startX(): number;
        get startY(): number;
    }
    export class $TickableGuiEventListener {
    }
    export interface $TickableGuiEventListener extends $GuiEventListener {
        tick(): void;
    }
}
