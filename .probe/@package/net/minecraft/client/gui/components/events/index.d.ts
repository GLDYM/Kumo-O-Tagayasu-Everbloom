import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $List } from "@package/java/util";
import { $ComponentPath } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        children(): $List<$GuiEventListener>;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        setDragging(arg0: boolean): void;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getFocused(): $GuiEventListener;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        isFocused(): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        charTyped(arg0: string, arg1: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseMoved(arg0: number, arg1: number): void;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
