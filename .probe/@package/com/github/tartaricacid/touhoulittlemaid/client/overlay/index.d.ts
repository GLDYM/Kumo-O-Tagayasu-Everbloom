import { $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModConfigSpec$BooleanValue } from "@package/net/neoforged/neoforge/common";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/overlay" {
    export class $MaidTipsOverlay implements $LayeredDraw$Layer {
        static init(): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        addSpecialTips(arg0: string, arg1: $MaidTipsOverlay$CheckCondition_): void;
        addTips(arg0: string, ...arg1: $Item_[]): void;
        addTips(arg0: string, arg1: $ModConfigSpec$BooleanValue, ...arg2: $Item_[]): void;
        constructor();
    }
    export class $MaidTipsOverlay$CheckCondition {
    }
    export interface $MaidTipsOverlay$CheckCondition {
        test(arg0: $ItemStack_, arg1: $EntityMaid, arg2: $LocalPlayer): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MaidTipsOverlay$CheckCondition}.
     */
    export type $MaidTipsOverlay$CheckCondition_ = ((arg0: $ItemStack, arg1: $EntityMaid, arg2: $LocalPlayer) => boolean);
}
