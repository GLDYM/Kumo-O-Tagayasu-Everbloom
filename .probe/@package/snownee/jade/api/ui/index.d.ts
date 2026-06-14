import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/snownee/jade/api/ui" {
    export class $IElement {
    }
    export interface $IElement {
        size(arg0: $Vec2): $IElement;
        getMessage(): string;
        message(arg0: string): $IElement;
        getSize(): $Vec2;
        tag(arg0: $ResourceLocation_): $IElement;
        getTag(): $ResourceLocation;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        align(arg0: $IElement$Align_): $IElement;
        getAlignment(): $IElement$Align;
        getTranslation(): $Vec2;
        translate(arg0: $Vec2): $IElement;
        clearCachedMessage(): $IElement;
        getCachedMessage(): string;
        getCachedSize(): $Vec2;
        get alignment(): $IElement$Align;
        get translation(): $Vec2;
        get cachedMessage(): string;
        get cachedSize(): $Vec2;
    }
    export class $IElement$Align extends $Enum<$IElement$Align> {
        static values(): $IElement$Align[];
        static valueOf(arg0: string): $IElement$Align;
        static CENTER: $IElement$Align;
        static LEFT: $IElement$Align;
        static RIGHT: $IElement$Align;
        static VALUES: $IElement$Align[];
    }
    /**
     * Values that may be interpreted as {@link $IElement$Align}.
     */
    export type $IElement$Align_ = "left" | "right" | "center";
    export class $ScreenDirection extends $Enum<$ScreenDirection> {
        static values(): $ScreenDirection[];
        static valueOf(arg0: string): $ScreenDirection;
        static fromIndex(arg0: number): $ScreenDirection;
        isVertical(): boolean;
        isHorizontal(): boolean;
        static DOWN: $ScreenDirection;
        static LEFT: $ScreenDirection;
        static RIGHT: $ScreenDirection;
        static VALUES: $List<$ScreenDirection>;
        static UP: $ScreenDirection;
        get vertical(): boolean;
        get horizontal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenDirection}.
     */
    export type $ScreenDirection_ = "up" | "down" | "left" | "right";
}
