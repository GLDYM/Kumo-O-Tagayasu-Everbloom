import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $BooleanConsumer_, $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftFocusableWidget, $FocusContainer, $Rectangle } from "@package/io/github/reserveword/imblocker/common/gui";
import { $Color4I, $ImageIcon, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Iterable_, $Enum, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Key, $KeyModifiers, $MouseButton } from "@package/dev/ftb/mods/ftblibrary/ui/input";
export * as input from "@package/dev/ftb/mods/ftblibrary/ui/input";

declare module "@package/dev/ftb/mods/ftblibrary/ui" {
    export class $ContextMenu extends $ModalPanel implements $PopupMenu {
        getModalPanel(): $ModalPanel;
        setMaxRows(maxRows: number): void;
        hasIcons(): boolean;
        setDrawVerticalSeparators(drawVerticalSeparators: boolean): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        get modalPanel(): $ModalPanel;
        set maxRows(value: number);
        set drawVerticalSeparators(value: boolean);
    }
    export class $Panel extends $Widget {
        add(widget: $Widget): void;
        addAll(list: $Iterable_<$Widget>): void;
        setOffset(flag: boolean): void;
        align(layout: $WidgetLayout_): number;
        clearWidgets(): void;
        getWidget(index: number): $Widget;
        alignWidgets(): void;
        setScrollStep(s: number): void;
        refreshWidgets(): void;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        movePanelScroll(dx: number, dy: number): boolean;
        getScrollStep(): number;
        getContentWidth(): number;
        scrollPanel(scroll: number): boolean;
        getScrollX(): number;
        getScrollY(): number;
        setScrollX(scroll: number): void;
        setScrollY(scroll: number): void;
        getContentHeight(): number;
        addWidgets(): void;
        getWidgets(): $List<$Widget>;
        isDefaultScrollVertical(): boolean;
        isMouseOverAnyWidget(): boolean;
        drawOffsetBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getOnlyRenderWidgetsInside(): boolean;
        getOnlyInteractWithWidgetsInside(): boolean;
        handler$jca001$imblocker$onScroll(arg0: number, arg1: $CallbackInfo): void;
        setOnlyRenderWidgetsInside(value: boolean): void;
        isOffset(): boolean;
        drawWidget(graphics: $GuiGraphics, theme: $Theme, widget: $Widget, x: number, y: number, w: number, h: number): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
        get contentWidth(): number;
        get contentHeight(): number;
        get widgets(): $List<$Widget>;
        get defaultScrollVertical(): boolean;
        get mouseOverAnyWidget(): boolean;
    }
    export class $WidgetType extends $Enum<$WidgetType> {
        static values(): $WidgetType[];
        static valueOf(name: string): $WidgetType;
        static mouseOver(mouseOver: boolean): $WidgetType;
        static DISABLED: $WidgetType;
        static MOUSE_OVER: $WidgetType;
        static NORMAL: $WidgetType;
    }
    /**
     * Values that may be interpreted as {@link $WidgetType}.
     */
    export type $WidgetType_ = "normal" | "mouse_over" | "disabled";
    export class $Theme {
        getFont(): $Font;
        drawPanelBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, flags: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, color: $Color4I, flags: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number): number;
        getFontHeight(): number;
        drawTextBox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        getContentColor(type: $WidgetType_): $Color4I;
        trimStringToWidth(text: $FormattedText, width: number): $FormattedText;
        trimStringToWidth(text: string, width: number): string;
        getStringWidth(text: $FormattedText): number;
        getStringWidth(text: string): number;
        getStringWidth(text: $FormattedCharSequence_): number;
        drawScrollBarBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawGui(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawWidget(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawContextMenuBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawScrollBar(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, vertical: boolean): void;
        drawSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawButton(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawCheckbox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, selected: boolean, radioButton: boolean): void;
        drawHorizontalTab(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, selected: boolean): void;
        drawContainerSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        listFormattedStringToWidth(text: $FormattedText, width: number): $List<$FormattedText>;
        drawCheckboxBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, radioButton: boolean): void;
        getInvertedContentColor(): $Color4I;
        trimStringToWidthReverse(text: string, width: number): string;
        static MOUSE_OVER: number;
        static BACKGROUND_SQUARES: $ImageIcon;
        static CENTERED: number;
        static SHADOW: number;
        static CENTERED_V: number;
        static DARK: number;
        static renderDebugBoxes: boolean;
        static UNICODE: number;
        static DEFAULT: $Theme;
        constructor();
        get font(): $Font;
        get fontHeight(): number;
        get invertedContentColor(): $Color4I;
    }
    export class $BaseScreen extends $Panel {
        drawForeground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        onInit(): boolean;
        getTheme(): $Theme;
        onPostInit(): void;
        shouldCloseOnEsc(): boolean;
        getMinecraft(): $Minecraft;
        isMouseOver(x: number, y: number, w: number, h: number): boolean;
        isMouseOver(widget: $Widget): boolean;
        initGui(): void;
        anyModalPanelOpen(): boolean;
        openPopupMenu(popupMenu: $PopupMenu_): void;
        popModalPanel(): $ModalPanel;
        setPreviousScreen(prevScreen: $Screen): void;
        shouldRenderBlur(): boolean;
        setRenderBlur(renderBlur: boolean): void;
        pushModalPanel(modalPanel: $ModalPanel): void;
        closeModalPanel(panel: $ModalPanel): void;
        getPrevScreen(): $Screen;
        onClosedByKey(key: $Key): boolean;
        getContextMenu(): ($ModalPanel) | undefined;
        doesGuiPauseGame(): boolean;
        getMaxZLevel(): number;
        openDropdownMenu(dropDownMenu: $DropDownMenu): void;
        openDropdownMenu(menuItems: $List_<$ContextMenuItem>): $DropDownMenu;
        openYesNoFull(title: $Component_, desc: $Component_, callback: $BooleanConsumer_): void;
        setFocusedWidget(widget: $Widget): void;
        openContextMenu(menuItems: $List_<$ContextMenuItem>): $ContextMenu;
        openContextMenu(newContextMenu: $ContextMenu): void;
        usePreviousScreenOnBack(): boolean;
        drawDefaultBackground(graphics: $GuiGraphics): boolean;
        updateGui(mx: number, my: number, pt: number): void;
        openYesNo(title: $Component_, desc: $Component_, callback: $Runnable_): void;
        onBack(): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(previousScreen: $Screen);
        constructor();
        get theme(): $Theme;
        get minecraft(): $Minecraft;
        set previousScreen(value: $Screen);
        set renderBlur(value: boolean);
        get prevScreen(): $Screen;
        get contextMenu(): ($ModalPanel) | undefined;
        get maxZLevel(): number;
        set focusedWidget(value: $Widget);
    }
    export class $ModalPanel extends $Panel {
        getExtraZlevel(): number;
        setExtraZlevel(extraZlevel: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
    }
    export class $IScreenWrapper {
    }
    export interface $IScreenWrapper extends $IOpenableScreen {
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        getGui(): $BaseScreen;
        get gui(): $BaseScreen;
    }
    /**
     * Values that may be interpreted as {@link $IScreenWrapper}.
     */
    export type $IScreenWrapper_ = (() => $BaseScreen);
    export class $CursorType extends $Enum<$CursorType> {
        static values(): $CursorType[];
        static valueOf(name: string): $CursorType;
        static set(type: $CursorType_): void;
        static VRESIZE: $CursorType;
        static ARROW: $CursorType;
        static CROSSHAIR: $CursorType;
        static IBEAM: $CursorType;
        static HRESIZE: $CursorType;
        static HAND: $CursorType;
    }
    /**
     * Values that may be interpreted as {@link $CursorType}.
     */
    export type $CursorType_ = "arrow" | "ibeam" | "crosshair" | "hand" | "hresize" | "vresize";
    export class $Button extends $Widget {
        setIcon(i: $Icon): $Button;
        setTitle(s: $Component_): $Button;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        setForceButtonSize(forceButtonSize: boolean): $Button;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        onClicked(arg0: $MouseButton): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, t: $Component_, i: $Icon);
        constructor(panel: $Panel);
        set icon(value: $Icon);
        set title(value: $Component_);
        set forceButtonSize(value: boolean);
    }
    export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
        getModalPanel(): $ModalPanel;
        setMaxHeightPercent(maxHeightPercent: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        get modalPanel(): $ModalPanel;
        set maxHeightPercent(value: number);
    }
    export class $IOpenableScreen {
    }
    export interface $IOpenableScreen extends $Runnable {
        run(): void;
        closeGui(): void;
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        openAfter(runnable: $Runnable_): $Runnable;
    }
    /**
     * Values that may be interpreted as {@link $IOpenableScreen}.
     */
    export type $IOpenableScreen_ = (() => void);
    export class $WidgetLayout {
        static VERTICAL: $WidgetLayout;
        static NO_PADDING: $WidgetLayout$Padding;
        static HORIZONTAL: $WidgetLayout;
        static NONE: $WidgetLayout;
    }
    export interface $WidgetLayout {
        align(arg0: $Panel): number;
        getLayoutPadding(): $WidgetLayout$Padding;
        get layoutPadding(): $WidgetLayout$Padding;
    }
    /**
     * Values that may be interpreted as {@link $WidgetLayout}.
     */
    export type $WidgetLayout_ = ((arg0: $Panel) => number);
    export class $PopupMenu {
    }
    export interface $PopupMenu {
        getModalPanel(): $ModalPanel;
        get modalPanel(): $ModalPanel;
    }
    /**
     * Values that may be interpreted as {@link $PopupMenu}.
     */
    export type $PopupMenu_ = (() => $ModalPanel);
    export class $ContextMenuItem implements $Comparable<$ContextMenuItem> {
        compareTo(o: $ContextMenuItem): number;
        isEnabled(): boolean;
        static separator(): $ContextMenuItem;
        static title(title: $Component_): $ContextMenuItem;
        getTitle(): $Component;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        isClickable(): boolean;
        addMouseOverText(list: $TooltipList): void;
        setEnabled(enabled: boolean): $ContextMenuItem;
        createWidget(panel: $ContextMenu): $Widget;
        onClicked(button: $Button, panel: $Panel, mouseButton: $MouseButton): void;
        getIcon(): $Icon;
        getYesNoText(): $Component;
        setYesNoText(s: $Component_): $ContextMenuItem;
        setCloseMenu(v: boolean): $ContextMenuItem;
        static subMenu(title: $Component_, icon: $Icon, subItems: $List_<$ContextMenuItem>): $ContextMenuItem;
        static SEPARATOR: $ContextMenuItem;
        constructor(title: $Component_, icon: $Icon, callback: $Consumer_<$Button>);
        get clickable(): boolean;
        get icon(): $Icon;
        set closeMenu(value: boolean);
    }
    export class $Widget$DrawLayer extends $Enum<$Widget$DrawLayer> {
        static values(): $Widget$DrawLayer[];
        static valueOf(name: string): $Widget$DrawLayer;
        static FOREGROUND: $Widget$DrawLayer;
        static BACKGROUND: $Widget$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $Widget$DrawLayer}.
     */
    export type $Widget$DrawLayer_ = "background" | "foreground";
    export class $Widget implements $IScreenWrapper, $Comparable<$Widget>, $MinecraftFocusableWidget {
        compareTo(widget: $Widget): number;
        isEnabled(): boolean;
        getParent(): $Panel;
        tick(): void;
        setSize(w: number, h: number): void;
        getWidth(): number;
        getY(): number;
        getTitle(): $Component;
        getPosY(): number;
        getPosX(): number;
        draw(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getHeight(): number;
        getWindow(): $Window;
        getCursor(): $CursorType;
        getIngredientUnderMouse(): ($PositionedIngredient) | undefined;
        setWidth(v: number): void;
        setHeight(v: number): void;
        isMouseOver(): boolean;
        mouseReleased(button: $MouseButton): void;
        mouseScrolled(scroll: number): boolean;
        keyReleased(key: $Key): void;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        /**
         * @deprecated
         */
        getScreen(): $Window;
        getBoundsAbs(): $Rectangle;
        setPosAndSize(x: number, y: number, w: number, h: number): $Widget;
        setPos(x: number, y: number): void;
        handleClick(scheme: string, path: string): boolean;
        handleClick(click: string): boolean;
        onClosed(): void;
        static isKeyDown(key: number): boolean;
        updateMouseOver(mouseX: number, mouseY: number): void;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        addMouseOverText(list: $TooltipList): void;
        mouseDoubleClicked(button: $MouseButton): boolean;
        mousePressed(button: $MouseButton): boolean;
        getPartialTicks(): number;
        getX(): number;
        setX(v: number): void;
        setY(v: number): void;
        keyPressed(key: $Key): boolean;
        charTyped(c: string, modifiers: $KeyModifiers): boolean;
        static isShiftKeyDown(): boolean;
        handleBoundsChanged(): void;
        shouldAddMouseOverText(): boolean;
        getMouseY(): number;
        getMouseX(): number;
        handler$jbo000$imblocker$handleHeightChanged(arg0: number, arg1: $CallbackInfo): void;
        handler$jbo000$imblocker$handleWidthChanged(arg0: number, arg1: $CallbackInfo): void;
        acceptGhostIngredient(ingredient: $Object): void;
        isGhostIngredientTarget(ingredient: $Object): boolean;
        handler$jbo000$imblocker$handleXChanged(arg0: number, arg1: $CallbackInfo): void;
        handler$jbo000$imblocker$cancelFocus(arg0: $CallbackInfo): void;
        handler$jbo000$imblocker$handleYChanged(arg0: number, arg1: $CallbackInfo): void;
        shouldDraw(): boolean;
        getGui(): $BaseScreen;
        static isCtrlKeyDown(): boolean;
        static setClipboardString(string: string): void;
        static getClipboardString(): string;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        getWidgetType(): $WidgetType;
        getDrawLayer(): $Widget$DrawLayer;
        setDrawLayer(drawLayer: $Widget$DrawLayer_): void;
        playClickSound(): void;
        getAbsoluteX(): number;
        getAbsoluteY(): number;
        static isMouseButtonDown(button: $MouseButton): boolean;
        closeGui(openPrevScreen: boolean): void;
        openGui(): void;
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusLost(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        imblocker$onFocusGained(): void;
        getFocusContainer(): $FocusContainer;
        run(): void;
        closeGui(): void;
        closeContextMenu(): void;
        openGuiLater(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        getGuiScale(): number;
        getPreferredState(): boolean;
        isRenderable(): boolean;
        getPreferredEnglishState(): boolean;
        deliverFocus(): void;
        getFontHeight(): number;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        lostFocus(): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(p: $Panel);
        get enabled(): boolean;
        get parent(): $Panel;
        get title(): $Component;
        get window(): $Window;
        get cursor(): $CursorType;
        get ingredientUnderMouse(): ($PositionedIngredient) | undefined;
        get mouseOver(): boolean;
        get screen(): $Window;
        get boundsAbs(): $Rectangle;
        get partialTicks(): number;
        static get shiftKeyDown(): boolean;
        get mouseY(): number;
        get mouseX(): number;
        get gui(): $BaseScreen;
        static get ctrlKeyDown(): boolean;
        get widgetType(): $WidgetType;
        get absoluteX(): number;
        get absoluteY(): number;
        get focusContainer(): $FocusContainer;
        get guiScale(): number;
        get preferredState(): boolean;
        get renderable(): boolean;
        get preferredEnglishState(): boolean;
        get fontHeight(): number;
        get trulyFocused(): boolean;
    }
}
