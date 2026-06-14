import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/studio/fantasyit/maid_storage_manager/render/base" {
    export class $ICustomGraphics {
    }
    export interface $ICustomGraphics {
        flush(): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        pose(): $PoseStack;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    }
}
