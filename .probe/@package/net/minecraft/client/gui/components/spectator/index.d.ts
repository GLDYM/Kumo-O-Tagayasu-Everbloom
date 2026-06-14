import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        renderHotbar(arg0: $GuiGraphics): void;
        renderTooltip(arg0: $GuiGraphics): void;
        onMouseScrolled(arg0: number): void;
        isMenuActive(): boolean;
        onMouseMiddleClick(): void;
        onHotbarSelected(arg0: number): void;
        onSpectatorMenuClosed(arg0: $SpectatorMenu): void;
        constructor(arg0: $Minecraft);
        get menuActive(): boolean;
    }
}
