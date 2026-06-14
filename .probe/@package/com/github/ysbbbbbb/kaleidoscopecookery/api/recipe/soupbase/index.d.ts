import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ISoupBaseRender } from "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/client/render";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/recipe/soupbase" {
    export class $ISoupBase {
    }
    export interface $ISoupBase {
        getName(): $ResourceLocation;
        getDisplayStack(): $ItemStack;
        isContainer(arg0: $ItemStack_): boolean;
        isSoupBase(arg0: $ItemStack_): boolean;
        getBubbleColor(): number;
        getRender(): $ISoupBaseRender;
        getReturnContainer(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): $ItemStack;
        getReturnSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): $ItemStack;
        get name(): $ResourceLocation;
        get displayStack(): $ItemStack;
        get bubbleColor(): number;
        get render(): $ISoupBaseRender;
    }
}
