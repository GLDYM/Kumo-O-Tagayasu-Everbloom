import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Iterable } from "@package/java/lang";

declare module "@package/bagu_chan/bagus_lib/client/layer" {
    export class $IArmor {
    }
    export interface $IArmor {
        leftHandArmors(): $Iterable<$ModelPart>;
        translateToChest(arg0: $ModelPart, arg1: $PoseStack): void;
        rightHandArmors(): $Iterable<$ModelPart>;
        bodyPartArmors(): $Iterable<$ModelPart>;
        headPartArmors(): $Iterable<$ModelPart>;
        translateToHead(arg0: $ModelPart, arg1: $PoseStack): void;
        leftLegPartArmors(): $Iterable<$ModelPart>;
        rightLegPartArmors(): $Iterable<$ModelPart>;
        translateToLeg(arg0: $ModelPart, arg1: $PoseStack): void;
        translateToChestPat(arg0: $ModelPart, arg1: $PoseStack): void;
    }
}
