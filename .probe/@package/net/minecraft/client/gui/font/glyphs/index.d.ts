import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $Function_ } from "@package/java/util/function";
import { $ReverseRenderableBakedGlyph } from "@package/com/kipti/bnb/mixin_accessor";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $Enum } from "@package/java/lang";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $BakedGlyphAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $BakedGlyph implements $ReverseRenderableBakedGlyph, $BakedGlyphAccessor {
        render(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderType(arg0: $Font$DisplayMode_): $RenderType;
        renderEffect(arg0: $BakedGlyph$Effect, arg1: $Matrix4f, arg2: $VertexConsumer, arg3: number): void;
        bits_n_bobs$renderReverse(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        dragonlib$setV0(arg0: number): void;
        dragonlib$setV1(arg0: number): void;
        dragonlib$setU0(arg0: number): void;
        dragonlib$setU1(arg0: number): void;
        dragonlib$getV1(): number;
        dragonlib$getU1(): number;
        dragonlib$getU0(): number;
        dragonlib$getV0(): number;
        constructor(arg0: $GlyphRenderTypes_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        static INSTANCE: $EmptyGlyph;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getAdvance(): number;
        getShadowOffset(): number;
        getBoldOffset(): number;
        getAdvance(arg0: boolean): number;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
