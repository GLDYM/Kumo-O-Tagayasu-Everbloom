import { $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as duck from "@package/neoforge/com/mrmelon54/DraggableLists/duck";

declare module "@package/neoforge/com/mrmelon54/DraggableLists" {
    export class $DragList<T, E extends $ObjectSelectionList$Entry<never>> {
    }
    export interface $DragList<T, E extends $ObjectSelectionList$Entry<never>> {
        draggable_lists$setScrollAmount(arg0: number): void;
        draggable_lists$getRowBottom(arg0: number): number;
        draggable_lists$getRowWidth(): number;
        draggable_lists$getIndexOfEntry(arg0: $DragItem<T, E>): number;
        draggable_lists$setDragging(arg0: boolean): void;
        draggable_lists$getItemHeight(): number;
        draggable_lists$getScrollAmount(): number;
        draggable_lists$getHeaderHeight(): number;
        draggable_lists$getItemCount(): number;
        draggable_lists$getEntryAtPosition(arg0: number, arg1: number): $DragItem<T, E>;
        draggable_lists$renderItem(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        draggable_lists$getY(): number;
        draggable_lists$getRowTop(arg0: number): number;
        draggable_lists$getRowLeft(): number;
        draggable_lists$moveEntry(arg0: $DragItem<T, E>, arg1: number): void;
        draggable_lists$getBottom(): number;
    }
    export class $DragItem<T, E extends $ObjectSelectionList$Entry<never>> {
    }
    export interface $DragItem<T, E extends $ObjectSelectionList$Entry<never>> {
        draggable_lists$getUnderlyingEntry(): E;
        draggable_lists$setBeingDragged(arg0: boolean): void;
        draggable_lists$getUnderlyingData(): T;
        draggable_lists$render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
    }
}
