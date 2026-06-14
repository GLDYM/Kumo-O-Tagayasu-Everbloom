import { $AbstractBedrockEntityModel } from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock";
import { $BedrockVersion_, $BedrockModelPOJO } from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/pojo";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity, $HumanoidArm_ } from "@package/net/minecraft/world/entity";
import { $BedrockPart } from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/model";
import { $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/model/bedrock" {
    export class $BedrockModel<T extends $LivingEntity> extends $AbstractBedrockEntityModel<T> {
        getHead(): $BedrockPart;
        setAnimations(arg0: $List_<$Object>): void;
        getArmPositioningModel(arg0: $HumanoidArm_): $BedrockPart;
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        getRightArm(): $BedrockPart;
        hasRightArm(): boolean;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        hasLeftArm(): boolean;
        hasHead(): boolean;
        getLeftArm(): $BedrockPart;
        hasBackpackPositioningModel(): boolean;
        getBackpackPositioningModel(): $BedrockPart;
        translateToPositioningWaist(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        hasArmPositioningModel(arg0: $HumanoidArm_): boolean;
        translateToPositioningHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        hasWaistPositioningModel(arg0: $HumanoidArm_): boolean;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        get head(): $BedrockPart;
        set animations(value: $List_<$Object>);
        get rightArm(): $BedrockPart;
        get leftArm(): $BedrockPart;
        get backpackPositioningModel(): $BedrockPart;
    }
}
