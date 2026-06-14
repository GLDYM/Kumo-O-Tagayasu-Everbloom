import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Color4I, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TeamPropertyCollection, $TeamProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $List, $Map, $Collection, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as property from "@package/dev/ftb/mods/ftbteams/api/property";
export * as event from "@package/dev/ftb/mods/ftbteams/api/event";

declare module "@package/dev/ftb/mods/ftbteams/api" {
    export class $TeamManager {
    }
    export interface $TeamManager {
        getId(): $UUID;
        markDirty(): void;
        getServer(): $MinecraftServer;
        getTeams(): $Collection<$Team>;
        arePlayersInSameTeam(arg0: $UUID_, arg1: $UUID_): boolean;
        getPlayerTeamForPlayerID(arg0: $UUID_): ($Team) | undefined;
        getKnownPlayerTeams(): $Map<$UUID, $Team>;
        getExtraData(): $CompoundTag;
        createPartyTeam(arg0: $ServerPlayer, arg1: string, arg2: string, arg3: $Color4I): $Team;
        createServerTeam(commandSourceStack: $CommandSourceStack, name: string, description: string, color: $Color4I): $Team;
        createServerTeam(arg0: $CommandSourceStack, arg1: string, arg2: string, arg3: $Color4I, arg4: $UUID_): $Team;
        getTeamByName(arg0: string): ($Team) | undefined;
        getTeamForPlayerID(arg0: $UUID_): ($Team) | undefined;
        setChatRedirected(arg0: $ServerPlayer, arg1: boolean): void;
        getTeamForPlayer(arg0: $ServerPlayer): ($Team) | undefined;
        isChatRedirected(arg0: $ServerPlayer): boolean;
        getTeamByID(arg0: $UUID_): ($Team) | undefined;
        get id(): $UUID;
        get server(): $MinecraftServer;
        get teams(): $Collection<$Team>;
        get knownPlayerTeams(): $Map<$UUID, $Team>;
        get extraData(): $CompoundTag;
    }
    export class $TeamRank extends $Enum<$TeamRank> implements $StringRepresentable {
        static values(): $TeamRank[];
        static valueOf(name: string): $TeamRank;
        getDisplayName(): $Component;
        isAtLeast(rank: $TeamRank_): boolean;
        getPower(): number;
        getSerializedName(): string;
        getIcon(): ($Icon) | undefined;
        isOwner(): boolean;
        isMemberOrBetter(): boolean;
        isAllyOrBetter(): boolean;
        isOfficerOrBetter(): boolean;
        isInvitedOrBetter(): boolean;
        isEnemyOrWorse(): boolean;
        isNoneOrBetter(): boolean;
        getRemappedEnumConstantName(): string;
        static OWNER: $TeamRank;
        static INVITED: $TeamRank;
        static ALLY: $TeamRank;
        static NAME_MAP: $NameMap<$TeamRank>;
        static ENEMY: $TeamRank;
        static OFFICER: $TeamRank;
        static NONE: $TeamRank;
        static MEMBER: $TeamRank;
        get displayName(): $Component;
        get power(): number;
        get serializedName(): string;
        get icon(): ($Icon) | undefined;
        get owner(): boolean;
        get memberOrBetter(): boolean;
        get allyOrBetter(): boolean;
        get officerOrBetter(): boolean;
        get invitedOrBetter(): boolean;
        get enemyOrWorse(): boolean;
        get noneOrBetter(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TeamRank}.
     */
    export type $TeamRank_ = "enemy" | "none" | "ally" | "invited" | "member" | "officer" | "owner";
    export class $Team {
    }
    export interface $Team {
        getName(): $Component;
        getProperty<T>(arg0: $TeamProperty<T>): T;
        setProperty<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getProperties(): $TeamPropertyCollection;
        getId(): $UUID;
        getOwner(): $UUID;
        isValid(): boolean;
        getShortName(): string;
        sendMessage(arg0: $UUID_, arg1: string): void;
        sendMessage(arg0: $UUID_, arg1: $Component_): void;
        getMembers(): $Set<$UUID>;
        markDirty(): void;
        syncOnePropertyToTeam<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getTeamId(): $UUID;
        getExtraData(): $CompoundTag;
        getTypeTranslationKey(): string;
        syncOnePropertyToAll<T>(arg0: $MinecraftServer, arg1: $TeamProperty<T>, arg2: T): void;
        isPlayerTeam(): boolean;
        createParty(arg0: string, arg1: $Color4I): $Team;
        isClientTeam(): boolean;
        isServerTeam(): boolean;
        getTeamInfo(): $List<$Component>;
        getColoredName(): $Component;
        getPlayersByRank(arg0: $TeamRank_): $Map<$UUID, $TeamRank>;
        getRankForPlayer(arg0: $UUID_): $TeamRank;
        getMessageHistory(): $List<$TeamMessage>;
        getOnlineMembers(): $Collection<$ServerPlayer>;
        isPartyTeam(): boolean;
        get name(): $Component;
        get properties(): $TeamPropertyCollection;
        get id(): $UUID;
        get owner(): $UUID;
        get valid(): boolean;
        get shortName(): string;
        get members(): $Set<$UUID>;
        get teamId(): $UUID;
        get extraData(): $CompoundTag;
        get typeTranslationKey(): string;
        get playerTeam(): boolean;
        get clientTeam(): boolean;
        get serverTeam(): boolean;
        get teamInfo(): $List<$Component>;
        get coloredName(): $Component;
        get messageHistory(): $List<$TeamMessage>;
        get onlineMembers(): $Collection<$ServerPlayer>;
        get partyTeam(): boolean;
    }
    export class $TeamMessage {
    }
    export interface $TeamMessage {
        text(): $Component;
        date(): number;
        sender(): $UUID;
    }
}
