import { $AnimatedTextureDuck, $IPotentiallyInvisibleSpriteContents } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$2, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1, $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $PBRSpriteHolder, $SpriteContentsExtension, $PBRAtlasHolder, $TextureAtlasExtension } from "@package/net/irisshaders/iris/pbr/texture";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $TextureLocationSettable } from "@package/dzwdz/chat_heads/mixininterface";
import { $IOException, $File_, $Closeable } from "@package/java/io";
import { $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/net/irisshaders/iris/pbr";
import { $HttpTextureAccessor } from "@package/dev/tr7zw/skinlayers/accessor";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Darkness$DynamicTextureHook } from "@package/me/srrapero720/chloride/impl";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $IExtendedSimpleTexture } from "@package/io/redspace/ironsspellbooks/render";
import { $TextureAtlasAccessor as $TextureAtlasAccessor$2, $SpriteContentsAccessor as $SpriteContentsAccessor$1 } from "@package/net/conczin/immersive_furniture/mixin/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(arg0: $Stitcher$Entry, arg1: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        stitch(): void;
        getHeight(): number;
        gatherSprites(arg0: $Stitcher$SpriteLoader_<T>): void;
        registerSprite(arg0: T): void;
        constructor(arg0: number, arg1: number, arg2: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(arg0: number, arg1: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable {
        reset(arg0: $TextureManager, arg1: $ResourceManager, arg2: $ResourceLocation_, arg3: $Executor_): void;
        load(arg0: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        releaseId(): void;
        restoreLastBlurMipmap(): void;
        static NOT_ASSIGNED: number;
        constructor();
        get id(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(arg0: boolean): number;
        close(): void;
        static u(arg0: number): number;
        static pack(arg0: number, arg1: boolean): number;
        static pack(arg0: number, arg1: number): number;
        setupOverlayColor(): void;
        teardownOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable, $HttpTextureAccessor {
        getImage(): $NativeImage;
        chatheads$setTextureLocation(textureLocation: $ResourceLocation_): void;
        handler$bjc000$chat_heads$chatheads$registerBlendedHeadTexture(image: $NativeImage, ci: $CallbackInfo): void;
        static NOT_ASSIGNED: number;
        constructor(arg0: $File_, arg1: string, arg2: $ResourceLocation_, arg3: boolean, arg4: $Runnable_);
        get image(): $NativeImage;
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$cop000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
    }
    export class $SpriteLoader$Preparations extends $Record {
        width(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        missing(): $TextureAtlasSprite;
        height(): number;
        mipLevel(): number;
        readyForUpload(): $CompletableFuture<void>;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>,  } | [width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(arg0: T, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { entry?: $Stitcher$Entry, width?: number, height?: number,  } | [entry?: $Stitcher$Entry, width?: number, height?: number, ];
    export class $SpriteLoader {
        static create(arg0: $TextureAtlas): $SpriteLoader;
        stitch(arg0: $List_<$SpriteContents>, arg1: number, arg2: $Executor_): $SpriteLoader$Preparations;
        static runSpriteSuppliers(arg0: $SpriteResourceLoader_, arg1: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, arg2: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_, arg4: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(arg0: T, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        constructor(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor {
        close(): void;
        tickAndUpload(arg0: number, arg1: number): void;
        handler$coo000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        getFrame(): number;
        getFrameIndex(): number;
        setFrame(arg0: number): void;
        getFrameTicks(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getSubFrame(): number;
        get frameIndex(): number;
        get frameTicks(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$2, $SpriteContentsAccessor$2, $SpriteContentsExtension, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$3, $IPotentiallyInvisibleSpriteContents, $SpriteContentsAccessor$1 {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        metadata(): $ResourceMetadata;
        height(): number;
        getFrameCount(): number;
        uploadFirstFrame(arg0: number, arg1: number): void;
        getPBRHolder(): $PBRSpriteHolder;
        getOriginalImage(): $NativeImage;
        isTransparent(arg0: number, arg1: number, arg2: number): boolean;
        increaseMipLevel(arg0: number): void;
        getUniqueFrames(): $IntStream;
        createTicker(): $SpriteTicker;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        getCreatedTicker(): $SpriteContents$Ticker;
        sodium$setActive(arg0: boolean): void;
        sodium$isActive(): boolean;
        railways$isVisible(): boolean;
        railways$uploadFrame(arg0: boolean): void;
        sodium$hasAnimation(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        sodium$hasTransparentPixels(): boolean;
        railways$shouldDoInvisibility(): boolean;
        getImages(): $NativeImage[];
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        getMipLevelData(): $NativeImage[];
        immersiveFurniture$getFrameCount(): number;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(arg0: $ResourceLocation_, arg1: $FrameSize_, arg2: $NativeImage, arg3: $ResourceMetadata_);
        get frameCount(): number;
        get PBRHolder(): $PBRSpriteHolder;
        get uniqueFrames(): $IntStream;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get createdTicker(): $SpriteContents$Ticker;
        get images(): $NativeImage[];
        get mipLevelData(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $Darkness$DynamicTextureHook {
        getPixels(): $NativeImage;
        setPixels(arg0: $NativeImage): void;
        upload(): void;
        wrapOperation$haj000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        wrapOperation$haj000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        chloride$enableDarkness(): void;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        static NOT_ASSIGNED: number;
        constructor(arg0: $NativeImage);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1, $AnimatedTextureDuck {
        uploadFirstFrame(arg0: number, arg1: number): void;
        getUniqueFrames(): $IntStream;
        createTicker(): $SpriteTicker;
        getFrameX(arg0: number): number;
        getFrameY(arg0: number): number;
        uploadFrame(arg0: number, arg1: number, arg2: number): void;
        railways$uploadWithVisibility(): void;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        invokeUploadFrame(arg0: number, arg1: number, arg2: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor$1, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess, $TextureAtlasAccessor$2 {
        location(): $ResourceLocation;
        tick(): void;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        updateFilter(arg0: $SpriteLoader$Preparations_): void;
        clearTextureData(): void;
        getPBRHolder(): $PBRAtlasHolder;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        redirect$zbg000$sodium_extra$sodiumExtra$tickAnimatedSprites(arg0: $TextureAtlasSprite): $TextureAtlasSprite$Ticker;
        upload(arg0: $SpriteLoader$Preparations_): void;
        maxSupportedTextureSize(): number;
        fabric_spriteFinder(): $SpriteFinderImpl;
        cycleAnimationFrames(): void;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        getWidth(): number;
        getHeight(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetHeight(): number;
        callGetWidth(): number;
        getMipLevel(): number;
        getSprites(): $List<$SpriteContents>;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        sprites: $List<$SpriteContents>;
        constructor(arg0: $ResourceLocation_);
        get PBRHolder(): $PBRAtlasHolder;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get width(): number;
        get height(): number;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        add(arg0: $Stitcher$Holder_<T>): boolean;
        walk(arg0: $Stitcher$SpriteLoader_<T>): void;
        getY(): number;
        getX(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor, $IExtendedSimpleTexture {
        irons_spellbooks$isRectangular(): boolean;
        getLocation(): $ResourceLocation;
        static NOT_ASSIGNED: number;
        constructor(arg0: $ResourceLocation_);
        get location(): $ResourceLocation;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable {
        register(arg0: $ResourceLocation_, arg1: $AbstractTexture): void;
        register(arg0: string, arg1: $DynamicTexture): $ResourceLocation;
        close(): void;
        release(arg0: $ResourceLocation_): void;
        tick(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getTexture(arg0: $ResourceLocation_): $AbstractTexture;
        getTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture): $AbstractTexture;
        dumpAllSheets(arg0: $Path_): void;
        preload(arg0: $ResourceLocation_, arg1: $Executor_): $CompletableFuture<void>;
        bindForSetup(arg0: $ResourceLocation_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(arg0: $ResourceManager);
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
        wrap(arg0: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getV(arg0: number): number;
        getU(arg0: number): number;
        getY(): number;
        atlasLocation(): $ResourceLocation;
        uploadFirstFrame(): void;
        getU0(): number;
        getV1(): number;
        getV0(): number;
        getU1(): number;
        getX(): number;
        createTicker(): $TextureAtlasSprite$Ticker;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        sodium$hasUnknownImageContents(): boolean;
        uvShrinkRatio(): number;
        getUOffset(arg0: number): number;
        atlasSize(): number;
        getVOffset(arg0: number): number;
        constructor(arg0: $ResourceLocation_, arg1: $SpriteContents, arg2: number, arg3: number, arg4: number, arg5: number);
        get y(): number;
        get u0(): number;
        get v1(): number;
        get v0(): number;
        get u1(): number;
        get x(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        static load(arg0: $ResourceManager, arg1: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        throwIfError(): void;
        getTextureMetadata(): $TextureMetadataSection;
        getImage(): $NativeImage;
        constructor(arg0: $IOException);
        constructor(arg0: $TextureMetadataSection, arg1: $NativeImage);
        get textureMetadata(): $TextureMetadataSection;
        get image(): $NativeImage;
    }
    export class $MipmapGenerator {
        static generateMipLevels(arg0: $NativeImage[], arg1: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
