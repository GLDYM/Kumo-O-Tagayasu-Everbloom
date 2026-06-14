import { $DrawContextAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource, $MultiBufferSource$BufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Self } from "@package/io/github/forgestove/create_cyber_goggles/core/api";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IAntiquable } from "@package/net/mehvahdjukaar/supplementaries/common/block";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FontAccessor as $FontAccessor$1, $GuiAccessor as $GuiAccessor$1 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Minecraft, $DeltaTracker, $StringSplitter } from "@package/net/minecraft/client";
import { $JadeFont } from "@package/snownee/jade/gui";
import { $List, $List_ } from "@package/java/util";
import { $GuiRenderStateSink } from "@package/dev/isxander/yacl3/gui/render";
import { $FormattedCharSequence, $FormattedCharSequence_, $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $Function_, $BooleanSupplier_, $Function } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IGameHud } from "@package/fi/dy/masa/malilib/util/game";
import { $IFontExtension, $IGuiGraphicsExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $DynamicTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Enum, $Record, $AutoCloseable, $Runnable_, $Object } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $GuiGraphicsInvoker } from "@package/com/anthonyhilyard/iceberg/mixin";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DrawContextAccessor as $DrawContextAccessor$1 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $Component_, $FormattedText, $Style } from "@package/net/minecraft/network/chat";
import { $BossHealthOverlay, $SubtitleOverlay, $DebugScreenOverlay, $PlayerTabOverlay, $ChatComponent } from "@package/net/minecraft/client/gui/components";
import { $GuiSpriteScaling$NineSlice_, $GuiSpriteScaling } from "@package/net/minecraft/client/resources/metadata/gui";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ITooltipAccess } from "@package/com/anthonyhilyard/iceberg/util";
import { $FontAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $FontAccess } from "@package/com/kipti/bnb/mixin_accessor";
import { $TextureAtlasHolder, $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiAccessor } from "@package/com/github/exopandora/shouldersurfing/mixins";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
export * as components from "@package/net/minecraft/client/gui/components";
export * as layouts from "@package/net/minecraft/client/gui/layouts";
export * as screens from "@package/net/minecraft/client/gui/screens";
export * as navigation from "@package/net/minecraft/client/gui/navigation";
export * as font from "@package/net/minecraft/client/gui/font";
export * as narration from "@package/net/minecraft/client/gui/narration";
export * as spectator from "@package/net/minecraft/client/gui/spectator";

