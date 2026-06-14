import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractSliderButton, $ObjectSelectionList$Entry, $Button$CreateNarration_, $Button$OnPress_, $Button$CreateNarration, $WidgetTooltipHolder, $Button$Builder, $ObjectSelectionList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ScrollController, $ScrollController$IListener } from "@package/icyllis/modernui/mc";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModListScreen } from "@package/net/neoforged/neoforge/client/gui";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/neoforged/neoforge/client/gui/widget" {
    export class $ExtendedSlider extends $AbstractSliderButton {
        getValue(): number;
        setValue(arg0: number): void;
        getValueString(): string;
        getValueInt(): number;
        getValueLong(): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: boolean);
        get valueString(): string;
        get valueInt(): number;
        get valueLong(): number;
    }
    export class $ModListWidget extends $ObjectSelectionList<$ModListWidget$ModEntry> {
        refreshList(): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $ModListWidget$ModEntry;
        height: number;
        constructor(arg0: $ModListScreen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScrollPanel extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $ScrollController$IListener {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        onScrollAmountUpdated(controller: $ScrollController, amount: number): void;
        isActive(): boolean;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        get active(): boolean;
    }
    export class $ExtendedButton extends $Button {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Button$CreateNarration_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_);
    }
    export class $ModsButton extends $Button {
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
    }
    export class $ModListWidget$ModEntry extends $ObjectSelectionList$Entry<$ModListWidget$ModEntry> {
        getInfo(): $IModInfo;
        getContainer(): $ModContainer;
        get info(): $IModInfo;
        get container(): $ModContainer;
    }
    export class $UnicodeGlyphButton extends $ExtendedButton {
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        glyph: string;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        glyphScale: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: string, arg6: number, arg7: $Button$OnPress_);
    }
}
