import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $Object, $AutoCloseable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractPackDuckProvider, $ResourcePackOrganizerDuckProvider } from "@package/neoforge/com/mrmelon54/DraggableLists/duck";
import { $DragList, $DragItem } from "@package/neoforge/com/mrmelon54/DraggableLists";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel implements $ResourcePackOrganizerDuckProvider {
        commit(): void;
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        draggable_lists$updateSelectedList(): void;
        findNewPacks(): void;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        constructor(arg0: $Runnable_, arg1: $Function_<$Pack, $ResourceLocation>, arg2: $PackRepository, arg3: $Consumer_<$PackRepository>);
        get selected(): $Stream<$PackSelectionModel$Entry>;
        get unselected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> implements $DragList<any, any> {
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
        constructor(arg0: $Minecraft, arg1: $PackSelectionScreen, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry, $AbstractPackDuckProvider {
        canSelect(): boolean;
        canUnselect(): boolean;
        getExtendedDescription(): $Component;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        updateFocus(arg0: $TransferableSelectionList): void;
        clearSelected(): void;
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
        constructor(arg0: $PackRepository, arg1: $Consumer_<$PackRepository>, arg2: $Path_, arg3: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> implements $DragItem<any, any> {
        getPackId(): string;
        keyboardSelection(): void;
        draggable_lists$getUnderlyingEntry(): $TransferableSelectionList$PackEntry;
        draggable_lists$setBeingDragged(v: boolean): void;
        draggable_lists$getUnderlyingData(): $PackSelectionModel$Entry;
        draggable_lists$render(guiGraphics: $GuiGraphics, index: number, y: number, x: number, entryWidth: number, entryHeight: number, mouseX: number, mouseY: number, hovered: boolean, tickDelta: number): void;
        handler$gme000$draggable_lists$removeMoveTowardEnd(d: number, e: number, i: number, cir: $CallbackInfoReturnable<any>): void;
        wrapWithCondition$gme000$draggable_lists$removeOnUpArrowButtons(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        wrapWithCondition$gme000$draggable_lists$removeOnDownArrowButtons(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        wrapWithCondition$gme000$draggable_lists$removeOffUpArrowButtons(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        wrapWithCondition$gme000$draggable_lists$removeOffDownArrowButtons(instance: $GuiGraphics, resourceLocation: $ResourceLocation_, i: number, j: number, k: number, l: number): boolean;
        constructor(arg0: $Minecraft, arg1: $TransferableSelectionList, arg2: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        getId(): string;
        getDescription(): $Component;
        getCompatibility(): $PackCompatibility;
        select(): void;
        getIconTexture(): $ResourceLocation;
        isSelected(): boolean;
        getTitle(): $Component;
        isRequired(): boolean;
        isFixedPosition(): boolean;
        getPackSource(): $PackSource;
        moveUp(): void;
        moveDown(): void;
        canMoveUp(): boolean;
        unselect(): void;
        canSelect(): boolean;
        canUnselect(): boolean;
        canMoveDown(): boolean;
        getExtendedDescription(): $Component;
        get id(): string;
        get description(): $Component;
        get compatibility(): $PackCompatibility;
        get iconTexture(): $ResourceLocation;
        get selected(): boolean;
        get title(): $Component;
        get required(): boolean;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get extendedDescription(): $Component;
    }
}
