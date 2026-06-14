import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $StockpotBlockEntity } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity/kitchen";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/client/render" {
    export class $ISoupBaseRender {
        static renderSurface(arg0: $TextureAtlasSprite, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
    }
    export interface $ISoupBaseRender {
        renderWhenCooking(arg0: $StockpotBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $ResourceLocation_, arg7: number): void;
        renderWhenFinished(arg0: $StockpotBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $ResourceLocation_, arg7: number): void;
        renderWhenPutIngredient(arg0: $StockpotBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number): void;
    }
}
