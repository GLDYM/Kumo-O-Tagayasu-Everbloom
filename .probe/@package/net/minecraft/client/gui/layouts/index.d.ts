import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AccessorGridLayout } from "@package/io/github/satxm/mcwifipnp/mixin";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout implements $AccessorGridLayout {
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $Consumer_<$LayoutSettings>): T;
        newCellSettings(): $LayoutSettings;
        spacing(arg0: number): $GridLayout;
        createRowHelper(arg0: number): $GridLayout$RowHelper;
        defaultCellSetting(): $LayoutSettings;
        columnSpacing(arg0: number): $GridLayout;
        rowSpacing(arg0: number): $GridLayout;
        getChildren(): $List<$LayoutElement>;
        constructor();
        constructor(arg0: number, arg1: number);
        get children(): $List<$LayoutElement>;
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        getGrid(): $GridLayout;
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        static centerInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_): void;
        static centerInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_, arg2: number, arg3: number): void;
        setMinHeight(arg0: number): $FrameLayout;
        setMinWidth(arg0: number): $FrameLayout;
        defaultChildLayoutSetting(): $LayoutSettings;
        static alignInDimension(arg0: number, arg1: number, arg2: number, arg3: $Consumer_<number>, arg4: number): void;
        setMinDimensions(arg0: number, arg1: number): $FrameLayout;
        newChildLayoutSettings(): $LayoutSettings;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number);
        constructor();
        set minHeight(value: number);
        set minWidth(value: number);
    }
    export class $LinearLayout implements $Layout {
        getWidth(): number;
        getY(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        getHeight(): number;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        static vertical(): $LinearLayout;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        static horizontal(): $LinearLayout;
        spacing(arg0: number): $LinearLayout;
        defaultCellSetting(): $LayoutSettings;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number, arg2: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getWidth(): number;
        getY(): number;
        getHeight(): number;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        arrangeElements(): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getWidth(): number;
        getY(): number;
        getHeight(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(arg0: $GridLayout, arg1: T, arg2: number, arg3: $LayoutSettings): T;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        copy(): $LayoutSettings;
        padding(arg0: number): $LayoutSettings;
        padding(arg0: number, arg1: number): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyBottom(): $LayoutSettings;
        alignHorizontally(arg0: number): $LayoutSettings;
        alignVertically(arg0: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static width(arg0: number): $SpacerElement;
        getWidth(): number;
        getY(): number;
        static height(arg0: number): $SpacerElement;
        getHeight(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_): $Layout;
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_, arg3: $Consumer_<$LayoutSettings>): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        defaultChildLayoutSetting(): $LayoutSettings;
        newChildLayoutSettings(): $LayoutSettings;
        constructor(arg0: number, arg1: number, arg2: $EqualSpacingLayout$Orientation_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number, arg1: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(arg0: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getWidth(): number;
        getY(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        getHeight(): number;
        arrangeElements(): void;
        setHeaderHeight(arg0: number): void;
        getFooterHeight(): number;
        getHeaderHeight(): number;
        setFooterHeight(arg0: number): void;
        addToHeader<T extends $LayoutElement>(arg0: T): T;
        addToHeader<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getContentHeight(): number;
        addTitleHeader(arg0: $Component_, arg1: $Font): void;
        addToFooter<T extends $LayoutElement>(arg0: T): T;
        addToFooter<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(arg0: T): T;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(arg0: $Screen, arg1: number, arg2: number);
        constructor(arg0: $Screen, arg1: number);
        constructor(arg0: $Screen);
        get width(): number;
        get height(): number;
        get contentHeight(): number;
        get rectangle(): $ScreenRectangle;
    }
}
