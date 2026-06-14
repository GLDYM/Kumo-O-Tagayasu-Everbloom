import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        size(): number;
        isClosed(): boolean;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setActive(arg0: boolean): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getSelected(): number;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setClosed(arg0: boolean): void;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        selectId(arg0: number, arg1: boolean): void;
        getXWithOffset(): number;
        getRenderY(): number;
        getRenderYWithOffset(): number;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static LINE_HEIGHT: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        x: number;
        y: number;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        height: number;
        get selected(): number;
        get XWithOffset(): number;
        get renderY(): number;
        get renderYWithOffset(): number;
    }
}
