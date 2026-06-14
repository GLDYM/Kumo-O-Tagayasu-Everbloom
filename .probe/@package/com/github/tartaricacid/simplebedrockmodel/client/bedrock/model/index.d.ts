import { $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $PoseStack$Pose, $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Random } from "@package/java/util";
import { $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock/model" {
    export class $BedrockCube {
        static NUM_CUBE_FACES: number;
        static VERTEX_X2_Y2_Z1: number;
        static VERTEX_X2_Y1_Z1: number;
        static VERTEX_X2_Y1_Z2: number;
        static VERTEX_X2_Y2_Z2: number;
        static VERTEX_X1_Y2_Z2: number;
        static VERTEX_X1_Y1_Z1: number;
        static VERTEX_X1_Y2_Z1: number;
        static VERTEX_X1_Y1_Z2: number;
        static VERTEX_ORDER: number[][];
    }
    export interface $BedrockCube {
        compile(arg0: $PoseStack$Pose, arg1: $Vector3f[], arg2: $VertexConsumer, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BedrockCube}.
     */
    export type $BedrockCube_ = ((arg0: $PoseStack$Pose, arg1: $Vector3f[], arg2: $VertexConsumer, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number) => void);
    export class $BedrockPart {
        isEmpty(): boolean;
        getParent(): $BedrockPart;
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        addChild(arg0: $BedrockPart): void;
        /**
         * @deprecated
         */
        translateAndRotate(arg0: $PoseStack): void;
        getRandomCube(arg0: $Random): $BedrockCube;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getTranslateAndRotateVector3f(): $Vector3f;
        setInitRotationAngle(arg0: number, arg1: number, arg2: number): void;
        getInitRotZ(): number;
        getInitRotX(): number;
        getInitRotY(): number;
        translateAndRotateAndScale(arg0: $PoseStack): void;
        parent: $BedrockPart;
        mirror: boolean;
        visible: boolean;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        initRotZ: number;
        initRotY: number;
        initRotX: number;
        offsetX: number;
        offsetZ: number;
        offsetY: number;
        children: $ObjectList<$BedrockPart>;
        cubes: $ObjectList<$BedrockCube>;
        xScale: number;
        x: number;
        y: number;
        illuminated: boolean;
        z: number;
        additionalQuaternion: $Quaternionf;
        zScale: number;
        constructor();
        get empty(): boolean;
        get translateAndRotateVector3f(): $Vector3f;
    }
}
