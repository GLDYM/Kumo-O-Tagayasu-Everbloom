import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $DisableableWidget, $Requirement, $TickableWidget, $HideableWidget, $Requirement_ } from "@package/me/shedaniel/clothconfig2/api";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/me/shedaniel/clothconfig2/gui/widget" {
    export class $DynamicElementListWidget$ElementEntry<E extends $DynamicElementListWidget$ElementEntry<E>> extends $DynamicEntryListWidget$Entry<E> implements $ContainerEventHandler, $NarratableEntry {
        isActive(): boolean;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        setDragging(bl: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(guiEventListener: $GuiEventListener): void;
        isDragging(): boolean;
        focusPathAtIndex(focusNavigationEvent: $FocusNavigationEvent_, i: number): $ComponentPath;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        constructor();
        get active(): boolean;
    }
    export class $DynamicEntryListWidget$Entry<E extends $DynamicEntryListWidget$Entry<E>> implements $GuiEventListener, $TickableWidget, $HideableWidget, $DisableableWidget {
        isEnabled(): boolean;
        getParent(): $DynamicEntryListWidget<E>;
        tick(): void;
        setParent(parent: $DynamicEntryListWidget<E>): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        narratables(): $List<$NarratableEntry>;
        isMouseOver(double_1: number, double_2: number): boolean;
        getRequirement(): $Requirement;
        getItemHeight(): number;
        isDisplayed(): boolean;
        setRequirement(requirement: $Requirement_): void;
        setDisplayRequirement(requirement: $Requirement_): void;
        getDisplayRequirement(): $Requirement;
        /**
         * @deprecated
         */
        getMorePossibleHeight(): number;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getTabOrderGroup(): number;
        constructor();
        get enabled(): boolean;
        get itemHeight(): number;
        get displayed(): boolean;
        get morePossibleHeight(): number;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
}
