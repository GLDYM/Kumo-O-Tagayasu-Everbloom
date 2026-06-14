import { $Function } from "@package/java/util/function";
import { $EntityRenderDispatcher, $MobRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $BedrockModel } from "@package/com/github/tartaricacid/touhoulittlemaid/client/model/bedrock";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $MaidModelInfo } from "@package/com/github/tartaricacid/touhoulittlemaid/client/resource/pojo";
import { $List } from "@package/java/util";
import { $IGeoEntityRenderer } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/geo";
export * as chatbubble from "@package/com/github/tartaricacid/touhoulittlemaid/client/renderer/entity/chatbubble";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/renderer/entity" {
    export class $EntityMaidRenderer extends $MobRenderer<$Mob, $BedrockModel<$Mob>> {
        render(arg0: $Mob, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getDispatcher(): $EntityRenderDispatcher;
        getTextureLocation(arg0: $Mob): $ResourceLocation;
        getMainInfo(): $MaidModelInfo;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Mob, $BedrockModel<$Mob>>>;
        static YSM_ENTITY_MAID_RENDERER: $Function<$EntityRendererProvider$Context, $IGeoEntityRenderer<$Mob>>;
        constructor(arg0: $EntityRendererProvider$Context);
        get dispatcher(): $EntityRenderDispatcher;
        get mainInfo(): $MaidModelInfo;
    }
}
