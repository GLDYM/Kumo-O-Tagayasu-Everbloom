import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/io/github/mortuusars/exposure/util/color" {
    export class $Color$Unbounded extends $Record {
        clamp(): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color$Unbounded;
        constructor(r: number, g: number, b: number, a: number);
    }
    /**
     * Values that may be interpreted as {@link $Color$Unbounded}.
     */
    export type $Color$Unbounded_ = { g?: number, a?: number, r?: number, b?: number,  } | [g?: number, a?: number, r?: number, b?: number, ];
    export class $Color extends $Record {
        static clamp(channel: number): number;
        add(other: $Color_): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color;
        static red(argb: number): number;
        subtract(other: $Color_): $Color;
        static alpha(argb: number): number;
        getA(): number;
        getB(): number;
        getG(): number;
        withAlpha(alpha: number): $Color;
        getARGB(): number;
        static green(argb: number): number;
        static blue(argb: number): number;
        static pack(alpha: number, red: number, green: number, blue: number): number;
        getRGB(): number;
        static bgr(bgr: number): $Color;
        static fromHex(hexColor: string): $Color;
        getAF(): number;
        static alphaF(argb: number): number;
        getABGR(): number;
        withAlphaF(alpha: number): $Color;
        getBGR(): number;
        static ABGRtoARGB(ABGR: number): number;
        static greenF(argb: number): number;
        getBF(): number;
        static redF(argb: number): number;
        static ARGBtoABGR(ARGB: number): number;
        getRF(): number;
        getGF(): number;
        static blueF(argb: number): number;
        static abgr(abgr: number): $Color;
        static rgbF(r: number, g: number, b: number): $Color;
        static argbF(a: number, r: number, g: number, b: number): $Color;
        subtractUnbounded(other: $Color_): $Color$Unbounded;
        addUnbounded(other: $Color$Unbounded_): $Color$Unbounded;
        addUnbounded(other: $Color_): $Color$Unbounded;
        asHexString(): string;
        static argb(a: number, r: number, g: number, b: number): $Color;
        static argb(argb: number): $Color;
        getR(): number;
        static rgb(rgb: number): $Color;
        static rgb(r: number, g: number, b: number): $Color;
        squaredDifferenceTo(argb: number): number;
        squaredDifferenceTo(color: $Color_): number;
        static WHITE: $Color;
        static CODEC: $Codec<$Color>;
        static HEX_STRING_CODEC: $Codec<$Color>;
        static BLACK: $Color;
        static TRANSPARENT: $Color;
        constructor(a: number, r: number, g: number, b: number);
        get ARGB(): number;
        get RGB(): number;
        get AF(): number;
        get ABGR(): number;
        get BGR(): number;
        get BF(): number;
        get RF(): number;
        get GF(): number;
    }
    /**
     * Values that may be interpreted as {@link $Color}.
     */
    export type $Color_ = { g?: number, a?: number, r?: number, b?: number,  } | [g?: number, a?: number, r?: number, b?: number, ];
}
