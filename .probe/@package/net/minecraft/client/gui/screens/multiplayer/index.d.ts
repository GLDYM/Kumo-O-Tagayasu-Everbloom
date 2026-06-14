import { $ServerLinks_ } from "@package/net/minecraft/server";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $AutoCloseable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $DragList, $DragItem } from "@package/neoforge/com/mrmelon54/DraggableLists";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $LanServer;
        getServerNarration(): $Component;
        get serverData(): $LanServer;
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen {
        setSelected(arg0: $ServerSelectionList$Entry): void;
        joinSelectedServer(): void;
        getPinger(): $ServerStatusPinger;
        getServers(): $ServerList;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
        set selected(value: $ServerSelectionList$Entry);
        get pinger(): $ServerStatusPinger;
        get servers(): $ServerList;
    }
    export class $SafetyScreen extends $WarningScreen {
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
        constructor(arg0: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(arg0: $Component_, arg1: $Connection);
    }
    export class $WarningScreen extends $Screen {
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
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> implements $DragList<any, any> {
        removed(): void;
        setSelected(arg0: $ServerSelectionList$Entry): void;
        updateOnlineServers(arg0: $ServerList): void;
        updateNetworkServers(arg0: $List_<$LanServer>): void;
        draggable_lists$setScrollAmount(v: number): void;
        draggable_lists$getRowBottom(i: number): number;
        draggable_lists$getRowWidth(): number;
        draggable_lists$getIndexOfEntry(selectedItem: $DragItem<any, any>): number;
        draggable_lists$setDragging(b: boolean): void;
        draggable_lists$getItemHeight(): number;
        draggable_lists$getScrollAmount(): number;
        draggable_lists$getHeaderHeight(): number;
        draggable_lists$getItemCount(): number;
        draggable_lists$getEntryAtPosition(mouseX: number, mouseY: number): $DragItem<any, any>;
        draggable_lists$renderItem(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, tickDelta: number, i: number, rowLeft: number, rowTop: number, rowWidth: number, rowHeight: number): void;
        draggable_lists$getY(): number;
        draggable_lists$getRowTop(i: number): number;
        draggable_lists$getRowLeft(): number;
        draggable_lists$moveEntry(item: $DragItem<any, any>, n: number): void;
        draggable_lists$getBottom(): number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $Object;
        height: number;
        constructor(arg0: $JoinMultiplayerScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number);
        set selected(value: $ServerSelectionList$Entry);
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry implements $DragItem<any, any> {
        getServerData(): $ServerData;
        wrapWithCondition$gmg000$draggable_lists$removeDownButton(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        wrapWithCondition$gmg000$draggable_lists$removeUpButton(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        updateServerList(): void;
        wrapWithCondition$gmg000$draggable_lists$removeDownOnButton(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        draggable_lists$getUnderlyingEntry(): $ServerSelectionList$OnlineServerEntry;
        draggable_lists$setBeingDragged(v: boolean): void;
        draggable_lists$getUnderlyingData(): $ServerData;
        draggable_lists$render(guiGraphics: $GuiGraphics, index: number, y: number, x: number, entryWidth: number, entryHeight: number, mouseX: number, mouseY: number, hovered: boolean, tickDelta: number): void;
        handler$gmg000$draggable_lists$removeSwapEntries(d: number, e: number, i: number, cir: $CallbackInfoReturnable<any>): void;
        wrapWithCondition$gmg000$draggable_lists$removeUpOnButton(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $ServerLinksScreen$LinkListEntry;
        height: number;
    }
    export class $ServerLinksScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $ServerLinks_);
    }
}
