import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $DialogHandler$DrawString } from "@package/bagu_chan/bagus_lib/util";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/bagu_chan/bagus_lib/client/dialog" {
    export interface $DialogType extends RegistryMarked<RegistryTypes.BagusLibDialogTag, RegistryTypes.BagusLibDialog> {}
    export class $DialogOption extends $Record {
        scaleY(): number;
        scaleX(): number;
        translate(): boolean;
        soundEvent(): ($Holder<$SoundEvent>) | undefined;
        static CODEC: $MapCodec<$DialogOption>;
        constructor(scaleX: number, scaleY: number, translate: boolean, soundEvent: ($Holder_<$SoundEvent>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DialogOption}.
     */
    export type $DialogOption_ = { scaleX?: number, scaleY?: number, translate?: boolean, soundEvent?: ($Holder_<$SoundEvent>) | undefined,  } | [scaleX?: number, scaleY?: number, translate?: boolean, soundEvent?: ($Holder_<$SoundEvent>) | undefined, ];
    export class $DialogType {
        render(arg0: $GuiGraphics, arg1: $PoseStack, arg2: number, arg3: number, arg4: number): void;
        renderText(arg0: $GuiGraphics, arg1: $PoseStack, arg2: number, arg3: number, arg4: number): void;
        codec(): $MapCodec<$DialogType>;
        beginString(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $Font, arg4: string, arg5: number, arg6: number): $DialogHandler$DrawString;
        getDialogueBase(): string;
        getDialogueOption(): $DialogOption;
        getDialogPerTick(): number;
        getLastDialogRenderTime(): number;
        getDialogRenderTime(): number;
        setLastDialogRenderTime(arg0: number): void;
        static CODEC: $MapCodec<$DialogType>;
        static DIRECT_CODEC: $Codec<$DialogType>;
        constructor(arg0: string, arg1: $DialogOption_, arg2: number, arg3: number);
        get dialogueBase(): string;
        get dialogueOption(): $DialogOption;
        get dialogPerTick(): number;
        get dialogRenderTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $DialogType}.
     */
    export type $DialogType_ = RegistryTypes.BagusLibDialog;
}
