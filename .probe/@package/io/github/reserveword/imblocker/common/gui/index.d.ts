
declare module "@package/io/github/reserveword/imblocker/common/gui" {
    export class $CursorInfo {
        cursor: number;
        cursorLineBeginIndex: number;
        text: string;
        constructor(arg0: number, arg1: number, arg2: string);
    }
    export class $FocusableObject {
    }
    export interface $FocusableObject {
        getGuiScale(): number;
        getPreferredEnglishState(): boolean;
        deliverFocus(): void;
        getFontHeight(): number;
        getBoundsAbs(): $Rectangle;
        updateEnglishState(): void;
        getPreferredState(): boolean;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        getCaretPos(): $Point;
        lostFocus(): void;
        get guiScale(): number;
        get preferredEnglishState(): boolean;
        get fontHeight(): number;
        get boundsAbs(): $Rectangle;
        get preferredState(): boolean;
        get trulyFocused(): boolean;
        get caretPos(): $Point;
    }
    export class $FocusContainer implements $FocusableObject {
        getGuiScale(): number;
        deliverFocus(): void;
        getBoundsAbs(): $Rectangle;
        removeFocus(arg0: $FocusableWidget): void;
        getPreferredState(): boolean;
        getCaretPos(): $Point;
        setGuiScaleFactor(arg0: number): void;
        checkFocusCandidatesVisibility(arg0: number): void;
        requestFocus(arg0: $FocusableWidget): void;
        clearFocus(): void;
        switchFocus(arg0: $FocusableWidget): void;
        locateRealFocus(): void;
        setPreferredState(arg0: boolean): void;
        lostFocus(): void;
        getPreferredEnglishState(): boolean;
        getFontHeight(): number;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        static MINECRAFT: $FocusContainer;
        static IMGUI: $FocusContainer;
        get guiScale(): number;
        get boundsAbs(): $Rectangle;
        get caretPos(): $Point;
        set guiScaleFactor(value: number);
        get preferredEnglishState(): boolean;
        get fontHeight(): number;
        get trulyFocused(): boolean;
    }
    export class $MinecraftMultilineEditBoxWidget {
    }
    export interface $MinecraftMultilineEditBoxWidget extends $MinecraftAbstractTextInputWidget<$MultilineCursorInfo> {
        getCaretPos(): $Point;
        imblocker$getContentOffsetY(): number;
        imblocker$getContentOffsetX(): number;
        get caretPos(): $Point;
    }
    export class $Rectangle {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        derive(arg0: number): $Rectangle;
        static EMPTY: $Rectangle;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SinglelineCursorInfo extends $CursorInfo {
        updateCursorInfo(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
        cursor: number;
        cursorLineBeginIndex: number;
        widgetHeight: number;
        hasBorder: boolean;
        text: string;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: string);
    }
    export class $MultilineCursorInfo extends $CursorInfo {
        updateCursorInfo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
        cursor: number;
        cursorLineBeginIndex: number;
        scrollY: number;
        text: string;
        cursorLineIndex: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string);
    }
    export class $MinecraftFocusableWidget {
    }
    export interface $MinecraftFocusableWidget extends $FocusableWidget {
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusLost(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        imblocker$onFocusGained(): void;
        getFocusContainer(): $FocusContainer;
        get focusContainer(): $FocusContainer;
    }
    export class $FocusableWidget {
    }
    export interface $FocusableWidget extends $FocusableObject {
        getGuiScale(): number;
        getFocusContainer(): $FocusContainer;
        getPreferredState(): boolean;
        isRenderable(): boolean;
        get guiScale(): number;
        get focusContainer(): $FocusContainer;
        get preferredState(): boolean;
        get renderable(): boolean;
    }
    export class $Point {
        x(): number;
        y(): number;
        derive(arg0: number): $Point;
        static TOP_LEFT: $Point;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number);
    }
    export class $MinecraftAbstractTextInputWidget<CI extends $CursorInfo> {
    }
    export interface $MinecraftAbstractTextInputWidget<CI extends $CursorInfo> extends $MinecraftFocusableWidget {
        deliverFocus(): void;
        updateCursorInfo(): boolean;
        getCursorInfo(): CI;
        imblocker$onCursorChanged(): void;
        get cursorInfo(): CI;
    }
    export class $MinecraftTextFieldWidget {
    }
    export interface $MinecraftTextFieldWidget extends $MinecraftAbstractTextInputWidget<$SinglelineCursorInfo> {
        getCaretPos(): $Point;
        getPaddingX(): number;
        getPrimaryEnglishState(): boolean;
        checkVisibility(arg0: number): void;
        setPreferredEnglishState(arg0: boolean): void;
        get caretPos(): $Point;
        get paddingX(): number;
        get primaryEnglishState(): boolean;
        set preferredEnglishState(value: boolean);
    }
}
