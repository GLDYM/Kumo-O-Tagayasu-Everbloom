import { $Consumer_ } from "@package/java/util/function";
import { $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $TabButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Iterable_ } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $TabNavigationBarAccessor } from "@package/dev/isxander/yacl3/mixin";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    export class $TabNavigationBar$Builder {
        build(): $TabNavigationBar;
        addTabs(...arg0: $Tab[]): $TabNavigationBar$Builder;
    }
    export class $TabManager {
        getCurrentTab(): $Tab;
        setTabArea(arg0: $ScreenRectangle_): void;
        setCurrentTab(arg0: $Tab, arg1: boolean): void;
        constructor(arg0: $Consumer_<$AbstractWidget>, arg1: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $Tab {
    }
    export interface $Tab {
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        doLayout(arg0: $ScreenRectangle_): void;
        getTabTitle(): $Component;
        get tabTitle(): $Component;
    }
    export class $GridLayoutTab implements $Tab {
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        doLayout(arg0: $ScreenRectangle_): void;
        getTabTitle(): $Component;
        constructor(arg0: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $TabNavigationBarAccessor {
        static builder(arg0: $TabManager, arg1: number): $TabNavigationBar$Builder;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setWidth(arg0: number): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        arrangeElements(): void;
        updateNarration(arg0: $NarrationElementOutput): void;
        keyPressed(arg0: number): boolean;
        selectTab(arg0: number, arg1: boolean): void;
        isActive(): boolean;
        yacl$getTabs(): $ImmutableList<$Tab>;
        yacl$getTabButtons(): $ImmutableList<$TabButton>;
        yacl$getLayout(): $LinearLayout;
        yacl$getTabManager(): $TabManager;
        yacl$getWidth(): number;
        constructor(arg0: number, arg1: $TabManager, arg2: $Iterable_<$Tab>);
        set width(value: number);
        get active(): boolean;
    }
}