declare module "@package/net/minecraft/client/gui" {
    export class $Font$StringRenderOutput implements $FormattedCharSink {
        accept(arg0: number, arg1: $Style, arg2: number): boolean;
        finish(arg0: number, arg1: number): number;
        handler$gdl000$chloride$inject$accept(arg0: number, arg1: $Style, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$bja000$chat_heads$chatheads$renderChatHead(i: number, style: $Style, j: number, cir: $CallbackInfoReturnable<any>): void;
        x: number;
        y: number;
        constructor(arg0: $Font, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Matrix4f, arg7: $Font$DisplayMode_, arg8: number);
    }
    export class $GuiGraphics implements $IGuiGraphicsExtension, $Self<any>, $DrawContextAccessor, $DrawContextAccessor$1, $GuiGraphicsInvoker, $GuiRenderStateSink, $ITooltipAccess {
        flush(): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        containsPointInScissor(arg0: number, arg1: number): boolean;
        drawStringWithBackdrop(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        blitNineSlicedSprite(arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setIcebergTooltipStack(stack: $ItemStack_): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string): void;
        renderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: number, arg3: number): void;
        getIcebergTooltipStack(): $ItemStack;
        renderComponentHoverEffect(arg0: $Font, arg1: $Style, arg2: number, arg3: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitTiledSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        fillRenderType(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        /**
         * @deprecated
         */
        drawManaged(arg0: $Runnable_): void;
        /**
         * @deprecated
         */
        flushIfManaged(): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        flushIfUnmanaged(): void;
        disableScissor(): void;
        renderOutline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawWordWrap(arg0: $Font, arg1: $FormattedText, arg2: number, arg3: number, arg4: number, arg5: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: $ItemStack_, arg4: number, arg5: number): void;
        renderTooltip(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: $ClientTooltipPositioner_, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $Component_, arg2: number, arg3: number): void;
        drawCenteredString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fillGradient(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        yacl$bufferSource(): $MultiBufferSource;
        bufferSource(): $MultiBufferSource$BufferSource;
        handler$cde000$rcg_lib$renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string, arg5: $CallbackInfo): void;
        wrapMethod$zep000$create_cyber_goggles$render(arg0: $Font, arg1: $List_<any>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_, arg5: $Operation_<any>): void;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        blitSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        hLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        hLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        vLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        vLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderComponentTooltipFromElements(arg0: $Font, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        pose(): $PoseStack;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        guiHeight(): number;
        guiWidth(): number;
        drawScrollingString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        thiz(): $Object;
        libgui$getVertexConsumers(): $MultiBufferSource$BufferSource;
        invokeDrawTooltip(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        invokeRenderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        minecraft: $Minecraft;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
        constructor(arg0: $Minecraft, arg1: $PoseStack, arg2: $MultiBufferSource$BufferSource);
        constructor(arg0: $Minecraft, arg1: $MultiBufferSource$BufferSource);
    }
    export class $LayeredDraw {
        add(arg0: $LayeredDraw, arg1: $BooleanSupplier_): $LayeredDraw;
        add(arg0: $LayeredDraw$Layer_): $LayeredDraw;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static Z_SEPARATION: number;
        constructor();
    }
    export class $MapRenderer$MapInstance implements $AutoCloseable {
        close(): void;
        forceUpload(): void;
        wrapOperation$ham000$moonlight$forceMipMap(arg0: $DynamicTexture, arg1: $Operation_<any>): void;
        wrapOperation$caa000$supplementaries$supp$updateColoredTexture(arg0: $MapRenderer$MapInstance, arg1: $Operation_<any>): $DynamicTexture;
    }
    export class $MapRenderer implements $AutoCloseable {
        update(arg0: $MapId_, arg1: $MapItemSavedData): void;
        close(): void;
        resetData(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $MapId_, arg3: $MapItemSavedData, arg4: boolean, arg5: number): void;
        constructor(arg0: $TextureManager, arg1: $MapDecorationTextureManager);
    }
    export class $ComponentPath$Leaf extends $Record implements $ComponentPath {
        component(): $GuiEventListener;
        applyFocus(arg0: boolean): void;
        constructor(arg0: $GuiEventListener);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Leaf}.
     */
    export type $ComponentPath$Leaf_ = { component?: $GuiEventListener,  } | [component?: $GuiEventListener, ];
    export class $Gui$1DisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Gui$1DisplayEntry}.
     */
    export type $Gui$1DisplayEntry_ = { scoreWidth?: number, score?: $Component_, name?: $Component_,  } | [scoreWidth?: number, score?: $Component_, name?: $Component_, ];
    export class $Font implements $IFontExtension, $IAntiquable, $FontAccess, $FontAccessor, $JadeFont, $FontAccessor$1 {
        split(arg0: $FormattedText, arg1: number): $List<$FormattedCharSequence>;
        self(): $Font;
        width(arg0: string): number;
        width(arg0: $FormattedCharSequence_): number;
        width(arg0: $FormattedText): number;
        renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        drawInBatch(text: $Component_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, source: $MultiBufferSource_, displayMode: $Font$DisplayMode_, colorBackground: number, packedLight: number): number;
        drawInBatch(text: $FormattedCharSequence_, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, source: $MultiBufferSource_, displayMode: $Font$DisplayMode_, colorBackground: number, packedLight: number): number;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        drawInBatch(text: string, x: number, y: number, color: number, dropShadow: boolean, matrix: $Matrix4f, source: $MultiBufferSource_, displayMode: $Font$DisplayMode_, colorBackground: number, packedLight: number, bidiFlag: boolean): number;
        isBidirectional(): boolean;
        substrByWidth(arg0: $FormattedText, arg1: number): $FormattedText;
        plainSubstrByWidth(arg0: string, arg1: number, arg2: boolean): string;
        plainSubstrByWidth(arg0: string, arg1: number): string;
        jade$setGlint(arg0: number, arg1: number): void;
        wordWrapHeight(arg0: $FormattedText, arg1: number): number;
        wordWrapHeight(arg0: string, arg1: number): number;
        getSplitter(): $StringSplitter;
        handler$gdk000$chloride$inject$renderText(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        handler$gdk000$chloride$inject$renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: $CallbackInfoReturnable<any>): void;
        getFontSet(arg0: $ResourceLocation_): $FontSet;
        drawInBatch8xOutline(text: $FormattedCharSequence_, x: number, y: number, color: number, outlineColor: number, matrix: $Matrix4f, source: $MultiBufferSource_, packedLight: number): void;
        jade$setGlintStrength(arg0: number, arg1: number): void;
        bidirectionalShaping(text: string): string;
        supplementaries$setAntique(arg0: boolean): void;
        bits_n_bobs$getFontSet(arg0: $ResourceLocation_): $FontSet;
        supplementaries$isAntique(): boolean;
        ellipsize(arg0: $FormattedText, arg1: number): $FormattedText;
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
        dragonlib$invokeGetFontSet(arg0: $ResourceLocation_): $FontSet;
        dragonlib$getSplitter(): $StringSplitter;
        dragonlib$renderChar(arg0: $BakedGlyph, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: $Matrix4f, arg7: $VertexConsumer, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        dragonlib$filterFishyGlyphs(): boolean;
        random: $RandomSource;
        filterFishyGlyphs: boolean;
        fonts: $Function<$ResourceLocation, $FontSet>;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        splitter: $StringSplitter;
        constructor(arg0: $Function_<$ResourceLocation, $FontSet>, arg1: boolean);
        get bidirectional(): boolean;
    }
    export class $Gui$HeartType extends $Enum<$Gui$HeartType> implements $IExtensibleEnum {
        static values(): $Gui$HeartType[];
        static valueOf(arg0: string): $Gui$HeartType;
        getSprite(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation;
        static getExtensionInfo(): $ExtensionInfo;
        static ABSORBING: $Gui$HeartType;
        static CONTAINER: $Gui$HeartType;
        static ISS_MAGICFROMTHEEAST_JADE_HEART_TYPE: $Gui$HeartType;
        static WITHERED: $Gui$HeartType;
        static ISS_MAGICFROMTHEEAST_SOUL_HEART_TYPE: $Gui$HeartType;
        static POISIONED: $Gui$HeartType;
        static FROZEN: $Gui$HeartType;
        static NORMAL: $Gui$HeartType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Gui$HeartType}.
     */
    export type $Gui$HeartType_ = "container" | "normal" | "poisioned" | "withered" | "absorbing" | "frozen" | "iss_magicfromtheeast_jade_heart_type" | "iss_magicfromtheeast_soul_heart_type";
    export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
        static values(): $Font$DisplayMode[];
        static valueOf(arg0: string): $Font$DisplayMode;
        static POLYGON_OFFSET: $Font$DisplayMode;
        static SEE_THROUGH: $Font$DisplayMode;
        static NORMAL: $Font$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Font$DisplayMode}.
     */
    export type $Font$DisplayMode_ = "normal" | "see_through" | "polygon_offset";
    export class $GuiGraphics$ScissorStack {
        push(arg0: $ScreenRectangle_): $ScreenRectangle;
        pop(): $ScreenRectangle;
        containsPoint(arg0: number, arg1: number): boolean;
    }
    export class $Gui implements $IGameHud, $GuiAccessor, $GuiAccessor$1 {
        clear(): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        tick(arg0: boolean): void;
        clearCache(): void;
        getFont(): $Font;
        getCameraPlayer(): $Player;
        initModdedOverlays(): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        getTabList(): $PlayerTabOverlay;
        setOverlayMessage(arg0: $Component_, arg1: boolean): void;
        getDebugOverlay(): $DebugScreenOverlay;
        isShowingChatDisabledByPlayer(): boolean;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        setTitle(arg0: $Component_): void;
        getLayerCount(): number;
        setNowPlaying(arg0: $Component_): void;
        onDisconnected(): void;
        getBossOverlay(): $BossHealthOverlay;
        getSpectatorGui(): $SpectatorGui;
        renderSavingIndicator(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        getChat(): $ChatComponent;
        setSubtitle(arg0: $Component_): void;
        getGuiTicks(): number;
        malilib$setOverlayRemaining(ticks: number): void;
        handler$fgo000$collective$render(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $CallbackInfo): void;
        renderSelectedItemName(arg0: $GuiGraphics, arg1: number): void;
        getPlayerVehicleWithHealth(): $LivingEntity;
        getVehicleMaxHearts(arg0: $LivingEntity): number;
        getVisibleVehicleHeartRows(arg0: number): number;
        handler$edo000$tweakerge$tweakeroo_overrideHotbarRendering(context: $GuiGraphics, tickCounter: $DeltaTracker, ci: $CallbackInfo): void;
        resetTitleTimes(): void;
        handler$edo000$tweakerge$tweakeroo_overrideStatusBarRendering1(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$hnk000$irons_spellbooks$disableXpBar(arg0: $CallbackInfoReturnable<any>): void;
        wrapMethod$bbl000$iris$handleHudHidingScreens(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $Operation_<any>): void;
        handler$gnm000$ftbchunks$onRenderEffectsEnter(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, info: $CallbackInfo): void;
        handler$gnm000$ftbchunks$onRenderEffectsReturn(guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker, info: $CallbackInfo): void;
        handler$hjm000$quark$changeArmorItem(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: $CallbackInfo): void;
        handler$edo000$tweakerge$tweakeroo_overrideStatusBarRendering2(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$edo000$tweakerge$tweakeroo_overrideHeldItemTooltipRendering(context: $GuiGraphics, ci: $CallbackInfo): void;
        create$getSubtitleOverlay(): $SubtitleOverlay;
        create$renderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
        create$getToolHighlightTimer(): number;
        invokeCanRenderCrosshairForSpectator(arg0: $HitResult): boolean;
        minecraft: $Minecraft;
        tabList: $PlayerTabOverlay;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        displayHealth: number;
        leftHeight: number;
        overlayMessageTime: number;
        constructor(arg0: $Minecraft);
        get font(): $Font;
        get cameraPlayer(): $Player;
        get debugOverlay(): $DebugScreenOverlay;
        get showingChatDisabledByPlayer(): boolean;
        set chatDisabledByPlayerShown(value: boolean);
        set title(value: $Component_);
        get layerCount(): number;
        set nowPlaying(value: $Component_);
        get bossOverlay(): $BossHealthOverlay;
        get spectatorGui(): $SpectatorGui;
        get chat(): $ChatComponent;
        set subtitle(value: $Component_);
        get guiTicks(): number;
        get playerVehicleWithHealth(): $LivingEntity;
    }
    export class $GuiSpriteManager extends $TextureAtlasHolder {
        getSpriteScaling(arg0: $TextureAtlasSprite): $GuiSpriteScaling;
        constructor(arg0: $TextureManager);
    }
    export class $ComponentPath$Path extends $Record implements $ComponentPath {
        component(): $ContainerEventHandler;
        childPath(): $ComponentPath;
        applyFocus(arg0: boolean): void;
        constructor(arg0: $ContainerEventHandler, arg1: $ComponentPath);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Path}.
     */
    export type $ComponentPath$Path_ = { childPath?: $ComponentPath, component?: $ContainerEventHandler,  } | [childPath?: $ComponentPath, component?: $ContainerEventHandler, ];
    export class $LayeredDraw$Layer {
    }
    export interface $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredDraw$Layer}.
     */
    export type $LayeredDraw$Layer_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
    export class $ComponentPath {
        static path(arg0: $ContainerEventHandler, arg1: $ComponentPath): $ComponentPath;
        static path(arg0: $GuiEventListener, ...arg1: $ContainerEventHandler[]): $ComponentPath;
        static leaf(arg0: $GuiEventListener): $ComponentPath;
    }
    export interface $ComponentPath {
        component(): $GuiEventListener;
        applyFocus(arg0: boolean): void;
    }
}
