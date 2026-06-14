import { $Event } from "@package/net/neoforged/bus/api";
import { $ZEarlyRender } from "@package/org/violetmoon/zeta/client/event/play";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/org/violetmoon/zetaimplforge/client/event/play" {
    export class $ForgeZEarlyRender extends $Event implements $ZEarlyRender {
        guiGraphics(): $GuiGraphics;
        constructor();
    }
}
