import { $GameType } from "@package/net/minecraft/world/level";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractSliderButton, $WidgetTooltipHolder, $ContainerObjectSelectionList, $PopupScreen, $Button, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $Button$CreateNarration, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $WorldGenerationInfo } from "@package/com/mojang/realmsclient/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $RowButton } from "@package/com/mojang/realmsclient/gui";
import { $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $List } from "@package/java/util";
import { $RealmsServiceException } from "@package/com/mojang/realmsclient/exception";
import { $WorldTemplate, $Backup, $RealmsServer, $RealmsWorldOptions, $WorldTemplatePaginatedList, $WorldDownload, $RealmsServer$WorldType_ } from "@package/com/mojang/realmsclient/dto";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RealmsMainScreen } from "@package/com/mojang/realmsclient";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Record, $Runnable_ } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $LongRunningTask, $RealmCreationTask } from "@package/com/mojang/realmsclient/util/task";
import { $RealmsScreen, $RealmsObjectSelectionList } from "@package/net/minecraft/realms";

declare module "@package/com/mojang/realmsclient/gui/screens" {
    export class $RealmsSettingsScreen extends $RealmsScreen {
        init(): void;
        save(): void;
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsServer);
    }
    export class $RealmsResetWorldScreen$FrameButton extends $Button {
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
    export class $RealmsSelectFileToUploadScreen extends $RealmsScreen {
        init(): void;
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
        static TITLE: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $RealmCreationTask, arg1: number, arg2: number, arg3: $RealmsResetWorldScreen);
    }
    export class $RealmsPlayerScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsPlayerScreen$Entry> {
    }
    export class $UploadResult$Builder {
        build(): $UploadResult;
        withStatusCode(arg0: number): $UploadResult$Builder;
        withErrorMessage(arg0: string): $UploadResult$Builder;
        constructor();
    }
    export class $RealmsGenericErrorScreen$ErrorMessage extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RealmsGenericErrorScreen$ErrorMessage}.
     */
    export type $RealmsGenericErrorScreen$ErrorMessage_ = { title?: $Component_, detail?: $Component_,  } | [title?: $Component_, detail?: $Component_, ];
    export class $RealmsParentalConsentScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen);
    }
    export class $RealmsTermsScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen, arg1: $RealmsServer);
    }
    export class $RealmsConfirmScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_);
    }
    export class $RealmsNotificationsScreen extends $RealmsScreen {
        init(): void;
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
        constructor();
    }
    export class $RealmsSlotOptionsScreen extends $RealmsScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static GAME_MODES: $List<$GameType>;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static DIFFICULTIES: $List<$Difficulty>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsWorldOptions, arg2: $RealmsServer$WorldType_, arg3: number);
    }
    export class $RealmsSelectWorldTemplateScreen$WorldTemplateList extends $RealmsObjectSelectionList<$RealmsSelectWorldTemplateScreen$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $RealmsSelectWorldTemplateScreen$Entry;
        height: number;
    }
    export class $RealmsResetWorldScreen extends $RealmsScreen {
        init(): void;
        static forNewRealm(arg0: $Screen, arg1: $RealmsServer, arg2: $RealmCreationTask, arg3: $Runnable_): $RealmsResetWorldScreen;
        static forResetSlot(arg0: $Screen, arg1: $RealmsServer, arg2: $Runnable_): $RealmsResetWorldScreen;
        static forEmptySlot(arg0: $Screen, arg1: number, arg2: $RealmsServer, arg3: $Runnable_): $RealmsResetWorldScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CREATE_WORLD_RESET_TASK_TITLE: $Component;
        slot: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $RealmsServer, arg2: number, arg3: $Component_, arg4: $Component_, arg5: number, arg6: $Component_, arg7: $RealmCreationTask, arg8: $Runnable_);
    }
    export class $RealmsSubscriptionInfoScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen, arg1: $RealmsServer, arg2: $Screen);
    }
    export class $RealmsClientOutdatedScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen);
    }
    export class $RealmsGenericErrorScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Component_, arg1: $Component_, arg2: $Screen);
        constructor(arg0: $Component_, arg1: $Screen);
        constructor(arg0: $RealmsServiceException, arg1: $Screen);
    }
    export class $RealmsLongRunningMcoTaskScreen extends $RealmsScreen {
        init(): void;
        setTitle(arg0: $Component_): void;
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
        constructor(arg0: $Screen, ...arg1: $LongRunningTask[]);
    }
    export class $RealmsBackupInfoScreen$BackupInfoList extends $ObjectSelectionList<$RealmsBackupInfoScreen$BackupInfoListEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $RealmsBackupInfoScreen$BackupInfoListEntry;
        height: number;
    }
    export class $RealmsSlotOptionsScreen$SettingsSlider extends $AbstractSliderButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RealmsPendingInvitesScreen$Entry extends $ObjectSelectionList$Entry<$RealmsPendingInvitesScreen$Entry> {
    }
    export class $RealmsBackupInfoScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen, arg1: $Backup);
    }
    export class $AddRealmPopupScreen extends $RealmsScreen {
        static renderDiamond(arg0: $GuiGraphics, arg1: $Button): void;
        static updateCarouselImages(arg0: $ResourceManager): void;
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
        constructor(arg0: $Screen, arg1: boolean);
    }
    export class $RealmsSelectFileToUploadScreen$Entry extends $ObjectSelectionList$Entry<$RealmsSelectFileToUploadScreen$Entry> {
    }
    export class $RealmsInviteScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $Screen, arg2: $RealmsServer);
    }
    export class $RealmsPlayerScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsServer);
    }
    export class $RealmsBackupScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $RealmsConfigureWorldScreen, arg1: $RealmsServer, arg2: number);
    }
    export class $RealmsDownloadLatestWorldScreen$DownloadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $RealmsDownloadLatestWorldScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen, arg1: $WorldDownload, arg2: string, arg3: $BooleanConsumer_);
    }
    export class $RealmsPendingInvitesScreen$Entry$AcceptRowButton extends $RowButton {
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
    }
    export class $RealmsBackupScreen$BackupObjectSelectionList extends $ContainerObjectSelectionList<$RealmsBackupScreen$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $RealmsBackupScreen$Entry;
        height: number;
    }
    export class $RealmsPopups {
        static infoPopupScreen(arg0: $Screen, arg1: $Component_, arg2: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningPopupScreen(arg0: $Screen, arg1: $Component_, arg2: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningAcknowledgePopupScreen(arg0: $Screen, arg1: $Component_, arg2: $Consumer_<$PopupScreen>): $PopupScreen;
        constructor();
    }
    export class $UploadResult {
        errorMessage: string;
        statusCode: number;
    }
    export class $RealmsBackupInfoScreen$BackupInfoListEntry extends $ObjectSelectionList$Entry<$RealmsBackupInfoScreen$BackupInfoListEntry> {
    }
    export class $RealmsBackupScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsBackupScreen$Entry> {
    }
    export class $RealmsPlayerScreen$InvitedObjectSelectionList extends $ContainerObjectSelectionList<$RealmsPlayerScreen$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $RealmsPlayerScreen$Entry;
        height: number;
    }
    export class $RealmsPendingInvitesScreen$Entry$RejectRowButton extends $RowButton {
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
    }
    export class $RealmsSelectWorldTemplateScreen$Entry extends $ObjectSelectionList$Entry<$RealmsSelectWorldTemplateScreen$Entry> {
    }
    export class $RealmsCreateRealmScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $RealmsMainScreen, arg1: $RealmsServer);
        constructor(arg0: $RealmsMainScreen, arg1: number);
    }
    export class $RealmsPendingInvitesScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $Screen, arg1: $Component_);
    }
    export class $RealmsLongRunningMcoTickTaskScreen extends $RealmsLongRunningMcoTaskScreen {
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
        constructor(arg0: $Screen, arg1: $LongRunningTask);
    }
    export class $RealmsBrokenWorldScreen extends $RealmsScreen {
        init(): void;
        doSwitchOrReset(): void;
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
        constructor(arg0: $Screen, arg1: number, arg2: boolean);
    }
    export class $RealmsUploadScreen extends $RealmsScreen {
        init(): void;
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
        constructor(arg0: $RealmCreationTask, arg1: number, arg2: number, arg3: $RealmsResetWorldScreen, arg4: $LevelSummary);
    }
    export class $RealmsPendingInvitesScreen$PendingInvitationSelectionList extends $RealmsObjectSelectionList<$RealmsPendingInvitesScreen$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $RealmsPendingInvitesScreen$Entry;
        height: number;
    }
    export class $RealmsNotificationsScreen$DataFetcherConfiguration {
    }
    export interface $RealmsNotificationsScreen$DataFetcherConfiguration {
    }
    export class $RealmsConfigureWorldScreen extends $RealmsScreen {
        init(): void;
        getNewScreen(): $RealmsConfigureWorldScreen;
        stateChanged(): void;
        saveSettings(arg0: string, arg1: string): void;
        saveSlotSettings(arg0: $RealmsWorldOptions): void;
        openTheWorld(arg0: boolean): void;
        closeTheWorld(): void;
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
        constructor(arg0: $RealmsMainScreen, arg1: number);
        get newScreen(): $RealmsConfigureWorldScreen;
    }
    export class $RealmsSelectWorldTemplateScreen extends $RealmsScreen {
        init(): void;
        setWarning(...arg0: $Component_[]): void;
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
        constructor(arg0: $Component_, arg1: $Consumer_<$WorldTemplate>, arg2: $RealmsServer$WorldType_);
        constructor(arg0: $Component_, arg1: $Consumer_<$WorldTemplate>, arg2: $RealmsServer$WorldType_, arg3: $WorldTemplatePaginatedList);
        set warning(value: $Component_[]);
    }
    export class $RealmsResetNormalWorldScreen extends $RealmsScreen {
        init(): void;
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
        static TITLE: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Consumer_<$WorldGenerationInfo>, arg1: $Component_);
    }
    export class $RealmsSelectFileToUploadScreen$WorldSelectionList extends $RealmsObjectSelectionList<$RealmsSelectFileToUploadScreen$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $RealmsSelectFileToUploadScreen$Entry;
        height: number;
    }
}
