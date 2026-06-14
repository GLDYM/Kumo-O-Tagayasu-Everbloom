import { $InputStream } from "@package/java/io";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $BedrockVersion_, $BedrockModelPOJO } from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/pojo";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BedrockPart } from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/model";
import { $HashMap } from "@package/java/util";
import { $AABB } from "@package/net/minecraft/world/phys";
export * as pojo from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/pojo";
export * as model from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/model";

declare module "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock" {
    export class $AbstractBedrockEntityModel<T extends $Entity> extends $EntityModel<T> implements $BedrockModelProvider<$AbstractBedrockEntityModel<T>> {
        getRenderBoundingBox(): $AABB;
        getModelMap(): $HashMap<string, $BedrockPart>;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $BedrockModelPOJO, arg1: $BedrockVersion_);
        constructor(arg0: $BedrockModelPOJO);
        constructor(arg0: $InputStream);
        get renderBoundingBox(): $AABB;
        get modelMap(): $HashMap<string, $BedrockPart>;
    }
    export class $BedrockModelProvider<T extends $BedrockModelProvider<T>> {
    }
    export interface $BedrockModelProvider<T extends $BedrockModelProvider<T>> {
        getRenderBoundingBox(): $AABB;
        getModelMap(): $HashMap<string, $BedrockPart>;
        get renderBoundingBox(): $AABB;
        get modelMap(): $HashMap<string, $BedrockPart>;
    }
}
