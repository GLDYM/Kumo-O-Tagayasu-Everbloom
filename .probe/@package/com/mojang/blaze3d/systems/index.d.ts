import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $RenderCall_ } from "@package/com/mojang/blaze3d/pipeline";
import { $GlStateManager$SourceFactor_, $GlStateManager$LogicOp_, $GlStateManager$DestFactor_ } from "@package/com/mojang/blaze3d/platform";
import { $ByteBuffer, $IntBuffer, $FloatBuffer } from "@package/java/nio";
import { $TimeSource$NanoTimeSource } from "@package/net/minecraft/util";
import { $RenderSystemAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $GlStateBackup } from "@package/net/neoforged/neoforge/client";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Tesselator, $VertexFormat$IndexType, $VertexSorting, $VertexFormat$Mode_, $VertexSorting_ } from "@package/com/mojang/blaze3d/vertex";
import { $GLFWErrorCallbackI_ } from "@package/org/lwjgl/glfw";
import { $Runnable_ } from "@package/java/lang";
import { $FogShape_, $FogShape } from "@package/com/mojang/blaze3d/shaders";
import { $Matrix4fStack, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/systems" {
    export class $RenderSystem$AutoStorageIndexBuffer$IndexGenerator {
    }
    export interface $RenderSystem$AutoStorageIndexBuffer$IndexGenerator {
    }
    /**
     * Values that may be interpreted as {@link $RenderSystem$AutoStorageIndexBuffer$IndexGenerator}.
     */
    export type $RenderSystem$AutoStorageIndexBuffer$IndexGenerator_ = (() => void);
    export class $RenderSystem$AutoStorageIndexBuffer {
        type(): $VertexFormat$IndexType;
        bind(arg0: number): void;
        hasStorage(arg0: number): boolean;
    }
    export class $RenderSystem implements $RenderSystemAccessor {
        static clear(arg0: number, arg1: boolean): void;
        static getString(arg0: number, arg1: $Consumer_<string>): void;
        static setShaderGlintAlpha(arg0: number): void;
        static setShaderGlintAlpha(arg0: number): void;
        static getBackendDescription(): string;
        static applyModelViewMatrix(): void;
        static enableCull(): void;
        static flipFrame(arg0: number): void;
        static glGenVertexArrays(arg0: $Consumer_<number>): void;
        static glBindVertexArray(arg0: number): void;
        static glDeleteVertexArrays(arg0: number): void;
        static logicOp(arg0: $GlStateManager$LogicOp_): void;
        static getShader(): $ShaderInstance;
        static limitDisplayFPS(arg0: number): void;
        static getModelViewStack(): $Matrix4fStack;
        static initBackendSystem(): $TimeSource$NanoTimeSource;
        static setupDefaultState(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static setErrorCallback(arg0: $GLFWErrorCallbackI_): void;
        static initRenderer(arg0: number, arg1: boolean): void;
        static disableScissor(): void;
        static enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static glBufferData(arg0: number, arg1: $ByteBuffer, arg2: number): void;
        static glBindBuffer(arg0: number, arg1: number): void;
        static glDeleteBuffers(arg0: number): void;
        static glGenBuffers(arg0: $Consumer_<number>): void;
        static glUniform1i(arg0: number, arg1: number): void;
        static stencilOp(arg0: number, arg1: number, arg2: number): void;
        static clearDepth(arg0: number): void;
        static clearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static replayQueue(): void;
        static getVertexSorting(): $VertexSorting;
        static backupGlState(arg0: $GlStateBackup): void;
        static restoreGlState(arg0: $GlStateBackup): void;
        static renderCrosshair(arg0: number): void;
        static stencilMask(arg0: number): void;
        static setShaderFogStart(arg0: number): void;
        static deleteTexture(arg0: number): void;
        static setShaderFogShape(arg0: $FogShape_): void;
        static setShaderLights(arg0: $Vector3f, arg1: $Vector3f): void;
        static glUniformMatrix4(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static stencilFunc(arg0: number, arg1: number, arg2: number): void;
        static polygonMode(arg0: number, arg1: number): void;
        static setShaderFogColor(arg0: number, arg1: number, arg2: number): void;
        static setShaderFogColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static setShaderFogEnd(arg0: number): void;
        static drawElements(arg0: number, arg1: number, arg2: number): void;
        static glUniformMatrix2(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static texParameter(arg0: number, arg1: number, arg2: number): void;
        static glUniformMatrix3(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static clearStencil(arg0: number): void;
        static _setShaderTexture(arg0: number, arg1: $ResourceLocation_): void;
        static _setShaderTexture(arg0: number, arg1: number): void;
        static blendEquation(arg0: number): void;
        static catnip$getShaderLightDirections$ponder_$md$70d283$2(): $Vector3f[];
        static setupOverlayColor(arg0: number, arg1: number): void;
        static readPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ByteBuffer): void;
        static pixelStore(arg0: number, arg1: number): void;
        static resetTextureMatrix(): void;
        static enableColorLogicOp(): void;
        static blendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static blendFuncSeparate(arg0: $GlStateManager$SourceFactor_, arg1: $GlStateManager$DestFactor_, arg2: $GlStateManager$SourceFactor_, arg3: $GlStateManager$DestFactor_): void;
        static setTextureMatrix(arg0: $Matrix4f): void;
        static polygonOffset(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        static runAsFancy(arg0: $Runnable_): void;
        static isFrozenAtPollEvents(): boolean;
        static setupLevelDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static setupGui3DDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static restoreProjectionMatrix(): void;
        static getSequentialBuffer(arg0: $VertexFormat$Mode_): $RenderSystem$AutoStorageIndexBuffer;
        static bindTextureForSetup(arg0: number): void;
        static backupProjectionMatrix(): void;
        static finishInitialization(): void;
        static beginInitialization(): void;
        static recordRenderCall(arg0: $RenderCall_): void;
        static isOnRenderThread(): boolean;
        static setShaderGameTime(arg0: number, arg1: number): void;
        static disableCull(): void;
        static enableDepthTest(): void;
        static enableBlend(): void;
        static defaultBlendFunc(): void;
        static getModelViewMatrix(): $Matrix4f;
        static setShaderTexture(arg0: number, arg1: $ResourceLocation_): void;
        static setShaderTexture(arg0: number, arg1: number): void;
        static disableBlend(): void;
        static setShaderColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static disableDepthTest(): void;
        static lineWidth(arg0: number): void;
        static getApiDescription(): string;
        static getCapsString(): string;
        static enablePolygonOffset(): void;
        static disableColorLogicOp(): void;
        static disablePolygonOffset(): void;
        static getProjectionMatrix(): $Matrix4f;
        static setShader(arg0: $Supplier_<$ShaderInstance>): void;
        static blendFunc(arg0: $GlStateManager$SourceFactor_, arg1: $GlStateManager$DestFactor_): void;
        static blendFunc(arg0: number, arg1: number): void;
        static depthMask(arg0: boolean): void;
        static renderThreadTesselator(): $Tesselator;
        static assertOnRenderThread(): void;
        static maxSupportedTextureSize(): number;
        static glUniform3(arg0: number, arg1: $IntBuffer): void;
        static glUniform3(arg0: number, arg1: $FloatBuffer): void;
        static glUniform2(arg0: number, arg1: $FloatBuffer): void;
        static glUniform2(arg0: number, arg1: $IntBuffer): void;
        static glUniform4(arg0: number, arg1: $IntBuffer): void;
        static glUniform4(arg0: number, arg1: $FloatBuffer): void;
        static glUniform1(arg0: number, arg1: $FloatBuffer): void;
        static glUniform1(arg0: number, arg1: $IntBuffer): void;
        static initRenderThread(): void;
        static teardownOverlayColor(): void;
        static setProjectionMatrix(arg0: $Matrix4f, arg1: $VertexSorting_): void;
        static isOnRenderThreadOrInit(): boolean;
        static assertOnRenderThreadOrInit(): void;
        static viewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static depthFunc(arg0: number): void;
        static colorMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void;
        static setupGuiFlatDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static getShaderGlintAlpha(): number;
        static activeTexture(arg0: number): void;
        static bindTexture(arg0: number): void;
        static getShaderTexture(arg0: number): number;
        static getShaderColor(): number[];
        static getShaderFogStart(): number;
        static getShaderFogEnd(): number;
        static getShaderFogColor(): number[];
        static getShaderFogShape(): $FogShape;
        static getTextureMatrix(): $Matrix4f;
        static getShaderGameTime(): number;
        static getShaderLineWidth(): number;
        static setupShaderLights(arg0: $ShaderInstance): void;
        static modelViewMatrix: $Matrix4f;
        static shaderLightDirections: $Vector3f[];
        constructor();
        static get backendDescription(): string;
        static get modelViewStack(): $Matrix4fStack;
        static set errorCallback(value: $GLFWErrorCallbackI_);
        static get vertexSorting(): $VertexSorting;
        static get frozenAtPollEvents(): boolean;
        static get onRenderThread(): boolean;
        static get apiDescription(): string;
        static get capsString(): string;
        static get onRenderThreadOrInit(): boolean;
        static get shaderLineWidth(): number;
        static set upShaderLights(value: $ShaderInstance);
    }
}
