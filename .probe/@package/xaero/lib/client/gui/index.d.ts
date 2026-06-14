import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $DropDownWidget, $IDropDownContainer } from "@package/xaero/lib/client/gui/widget/dropdown";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $WidgetScreen } from "@package/xaero/lib/client/gui/widget/online";
export * as widget from "@package/xaero/lib/client/gui/widget";
export * as config from "@package/xaero/lib/client/gui/config";

declare module "@package/xaero/lib/client/gui" {
    export class $IScreenBase {
    }
    export interface $IScreenBase extends $IDropDownContainer {
        shouldSkipWorldRender(): boolean;
        getEscape(): $Screen;
        get escape(): $Screen;
    }
    export class $GuiSettings extends $ScreenBase implements $WidgetScreen {
        init(): void;
        getScreen<S extends $Screen>(): S;
        addButtonVisible(arg0: $AbstractWidget): void;
        getEntriesCopy(): $ISettingEntry[];
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_, arg1: $Screen, arg2: $Screen);
        constructor(arg0: $Component_, arg1: $Screen, arg2: $Screen, arg3: boolean);
        get screen(): S;
        get entriesCopy(): $ISettingEntry[];
    }
    export class $ScreenBase extends $Screen implements $IScreenBase {
        onExit(arg0: $Screen): void;
        getIndex(arg0: $GuiEventListener): number;
        refresh(): void;
        goBack(): void;
        replaceRenderableWidget(arg0: $AbstractWidget, arg1: $AbstractWidget): void;
        shouldSkipWorldRender(): boolean;
        static tryToGetEscape(arg0: $Screen): $Screen;
        canSkipWorldRender(): boolean;
        renderEscapeScreen(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        replaceWidget(arg0: $AbstractWidget, arg1: $AbstractWidget): void;
        restoreFocus(arg0: number): void;
        onDropdownClosed(arg0: $DropDownWidget): void;
        onDropdownOpen(arg0: $DropDownWidget): void;
        getEscape(): $Screen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ISettingEntry {
    }
    export interface $ISettingEntry {
        createWidget(arg0: number, arg1: number, arg2: number): $AbstractWidget;
        getStringForSearch(): string;
        get stringForSearch(): string;
    }
}
