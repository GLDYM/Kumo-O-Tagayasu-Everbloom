import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $WidgetTooltipHolder, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/debug" {
    export class $GameModeSwitcherScreen$GameModeIcon extends $Enum<$GameModeSwitcherScreen$GameModeIcon> {
    }
    /**
     * Values that may be interpreted as {@link $GameModeSwitcherScreen$GameModeIcon}.
     */
    export type $GameModeSwitcherScreen$GameModeIcon_ = "creative" | "survival" | "adventure" | "spectator";
    export class $GameModeSwitcherScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $GameModeSwitcherScreen$GameModeSlot extends $AbstractWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setSelected(arg0: boolean): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $GameModeSwitcherScreen, arg1: $GameModeSwitcherScreen$GameModeIcon_, arg2: number, arg3: number);
        set selected(value: boolean);
    }
}
