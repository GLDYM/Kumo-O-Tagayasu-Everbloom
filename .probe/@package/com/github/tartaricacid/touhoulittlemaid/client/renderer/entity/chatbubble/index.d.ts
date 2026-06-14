import { $IEntityGraphicsBufferSourceGetter } from "@package/studio/fantasyit/maid_storage_manager/api/mixin";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component_, $FormattedText } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $EntityMaidRenderer } from "@package/com/github/tartaricacid/touhoulittlemaid/client/renderer/entity";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/renderer/entity/chatbubble" {
    export class $IChatBubbleRenderer {
    }
    export interface $IChatBubbleRenderer {
        getWidth(): number;
        render(arg0: $EntityMaidRenderer, arg1: $EntityGraphics): void;
        getHeight(): number;
        getBackgroundTexture(): $ResourceLocation;
        get width(): number;
        get height(): number;
        get backgroundTexture(): $ResourceLocation;
    }
    export class $IChatBubbleRenderer$Position extends $Enum<$IChatBubbleRenderer$Position> {
        static values(): $IChatBubbleRenderer$Position[];
        static valueOf(arg0: string): $IChatBubbleRenderer$Position;
        static CENTER: $IChatBubbleRenderer$Position;
        static LEFT: $IChatBubbleRenderer$Position;
        static RIGHT: $IChatBubbleRenderer$Position;
    }
    /**
     * Values that may be interpreted as {@link $IChatBubbleRenderer$Position}.
     */
    export type $IChatBubbleRenderer$Position_ = "left" | "right" | "center";
    export class $EntityGraphics implements $IEntityGraphicsBufferSourceGetter {
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawWordWrap(arg0: $Font, arg1: $FormattedText, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getPose(): $PoseStack;
        getPartialTicks(): number;
        getPoseStack(): $PoseStack;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getPackedLight(): number;
        getMaid(): $EntityMaid;
        blitNineSliced(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitNineSliced(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitNineSliced(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blitRepeating(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blitRepeating(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getBufferSource(): $MultiBufferSource;
        constructor(arg0: $MultiBufferSource_, arg1: $PoseStack, arg2: $EntityMaid, arg3: number, arg4: number);
        get pose(): $PoseStack;
        get partialTicks(): number;
        get poseStack(): $PoseStack;
        get packedLight(): number;
        get maid(): $EntityMaid;
        get bufferSource(): $MultiBufferSource;
    }
}
