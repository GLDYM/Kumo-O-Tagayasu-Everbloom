import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ForgeModelBlockRendererAccessor } from "@package/team/creative/creativecore/mixin";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ModelBlockRenderer } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $CreativeQuadLighter } from "@package/team/creative/creativecore/client/render/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $PoseStack, $VertexConsumer, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $ThreadLocal } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/client/model/lighting" {
    export class $FlatQuadLighter extends $QuadLighter {
        customTint: number;
        constructor(arg0: $BlockColors);
    }
    export class $LightPipelineAwareModelBlockRenderer extends $ModelBlockRenderer implements $ForgeModelBlockRendererAccessor {
        static render(arg0: $VertexConsumer, arg1: $QuadLighter, arg2: $BlockAndTintGetter, arg3: $BakedModel, arg4: $BlockState_, arg5: $BlockPos_, arg6: $PoseStack, arg7: boolean, arg8: $RandomSource, arg9: number, arg10: number, arg11: $ModelData, arg12: $RenderType): boolean;
        getQuadLighter(arg0: boolean): $QuadLighter;
        getFlatLighter(): $ThreadLocal<$QuadLighter>;
        getSmoothLighter(): $ThreadLocal<$QuadLighter>;
        constructor(arg0: $BlockColors);
        get flatLighter(): $ThreadLocal<$QuadLighter>;
        get smoothLighter(): $ThreadLocal<$QuadLighter>;
    }
    export class $SmoothQuadLighter extends $QuadLighter {
        customTint: number;
        constructor(arg0: $BlockColors);
    }
    export class $QuadLighter implements $CreativeQuadLighter {
        reset(): void;
        setup(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_): void;
        process(arg0: $VertexConsumer, arg1: $PoseStack$Pose, arg2: $BakedQuad, arg3: number): void;
        setCustomTint(arg0: number): void;
        static calculateShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        handler$hdd000$creativecore$getColorMultiplierHook(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        getComputedBrightness(): number[];
        computeLightingForQuad(arg0: $BakedQuad): void;
        computeLightingForQuad(arg0: number[], arg1: boolean): void;
        getComputedLightmap(): number[];
        setState(arg0: $BlockState_): void;
        customTint: number;
        get computedBrightness(): number[];
        get computedLightmap(): number[];
        set state(value: $BlockState_);
    }
}
