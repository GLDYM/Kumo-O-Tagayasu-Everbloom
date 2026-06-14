import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt {
        clear(arg0: boolean): void;
        resize(arg0: number, arg1: number, arg2: boolean): void;
        bindWrite(arg0: boolean): void;
        blitToScreen(arg0: number, arg1: number): void;
        blitToScreen(arg0: number, arg1: number, arg2: boolean): void;
        unbindWrite(): void;
        setClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        checkStatus(): void;
        destroyBuffers(): void;
        handler$cno000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        unbindRead(): void;
        bindRead(): void;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        createBuffers(arg0: number, arg1: number, arg2: boolean): void;
        copyDepthFrom(arg0: $RenderTarget): void;
        getColorTextureId(): number;
        setFilterMode(arg0: number): void;
        getDepthTextureId(): number;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: boolean);
        get colorTextureId(): number;
        get depthTextureId(): number;
        get stencilEnabled(): boolean;
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(arg0: number, arg1: number);
    }
    export class $RenderPipeline {
        recordRenderCall(arg0: $RenderCall_): void;
        endRecording(): void;
        beginRecording(): boolean;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginProcessing(): boolean;
        canBeginRecording(): boolean;
        beginProcessing(): boolean;
        endProcessing(): void;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        processRecordedQueue(): void;
        constructor();
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean);
    }
}
