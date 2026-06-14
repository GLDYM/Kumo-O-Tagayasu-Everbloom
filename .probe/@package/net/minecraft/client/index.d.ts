import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $AccessorKeyMapping } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $IMixinSimpleOption } from "@package/fi/dy/masa/tweakeroo/mixin/option";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $KeyboardHandlerAccessor } from "@package/io/github/reserveword/imblocker/mixin";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $IMixinKeyBinding } from "@package/fi/dy/masa/litematica/mixin/input";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $List_, $Collection, $Locale, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $AccessorMinecraft } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $ChatHudLineAccessor } from "@package/com/wulian/chatimpressiveanimation/mixin";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $AccessOptions } from "@package/icyllis/modernui/mc/mixin";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $StringSplitterAccessor as $StringSplitterAccessor$1, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/team/creative/creativecore/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $IMinecraftClientInvoker } from "@package/fi/dy/masa/tweakeroo/util";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $CameraDuck, $OptionsDuck } from "@package/com/github/exopandora/shouldersurfing/mixinducks";
import { $MinecraftClientAccessor } from "@package/me/flashyreese/mods/sodiumextra/mixin/gui";
import { $IMixinDataQueryHandler } from "@package/fi/dy/masa/malilib/mixin/network";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $KeyMappingAccessor } from "@package/cn/zbx1425/minopp/mixin";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $AccessorKeyMapping as $AccessorKeyMapping$1 } from "@package/vazkii/patchouli/mixin/client";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $IntFunction_, $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $ToIntFunction_, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $IMixinOptions } from "@package/fi/dy/masa/minihud/mixin/client";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $KeyMappingAccessor as $KeyMappingAccessor$1 } from "@package/dev/terminalmc/clientsort/mixin/client/accessor";
import { $CameraAccessor } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $StringSplitterAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $MinecraftAccessor as $MinecraftAccessor$1 } from "@package/fuzs/proplacer/mixin/client/accessor";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $IF3KeyStateSetter } from "@package/fi/dy/masa/malilib/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$1, $MouseHandlerAccessor {
        setup(arg0: number): void;
        handleAccumulatedMovement(): void;
        grabMouse(): void;
        xpos(): number;
        ypos(): number;
        setIgnoreFirstMove(): void;
        cursorEntered(): void;
        isRightPressed(): boolean;
        getYVelocity(): number;
        isLeftPressed(): boolean;
        getXVelocity(): number;
        isMiddlePressed(): boolean;
        isMouseGrabbed(): boolean;
        releaseMouse(): void;
        create$setXPos(arg0: number): void;
        create$setYPos(arg0: number): void;
        getLastHandleMovementTime(): number;
        mouseGrabbed: boolean;
        constructor(arg0: $Minecraft);
        set up(value: number);
        get rightPressed(): boolean;
        get YVelocity(): number;
        get leftPressed(): boolean;
        get XVelocity(): number;
        get middlePressed(): boolean;
        get lastHandleMovementTime(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getSessionId(): string;
        getAccessToken(): string;
        getClientId(): (string) | undefined;
        getXuid(): (string) | undefined;
        getProfileId(): $UUID;
        constructor(arg0: string, arg1: $UUID_, arg2: string, arg3: (string) | undefined, arg4: (string) | undefined, arg5: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get sessionId(): string;
        get accessToken(): string;
        get clientId(): (string) | undefined;
        get xuid(): (string) | undefined;
        get profileId(): $UUID;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        handler$glp000$nerb$onSetup(iterable: $Iterable_<any>, registryAccess: $RegistryAccess, ci: $CallbackInfo): void;
        setupCollections(arg0: $Iterable_<$RecipeHolder<never>>, arg1: $RegistryAccess): void;
        getCollection(arg0: $RecipeBookCategories_): $List<$RecipeCollection>;
        getCollections(): $List<$RecipeCollection>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $HotbarManager {
        get(arg0: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(arg0: $Path_, arg1: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        codec(): $Codec<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { values?: $Supplier_<$List<any>>, codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>,  } | [values?: $Supplier_<$List<any>>, codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { message?: string, title?: string, period?: number, delay?: number,  } | [message?: string, title?: string, period?: number, delay?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        static grab(arg0: $File_, arg1: $RenderTarget, arg2: $Consumer_<$Component>): void;
        static grab(arg0: $File_, arg1: string, arg2: $RenderTarget, arg3: $Consumer_<$Component>): void;
        addRegion(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        saveRow(): void;
        static takeScreenshot(arg0: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
        toSliderValue(arg0: number): number;
        minInclusive(): number;
        maxInclusive(): number;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        fromSliderValue(arg0: number): number;
    }
    export class $Options implements $AccessOptions, $OptionsDuck, $IMixinOptions {
        load(arg0: boolean): void;
        load(): void;
        save(): void;
        getFile(): $File;
        loadSelectedResourcePacks(arg0: $PackRepository): void;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        particles(): $OptionInstance<$ParticleStatus>;
        narrator(): $OptionInstance<$NarratorStatus>;
        fullscreen(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        touchscreen(): $OptionInstance<boolean>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        gamma(): $OptionInstance<number>;
        getMenuBackgroundBlurriness(): number;
        setKey(arg0: $KeyMapping, arg1: $InputConstants$Key): void;
        glintSpeed(): $OptionInstance<number>;
        fov(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        glintStrength(): $OptionInstance<number>;
        mipmapLevels(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        getBackgroundColor(arg0: number): number;
        getBackgroundColor(arg0: number): number;
        updateResourcePacks(arg0: $PackRepository): void;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        static genericValueOrOffLabel(arg0: $Component_, arg1: number): $Component;
        chatHeightUnfocused(): $OptionInstance<number>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        getSoundSourceVolume(arg0: $SoundSource_): number;
        darknessEffectScale(): $OptionInstance<number>;
        setServerRenderDistance(arg0: number): void;
        getBackgroundOpacity(arg0: number): number;
        buildPlayerInformation(): $ClientInformation;
        entityShadows(): $OptionInstance<boolean>;
        panoramaSpeed(): $OptionInstance<number>;
        directionalAudio(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        chatHeightFocused(): $OptionInstance<number>;
        chatLineSpacing(): $OptionInstance<number>;
        useNativeTransport(): boolean;
        invertYMouse(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        autoSuggestions(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        static genericValueLabel(arg0: $Component_, arg1: $Component_): $Component;
        static genericValueLabel(arg0: $Component_, arg1: number): $Component;
        isModelPartEnabled(arg0: $PlayerModelPart_): boolean;
        toggleModelPart(arg0: $PlayerModelPart_, arg1: boolean): void;
        broadcastOptions(): void;
        chatLinksPrompt(): $OptionInstance<boolean>;
        screenEffectScale(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        shouldersurfing$setCameraTypeDirect(arg0: $CameraType_): void;
        entityDistanceScaling(): $OptionInstance<number>;
        notificationDisplayTime(): $OptionInstance<number>;
        getCloudsType(): $CloudStatus;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        getCameraType(): $CameraType;
        setCameraType(arg0: $CameraType_): void;
        chatLinks(): $OptionInstance<boolean>;
        onboardingAccessibilityFinished(): void;
        autoJump(): $OptionInstance<boolean>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        textBackgroundOpacity(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        hideLightningFlash(): $OptionInstance<boolean>;
        simulationDistance(): $OptionInstance<number>;
        hideSplashTexts(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        handler$ddj000$shouldersurfing$setCameraType(arg0: $CameraType_, arg1: $CallbackInfo): void;
        getEffectiveRenderDistance(): number;
        chatOpacity(): $OptionInstance<number>;
        getSoundSourceOptionInstance(arg0: $SoundSource_): $OptionInstance<number>;
        setGuiScale(arg0: $OptionInstance<number>): void;
        minihud_getServerRenderDistance(): number;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        keyMappings: $KeyMapping[];
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(arg0: $Minecraft, arg1: $File_);
        get file(): $File;
        set serverRenderDistance(value: number);
        get cloudsType(): $CloudStatus;
        get effectiveRenderDistance(): number;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(arg0: number): (number) | undefined;
        applyValueImmediately(): boolean;
        codec(): $Codec<number>;
        minInclusive(): number;
        maxInclusive(): number;
        toSliderValue(arg0: number): number;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        createButton(arg0: $OptionInstance$TooltipSupplier_<number>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        fromSliderValue(arg0: number): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { maxInclusive?: number, minInclusive?: number, applyValueImmediately?: boolean,  } | [maxInclusive?: number, minInclusive?: number, applyValueImmediately?: boolean, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        modifyReturnValue$dhl000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        clickCount: number;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_SORT_ORDER: $Map<string, number>;
        defaultKey: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        constructor(arg0: string, arg1: number, arg2: string, arg3: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(arg0: number): (number) | undefined;
        toSliderValue(arg0: number): number;
        fromSliderValue(arg0: number): number;
        codec(): $Codec<number>;
        xmap<R>(arg0: $DoubleFunction_<R>, arg1: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        applyValueImmediately(): boolean;
        createButton(arg0: $OptionInstance$TooltipSupplier_<number>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        advanceTime(arg0: number, arg1: boolean): number;
        updateFrozenState(arg0: boolean): void;
        updatePauseState(arg0: boolean): void;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getDeltaTickResidual(): number;
        catnip$getDeltaTickResidual(): number;
        constructor(arg0: number, arg1: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        chatheads$getHeadData(): $HeadData;
        handler$bjb000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number,  } | [endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, addedTime?: number, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        sayNow(arg0: string): void;
        sayNow(arg0: $Component_): void;
        checkStatus(arg0: boolean): void;
        say(arg0: $Component_): void;
        updateNarratorStatus(arg0: $NarratorStatus_): void;
        sayChat(arg0: $Component_): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(arg0: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(arg0: number): (number) | undefined;
        maxSupplier(): $IntSupplier;
        createCycleButton(): boolean;
        encodableMaxInclusive(): number;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        codec(): $Codec<number>;
        minInclusive(): number;
        maxInclusive(): number;
        toSliderValue(arg0: number): number;
        xmap<R>(arg0: $IntFunction_<R>, arg1: $ToIntFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        createButton(arg0: $OptionInstance$TooltipSupplier_<number>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        applyValueImmediately(): boolean;
        fromSliderValue(arg0: number): number;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { minInclusive?: number, maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number,  } | [minInclusive?: number, maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
        applyValueImmediately(): boolean;
        toSliderValue(arg0: T): number;
        fromSliderValue(arg0: number): T;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        static systemSinglePlayer(): $GuiMessageTag;
        indicatorColor(): number;
        logTag(): string;
        icon(): $GuiMessageTag$Icon;
        static chatModified(arg0: string): $GuiMessageTag;
        static chatError(): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_, arg2: $Component_, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { logTag?: string, icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_,  } | [logTag?: string, icon?: $GuiMessageTag$Icon_, indicatorColor?: number, text?: $Component_, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        close(): void;
        constructor(arg0: $ResourceLocation_, arg1: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable, $ChatHudLineAccessor {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        addedTime(): number;
        icon(): $GuiMessageTag$Icon;
        chatheads$getHeadData(): $HeadData;
        chatheads$setHeadData(headData: $HeadData_): void;
        getCreationTick(): number;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_, arg3: $GuiMessageTag_);
        get creationTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number,  } | [signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, addedTime?: number, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        getIconItems(): $List<$ItemStack>;
        static getCategories(arg0: $RecipeBookType_): $List<$RecipeBookCategories>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static TOFUCRAFT_COOKING_MEALS: $RecipeBookCategories;
        static TOFUCRAFT_TF_MISC: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static TOFUCRAFT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static TOFUCRAFT_TF_SEARCH: $RecipeBookCategories;
        static TOFUCRAFT_COOKING_DRINKS: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_SEARCH: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static TOFUCRAFT_COOKING_FAST_FOODS: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static TOFUCRAFT_COOKING_MISC: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_MEALS: $RecipeBookCategories;
        static TOFUCRAFT_TF_MECHA: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_DRINKS: $RecipeBookCategories;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "brewinandchewin_fermenting_drinks" | "brewinandchewin_fermenting_meals" | "brewinandchewin_fermenting_search" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search" | "tofucraft_cooking_drinks" | "tofucraft_cooking_fast_foods" | "tofucraft_cooking_meals" | "tofucraft_cooking_misc" | "tofucraft_cooking_search" | "tofucraft_tf_mecha" | "tofucraft_tf_misc" | "tofucraft_tf_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        codec(): $Codec<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec<any>,  } | [values?: $List_<any>, codec?: $Codec<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(arg0: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        addCommand(arg0: string): void;
        history(): $Collection<string>;
        constructor(arg0: $Path_);
    }
    export class $Camera implements $CameraAccessor, $CameraDuck {
        reset(): void;
        setup(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number): void;
        move(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        getPosition(): $Vec3;
        getNearPlane(): $Camera$NearPlane;
        isInitialized(): boolean;
        getEntity(): $Entity;
        handler$zbl000$sodium_extra$noLerp(arg0: $CallbackInfo): void;
        isDetached(): boolean;
        getYRot(): number;
        getXRot(): number;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        /**
         * @deprecated
         */
        setRotation(arg0: number, arg1: number): void;
        setPosition(arg0: $Vec3_): void;
        getBlockPosition(): $BlockPos;
        rotation(): $Quaternionf;
        getUpVector(): $Vector3f;
        handler$bpe000$supplementaries$supp$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getRoll(): number;
        shouldersurfing$setZRot(arg0: number): void;
        shouldersurfing$getZRot(): number;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        getMaxZoom(arg0: number): number;
        getLookVector(): $Vector3f;
        setDetached(arg0: boolean): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        constructor();
        get nearPlane(): $Camera$NearPlane;
        get initialized(): boolean;
        get entity(): $Entity;
        get YRot(): number;
        get XRot(): number;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        get blockPosition(): $BlockPos;
        get upVector(): $Vector3f;
        get roll(): number;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get lookVector(): $Vector3f;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(arg0: $Style, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(arg0: string): $User$Type;
        static byName(arg0: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        realmsClient(): $RealmsClient;
        quickPlayData(): $GameConfig$QuickPlayData;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_,  } | [realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_, ];
    export class $OptionInstance<T> implements $IMixinSimpleOption<any>, $OptionInstanceAccessor<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(arg0: $Object): void;
        static cachedConstantTooltip<T>(arg0: $Component_): $OptionInstance$TooltipSupplier<T>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        codec(): $Codec<$Object>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: $OptionInstance$CaptionBasedToString_<boolean>, arg3: boolean, arg4: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean, arg2: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean, arg3: $Consumer_<boolean>): $OptionInstance<boolean>;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number): $AbstractWidget;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: $Consumer_<$Object>): $AbstractWidget;
        createButton(arg0: $Options): $AbstractWidget;
        getInitialValue(): $Object;
        tweakeroo_setValueWithoutCheck(arg0: $Object): void;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Object, arg5: $Consumer_<$Object>);
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Codec<$Object>, arg5: $Object, arg6: $Consumer_<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $IMinecraftClientInvoker, $MinecraftClientAccessor, $MinecraftAccessor$1, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $AccessorMinecraft, $MinecraftClientAccessor$1, $MinecraftClientKJS, $MinecraftAccessor {
        run(): void;
        static getInstance(): $Minecraft;
        stop(): void;
        destroy(): void;
        tick(): void;
        setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getMainRenderTarget(): $RenderTarget;
        hasSingleplayerServer(): boolean;
        getSingleplayerServer(): $IntegratedServer;
        debugFpsMeterKeyPress(arg0: number): void;
        clearResourcePacksOnError(arg0: $Throwable, arg1: $Component_, arg2: $Minecraft$GameLoadCookie_): void;
        emergencySaveAndCrash(arg0: $CrashReport): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        debugClientMetricsStart(arg0: $Consumer_<$Component>): boolean;
        getTelemetryManager(): $ClientTelemetryManager;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        createWorldOpenFlows(): $WorldOpenFlows;
        updateReportEnvironment(arg0: $ReportEnvironment_): void;
        telemetryOptInExtra(): boolean;
        extraTelemetryAvailable(): boolean;
        static useShaderTransparency(): boolean;
        static useAmbientOcclusion(): boolean;
        getUser(): $User;
        pauseGame(arg0: boolean): void;
        isBlocked(arg0: $UUID_): boolean;
        isDemo(): boolean;
        isPaused(): boolean;
        getTimer(): $DeltaTracker;
        static fillReport(arg0: $Minecraft, arg1: $LanguageManager, arg2: string, arg3: $Options, arg4: $CrashReport): void;
        fillReport(arg0: $CrashReport): $CrashReport;
        setScreen(arg0: $Screen): void;
        delayCrash(arg0: $CrashReport): void;
        getToasts(): $ToastComponent;
        getFps(): number;
        disconnect(arg0: $Screen): void;
        disconnect(arg0: $Screen, arg1: boolean): void;
        disconnect(): void;
        getProfiler(): $ProfilerFiller;
        isRunning(): boolean;
        static crash(arg0: $Minecraft, arg1: $File_, arg2: $CrashReport): void;
        static checkModStatus(): $ModCheck;
        updateTitle(): void;
        getLaunchedVersion(): string;
        delayCrashRaw(arg0: $CrashReport): void;
        isEnforceUnicode(): boolean;
        getVersionType(): string;
        multiplayerBan(): $BanDetails;
        getLevelSource(): $LevelStorageSource;
        getChatStatus(): $Minecraft$ChatStatus;
        getModelManager(): $ModelManager;
        getDebugOverlay(): $DebugScreenOverlay;
        cursorEntered(): void;
        getFrameTimeNs(): number;
        setLastInputType(arg0: $InputType_): void;
        isLocalServer(): boolean;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        getBlockRenderer(): $BlockRenderDispatcher;
        resizeDisplay(): void;
        isGameLoadFinished(): boolean;
        setWindowActive(arg0: boolean): void;
        getGuiSprites(): $GuiSpriteManager;
        getItemRenderer(): $ItemRenderer;
        realmsDataFetcher(): $RealmsDataFetcher;
        renderBuffers(): $RenderBuffers;
        allowsMultiplayer(): boolean;
        quickPlayLog(): $QuickPlayLog;
        getWindow(): $Window;
        handler$hff000$iceberg$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        clearDownloadedResourcePacks(): void;
        handler$jbf000$imblocker$onWindowFocusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$hnm000$irons_spellbooks$changeGlowOutline(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        wrapOperation$fkf000$l2menustacker$retainMouse(arg0: $MouseHandler, arg1: $Operation_<any>): void;
        handler$jbf000$imblocker$recordGameRenderStartTime(arg0: boolean, arg1: $CallbackInfo): void;
        handler$jbf000$imblocker$captureGameRenderEnd(arg0: boolean, arg1: $CallbackInfo): void;
        handler$eaj001$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$zpp000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        getCurrentServer(): $ServerData;
        getProxy(): $Proxy;
        tweakeroo_setItemUseCooldown(value: number): void;
        static getFPS$sodium_extra_$md$70d283$0(): number;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getOverlay(): $Overlay;
        getTextureManager(): $TextureManager;
        handler$cfj000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        forceSetScreen(arg0: $Screen): void;
        allowsTelemetry(): boolean;
        static useFancyGraphics(): boolean;
        allowsRealms(): boolean;
        isNameBanned(): boolean;
        static getLauncherBrand(): string;
        clearClientLevel(arg0: $Screen): void;
        static renderNames(): boolean;
        addCustomNbtData(arg0: $ItemStack_, arg1: $BlockEntity, arg2: $RegistryAccess): void;
        getSkinManager(): $SkinManager;
        getBlockColors(): $BlockColors;
        isLocalPlayer(arg0: $UUID_): boolean;
        getSoundManager(): $SoundManager;
        getGameProfile(): $GameProfile;
        getTutorial(): $Tutorial;
        isWindowActive(): boolean;
        setCameraEntity(arg0: $Entity): void;
        updateMaxMipLevel(arg0: number): void;
        getFixerUpper(): $DataFixer;
        getEntityModels(): $EntityModelSet;
        getLastInputType(): $InputType;
        getNarrator(): $GameNarrator;
        isSingleplayer(): boolean;
        getTextureAtlas(arg0: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getLanguageManager(): $LanguageManager;
        getHotbarManager(): $HotbarManager;
        getSplashManager(): $SplashManager;
        getItemColors(): $ItemColors;
        getChatListener(): $ChatListener;
        delayTextureReload(): $CompletableFuture<void>;
        getTitle(): string;
        handleKeybinds(): void;
        getMusicManager(): $MusicManager;
        getCameraEntity(): $Entity;
        doWorldLoad(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $PackRepository, arg2: $WorldStem_, arg3: boolean): void;
        getGpuUtilization(): number;
        getResourceManager(): $ResourceManager;
        getResourcePackDirectory(): $Path;
        setOverlay(arg0: $Overlay): void;
        getVanillaPackResources(): $VanillaPackResources;
        modify$eaj000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$glb000$dragonlib$resizeDisplay(ci: $CallbackInfo): void;
        handler$flg000$net_music_list$pauseSound(arg0: boolean, arg1: $CallbackInfo): void;
        handler$jbf000$imblocker$runPreRenderTasks(arg0: boolean, arg1: $CallbackInfo): void;
        handler$jbf000$imblocker$onScreenChanged(arg0: $Screen, arg1: $CallbackInfo): void;
        shouldEntityAppearGlowing(arg0: $Entity): boolean;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        getDownloadedPackSource(): $DownloadedPackSource;
        getMinecraftSessionService(): $MinecraftSessionService;
        getSituationalMusic(): $Music;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        getPlayerSocialManager(): $PlayerSocialManager;
        prepareForMultiplayer(): void;
        getReportingContext(): $ReportingContext;
        showOnlyReducedInfo(): boolean;
        getProgressListener(): $StoringChunkProgressListener;
        grabPanoramixScreenshot(arg0: $File_, arg1: number, arg2: number): $Component;
        canValidateProfileKeys(): boolean;
        tweakeroo_invokeDoItemUse(): void;
        getResourcePackRepository(): $PackRepository;
        getPaintingTextures(): $PaintingTextureManager;
        isTextFilteringEnabled(): boolean;
        getMobEffectTextures(): $MobEffectTextureManager;
        tweakeroo_invokeDoAttack(): boolean;
        getScheduledEvents(): $ScheduledEvents;
        getXaeroWorldMap_fps(): number;
        getXaeroMinimap_fps(): number;
        getLocale(): $Locale;
        popGuiLayer(): void;
        pushGuiLayer(arg0: $Screen): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        self(): $Minecraft;
        tell(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        isKeyBindDown(id: string): boolean;
        setTitle(t: string): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        getName(): $Component;
        isAltDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        getCurrentWorldName(): string;
        setActivePostShader(id: $ResourceLocation_): void;
        getCurrentScreen(): $Screen;
        getKeyBindPressedTicks(id: string): number;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyMappingDown(key: $KeyMapping): boolean;
        setCurrentScreen(gui: $Screen): void;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getConnection(): $Connection;
        proplacer$setRightClickDelay(arg0: number): void;
        create$setMissTime(arg0: number): void;
        bookshelf$getFontManager(): $FontManager;
        itemColors: $ItemColors;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        running: boolean;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        static fps: number;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        toast: $ToastComponent;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(arg0: $GameConfig);
        static get instance(): $Minecraft;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get mainRenderTarget(): $RenderTarget;
        get singleplayerServer(): $IntegratedServer;
        get telemetryManager(): $ClientTelemetryManager;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get user(): $User;
        get demo(): boolean;
        get paused(): boolean;
        get timer(): $DeltaTracker;
        get toasts(): $ToastComponent;
        get profiler(): $ProfilerFiller;
        get launchedVersion(): string;
        get enforceUnicode(): boolean;
        get versionType(): string;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get modelManager(): $ModelManager;
        get debugOverlay(): $DebugScreenOverlay;
        get frameTimeNs(): number;
        get localServer(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get gameLoadFinished(): boolean;
        get guiSprites(): $GuiSpriteManager;
        get itemRenderer(): $ItemRenderer;
        get window(): $Window;
        get currentServer(): $ServerData;
        get proxy(): $Proxy;
        static get FPS$sodium_extra_$md$70d283$0(): number;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get profileKeySignatureValidator(): $SignatureValidator;
        get textureManager(): $TextureManager;
        get nameBanned(): boolean;
        static get launcherBrand(): string;
        get skinManager(): $SkinManager;
        get blockColors(): $BlockColors;
        get soundManager(): $SoundManager;
        get gameProfile(): $GameProfile;
        get tutorial(): $Tutorial;
        get fixerUpper(): $DataFixer;
        get entityModels(): $EntityModelSet;
        get narrator(): $GameNarrator;
        get singleplayer(): boolean;
        get languageManager(): $LanguageManager;
        get hotbarManager(): $HotbarManager;
        get splashManager(): $SplashManager;
        get chatListener(): $ChatListener;
        get musicManager(): $MusicManager;
        get gpuUtilization(): number;
        get resourceManager(): $ResourceManager;
        get resourcePackDirectory(): $Path;
        get vanillaPackResources(): $VanillaPackResources;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get downloadedPackSource(): $DownloadedPackSource;
        get minecraftSessionService(): $MinecraftSessionService;
        get situationalMusic(): $Music;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get playerSocialManager(): $PlayerSocialManager;
        get reportingContext(): $ReportingContext;
        get progressListener(): $StoringChunkProgressListener;
        get resourcePackRepository(): $PackRepository;
        get paintingTextures(): $PaintingTextureManager;
        get textFilteringEnabled(): boolean;
        get mobEffectTextures(): $MobEffectTextureManager;
        get scheduledEvents(): $ScheduledEvents;
        get xaeroWorldMap_fps(): number;
        get xaeroMinimap_fps(): number;
        get locale(): $Locale;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get altDown(): boolean;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get displayName(): $Component;
        get connection(): $Connection;
    }
    export class $Camera$NearPlane {
        getBottomRight(): $Vec3;
        getTopRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getTopLeft(): $Vec3;
        getPointOnPlane(arg0: number, arg1: number): $Vec3;
        get bottomRight(): $Vec3;
        get topRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get topLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified";
    export class $KeyboardHandler implements $IF3KeyStateSetter, $KeyboardHandlerAccessor {
        setup(arg0: number): void;
        tick(): void;
        setClipboard(arg0: string): void;
        keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getClipboard(): string;
        handler$dbe000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        handler$dbe000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        malilib$setF3KeyState(value: boolean): void;
        handler$zii000$chatimage$getClipboard(arg0: $CallbackInfoReturnable<any>): void;
        handler$gda000$chloride$redirect$handleFullScreenToggle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        invokeCharTyped(arg0: number, arg1: number, arg2: number): void;
        static DEBUG_CRASH_TIME: number;
        constructor(arg0: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(arg0: number, arg1: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startRecovery(arg0: $Throwable): void;
        startReload(arg0: $ResourceLoadStateTracker$ReloadReason_, arg1: $List_<$PackResources>): void;
        fillCrashReport(arg0: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
        createCycleButton(): boolean;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(arg0: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        codec(): $Codec<T>;
        altValues(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>,  } | [codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter implements $StringSplitterAccessor, $StringSplitterAccessor$1 {
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: $Style, arg3: boolean, arg4: $StringSplitter$LinePosConsumer_): void;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $FormattedText): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $BiConsumer_<$FormattedText, boolean>): void;
        stringWidth(arg0: $FormattedCharSequence_): number;
        stringWidth(arg0: string): number;
        stringWidth(arg0: $FormattedText): number;
        plainTailByWidth(arg0: string, arg1: number, arg2: $Style): string;
        headByWidth(arg0: $FormattedText, arg1: number, arg2: $Style): $FormattedText;
        plainHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        componentStyleAtWidth(arg0: $FormattedCharSequence_, arg1: number): $Style;
        componentStyleAtWidth(arg0: $FormattedText, arg1: number): $Style;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: $Style): number;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        plainIndexAtWidth(arg0: string, arg1: number, arg2: $Style): number;
        findLineBreak(arg0: string, arg1: number, arg2: $Style): number;
        dragonlib$getWidthProvider(): $StringSplitter$WidthProvider;
        getWidthProvider(): $StringSplitter$WidthProvider;
        constructor(arg0: $StringSplitter$WidthProvider_);
        get widthProvider(): $StringSplitter$WidthProvider;
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $IMixinKeyBinding, $KeyMappingAccessor$1, $KeyMappingAccessor, $AccessKeyMapping, $AccessorKeyMapping, $AccessorKeyMapping$1 {
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(arg0: number, arg1: number): boolean;
        static set(arg0: $InputConstants$Key, arg1: boolean): void;
        isDefault(): boolean;
        static setAll(): void;
        isDown(): boolean;
        static releaseAll(): void;
        getCategory(): string;
        matchesMouse(arg0: number): boolean;
        setKey(arg0: $InputConstants$Key): void;
        static createNameSupplier(arg0: string): $Supplier<$Component>;
        same(arg0: $KeyMapping): boolean;
        static resetMapping(): void;
        getKeyModifier(): $KeyModifier;
        static getAllKeyMappings$patchouli_$md$70d283$2(): $Map<any, any>;
        getKeyConflictContext(): $IKeyConflictContext;
        getDefaultKeyModifier(): $KeyModifier;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        getTranslatedKeyMessage(): $Component;
        saveString(): string;
        isUnbound(): boolean;
        getDefaultKey(): $InputConstants$Key;
        consumeClick(): boolean;
        setDown(arg0: boolean): void;
        static click(arg0: $InputConstants$Key): void;
        static resetToggleKeys(): void;
        static getAll$clientsort_$md$70d283$0(): $Map<any, any>;
        getDisplayName(): $Component;
        setToDefault(): void;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        isConflictContextAndModifierActive(): boolean;
        hasKeyModifierConflict(arg0: $KeyMapping): boolean;
        getKey(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        clientsort$getKey(): $InputConstants$Key;
        litematica_getBoundKey(): $InputConstants$Key;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        clickCount: number;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_SORT_ORDER: $Map<string, number>;
        defaultKey: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: number, arg2: string);
        constructor(arg0: string, arg1: $InputConstants$Type_, arg2: number, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        get name(): string;
        get default(): boolean;
        get category(): string;
        get keyModifier(): $KeyModifier;
        static get allKeyMappings$patchouli_$md$70d283$2(): $Map<any, any>;
        get defaultKeyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        get unbound(): boolean;
        static get all$clientsort_$md$70d283$0(): $Map<any, any>;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(arg0: string, arg1: T, arg2: $Function_<string, T>, arg3: $Function_<T, string>): T;
        process(arg0: string, arg1: number): number;
        process(arg0: string, arg1: string): string;
        process(arg0: string, arg1: boolean): boolean;
        process(arg0: string, arg1: number): number;
    }
    export class $DebugQueryHandler implements $IMixinDataQueryHandler {
        queryEntityTag(arg0: number, arg1: $Consumer_<$CompoundTag>): void;
        queryBlockEntityTag(arg0: $BlockPos_, arg1: $Consumer_<$CompoundTag>): void;
        handleResponse(arg0: number, arg1: $CompoundTag_): boolean;
        malilib_currentTransactionId(): number;
        constructor(arg0: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        shouldNarrateChat(): boolean;
        shouldNarrateSystem(): boolean;
        static byId(arg0: number): $NarratorStatus;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(arg0: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(arg0: $Component_, arg1: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(arg0: $OptionInstance<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
