import { $Language } from "@package/net/minecraft/locale";
import { $PlayerTabOverlayInvoker } from "@package/com/vladmarica/betterpingdisplay/mixin";
import { $Message } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $OptionInstance, $GuiMessage$Line, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $UndoManager } from "@package/icyllis/modernui/core";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $IModernEditBox, $EditBoxEditAction, $ScrollController, $ScrollController$IListener } from "@package/icyllis/modernui/mc";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $StringViewAccessor } from "@package/io/github/reserveword/imblocker/mixin";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $MinecraftTextFieldWidget, $MinecraftFocusableWidget, $SinglelineCursorInfo, $Rectangle, $MinecraftMultilineEditBoxWidget, $FocusContainer, $MultilineCursorInfo } from "@package/io/github/reserveword/imblocker/common/gui";
import { $AbstractWidgetAccessor } from "@package/it/hurts/octostudios/octolib/mixin";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $ChatHudLocals } from "@package/dev/dediamondpro/chatshot/data";
import { $BuggerScreenRenderLinesInvoker } from "@package/io/github/mortuusars/exposure/mixin/client";
import { $UUID_, $Map, $OptionalInt, $List, $SequencedCollection, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $ChatHudAccessor as $ChatHudAccessor$1 } from "@package/com/wulian/chatimpressiveanimation/mixin";
import { $CycleButtonAccessor } from "@package/com/iafenvoy/gamerule/mixin";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $AccessorAbstractWidget } from "@package/net/darkhax/bookshelf/common/mixin/access/client/gui";
import { $ChatHudAccessor } from "@package/dev/dediamondpro/chatshot/mixins";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $AbstractWidgetAccessor as $AbstractWidgetAccessor$1 } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier {
        static create(arg0: $Component_): $Tooltip;
        static create(arg0: $Component_, arg1: $Component_): $Tooltip;
        toCharSequence(arg0: $Minecraft): $List<$FormattedCharSequence>;
        updateNarration(arg0: $NarrationElementOutput): void;
        static splitTooltip(arg0: $Minecraft, arg1: $Component_): $List<$FormattedCharSequence>;
        cachedTooltip: $List<$FormattedCharSequence>;
        splitWithLanguage: $Language;
        constructor(arg0: $Component_, arg1: $Component_);
    }
    export class $CommonButtons {
        static language(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        static accessibility(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(arg0: $Tooltip): void;
        setDelay(arg0: $Duration_): void;
        updateNarration(arg0: $NarrationElementOutput): void;
        refreshTooltipForNextRenderPass(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle_): void;
        createTooltipPositioner(arg0: $ScreenRectangle_, arg1: boolean, arg2: boolean): $ClientTooltipPositioner;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $MultilineTextField$StringView extends $Record implements $StringViewAccessor {
        beginIndex(): number;
        endIndex(): number;
        getBeginIndex(): number;
        getEndIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isSelected(): boolean;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $TabManager, arg1: $Tab, arg2: number, arg3: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer {
        render(arg0: $GuiGraphics, arg1: number, arg2: $Font, arg3: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        splash: string;
        static NEW_YEAR: $SplashRenderer;
        constructor(arg0: string);
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        scrollbarWidth(): number;
        handler$jbm000$imblocker$onScroll(arg0: number, arg1: $CallbackInfo): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $Button extends $AbstractButton {
        static builder(arg0: $Component_, arg1: $Button$OnPress_): $Button$Builder;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        handler$glo000$nerb$onPress(ci: $CallbackInfo): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $CycleButton$Builder<T> {
        create(arg0: $Component_, arg1: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withInitialValue(arg0: T): $CycleButton$Builder<T>;
        withTooltip(arg0: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withValues(...arg0: T[]): $CycleButton$Builder<T>;
        withValues(arg0: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(arg0: $List_<T>, arg1: $List_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$Builder<T>;
        withCustomNarration(arg0: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        constructor(arg0: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(arg0: number, arg1: number): $Button$Builder;
        bounds(arg0: number, arg1: number, arg2: number, arg3: number): $Button$Builder;
        pos(arg0: number, arg1: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(arg0: number): $Button$Builder;
        tooltip(arg0: $Tooltip): $Button$Builder;
        createNarration(arg0: $Button$CreateNarration_): $Button$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(arg0: $Font, ...arg1: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: number, arg2: number, ...arg3: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: number, ...arg2: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: $Component_, arg2: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        getWidth(): number;
        renderLeftAligned(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getLineCount(): number;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        renderLeftAlignedNoShadow(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): number;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList {
        select(arg0: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        cycle(arg0: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        localvar$bin000$chat_heads$chatheads$captureGuiGraphics(guiGraphics: $GuiGraphics, graphicsRef: $LocalRef<any>): $GuiGraphics;
        localvar$bin000$chat_heads$chatheads$captureSuggestion(suggestion: $Suggestion, playerRef: $LocalRef<any>): $Suggestion;
        modify$bin000$chat_heads$chatheads$enlargeBackground(x: number, playerRef: $LocalRef<any>): number;
        handler$bin000$chat_heads$chatheads$fixOutOfBoundChatHeads(commandSuggestions: $CommandSuggestions, x: number, y: number, width: number, suggestions: $List_<any>, narrateFirstSuggestion: boolean, ci: $CallbackInfo): void;
        useSuggestion(): void;
        modify$bin000$chat_heads$chatheads$renderChatHead(y: number, playerRef: $LocalRef<any>, graphicsRef: $LocalRef<any>): number;
    }
    export class $LogoRenderer {
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(arg0: boolean);
    }
    export class $Checkbox$Builder {
        pos(arg0: number, arg1: number): $Checkbox$Builder;
        build(): $Checkbox;
        maxWidth(arg0: number): $Checkbox$Builder;
        selected(arg0: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(arg0: boolean): $Checkbox$Builder;
        onValueChange(arg0: $Checkbox$OnValueChange_): $Checkbox$Builder;
        tooltip(arg0: $Tooltip): $Checkbox$Builder;
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { formattedScore?: $Component_, score?: number, name?: $Component_, scoreWidth?: number,  } | [formattedScore?: $Component_, score?: number, name?: $Component_, scoreWidth?: number, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $SpriteIconButton extends $Button {
        static builder(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton$Builder;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(arg0: $CycleButton<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $ScrollController$IListener, $AbstractSelectionListAccessor {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        getSelected(): E;
        getRowLeft(): number;
        getMaxScroll(): number;
        updateSize(arg0: number, arg1: $HeaderAndFooterLayout): void;
        onScrollAmountUpdated(controller: $ScrollController, amount: number): void;
        setSelected(arg0: E): void;
        updateSizeAndPosition(arg0: number, arg1: number, arg2: number): void;
        getRowWidth(): number;
        getRowRight(): number;
        getScrollAmount(): number;
        setScrollAmount(target: number): void;
        replaceEntries(arg0: $Collection_<E>): void;
        modernUI_MC$skipAnimationTo(target: number): void;
        getFirstElement(): E;
        clampScrollAmount(): void;
        setClampedScrollAmount(arg0: number): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        get rowLeft(): number;
        get maxScroll(): number;
        get rowWidth(): number;
        get rowRight(): number;
        get firstElement(): E;
        set clampedScrollAmount(value: number);
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        constructor(arg0: $UUID_, arg1: $Component_, arg2: number, arg3: $BossEvent$BossBarColor_, arg4: $BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccess {
        value(): string;
        setValue(arg0: string): void;
        cursor(): number;
        getSelected(): $MultilineTextField$StringView;
        getSelectedText(): string;
        hasSelection(): boolean;
        insertText(arg0: string): void;
        keyPressed(arg0: number): boolean;
        getLineCount(): number;
        setSelecting(arg0: boolean): void;
        setValueListener(arg0: $Consumer_<string>): void;
        deleteText(arg0: number): void;
        seekCursor(arg0: $Whence_, arg1: number): void;
        setCharacterLimit(arg0: number): void;
        setCursorListener(arg0: $Runnable_): void;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        getLineAtCursor(): number;
        getLineView(arg0: number): $MultilineTextField$StringView;
        seekCursorLine(arg0: number): void;
        hasCharacterLimit(): boolean;
        characterLimit(): number;
        seekCursorToPoint(arg0: number, arg1: number): void;
        getPreviousWord(): $MultilineTextField$StringView;
        getNextWord(): $MultilineTextField$StringView;
        setSelectCursor(arg0: number): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(arg0: $Font, arg1: number);
        get selected(): $MultilineTextField$StringView;
        get selectedText(): string;
        get lineCount(): number;
        set selecting(value: boolean);
        set valueListener(value: $Consumer_<string>);
        set cursorListener(value: $Runnable_);
        get lineAtCursor(): number;
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
        set selectCursor(value: number);
    }
    export class $ChatComponent$State {
        constructor(arg0: $List_<$GuiMessage_>, arg1: $List_<string>, arg2: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        narratables(): $List<$NarratableEntry>;
        updateNarration(arg0: $NarrationElementOutput): void;
        setDragging(arg0: boolean): void;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        isDragging(): boolean;
        focusPathAtIndex(arg0: $FocusNavigationEvent_, arg1: number): $ComponentPath;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        constructor();
    }
    export class $Checkbox extends $AbstractButton {
        static builder(arg0: $Component_, arg1: $Font): $Checkbox$Builder;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        selected(): boolean;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static getBoxSize(arg0: $Font): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $Font, arg1: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(arg0: number, arg1: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(arg0: number): $SpriteIconButton$Builder;
        sprite(arg0: $ResourceLocation_, arg1: number, arg2: number): $SpriteIconButton$Builder;
        narration(arg0: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean);
    }
    export class $PlainTextButton extends $Button {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $WidgetSprites extends $Record {
        get(arg0: boolean, arg1: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_,  } | [enabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, ];
    export class $ImageButton extends $Button {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $WidgetSprites_, arg3: $Button$OnPress_, arg4: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_, arg6: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(arg0: $FormattedText, arg1: number, arg2: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setStateTriggered(arg0: boolean): void;
        isStateTriggered(): boolean;
        initTextureValues(arg0: $WidgetSprites_): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { text?: $FormattedCharSequence_, width?: number,  } | [text?: $FormattedCharSequence_, width?: number, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>,  } | [slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { location?: $Vec3_, time?: number,  } | [location?: $Vec3_, time?: number, ];
    export class $Renderable {
    }
    export interface $Renderable {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AccessorAbstractWidget, $AbstractWidgetAccessor$1, $AbstractWidgetAccessor, $MinecraftFocusableWidget {
        getMessage(): $Component;
        isActive(): boolean;
        setSize(arg0: number, arg1: number): void;
        getWidth(): number;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getRight(): number;
        setMessage(arg0: $Component_): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        getY(): number;
        getHeight(): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(arg0: $NarrationElementOutput): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getTabOrderGroup(): number;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setTooltipDelay(arg0: $Duration_): void;
        handler$jbe000$imblocker$focusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        getBoundsAbs(): $Rectangle;
        setRectangle(arg0: number, arg1: number, arg2: number, arg3: number): void;
        clearFGColor(): void;
        isHoveredOrFocused(): boolean;
        playDownSound(arg0: $SoundManager): void;
        setTabOrderGroup(arg0: number): void;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getBottom(): number;
        isHovered(): boolean;
        /**
         * @deprecated
         */
        onClick(arg0: number, arg1: number): void;
        setAlpha(arg0: number): void;
        isFocused(): boolean;
        setFocused(arg0: boolean): void;
        setTooltip(arg0: $Tooltip): void;
        static renderScrollingString$bookshelf_$md$70d283$0(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        handler$jbe000$imblocker$updateLastRenderTime(arg0: $CallbackInfoReturnable<any>): void;
        static wrapDefaultNarrationMessage(arg0: $Component_): $MutableComponent;
        onRelease(arg0: number, arg1: number): void;
        getTooltip(): $Tooltip;
        setFGColor(arg0: number): void;
        getFGColor(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        setPosition(arg0: number, arg1: number): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusLost(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        imblocker$onFocusGained(): void;
        getFocusContainer(): $FocusContainer;
        getGuiScale(): number;
        getPreferredState(): boolean;
        isRenderable(): boolean;
        getPreferredEnglishState(): boolean;
        deliverFocus(): void;
        getFontHeight(): number;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        lostFocus(): void;
        dragonlib$setHeight(arg0: number): void;
        getLocalX(): number;
        getLocalY(): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get right(): number;
        set tooltipDelay(value: $Duration_);
        get boundsAbs(): $Rectangle;
        get hoveredOrFocused(): boolean;
        get bottom(): number;
        get hovered(): boolean;
        set alpha(value: number);
        get currentFocusPath(): $ComponentPath;
        get focusContainer(): $FocusContainer;
        get guiScale(): number;
        get preferredState(): boolean;
        get renderable(): boolean;
        get preferredEnglishState(): boolean;
        get fontHeight(): number;
        get trulyFocused(): boolean;
        get localX(): number;
        get localY(): number;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(arg0: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number,  } | [maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number, ];
    export class $DebugScreenOverlay implements $BuggerScreenRenderLinesInvoker {
        reset(): void;
        render(arg0: $GuiGraphics): void;
        showProfilerChart(): boolean;
        logFrameDuration(arg0: number): void;
        showDebugScreen(): boolean;
        getTickTimeLogger(): $LocalSampleLogger;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        toggleFpsCharts(): void;
        toggleOverlay(): void;
        clearChunkCache(): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        getPingLogger(): $LocalSampleLogger;
        showNetworkCharts(): boolean;
        logRemoteSample(arg0: number[], arg1: $RemoteDebugSampleType_): void;
        handler$zde000$sodium_extra$preRender(arg0: $GuiGraphics, arg1: $CallbackInfo): void;
        handler$djd000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        redirect$zde000$sodium_extra$sodiumExtra$redirectDrawLeftText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        redirect$zde000$sodium_extra$sodiumExtra$redirectDrawRightText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        drawLines(arg0: $GuiGraphics, arg1: $List_<string>, arg2: boolean): void;
        renderFpsCharts: boolean;
        static HEIGHTMAP_NAMES: $Map<$Heightmap$Types, string>;
        frameTimeLogger: $LocalSampleLogger;
        renderProfilerChart: boolean;
        constructor(arg0: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $IModernEditBox, $AccessEditBox, $MinecraftTextFieldWidget {
        getValue(): string;
        setValue(arg0: string): void;
        setFormatter(arg0: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(arg0: $Predicate_<string>): void;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setEditable(arg0: boolean): void;
        getScreenX(arg0: number): number;
        setHint(arg0: $Component_): void;
        setVisible(arg0: boolean): void;
        deleteWords(arg0: number): void;
        moveCursorToEnd(arg0: boolean): void;
        moveCursorToStart(arg0: boolean): void;
        moveCursorTo(arg0: number, arg1: boolean): void;
        updateCursorInfo(): boolean;
        deleteChars(arg0: number): void;
        deleteCharsToPos(arg0: number): void;
        canConsumeInput(): boolean;
        setSuggestion(arg0: string): void;
        isVisible(): boolean;
        insertText(arg0: string): void;
        checkVisibility(arg0: number): void;
        modernUI_MC$getUndoManager(): $UndoManager;
        setPreferredEnglishState(arg0: boolean): void;
        getCursorPosition(): number;
        setCanLoseFocus(arg0: boolean): void;
        setHighlightPos(arg0: number): void;
        setCursorPosition(arg0: number): void;
        setMaxLength(arg0: number): void;
        setResponder(arg0: $Consumer_<string>): void;
        setBordered(arg0: boolean): void;
        setTextColor(arg0: number): void;
        setTextColorUneditable(arg0: number): void;
        isBordered(): boolean;
        getTextShadow(): boolean;
        setTextShadow(arg0: boolean): void;
        getInnerWidth(): number;
        getHighlighted(): string;
        isEditable(): boolean;
        modernUI_MC$addEdit(edit: $EditBoxEditAction, mergeInsert: boolean): void;
        handler$dlj000$modernui$onInsertText(string: string, ci: $CallbackInfo, i: number, j: number, k: number, string2: string, l: number, string3: string): void;
        handler$jbl001$imblocker$focusChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$dme000$modernui$onRenderWidget(gr: $GuiGraphics, mouseX: number, mouseY: number, deltaTicks: number, ci: $CallbackInfo): void;
        handler$jbl000$imblocker$onTextChanged(arg0: string, arg1: $CallbackInfo): void;
        handler$jbl000$imblocker$visibilityChanged(arg0: boolean, arg1: $CallbackInfo): void;
        handler$dlj000$modernui$onGetWordPosition(dir: number, cursor: number, withEndSpace: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$dlj000$modernui$onDeleteChars(i: number, ci: $CallbackInfo, j: number, k: number, string: string): void;
        handler$dlj000$modernui$onKeyPressed(i: number, j: number, k: number, cir: $CallbackInfoReturnable<any>): void;
        getWordPosition(arg0: number): number;
        moveCursor(arg0: number, arg1: boolean): void;
        handler$dlj000$modernui$onGetCursorPosition(dir: number, cir: $CallbackInfoReturnable<any>): void;
        handler$dlj000$modernui$onSetCursorPosition(pos: number, ci: $CallbackInfo): void;
        handler$jbl000$imblocker$checkFocusTracking(arg0: string, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$dlj000$modernui$onSetValue(string: string, ci: $CallbackInfo): void;
        getPaddingX(): number;
        getPrimaryEnglishState(): boolean;
        imblocker$onCursorChanged(): void;
        getCursorInfo(): $SinglelineCursorInfo;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        static UNSET_FG_COLOR: number;
        x: number;
        y: number;
        static FORWARDS: number;
        height: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $EditBox, arg6: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: $Component_);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        set hint(value: $Component_);
        set suggestion(value: string);
        set preferredEnglishState(value: boolean);
        set highlightPos(value: number);
        set maxLength(value: number);
        set textColorUneditable(value: number);
        get innerWidth(): number;
        get highlighted(): string;
        get paddingX(): number;
        get primaryEnglishState(): boolean;
        get cursorInfo(): $SinglelineCursorInfo;
    }
    export class $StringWidget extends $AbstractStringWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        alignLeft(): $StringWidget;
        alignCenter(): $StringWidget;
        alignRight(): $StringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        alignX: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        constructor(arg0: $Component_, arg1: $Font);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(arg0: $Checkbox, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(arg0: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: boolean, arg4: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton implements $CycleButtonAccessor {
        getValue(): T;
        static builder<T>(arg0: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(arg0: T): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(arg0: boolean): $CycleButton$Builder<boolean>;
        static booleanBuilder(arg0: $Component_, arg1: $Component_): $CycleButton$Builder<boolean>;
        createDefaultNarrationMessage(): $MutableComponent;
        gameRuleManager$getName(): $Component;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(arg0: number): $FittingMultiLineTextWidget;
        showingScrollBar(): boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(arg0: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $ImageWidget extends $AbstractWidget {
        static sprite(arg0: number, arg1: number, arg2: $ResourceLocation_): $ImageWidget;
        static texture(arg0: number, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $ImageWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay {
        reset(): void;
        update(arg0: $ClientboundBossEventPacket): void;
        render(arg0: $GuiGraphics): void;
        shouldDarkenScreen(): boolean;
        shouldPlayMusic(): boolean;
        shouldCreateWorldFog(): boolean;
        constructor(arg0: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(arg0: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(arg0: number): $AbstractStringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        set color(value: number);
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        isFocused(): boolean;
        setFocused(arg0: boolean): void;
        renderBack(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getTabOrderGroup(): number;
        constructor();
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        getXaero_tooltip(): $Supplier<any>;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        onPress(): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $EntityModelSet, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setMaxWidth(arg0: number): $MultiLineTextWidget;
        setCentered(arg0: boolean): $MultiLineTextWidget;
        setMaxRows(arg0: number): $MultiLineTextWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $Component_, arg1: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        set maxWidth(value: number);
        set centered(value: boolean);
        set maxRows(value: number);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getUsageNarration(): $Component;
        mouseScrolled(arg0: number): boolean;
        isVisible(): boolean;
        hide(): void;
        getNarrationMessage(): $Component;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setAllowSuggestions(arg0: boolean): void;
        setAllowHiding(arg0: boolean): void;
        updateCommandInfo(): void;
        showSuggestions(arg0: boolean): void;
        renderSuggestions(arg0: $GuiGraphics, arg1: number, arg2: number): boolean;
        renderUsage(arg0: $GuiGraphics): void;
        suggestions: $CommandSuggestions$SuggestionsList;
        constructor(arg0: $Minecraft, arg1: $Screen, arg2: $EditBox, arg3: $Font, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: number);
        get usageNarration(): $Component;
        get visible(): boolean;
        get narrationMessage(): $Component;
        set allowSuggestions(value: boolean);
        set allowHiding(value: boolean);
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(arg0: $Runnable_): $PopupScreen$Builder;
        setMessage(arg0: $Component_): $PopupScreen$Builder;
        setWidth(arg0: number): $PopupScreen$Builder;
        addButton(arg0: $Component_, arg1: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(arg0: $ResourceLocation_): $PopupScreen$Builder;
        constructor(arg0: $Screen, arg1: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
    }
    export class $ChatComponent implements $ChatHudAccessor$1, $ChatHudAccessor, $ChatHudLocals {
        tick(): void;
        getWidth(): number;
        static getWidth(arg0: number): number;
        isChatFocused(): boolean;
        clearMessages(arg0: boolean): void;
        deleteMessage(arg0: $MessageSignature_): void;
        addMessage(arg0: $Component_): void;
        addMessage(arg0: $Component_, arg1: $MessageSignature_, arg2: $GuiMessageTag_): void;
        storeState(): $ChatComponent$State;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        static defaultUnfocusedPct(): number;
        getHeight(): number;
        static getHeight(arg0: number): number;
        rescaleChat(): void;
        restoreState(arg0: $ChatComponent$State): void;
        chatShot$getChatBackgroundColor(): number;
        scrollChat(arg0: number): void;
        modify$bij000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        handler$bij000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        getClickedComponentStyleAt(arg0: number, arg1: number): $Style;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        localvar$zif000$chatimage$addMessage(arg0: $Component_): $Component;
        handler$hof000$chatshot$onDrawChatLine(context: $GuiGraphics, currentTick: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, i: number, j: number, f: number, chatEnd: number, l: number, m: number, n: number, d: number, e: number, g: number, o: number, p: number, q: number, r: number, s: number, visible: $GuiMessage$Line_, t: number, h: number, u: number, v: number): void;
        getScale(): number;
        getRecentChat(): $ArrayListDeque<string>;
        getMessageTagAt(arg0: number, arg1: number): $GuiMessageTag;
        addRecentChat(arg0: string): void;
        chatShot$getChatY(): number;
        getLinesPerPage(): number;
        resetChatScroll(): void;
        modify$bij000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        handler$bij000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        modifyExpressionValue$bij000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        modifyExpressionValue$dci000$longerchathistory$newMaxHistory(original: number): number;
        getMessageIndexA(arg0: number, arg1: number): number;
        getLineHeightA(): number;
        getVisibleMessages(): $List<$Message>;
        toChatLineYA(arg0: number): number;
        getScrolledLines(): number;
        trimmedMessages: $List<$GuiMessage$Line>;
        constructor(arg0: $Minecraft);
        get chatFocused(): boolean;
        get scale(): number;
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get lineHeightA(): number;
        get visibleMessages(): $List<$Message>;
        get scrolledLines(): number;
    }
    export class $PlayerTabOverlay implements $PlayerTabOverlayInvoker {
        reset(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: $Scoreboard, arg3: $Objective): void;
        setVisible(arg0: boolean): void;
        setFooter(arg0: $Component_): void;
        setHeader(arg0: $Component_): void;
        getNameForDisplay(arg0: $PlayerInfo): $Component;
        invokeRenderPingIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(arg0: $Minecraft, arg1: $Gui);
        set footer(value: $Component_);
        set header(value: $Component_);
    }
    export class $PlayerFaceRenderer {
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number): void;
        static draw(arg0: $GuiGraphics, arg1: $PlayerSkin_, arg2: number, arg3: number, arg4: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        addSmall(arg0: $AbstractWidget, arg1: $AbstractWidget): void;
        addSmall(arg0: $List_<$AbstractWidget>): void;
        addSmall(...arg0: $OptionInstance<never>[]): void;
        applyUnsavedChanges(): void;
        findOption(arg0: $OptionInstance<never>): $AbstractWidget;
        addBig(arg0: $OptionInstance<never>): void;
        getMouseOver(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $OptionsList$Entry;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(arg0: $GuiGraphics): void;
        onPlaySound(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number): void;
        constructor(arg0: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: number);
    }
    export class $LockIconButton extends $Button {
        isLocked(): boolean;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setLocked(arg0: boolean): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget implements $MinecraftMultilineEditBoxWidget {
        getValue(): string;
        setValue(arg0: string): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        updateCursorInfo(): boolean;
        getCursorInfo(): $MultilineCursorInfo;
        handler$jbn000$imblocker$onCursorChange(arg0: $CallbackInfo): void;
        handler$jbn001$imblocker$checkFocusTracking(arg0: string, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        setValueListener(arg0: $Consumer_<string>): void;
        setCharacterLimit(arg0: number): void;
        getInnerHeight(): number;
        imblocker$getContentOffsetY(): number;
        imblocker$getContentOffsetX(): number;
        imblocker$onCursorChanged(): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: $Component_);
        get cursorInfo(): $MultilineCursorInfo;
        set valueListener(value: $Consumer_<string>);
        set characterLimit(value: number);
        get innerHeight(): number;
    }
}
