import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ICustomGraphics } from "@package/studio/fantasyit/maid_storage_manager/render/base";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/studio/fantasyit/maid_storage_manager/menu/base" {
    export class $ImageAsset {
        blit(arg0: $ICustomGraphics, arg1: number, arg2: number): void;
        blit(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static from4Point(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $ImageAsset;
        u: number;
        v: number;
        w: number;
        h: number;
        location: $ResourceLocation;
        iw: number;
        ih: number;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
}
