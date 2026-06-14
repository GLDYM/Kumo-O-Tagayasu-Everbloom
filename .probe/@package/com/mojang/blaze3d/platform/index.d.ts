import { $STBIWriteCallback } from "@package/org/lwjgl/stb";
import { $SilentInitException } from "@package/net/minecraft/client/main";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $Map, $OptionalInt } from "@package/java/util";
import { $NativeImageAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ByteBuffer, $IntBuffer, $Buffer, $FloatBuffer } from "@package/java/nio";
import { $BooleanStateExtended } from "@package/net/irisshaders/iris/gl";
import { $LazyLoadedValue } from "@package/net/minecraft/util";
import { $BiConsumer_, $LongSupplier, $Supplier_, $IntUnaryOperator_, $Consumer_ } from "@package/java/util/function";
import { $GlStateBackup } from "@package/net/neoforged/neoforge/client";
import { $NativeImagePointerAccessor } from "@package/link/infra/screenshotclipboard/common/mixin";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $CharSequence, $Enum, $AutoCloseable } from "@package/java/lang";
import { $Pointer_ } from "@package/org/lwjgl/system";
import { $GlStateManagerAccessor } from "@package/net/irisshaders/iris/mixin";
import { $InputStream, $File_ } from "@package/java/io";
import { $NativeImageAccessor as $NativeImageAccessor$1 } from "@package/dev/tr7zw/skinlayers/accessor";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AccessNativeImage } from "@package/icyllis/modernui/mc/mixin";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $BooleanStateAccessor } from "@package/net/irisshaders/iris/mixin/statelisteners";
import { $GLFWDropCallbackI_, $GLFWKeyCallbackI_, $GLFWVidMode$Buffer, $GLFWCharModsCallbackI_, $GLFWCursorPosCallbackI_, $GLFWScrollCallbackI_, $GLFWVidMode, $GLFWMouseButtonCallbackI_, $GLFWErrorCallbackI_ } from "@package/org/lwjgl/glfw";
import { $WindowKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessInputConstantsKey } from "@package/com/blamejared/controlling/mixin";
import { $NativeWindowHandle } from "@package/net/caffeinemc/mods/sodium/client/platform";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/platform" {
    export class $Window$WindowInitFailed extends $SilentInitException {
    }
    export class $NativeImage$WriteCallback extends $STBIWriteCallback {
    }
    export class $GlStateManager$PolygonOffsetState {
    }
    export class $MonitorCreator {
    }
    export interface $MonitorCreator {
        createMonitor(arg0: number): $Monitor;
    }
    /**
     * Values that may be interpreted as {@link $MonitorCreator}.
     */
    export type $MonitorCreator_ = ((arg0: number) => $Monitor);
    export class $GlStateManager$DepthState {
        mode: $GlStateManager$BooleanState;
        func: number;
        mask: boolean;
    }
    export class $GlStateManager$ScissorState {
    }
    export class $GlStateManager$BlendState {
        mode: $GlStateManager$BooleanState;
        dstAlpha: number;
        dstRgb: number;
        srcRgb: number;
        srcAlpha: number;
    }
    export class $GlStateManager implements $GlStateManagerAccessor {
        static glGetShaderInfoLog(arg0: number, arg1: number): string;
        static _depthFunc(arg0: number): void;
        static glGenFramebuffers(): number;
        static glGenRenderbuffers(): number;
        static _glUseProgram(arg0: number): void;
        static glGetProgramInfoLog(arg0: number, arg1: number): string;
        static glBlendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static glCheckFramebufferStatus(arg0: number): number;
        static glDeleteShader(arg0: number): void;
        static glCreateShader(arg0: number): number;
        static glDeleteProgram(arg0: number): void;
        static glAttachShader(arg0: number, arg1: number): void;
        static glCompileShader(arg0: number): void;
        static glShaderSource(arg0: number, arg1: $List_<string>): void;
        static glLinkProgram(arg0: number): void;
        static glCreateProgram(): number;
        static glActiveTexture(arg0: number): void;
        static glGetProgrami(arg0: number, arg1: number): number;
        static glGetShaderi(arg0: number, arg1: number): number;
        static _logicOp(arg0: number): void;
        static _stencilOp(arg0: number, arg1: number, arg2: number): void;
        static _pixelStore(arg0: number, arg1: number): void;
        static _polygonMode(arg0: number, arg1: number): void;
        static _drawElements(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _polygonOffset(arg0: number, arg1: number): void;
        static _backupGlState(arg0: $GlStateBackup): void;
        static _stencilMask(arg0: number): void;
        static _blendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _enableCull(): void;
        static _stencilFunc(arg0: number, arg1: number, arg2: number): void;
        static _glUniform1i(arg0: number, arg1: number): void;
        static _enableScissorTest(): void;
        static _scissorBox(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _deleteTexture(arg0: number): void;
        static _clearStencil(arg0: number): void;
        static _glUniform2(arg0: number, arg1: $IntBuffer): void;
        static _glUniform2(arg0: number, arg1: $FloatBuffer): void;
        static _glUniformMatrix3(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static _glUniformMatrix4(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static _glBindBuffer(arg0: number, arg1: number): void;
        static _getInteger(arg0: number): number;
        static _glGenVertexArrays(): number;
        static _glUniform3(arg0: number, arg1: $FloatBuffer): void;
        static _glUniform3(arg0: number, arg1: $IntBuffer): void;
        static _glUniform4(arg0: number, arg1: $FloatBuffer): void;
        static _glUniform4(arg0: number, arg1: $IntBuffer): void;
        static _enableBlend(): void;
        static _blendEquation(arg0: number): void;
        static _disableCull(): void;
        static _glUniform1(arg0: number, arg1: $IntBuffer): void;
        static _glUniform1(arg0: number, arg1: $FloatBuffer): void;
        static _glDeleteBuffers(arg0: number): void;
        static _readPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static _readPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ByteBuffer): void;
        static _glBindVertexArray(arg0: number): void;
        static _glGenBuffers(): number;
        static _glBufferData(arg0: number, arg1: $ByteBuffer, arg2: number): void;
        static _glBufferData(arg0: number, arg1: number, arg2: number): void;
        static _glUniformMatrix2(arg0: number, arg1: boolean, arg2: $FloatBuffer): void;
        static _restoreGlState(arg0: $GlStateBackup): void;
        static _glMapBuffer(arg0: number, arg1: number): $ByteBuffer;
        static _glUnmapBuffer(arg0: number): void;
        static _enableVertexAttribArray(arg0: number): void;
        static _disableVertexAttribArray(arg0: number): void;
        static _vertexAttribIPointer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _vertexAttribPointer(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): void;
        static _genTexture(): number;
        static _genTextures(arg0: number[]): void;
        static _texSubImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        static _getTexImage(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _glDrawPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _deleteTextures(arg0: number[]): void;
        static _disableScissorTest(): void;
        static _enablePolygonOffset(): void;
        static setupLevelDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f, arg2: $Matrix4f): void;
        static _glDeleteVertexArrays(arg0: number): void;
        static setupGui3DDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static _getTexLevelParameter(arg0: number, arg1: number, arg2: number): number;
        static _disableColorLogicOp(): void;
        static _disablePolygonOffset(): void;
        static _enableColorLogicOp(): void;
        static _blendFunc(arg0: number, arg1: number): void;
        static _texParameter(arg0: number, arg1: number, arg2: number): void;
        static _texParameter(arg0: number, arg1: number, arg2: number): void;
        static _bindTexture(arg0: number): void;
        static _clearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getBoundFramebuffer(): number;
        static _glRenderbufferStorage(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _glDeleteRenderbuffers(arg0: number): void;
        static getBLEND$iris_$md$70d283$0(): $GlStateManager$BlendState;
        static getDEPTH$iris_$md$70d283$2(): $GlStateManager$DepthState;
        static _glGetAttribLocation(arg0: number, arg1: $CharSequence): number;
        static _glGetUniformLocation(arg0: number, arg1: $CharSequence): number;
        static _glBindRenderbuffer(arg0: number, arg1: number): void;
        static _glBindAttribLocation(arg0: number, arg1: number, arg2: $CharSequence): void;
        static _glCopyTexSubImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static _glFramebufferRenderbuffer(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $NativeImage$Format_, arg6: $IntBuffer, arg7: $Consumer_<$IntBuffer>): void;
        static _clear(arg0: number, arg1: boolean): void;
        static _viewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static _colorMask(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void;
        static _getError(): number;
        static _depthMask(arg0: boolean): void;
        static _glDeleteFramebuffers(arg0: number): void;
        static _glFramebufferTexture2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static _getString(arg0: number): string;
        static _clearDepth(arg0: number): void;
        static _glBlitFrameBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static _enableDepthTest(): void;
        static _glBindFramebuffer(arg0: number, arg1: number): void;
        static _texImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $IntBuffer): void;
        static _disableBlend(): void;
        static _disableDepthTest(): void;
        static setupGuiFlatDiffuseLighting(arg0: $Vector3f, arg1: $Vector3f): void;
        static getActiveTexture$iris_$md$70d283$3(): number;
        static getTEXTURES$iris_$md$70d283$4(): $GlStateManager$TextureState[];
        static getCOLOR_MASK$iris_$md$70d283$1(): $GlStateManager$ColorMask;
        static _getActiveTexture(): number;
        static _activeTexture(arg0: number): void;
        static TEXTURE_COUNT: number;
        static DEPTH: $GlStateManager$DepthState;
        constructor();
        static get boundFramebuffer(): number;
        static get BLEND$iris_$md$70d283$0(): $GlStateManager$BlendState;
        static get DEPTH$iris_$md$70d283$2(): $GlStateManager$DepthState;
        static get activeTexture$iris_$md$70d283$3(): number;
        static get TEXTURES$iris_$md$70d283$4(): $GlStateManager$TextureState[];
        static get COLOR_MASK$iris_$md$70d283$1(): $GlStateManager$ColorMask;
    }
    export class $NativeImage implements $AutoCloseable, $AccessNativeImage, $NativeImageAccessor, $NativeImageAccessor$1, $NativeImagePointerAccessor {
        format(): $NativeImage$Format;
        static read(arg0: number[]): $NativeImage;
        static read(arg0: $NativeImage$Format_, arg1: $ByteBuffer): $NativeImage;
        static read(arg0: $InputStream): $NativeImage;
        static read(arg0: $NativeImage$Format_, arg1: $InputStream): $NativeImage;
        static read(arg0: $ByteBuffer): $NativeImage;
        close(): void;
        copyFrom(arg0: $NativeImage): void;
        getWidth(): number;
        writeToFile(arg0: $File_): void;
        writeToFile(arg0: $Path_): void;
        untrack(): void;
        getHeight(): number;
        resizeSubRectTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage): void;
        getRedOrLuminance(arg0: number, arg1: number): number;
        applyToAllPixels(arg0: $IntUnaryOperator_): void;
        setPixelLuminance(arg0: number, arg1: number, arg2: number): void;
        getBlueOrLuminance(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        makePixelArray(): number[];
        getPixelsRGBA(): number[];
        downloadTexture(arg0: number, arg1: boolean): void;
        copyFromFont(arg0: $FT_Face, arg1: number): boolean;
        getLuminanceOrAlpha(arg0: number, arg1: number): number;
        getGreenOrLuminance(arg0: number, arg1: number): number;
        downloadDepthBuffer(arg0: number): void;
        skinlayers$isAllocated(): boolean;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void;
        getPixelRGBA(arg0: number, arg1: number): number;
        setPixelRGBA(arg0: number, arg1: number, arg2: number): void;
        asByteArray(): number[];
        blendPixel(arg0: number, arg1: number, arg2: number): void;
        mappedCopy(arg0: $IntUnaryOperator_): $NativeImage;
        drawPixels(): void;
        flipY(): void;
        copyRect(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        copyRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean): void;
        getPointer(): number;
        getPixels(): number;
        pixels: number;
        size: number;
        constructor(arg0: $NativeImage$Format_, arg1: number, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: number, arg2: boolean);
        get width(): number;
        get height(): number;
        get pixelsRGBA(): number[];
        get pointer(): number;
    }
    export class $ClipboardManager {
        setClipboard(arg0: number, arg1: string): void;
        getClipboard(arg0: number, arg1: $GLFWErrorCallbackI_): string;
        static FORMAT_UNAVAILABLE: number;
        constructor();
    }
    export class $VideoMode {
        write(): string;
        static read(arg0: string): ($VideoMode) | undefined;
        getWidth(): number;
        getHeight(): number;
        getRefreshRate(): number;
        getGreenBits(): number;
        getBlueBits(): number;
        getRedBits(): number;
        constructor(arg0: $GLFWVidMode);
        constructor(arg0: $GLFWVidMode$Buffer);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get width(): number;
        get height(): number;
        get refreshRate(): number;
        get greenBits(): number;
        get blueBits(): number;
        get redBits(): number;
    }
    export class $GlConst {
        static GL_PROXY_TEXTURE_2D: number;
        static GL_LEQUAL: number;
        static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
        static GL_ONE_MINUS_SRC_COLOR: number;
        static GL_FUNC_REVERSE_SUBTRACT: number;
        static GL_DEPTH_TEXTURE_MODE: number;
        static GL_UNSIGNED_INT: number;
        static GL_UNPACK_SKIP_ROWS: number;
        static GL_ONE_MINUS_DST_COLOR: number;
        static GL_FRAMEBUFFER_COMPLETE: number;
        static GL_PACK_ALIGNMENT: number;
        static GL_TRIANGLE_FAN: number;
        static GL_SHORT: number;
        static GL_VERTEX_SHADER: number;
        static GL_COLOR_BUFFER_BIT: number;
        static GL_RGBA8: number;
        static GL_DEPTH_ATTACHMENT: number;
        static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
        static GL_TEXTURE0: number;
        static GL_ZERO: number;
        static GL_ALWAYS: number;
        static GL_DEPTH_COMPONENT32: number;
        static GL_TEXTURE2: number;
        static GL_TEXTURE1: number;
        static GL_STATIC_DRAW: number;
        static GL_ONE_MINUS_DST_ALPHA: number;
        static GL_NEAREST: number;
        static GL_RENDERBUFFER: number;
        static GL_FUNC_ADD: number;
        static GL_UNSIGNED_SHORT: number;
        static GL_CLAMP_TO_EDGE: number;
        static GL_LINES: number;
        static GL_TRUE: number;
        static GL_COLOR_ATTACHMENT0: number;
        static GL_LINE_STRIP: number;
        static GL_FRAGMENT_SHADER: number;
        static GL_UNPACK_SKIP_PIXELS: number;
        static GL_UNPACK_SWAP_BYTES: number;
        static GL_FRONT_AND_BACK: number;
        static GL_DST_COLOR: number;
        static GL_MIN: number;
        static GL_LINEAR_MIPMAP_LINEAR: number;
        static GL_DRAW_FRAMEBUFFER: number;
        static GL_MAX: number;
        static GL_TEXTURE_COMPARE_MODE: number;
        static GL_TEXTURE_WRAP_S: number;
        static GL_DEPTH_COMPONENT: number;
        static GL_TEXTURE_WRAP_T: number;
        static GL_ONE: number;
        static GL_GREATER: number;
        static GL_ELEMENT_ARRAY_BUFFER: number;
        static GL_WRITE_ONLY: number;
        static GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER: number;
        static GL_FILL: number;
        static GL_REPLACE: number;
        static GL_FLOAT: number;
        static GL_FRAMEBUFFER: number;
        static GL_TRIANGLES: number;
        static GL_FUNC_SUBTRACT: number;
        static GL_TEXTURE_2D: number;
        static GL_RED: number;
        static GL_READ_FRAMEBUFFER: number;
        static GL_FRAMEBUFFER_UNSUPPORTED: number;
        static GL_GEQUAL: number;
        static GL_TEXTURE_MIN_FILTER: number;
        static GL_UNPACK_ROW_LENGTH: number;
        static GL_ARRAY_BUFFER: number;
        static GL_UNSIGNED_BYTE: number;
        static GL_DEPTH_BUFFER_BIT: number;
        static GL_LINEAR: number;
        static GL_RGBA: number;
        static GL_NEAREST_MIPMAP_LINEAR: number;
        static GL_MAX_TEXTURE_SIZE: number;
        static GL_DYNAMIC_DRAW: number;
        static GL_TEXTURE_MAG_FILTER: number;
        static GL_OUT_OF_MEMORY: number;
        static GL_DST_ALPHA: number;
        static GL_LINK_STATUS: number;
        static GL_NONE: number;
        static GL_UNPACK_ALIGNMENT: number;
        static GL_SRC_COLOR: number;
        static GL_RG: number;
        static GL_COMPILE_STATUS: number;
        static GL_FRONT: number;
        static GL_UNPACK_LSB_FIRST: number;
        static GL_BYTE: number;
        static GL_FALSE: number;
        static GL_BGR: number;
        static GL_RGB: number;
        static GL_DEPTH_COMPONENT24: number;
        static GL_EQUAL: number;
        static GL_TEXTURE_WIDTH: number;
        static GL_LINE: number;
        static GL_ONE_MINUS_SRC_ALPHA: number;
        static GL_INT: number;
        static GL_ALPHA_BIAS: number;
        static GL_SRC_ALPHA: number;
        static GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER: number;
        static GL_TRIANGLE_STRIP: number;
        constructor();
    }
    export class $GLX {
        static make<T>(arg0: T, arg1: $Consumer_<T>): T;
        static make<T>(arg0: $Supplier_<T>): T;
        static _renderCrosshair(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean): void;
        static _getLWJGLVersion(): string;
        static _getRefreshRate(arg0: $Window): number;
        static _shouldClose(arg0: $Window): boolean;
        static _getCpuInfo(): string;
        static getOpenGLVersionString(): string;
        static _setGlfwErrorCallback(arg0: $GLFWErrorCallbackI_): void;
        static _initGlfw(): $LongSupplier;
        static _init(arg0: number, arg1: boolean): void;
        constructor();
        static get openGLVersionString(): string;
    }
    export class $Monitor {
        getY(): number;
        getMode(arg0: number): $VideoMode;
        refreshVideoModes(): void;
        getModeCount(): number;
        getVideoModeIndex(arg0: $VideoMode): number;
        getPreferredVidMode(arg0: ($VideoMode) | undefined): $VideoMode;
        getX(): number;
        getCurrentMode(): $VideoMode;
        getMonitor(): number;
        constructor(arg0: number);
        get y(): number;
        get modeCount(): number;
        get x(): number;
        get currentMode(): $VideoMode;
        get monitor(): number;
    }
    export class $GlStateManager$ColorMask {
        red: boolean;
        green: boolean;
        blue: boolean;
        alpha: boolean;
    }
    export class $GlStateManager$DestFactor extends $Enum<$GlStateManager$DestFactor> {
        static values(): $GlStateManager$DestFactor[];
        static valueOf(arg0: string): $GlStateManager$DestFactor;
        static ONE_MINUS_SRC_COLOR: $GlStateManager$DestFactor;
        static ZERO: $GlStateManager$DestFactor;
        static DST_COLOR: $GlStateManager$DestFactor;
        static SRC_ALPHA: $GlStateManager$DestFactor;
        static ONE: $GlStateManager$DestFactor;
        static ONE_MINUS_DST_COLOR: $GlStateManager$DestFactor;
        static DST_ALPHA: $GlStateManager$DestFactor;
        static SRC_COLOR: $GlStateManager$DestFactor;
        static ONE_MINUS_DST_ALPHA: $GlStateManager$DestFactor;
        static CONSTANT_ALPHA: $GlStateManager$DestFactor;
        static ONE_MINUS_SRC_ALPHA: $GlStateManager$DestFactor;
        static CONSTANT_COLOR: $GlStateManager$DestFactor;
        static ONE_MINUS_CONSTANT_ALPHA: $GlStateManager$DestFactor;
        static ONE_MINUS_CONSTANT_COLOR: $GlStateManager$DestFactor;
        value: number;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$DestFactor}.
     */
    export type $GlStateManager$DestFactor_ = "constant_alpha" | "constant_color" | "dst_alpha" | "dst_color" | "one" | "one_minus_constant_alpha" | "one_minus_constant_color" | "one_minus_dst_alpha" | "one_minus_dst_color" | "one_minus_src_alpha" | "one_minus_src_color" | "src_alpha" | "src_color" | "zero";
    export class $InputConstants$Key implements $AccessInputConstantsKey {
        getName(): string;
        getValue(): number;
        getType(): $InputConstants$Type;
        getDisplayName(): $Component;
        getNumericKeyValue(): $OptionalInt;
        static getNAME_MAP$controlling_$md$70d283$0(): $Map<any, any>;
        displayName: $LazyLoadedValue<$Component>;
        get name(): string;
        get value(): number;
        get type(): $InputConstants$Type;
        get numericKeyValue(): $OptionalInt;
        static get NAME_MAP$controlling_$md$70d283$0(): $Map<any, any>;
    }
    export class $NativeImage$InternalGlFormat extends $Enum<$NativeImage$InternalGlFormat> {
        static values(): $NativeImage$InternalGlFormat[];
        static valueOf(arg0: string): $NativeImage$InternalGlFormat;
        glFormat(): number;
        static RED: $NativeImage$InternalGlFormat;
        static RGBA: $NativeImage$InternalGlFormat;
        static RG: $NativeImage$InternalGlFormat;
        static RGB: $NativeImage$InternalGlFormat;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$InternalGlFormat}.
     */
    export type $NativeImage$InternalGlFormat_ = "rgba" | "rgb" | "rg" | "red";
    export class $GlStateManager$SourceFactor extends $Enum<$GlStateManager$SourceFactor> {
        static values(): $GlStateManager$SourceFactor[];
        static valueOf(arg0: string): $GlStateManager$SourceFactor;
        static ONE_MINUS_SRC_COLOR: $GlStateManager$SourceFactor;
        static ZERO: $GlStateManager$SourceFactor;
        static DST_COLOR: $GlStateManager$SourceFactor;
        static SRC_ALPHA: $GlStateManager$SourceFactor;
        static ONE: $GlStateManager$SourceFactor;
        static ONE_MINUS_DST_COLOR: $GlStateManager$SourceFactor;
        static DST_ALPHA: $GlStateManager$SourceFactor;
        static SRC_COLOR: $GlStateManager$SourceFactor;
        static SRC_ALPHA_SATURATE: $GlStateManager$SourceFactor;
        static ONE_MINUS_DST_ALPHA: $GlStateManager$SourceFactor;
        static CONSTANT_ALPHA: $GlStateManager$SourceFactor;
        static ONE_MINUS_SRC_ALPHA: $GlStateManager$SourceFactor;
        static CONSTANT_COLOR: $GlStateManager$SourceFactor;
        static ONE_MINUS_CONSTANT_ALPHA: $GlStateManager$SourceFactor;
        static ONE_MINUS_CONSTANT_COLOR: $GlStateManager$SourceFactor;
        value: number;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$SourceFactor}.
     */
    export type $GlStateManager$SourceFactor_ = "constant_alpha" | "constant_color" | "dst_alpha" | "dst_color" | "one" | "one_minus_constant_alpha" | "one_minus_constant_color" | "one_minus_dst_alpha" | "one_minus_dst_color" | "one_minus_src_alpha" | "one_minus_src_color" | "src_alpha" | "src_alpha_saturate" | "src_color" | "zero";
    export class $Lighting {
        static setupForFlatItems(): void;
        static setupFor3DItems(): void;
        static setupLevel(): void;
        static setupNetherLevel(): void;
        static setupForEntityInInventory(arg0: $Quaternionf): void;
        static setupForEntityInInventory(): void;
        static NETHER_DIFFUSE_LIGHT_1: $Vector3f;
        static NETHER_DIFFUSE_LIGHT_0: $Vector3f;
        static DIFFUSE_LIGHT_0: $Vector3f;
        static DIFFUSE_LIGHT_1: $Vector3f;
        constructor();
    }
    export class $GlStateManager$Viewport extends $Enum<$GlStateManager$Viewport> {
        static values(): $GlStateManager$Viewport[];
        static valueOf(arg0: string): $GlStateManager$Viewport;
        static x(): number;
        static y(): number;
        static width(): number;
        static height(): number;
        static INSTANCE: $GlStateManager$Viewport;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$Viewport}.
     */
    export type $GlStateManager$Viewport_ = "instance";
    export class $ScreenManager {
        shutdown(): void;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        findBestMonitor(arg0: $Window): $Monitor;
        getMonitor(arg0: number): $Monitor;
        constructor(arg0: $MonitorCreator_);
    }
    export class $GlDebug {
        static getLastOpenGlDebugMessages(): $List<string>;
        static typeToString(arg0: number): string;
        static isDebugEnabled(): boolean;
        static sourceToString(arg0: number): string;
        static severityToString(arg0: number): string;
        static enableDebugCallback(arg0: number, arg1: boolean): void;
        constructor();
        static get lastOpenGlDebugMessages(): $List<string>;
        static get debugEnabled(): boolean;
    }
    export class $IconSet extends $Enum<$IconSet> {
        static values(): $IconSet[];
        static valueOf(arg0: string): $IconSet;
        getStandardIcons(arg0: $PackResources): $List<$IoSupplier<$InputStream>>;
        getMacIcon(arg0: $PackResources): $IoSupplier<$InputStream>;
        static SNAPSHOT: $IconSet;
        static RELEASE: $IconSet;
    }
    /**
     * Values that may be interpreted as {@link $IconSet}.
     */
    export type $IconSet_ = "release" | "snapshot";
    export class $GlStateManager$ColorLogicState {
    }
    export class $InputConstants {
        static getKey(arg0: number, arg1: number): $InputConstants$Key;
        static getKey(arg0: string): $InputConstants$Key;
        static updateRawMouseInput(arg0: number, arg1: boolean): void;
        static grabOrReleaseMouse(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static setupKeyboardCallbacks(arg0: number, arg1: $GLFWKeyCallbackI_, arg2: $GLFWCharModsCallbackI_): void;
        static setupMouseCallbacks(arg0: number, arg1: $GLFWCursorPosCallbackI_, arg2: $GLFWMouseButtonCallbackI_, arg3: $GLFWScrollCallbackI_, arg4: $GLFWDropCallbackI_): void;
        static isRawMouseInputSupported(): boolean;
        static isKeyDown(arg0: number, arg1: number): boolean;
        static KEY_A: number;
        static KEY_C: number;
        static KEY_B: number;
        static KEY_DELETE: number;
        static KEY_E: number;
        static KEY_D: number;
        static KEY_G: number;
        static KEY_F: number;
        static KEY_I: number;
        static KEY_H: number;
        static KEY_K: number;
        static MOUSE_BUTTON_MIDDLE: number;
        static KEY_J: number;
        static KEY_INSERT: number;
        static KEY_M: number;
        static KEY_COMMA: number;
        static KEY_L: number;
        static KEY_O: number;
        static KEY_N: number;
        static KEY_Q: number;
        static KEY_P: number;
        static KEY_S: number;
        static KEY_R: number;
        static KEY_U: number;
        static KEY_MINUS: number;
        static KEY_T: number;
        static KEY_W: number;
        static KEY_GRAVE: number;
        static KEY_V: number;
        static KEY_Y: number;
        static KEY_X: number;
        static KEY_Z: number;
        static KEY_BACKSLASH: number;
        static KEY_SEMICOLON: number;
        static KEY_MULTIPLY: number;
        static KEY_RSHIFT: number;
        static KEY_NUMLOCK: number;
        static RELEASE: number;
        static KEY_NUMPAD7: number;
        static KEY_NUMPAD8: number;
        static KEY_TAB: number;
        static KEY_NUMPAD5: number;
        static KEY_NUMPAD6: number;
        static KEY_PAGEDOWN: number;
        static KEY_NUMPAD9: number;
        static KEY_NUMPAD0: number;
        static KEY_APOSTROPHE: number;
        static KEY_NUMPAD3: number;
        static KEY_NUMPAD4: number;
        static KEY_NUMPAD1: number;
        static KEY_NUMPAD2: number;
        static KEY_F7: number;
        static KEY_F20: number;
        static KEY_F6: number;
        static KEY_F21: number;
        static KEY_F9: number;
        static KEY_F22: number;
        static KEY_F8: number;
        static KEY_F23: number;
        static KEY_LEFT: number;
        static REPEAT: number;
        static KEY_F24: number;
        static KEY_F25: number;
        static KEY_RBRACKET: number;
        static MOD_CONTROL: number;
        static KEY_F1: number;
        static KEY_F3: number;
        static KEY_F2: number;
        static KEY_F5: number;
        static KEY_F4: number;
        static KEY_NUMPADCOMMA: number;
        static KEY_UP: number;
        static KEY_RWIN: number;
        static CURSOR_NORMAL: number;
        static KEY_1: number;
        static KEY_0: number;
        static KEY_3: number;
        static KEY_2: number;
        static KEY_5: number;
        static KEY_4: number;
        static MOUSE_BUTTON_LEFT: number;
        static KEY_7: number;
        static KEY_NUMPADENTER: number;
        static KEY_RIGHT: number;
        static KEY_6: number;
        static KEY_9: number;
        static KEY_8: number;
        static KEY_SPACE: number;
        static CURSOR: number;
        static KEY_LSHIFT: number;
        static KEY_LCONTROL: number;
        static KEY_PAGEUP: number;
        static KEY_BACKSPACE: number;
        static KEY_PRINTSCREEN: number;
        static KEY_HOME: number;
        static KEY_NUMPADEQUALS: number;
        static KEY_ESCAPE: number;
        static KEY_F10: number;
        static KEY_F11: number;
        static KEY_F12: number;
        static KEY_F17: number;
        static KEY_F18: number;
        static CURSOR_DISABLED: number;
        static KEY_F19: number;
        static KEY_F13: number;
        static KEY_SCROLLLOCK: number;
        static KEY_F14: number;
        static KEY_F15: number;
        static PRESS: number;
        static KEY_F16: number;
        static KEY_RALT: number;
        static KEY_LWIN: number;
        static KEY_EQUALS: number;
        static KEY_CAPSLOCK: number;
        static KEY_PAUSE: number;
        static KEY_RETURN: number;
        static KEY_SLASH: number;
        static KEY_ADD: number;
        static KEY_LBRACKET: number;
        static MOUSE_BUTTON_RIGHT: number;
        static KEY_DOWN: number;
        static KEY_PERIOD: number;
        static KEY_RCONTROL: number;
        static UNKNOWN: $InputConstants$Key;
        static KEY_LALT: number;
        static KEY_END: number;
        constructor();
        static get rawMouseInputSupported(): boolean;
    }
    export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
        static values(): $NativeImage$Format[];
        static valueOf(arg0: string): $NativeImage$Format;
        components(): number;
        greenOffset(): number;
        supportedByStb(): boolean;
        hasLuminance(): boolean;
        hasLuminanceOrBlue(): boolean;
        hasLuminanceOrRed(): boolean;
        luminanceOffset(): number;
        alphaOffset(): number;
        glFormat(): number;
        hasLuminanceOrAlpha(): boolean;
        luminanceOrRedOffset(): number;
        hasLuminanceOrGreen(): boolean;
        luminanceOrGreenOffset(): number;
        luminanceOrAlphaOffset(): number;
        setPackPixelStoreState(): void;
        luminanceOrBlueOffset(): number;
        setUnpackPixelStoreState(): void;
        hasAlpha(): boolean;
        hasGreen(): boolean;
        redOffset(): number;
        hasRed(): boolean;
        hasBlue(): boolean;
        blueOffset(): number;
        static LUMINANCE_ALPHA: $NativeImage$Format;
        static RGBA: $NativeImage$Format;
        static LUMINANCE: $NativeImage$Format;
        static RGB: $NativeImage$Format;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$Format}.
     */
    export type $NativeImage$Format_ = "rgba" | "rgb" | "luminance_alpha" | "luminance";
    export class $GlStateManager$StencilFunc {
    }
    export class $GlUtil {
        static freeMemory(arg0: $Buffer): void;
        static allocateMemory(arg0: number): $ByteBuffer;
        static getCpuInfo(): string;
        static getRenderer(): string;
        static getOpenGLVersion(): string;
        static getVendor(): string;
        constructor();
        static get cpuInfo(): string;
        static get renderer(): string;
        static get openGLVersion(): string;
        static get vendor(): string;
    }
    export class $GlStateManager$StencilState {
    }
    export class $TextureUtil {
        static prepareImage(arg0: $NativeImage$InternalGlFormat_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static prepareImage(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static prepareImage(arg0: $NativeImage$InternalGlFormat_, arg1: number, arg2: number, arg3: number): void;
        static prepareImage(arg0: number, arg1: number, arg2: number): void;
        static writeAsPNG(arg0: $Path_, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static writeAsPNG(arg0: $Path_, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntUnaryOperator_): void;
        static readResource(arg0: $InputStream): $ByteBuffer;
        static getDebugTexturePath(): $Path;
        static getDebugTexturePath(arg0: $Path_): $Path;
        static releaseTextureId(arg0: number): void;
        static generateTextureId(): number;
        static MIN_MIPMAP_LEVEL: number;
        constructor();
    }
    export class $GlStateManager$TextureState {
        binding: number;
    }
    export class $GlStateManager$CullState {
    }
    export class $GlStateManager$BooleanState implements $BooleanStateExtended, $BooleanStateAccessor {
        enable(): void;
        disable(): void;
        setUnknownState(): void;
        setEnabled(arg0: boolean): void;
        isEnabled(): boolean;
        enabled: boolean;
        constructor(arg0: number);
    }
    export class $GlDebug$LogEntry {
    }
    export class $Window implements $AutoCloseable, $NativeWindowHandle, $WindowKJS {
        close(): void;
        getWidth(): number;
        updateRawMouseInput(arg0: boolean): void;
        setDefaultErrorCallback(): void;
        static getPlatform(): string;
        shouldClose(): boolean;
        getScreenWidth(): number;
        getScreenHeight(): number;
        getY(): number;
        calculateScale(arg0: number, arg1: boolean): number;
        setGuiScale(arg0: number): void;
        getFramerateLimit(): number;
        updateDisplay(): void;
        isFullscreen(): boolean;
        setFramerateLimit(arg0: number): void;
        updateVsync(arg0: boolean): void;
        setWindowed(arg0: number, arg1: number): void;
        toggleFullScreen(): void;
        setErrorSection(arg0: string): void;
        getGuiScale(): number;
        getHeight(): number;
        getWindow(): number;
        setIcon(arg0: $PackResources, arg1: $IconSet_): void;
        setTitle(arg0: string): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        static checkGlfwError(arg0: $BiConsumer_<number, string>): void;
        handler$dmd000$modernui$onCalculateScale(guiScaleIn: number, forceUnicode: boolean, ci: $CallbackInfoReturnable<any>): void;
        getWin32Handle(): number;
        getRefreshRate(): number;
        findBestMonitor(): $Monitor;
        changeFullscreenVideoMode(): void;
        defaultErrorCallback(arg0: number, arg1: number): void;
        getGuiScaledWidth(): number;
        getGuiScaledHeight(): number;
        getX(): number;
        handler$jbg000$imblocker$onScaleFactorChanged(arg0: number, arg1: $CallbackInfo): void;
        handler$jbg000$imblocker$onScaleFactorChanged(arg0: number, arg1: $CallbackInfo): void;
        handler$jbk000$imblocker$initializeIngameIME(arg0: $WindowEventHandler, arg1: $ScreenManager, arg2: $DisplayData, arg3: string, arg4: string, arg5: $CallbackInfo): void;
        setPreferredFullscreenVideoMode(arg0: ($VideoMode) | undefined): void;
        getPreferredFullscreenVideoMode(): ($VideoMode) | undefined;
        handler$jbj000$imblocker$tweakFullScreenWindowStyle(arg0: $CallbackInfo): void;
        wrapOperation$cmh000$sodium$setAdditionalWindowHints(arg0: number, arg1: number, arg2: $CharSequence, arg3: number, arg4: number, arg5: $Operation_<any>): number;
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
        dirty: boolean;
        static BASE_HEIGHT: number;
        static BASE_WIDTH: number;
        constructor(arg0: $WindowEventHandler, arg1: $ScreenManager, arg2: $DisplayData, arg3: string, arg4: string);
        static get platform(): string;
        get screenWidth(): number;
        get screenHeight(): number;
        get y(): number;
        get fullscreen(): boolean;
        set errorSection(value: string);
        get window(): number;
        set title(value: string);
        get win32Handle(): number;
        get refreshRate(): number;
        get guiScaledWidth(): number;
        get guiScaledHeight(): number;
        get x(): number;
    }
    export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
        static values(): $InputConstants$Type[];
        static valueOf(arg0: string): $InputConstants$Type;
        getOrCreate(arg0: number): $InputConstants$Key;
        static SCANCODE: $InputConstants$Type;
        static MOUSE: $InputConstants$Type;
        static KEYSYM: $InputConstants$Type;
    }
    /**
     * Values that may be interpreted as {@link $InputConstants$Type}.
     */
    export type $InputConstants$Type_ = "keysym" | "scancode" | "mouse";
    export class $MacosUtil {
        static clearResizableBit(arg0: number): void;
        static exitNativeFullscreen(arg0: number): void;
        static loadIcon(arg0: $IoSupplier_<$InputStream>): void;
        constructor();
    }
    export class $WindowEventHandler {
    }
    export interface $WindowEventHandler {
        cursorEntered(): void;
        resizeDisplay(): void;
        setWindowActive(arg0: boolean): void;
        set windowActive(value: boolean);
    }
    export class $GlStateManager$LogicOp extends $Enum<$GlStateManager$LogicOp> {
        static values(): $GlStateManager$LogicOp[];
        static valueOf(arg0: string): $GlStateManager$LogicOp;
        static OR: $GlStateManager$LogicOp;
        static SET: $GlStateManager$LogicOp;
        static EQUIV: $GlStateManager$LogicOp;
        static NOOP: $GlStateManager$LogicOp;
        static COPY: $GlStateManager$LogicOp;
        static NAND: $GlStateManager$LogicOp;
        static COPY_INVERTED: $GlStateManager$LogicOp;
        static NOR: $GlStateManager$LogicOp;
        static AND_REVERSE: $GlStateManager$LogicOp;
        static INVERT: $GlStateManager$LogicOp;
        static AND: $GlStateManager$LogicOp;
        static OR_REVERSE: $GlStateManager$LogicOp;
        static XOR: $GlStateManager$LogicOp;
        static AND_INVERTED: $GlStateManager$LogicOp;
        value: number;
        static CLEAR: $GlStateManager$LogicOp;
        static OR_INVERTED: $GlStateManager$LogicOp;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$LogicOp}.
     */
    export type $GlStateManager$LogicOp_ = "and" | "and_inverted" | "and_reverse" | "clear" | "copy" | "copy_inverted" | "equiv" | "invert" | "nand" | "noop" | "nor" | "or" | "or_inverted" | "or_reverse" | "set" | "xor";
    export class $DebugMemoryUntracker {
        static untrack(arg0: number): void;
        static untrack(arg0: $Pointer_): void;
        constructor();
    }
    export class $DisplayData {
        fullscreenHeight: $OptionalInt;
        fullscreenWidth: $OptionalInt;
        width: number;
        height: number;
        isFullscreen: boolean;
        constructor(arg0: number, arg1: number, arg2: $OptionalInt, arg3: $OptionalInt, arg4: boolean);
    }
}
