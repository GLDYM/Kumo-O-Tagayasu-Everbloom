import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/ftb/mods/ftblibrary/ui/input" {
    export class $Key {
        enter(): boolean;
        copy(): boolean;
        is(k: number): boolean;
        escOrInventory(): boolean;
        cut(): boolean;
        esc(): boolean;
        backspace(): boolean;
        selectAll(): boolean;
        paste(): boolean;
        getInputMapping(): $InputConstants$Key;
        deselectAll(): boolean;
        keyCode: number;
        modifiers: $KeyModifiers;
        scanCode: number;
        constructor(k: number, s: number, m: number);
        get inputMapping(): $InputConstants$Key;
    }
    export class $KeyModifiers {
        start(): boolean;
        shift(): boolean;
        control(): boolean;
        alt(): boolean;
        onlyControl(): boolean;
        numLock(): boolean;
        capsLock(): boolean;
        static NONE: $KeyModifiers;
        modifiers: number;
        constructor(m: number);
    }
    export class $MouseButton {
        static get(i: number): $MouseButton;
        getId(): number;
        isMiddle(): boolean;
        isLeft(): boolean;
        isRight(): boolean;
        static LEFT: $MouseButton;
        static NEXT: $MouseButton;
        static RIGHT: $MouseButton;
        static BACK: $MouseButton;
        id: number;
        static MIDDLE: $MouseButton;
        get middle(): boolean;
        get left(): boolean;
        get right(): boolean;
    }
}
