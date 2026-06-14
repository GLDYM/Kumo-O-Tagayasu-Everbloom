import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ReportReason, $ReportReason_, $ChatReport$Builder, $NameReport$Builder, $SkinReport, $Report$Builder, $ReportingContext, $ChatReport, $NameReport, $SkinReport$Builder } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $Minecraft, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $List, $UUID_ } from "@package/java/util";
import { $LoggedChatMessage$Player, $LoggedChatMessage$Player_ } from "@package/net/minecraft/client/multiplayer/chat";
import { $Consumer_, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $WarningScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $PlayerEntry } from "@package/net/minecraft/client/gui/screens/social";

declare module "@package/net/minecraft/client/gui/screens/reporting" {
    export class $ChatReportScreen extends $AbstractReportScreen<$ChatReport$Builder> {
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
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $ChatReport);
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $UUID_);
    }
    export class $ReportPlayerScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $PlayerEntry);
    }
    export class $ChatSelectionScreen$ChatSelectionList$DividerEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList, arg1: $Component_);
    }
    export class $SkinReportScreen extends $AbstractReportScreen<$SkinReport$Builder> {
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
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $SkinReport);
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $UUID_, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $ChatSelectionScreen$ChatSelectionList$PaddingEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList);
    }
    export class $ReportReasonSelectionScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $ReportReason_, arg2: $Consumer_<$ReportReason>);
    }
    export class $AbstractReportScreen<B extends $Report$Builder<never>> extends $Screen {
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
    }
    export class $ChatSelectionLogFiller$Output {
    }
    export interface $ChatSelectionLogFiller$Output {
        acceptMessage(arg0: number, arg1: $LoggedChatMessage$Player_): void;
        acceptDivider(arg0: $Component_): void;
    }
    export class $ChatSelectionScreen$ChatSelectionList$Heading extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatSelectionScreen$ChatSelectionList$Heading}.
     */
    export type $ChatSelectionScreen$ChatSelectionList$Heading_ = { sender?: $UUID_, entry?: $ChatSelectionScreen$ChatSelectionList$Entry,  } | [sender?: $UUID_, entry?: $ChatSelectionScreen$ChatSelectionList$Entry, ];
    export class $ChatSelectionScreen$ChatSelectionList$MessageHeadingEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList, arg1: $GameProfile, arg2: $Component_, arg3: boolean);
    }
    export class $ChatSelectionLogFiller {
        fillNextPage(arg0: number, arg1: $ChatSelectionLogFiller$Output): void;
        constructor(arg0: $ReportingContext, arg1: $Predicate_<$LoggedChatMessage$Player>);
    }
    export class $ReportReasonSelectionScreen$ReasonSelectionList extends $ObjectSelectionList<$ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
        findEntry(arg0: $ReportReason_): $ReportReasonSelectionScreen$ReasonSelectionList$Entry;
        setSelected(arg0: $ReportReasonSelectionScreen$ReasonSelectionList$Entry): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $ReportReasonSelectionScreen$ReasonSelectionList$Entry;
        height: number;
        constructor(arg0: $ReportReasonSelectionScreen, arg1: $Minecraft);
        set selected(value: $ReportReasonSelectionScreen$ReasonSelectionList$Entry);
    }
    export class $ChatSelectionScreen$ChatSelectionList$Entry extends $ObjectSelectionList$Entry<$ChatSelectionScreen$ChatSelectionList$Entry> {
        isSelected(): boolean;
        canSelect(): boolean;
        canReport(): boolean;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList);
        get selected(): boolean;
    }
    export class $AbstractReportScreen$DiscardReportWarningScreen extends $WarningScreen {
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
    }
    export class $ChatSelectionScreen$ChatSelectionList extends $ObjectSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry> implements $ChatSelectionLogFiller$Output {
        setSelected(arg0: $ChatSelectionScreen$ChatSelectionList$Entry): void;
        getFooterTop(): number;
        acceptMessage(arg0: number, arg1: $LoggedChatMessage$Player_): void;
        acceptDivider(arg0: $Component_): void;
        getMaxVisibleEntries(): number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $ChatSelectionScreen$ChatSelectionList$Entry;
        height: number;
        constructor(arg0: $ChatSelectionScreen, arg1: $Minecraft, arg2: number);
        set selected(value: $ChatSelectionScreen$ChatSelectionList$Entry);
        get footerTop(): number;
        get maxVisibleEntries(): number;
    }
    export class $ChatSelectionScreen$ChatSelectionList$MessageEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList, arg1: number, arg2: $Component_, arg3: $Component_, arg4: $GuiMessageTag_, arg5: boolean, arg6: boolean);
    }
    export class $ReportReasonSelectionScreen$ReasonSelectionList$Entry extends $ObjectSelectionList$Entry<$ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
        getReason(): $ReportReason;
        constructor(arg0: $ReportReasonSelectionScreen$ReasonSelectionList, arg1: $ReportReason_);
        get reason(): $ReportReason;
    }
    export class $ChatSelectionScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $ChatReport$Builder, arg3: $Consumer_<$ChatReport$Builder>);
    }
    export class $NameReportScreen extends $AbstractReportScreen<$NameReport$Builder> {
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
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $NameReport);
        constructor(arg0: $Screen, arg1: $ReportingContext, arg2: $UUID_, arg3: string);
    }
}
