import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID, $List, $Set, $UUID_, $Collection_ } from "@package/java/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $SocialInteractionsScreen$Page extends $Enum<$SocialInteractionsScreen$Page> {
        static values(): $SocialInteractionsScreen$Page[];
        static valueOf(arg0: string): $SocialInteractionsScreen$Page;
        static ALL: $SocialInteractionsScreen$Page;
        static BLOCKED: $SocialInteractionsScreen$Page;
        static HIDDEN: $SocialInteractionsScreen$Page;
    }
    /**
     * Values that may be interpreted as {@link $SocialInteractionsScreen$Page}.
     */
    export type $SocialInteractionsScreen$Page_ = "all" | "hidden" | "blocked";
    export class $PlayerEntry extends $ContainerObjectSelectionList$Entry<$PlayerEntry> {
        isRemoved(): boolean;
        setRemoved(arg0: boolean): void;
        getPlayerId(): $UUID;
        getPlayerName(): string;
        setHasRecentMessages(arg0: boolean): void;
        hasRecentMessages(): boolean;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        isChatReportable(): boolean;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        static PLAYER_STATUS_COLOR: number;
        constructor(arg0: $Minecraft, arg1: $SocialInteractionsScreen, arg2: $UUID_, arg3: string, arg4: $Supplier_<$PlayerSkin>, arg5: boolean);
        get playerId(): $UUID;
        get playerName(): string;
        get skinGetter(): $Supplier<$PlayerSkin>;
        get chatReportable(): boolean;
    }
    export class $SocialInteractionsScreen extends $Screen {
        onAddPlayer(arg0: $PlayerInfo): void;
        onRemovePlayer(arg0: $UUID_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static LIST_START: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static SEARCH_START: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(arg0: $Screen);
    }
    export class $SocialInteractionsPlayerList extends $ContainerObjectSelectionList<$PlayerEntry> {
        isEmpty(): boolean;
        setFilter(arg0: string): void;
        addPlayer(arg0: $PlayerInfo, arg1: $SocialInteractionsScreen$Page_): void;
        updatePlayerList(arg0: $Collection_<$UUID_>, arg1: number, arg2: boolean): void;
        removePlayer(arg0: $UUID_): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $PlayerEntry;
        height: number;
        constructor(arg0: $SocialInteractionsScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number);
        get empty(): boolean;
        set filter(value: string);
    }
    export class $PlayerSocialManager {
        isHidden(arg0: $UUID_): boolean;
        shouldHideMessageFrom(arg0: $UUID_): boolean;
        isBlocked(arg0: $UUID_): boolean;
        addPlayer(arg0: $PlayerInfo): void;
        stopOnlineMode(): void;
        startOnlineMode(): void;
        getHiddenPlayers(): $Set<$UUID>;
        removePlayer(arg0: $UUID_): void;
        handler$cag000$supplementaries$supp$getPlayer(arg0: $PlayerInfo, arg1: $CallbackInfo): void;
        handler$cag000$supplementaries$supp$removePlayer(arg0: $UUID_, arg1: $CallbackInfo): void;
        getDiscoveredUUID(arg0: string): $UUID;
        showPlayer(arg0: $UUID_): void;
        hidePlayer(arg0: $UUID_): void;
        constructor(arg0: $Minecraft, arg1: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
