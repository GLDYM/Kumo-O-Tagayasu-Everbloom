import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/extended" {
    export class $LivingEntityRendererAccessor {
    }
    export interface $LivingEntityRendererAccessor {
        tlm$renderNameTag(arg0: $LivingEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_ = ((arg0: $LivingEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource, arg5: number) => void);
}
